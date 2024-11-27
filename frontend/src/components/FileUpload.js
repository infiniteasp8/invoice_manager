import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { addFile } from "../features/user/userSlice";
import { updateInvoices } from "../features/user/invoicesSlice";
import { updateCustomer } from "../features/user/customersSlice";
import { addProduct } from "../features/user/productsSlice";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  // const [extractedData, setExtractedData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();


  // Handle file selection
  const handleFileChange = (e) => {
    const inputFile = e.target.files[0];
    document.getElementById("fileUploadButton").style.backgroundColor = '#007bff';
    document.getElementById("showFileName").innerHTML = inputFile && inputFile.name;
    setFile(inputFile);
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
    // setExtractedData(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      // Send file to backend
      const response = await axios.post("http://localhost:4000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });


      const extractedValues = response.data.summary;
      dispatch(addFile());

      dispatch(updateInvoices({
        serialNumber: extractedValues.InvoicesTab.serialNumber,
        customerName: extractedValues.InvoicesTab.customerName,
        totalAmount: extractedValues.InvoicesTab.totalAmount,
        date: extractedValues.InvoicesTab.date,
      }));

      dispatch(updateCustomer({
        customerName: extractedValues.CustomersTab.customerName,
        phoneNumber: extractedValues.CustomersTab.phoneNumber,
        address: extractedValues.CustomersTab.address,
      }));

      const products = extractedValues.ProductsTab;
      products.map(product => {
        dispatch(addProduct({
          productName: product.productName,
          quantity: product.quantity,
          unitPrice: product.unitPrice,
          tax: product.tax
        }
        ))
      })

      // setExtractedData(extractedValues);
      // console.log(response.data.summary);
      console.log(localStorage.getItem('user'));

    } catch (err) {
      setError("An error occurred while processing the file.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fileUploadContainer">
      <h2>Invoice File Upload</h2>
      <form onSubmit={handleFileUpload}>
        <div className="uploadFormContainer">
          <div className="inputFile">
            <i className="fas fa-upload custom-upload-icon custom-upload-button"></i>
            <input type="file" name="invoiceFile" value="" className="file-input" onChange={handleFileChange} />
          </div>
          <button id="fileUploadButton" type="submit" className="fileUploadButton"> Upload </button>
          <div id="showFileName"></div>
        </div>
      </form>

      {loading && <p>Processing file... Please wait.</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* {extractedData && (
        <div style={{ marginTop: "20px", textAlign: "left" }}>
          <h2>Extracted Data</h2>
          <pre style={{ background: "#f4f4f4", padding: "10px" }}>
            {JSON.stringify(extractedData, null, 2)}
          </pre>
        </div>
      )} */}
    </div>
  );
};

export default FileUpload;
