const Cart = () => {
  return (
    <>
      <section className="blog mt-5 pt-5 container">
        <h1 className="font-weight-bold pt-5">Shopping Cart</h1>
        <hr />
        <div className="cart container mt-5 pt-5">
          <table className="table">
            <thead>
              <td>Remove</td>
              <td>Product</td>
              <td>Image</td>
              <td>Price</td>
              <td>Quanlity</td>
              <td>Total</td>
            </thead>
            <tbody>
              <tr>
                <td>
                  <i className="fas fa-trash-alt"></i>
                </td>
                <td>
                  <h5>Product Name</h5>
                </td>
                <td>
                  <img src="img/shop/1.jpg" alt="" />
                </td>
                <td>
                  <h5>$100</h5>
                </td>
                <td>10</td>
                <td>
                  <h5>$10000</h5>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fas fa-trash-alt"></i>
                </td>
                <td>
                  <h5>Product Name</h5>
                </td>
                <td>
                  <img src="img/shop/1.jpg" alt="" />
                </td>
                <td>
                  <h5>$100</h5>
                </td>
                <td>10</td>
                <td>
                  <h5>$10000</h5>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fas fa-trash-alt"></i>
                </td>
                <td>
                  <h5>Product Name</h5>
                </td>
                <td>
                  <img src="img/shop/1.jpg" alt="" />
                </td>
                <td>
                  <h5>$100</h5>
                </td>
                <td>10</td>
                <td>
                  <h5>$10000</h5>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fas fa-trash-alt"></i>
                </td>
                <td>
                  <h5>Product Name</h5>
                </td>
                <td>
                  <img src="img/shop/1.jpg" alt="" />
                </td>
                <td>
                  <h5>$100</h5>
                </td>
                <td>10</td>
                <td>
                  <h5>$10000</h5>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Cart;
