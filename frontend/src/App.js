import { useState } from 'react';
import InvoicesTab from './components/InvoicesTab';
import ProductsTab from './components/ProductsTab';
import CustomersTab from './components/CustomersTab';
import './App.css';
import FileUpload from './components/FileUpload';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';

function App() {
  const [activeTab, setActiveTab] = useState('fileupload');
  const isUploaded = useSelector(state => state.user.fileUploaded);
  console.log(isUploaded)

  // if(isUploaded){
  //   const target = document.getElementById('tab-navigation');
  //   target && target.style.removeProperty('display');
  // }
  
  return (
    <div className="app-container">
      <Navbar />
      <nav id='tab-navigation' className="tab-navigation"  style={{ display: isUploaded ? "block" : "none" }}>
      <button 
          className={activeTab === 'fileupload' ? 'active' : ''} 
          onClick={() => setActiveTab('fileupload')}
        >
          Upload file
        </button>
        <button 
          className={activeTab === 'invoices' ? 'active' : ''} 
          onClick={() => setActiveTab('invoices')}
        >
          Invoices
        </button>
        <button 
          className={activeTab === 'products' ? 'active' : ''} 
          onClick={() => setActiveTab('products')}
        >
          Products
        </button>
        <button 
          className={activeTab === 'customers' ? 'active' : ''} 
          onClick={() => setActiveTab('customers')}
        >
          Customers
        </button>
      </nav>

      
      <div className="tab-content">
        {activeTab === 'fileupload' && <FileUpload />}
        {activeTab === 'invoices' && <InvoicesTab />}
        {activeTab === 'products' && <ProductsTab />}
        {activeTab === 'customers' && <CustomersTab />}
      </div>
    </div>
  );
}

export default App;