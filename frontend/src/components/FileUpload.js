import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [extractedData, setExtractedData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle file upload
  const handleFileUpload = async (e) => {
    e.preventDefault();

    if (!file) {
      setError("Please select a file to upload.");
      return;
    }

    setError(null);
    setLoading(true);
    setExtractedData(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      // Send file to backend
      const response = await axios.post("http://localhost:3000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setExtractedData(response.data.extractedData);
      
    } catch (err) {
      setError("An error occurred while processing the file.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", textAlign: "center" }}>
      <h1>Invoice File Upload</h1>
      <form onSubmit={handleFileUpload}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit" style={{ marginLeft: "10px" }}>
          Upload
        </button>
      </form>

      {loading && <p>Processing file... Please wait.</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    
      {extractedData && (
        <div style={{ marginTop: "20px", textAlign: "left" }}>
          <h2>Extracted Data</h2>
          <pre style={{ background: "#f4f4f4", padding: "10px" }}>
            {JSON.stringify(extractedData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
