require("dotenv").config();
const express = require("express");
const multer = require("multer"); // Fixed typo: "mulr" to "multer"
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const { GoogleGenerativeAI } = require("@google/generative-ai");
const { GoogleAIFileManager } = require("@google/generative-ai/server");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Multer setup for file uploads
const upload = multer({ dest: "uploads/" });

// Initialize GoogleGenerativeAI with your API_KEY
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// Initialize GoogleAIFileManager with your API_KEY
const fileManager = new GoogleAIFileManager(process.env.API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

// Routes
app.post("/upload", upload.single("file"), async (req, res) => {
    const file = req.file;
  
    if (!file) {
      return res.status(400).send({ error: "No file uploaded" });
    }
  
    try {
      // Ensure the file path is correct and valid
      const filePath = path.resolve(file.path); // Absolute path to the file
  
      // Upload the file to GoogleAIFileManager
      const uploadResponse = await fileManager.uploadFile(filePath, {
        mimeType: file.mimetype,
        displayName: file.originalname,
      });
  
      // Generate content using Gemini
      const result = await model.generateContent([
        {
          fileData: {
            mimeType: uploadResponse.file.mimeType,
            fileUri: uploadResponse.file.uri,
          },
        },
        { text: process.env.prompt },
      ]);
  
      // Extract the summary text
      const response = result.response.text();
      const jsonStartIndex = response.indexOf('{');
      const jsonEndIndex = response.lastIndexOf('}');

      if (jsonStartIndex === -1 || jsonEndIndex === -1) {
          throw new Error("JSON content not found in the response");
      }

      const jsonString = response.substring(jsonStartIndex, jsonEndIndex + 1);

      // Step 3: Parse the extracted JSON
      const jsonData = JSON.parse(jsonString);

    //   // Step 4: Use the parsed JSON object
    //   console.log("Extracted JSON:", JSON.stringify(jsonData, null, 2));
    //   console.log("Invoice Number:", jsonData.invoiceDetails.invoiceDetails);
    //   console.log("Consignee:", jsonData.invoiceDetails.consignee);
    //   console.log("Total Amount:", jsonData.invoiceDetails.totalAmount);

      // Return JSON for further processing if needed
    //   return jsonData;
    //   console.log("Gemini Response:", response);
  
      // Clean up uploaded file
      fs.unlinkSync(filePath);
  
      // Send response to frontend
      res.json({
        success: true,
        summary: jsonData,
      });
    } catch (err) {
      console.error("Error processing file:", err);
      res.status(502).json({
        success: false,
        error: err.message,
      });
    }
  });
  

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
