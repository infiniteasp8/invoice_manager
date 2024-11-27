import { useSelector } from "react-redux";

function CustomersTab() {
    const customers = useSelector(state => state.customers.customers)
    // const customers = [
    //   {
    //     customerName: values.customerName,
    //     phoneNumber: values.phoneNumber,
    //     address: values.address,
    //   },
    // ];
  
    return (
      <div className="tab-container">
        <h2>Customers</h2>
        <table>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Phone Number</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.customerName}>
                <td>{customer.customerName}</td>
                <td>{customer.phoneNumber}</td>
                <td>{customer.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default CustomersTab;