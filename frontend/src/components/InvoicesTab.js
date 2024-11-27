import { useSelector } from 'react-redux';

function InvoicesTab() {
    const values = useSelector(state => state.invoices);
    const invoices = [
      {
        serialNumber: values.serialNumber,
        customerName: values.customerName,
        productName: 'Widget X',
        quantity: 5,
        tax: 10,
        totalAmount: values.totalAmount,
        date: values.date,
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