function ProductsTab() {
    const products = [
      {
        name: 'Widget X',
        quantity: 100,
        unitPrice: 100,
        tax: 10,
        discount: 5
      },
      // Add more sample data as needed
    ];
  
    return (
      <div className="tab-container">
        <h2>Products</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Tax (%)</th>
              <th>Price with Tax</th>
              <th>Discount (%)</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.name}>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>${product.unitPrice}</td>
                <td>{product.tax}%</td>
                <td>${product.unitPrice * (1 + product.tax/100)}</td>
                <td>{product.discount}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default ProductsTab;