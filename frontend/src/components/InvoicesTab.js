import { useSelector } from 'react-redux';

function InvoicesTab() {
    const invoices = useSelector(state => state.invoices.invoices);
    // const invoices = [
    //   {
    //     serialNumber: values.serialNumber,
    //     customerName: values.customerName,
    //     totalAmount: values.totalAmount,
    //     date: values.date,
    //   },
    //   // Add more sample data as needed
    // ];
  
    return (
      <div className="tab-container">
        <h2>Invoices</h2>
        <table>
          <thead>
            <tr>
              <th>Serial Number</th>
              <th>Customer Name</th>
              <th>Total Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.serialNumber}>
                <td>{invoice.serialNumber===''?'Not provided':invoice.serialNumber}</td>
                <td>{invoice.customerName===''?'Not provided':invoice.customerName}</td>
                <td>{invoice.totalAmount===''?'Not provided':invoice.totalAmount}</td>
                <td>{invoice.date===''?'Not provided':invoice.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default InvoicesTab;