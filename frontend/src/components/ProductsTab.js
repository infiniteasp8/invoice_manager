import { useSelector } from "react-redux";

function ProductsTab() {
    const products = useSelector(state => state.products.products)
    // console.log(values)
    // const products = [
    //   {
    //     name: 'Widget X',
    //     quantity: 100,
    //     unitPrice: 100,
    //     tax: 10,
    //   },
    //   // Add more sample data as needed
    // ];
  
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
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.name}>
                <td>{product.productName}</td>
                <td>{product.quantity}</td>
                <td>${product.unitPrice}</td>
                <td>{product.tax}%</td>
                <td>${product.unitPrice * (1 + product.tax/100)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default ProductsTab;