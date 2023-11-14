import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Bill = () => {
  const [cartItem, setCartItem] = useState<any>();
  const user = JSON.parse(localStorage.getItem("user") as string);
  //   console.log(user);
  if (!user) {
    window.location.href = "/";
    return false;
  }

  useEffect(() => {
    fetch(`http://localhost:8080/api/carts/user/${user._id}`)
      .then((response) => response.json())
      .then((data) => data.data)
      .then((data1) => setCartItem(data1));
    console.log(cartItem);
  }, []);

  return (
    <>
      <div className="cart container mt-5 pt-5">
        <div className="breadcrumb">
          <div className="breadcrumb-title">
            <Link to="/">Home</Link> -{" "}
            <Link to="/information">Information</Link> - Bill
          </div>
        </div>
        <table className="table">
          <thead>
            <td>Product</td>
            <td>Price</td>
            <td>Quanlity</td>
            <td>Total</td>
          </thead>
          <tbody>
            {cartItem?.map((carts: any) => {
              return (
                <>
                  {carts.items?.map((cart: any) => {
                    return (
                      <tr key={cart.product_id}>
                        <td>
                          <h5>{cart.name}</h5>
                        </td>
                        <td>
                          <h5>${cart.price}</h5>
                        </td>
                        <td>{cart.quantity}</td>
                        <td>
                          <h5>${cart.subtotal}</h5>
                        </td>
                      </tr>
                    );
                  })}
                </>
              );
            })}
          </tbody>
        </table>

        <div></div>
      </div>
    </>
  );
};

export default Bill;
