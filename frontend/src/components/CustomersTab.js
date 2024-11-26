function CustomersTab() {
    const customers = [
      {
        name: 'Anant',
        phoneNumber: '123-456-7890',
        totalPurchaseAmount: 1500,
        email: 'john@gmail.com',
        address: '123 Main St'
      },
      {
        name: 'Harshita',
        phoneNumber: '123-456-7890',
        totalPurchaseAmount: 1500,
        email: 'john@gmail.com',
        address: '123 Main St'
      },
      {
        name: 'Akash',
        phoneNumber: '123-456-7890',
        totalPurchaseAmount: 1500,
        email: 'john@gmail.com',
        address: '123 Main St'
      },
      // Add more sample data as needed
    ];
  
    return (
      <div className="tab-container">
        <h2>Customers</h2>
        <table>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Phone Number</th>
              <th>Total Purchase Amount</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.name}>
                <td>{customer.name}</td>
                <td>{customer.phoneNumber}</td>
                <td>${customer.totalPurchaseAmount}</td>
                <td>{customer.email}</td>
                <td>{customer.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default CustomersTab;