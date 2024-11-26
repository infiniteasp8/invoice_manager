import { useState } from 'react';
import InvoicesTab from './components/InvoicesTab';
import ProductsTab from './components/ProductsTab';
import CustomersTab from './components/CustomersTab';
import './App.css';
import FileUpload from './components/FileUpload';

function App() {
  const [activeTab, setActiveTab] = useState('invoices');

  return (
    <div className="app-container">
      <nav className="tab-navigation">
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