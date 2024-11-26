function InvoicesTab() {
    const invoices = [
      {
        serialNumber: 'INV001',
        customerName: 'John Doe',
        productName: 'Widget X',
        quantity: 5,
        tax: 10,
        totalAmount: 550,
        date: '2024-03-20'
      },
      // Add more sample data as needed
    ];
  
    return (
      <div className="tab-container">
        <h2>Invoices</h2>
        <table>
          <thead>
            <tr>
              <th>Serial Number</th>
              <th>Customer Name</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Tax (%)</th>
              <th>Total Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.serialNumber}>
                <td>{invoice.serialNumber}</td>
                <td>{invoice.customerName}</td>
                <td>{invoice.productName}</td>
                <td>{invoice.quantity}</td>
                <td>{invoice.tax}%</td>
                <td>${invoice.totalAmount}</td>
                <td>{invoice.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default InvoicesTab;