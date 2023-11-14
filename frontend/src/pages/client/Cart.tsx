import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../../store/feature/cartSlice";
import { useCreateBillMutation } from "../../store/api/cart";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItem = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(cartItem);
  const [addBill] = useCreateBillMutation();
  const handleRemove = (cart: any) => {
    dispatch(removeCart(cart));
    alert("Xóa thành công");
  };
  const onHandleOrder = async (items: any) => {
    let totalprice = 0;
    items.map((item: any) => {
      totalprice += item.subtotal;
    });
    const user = JSON.parse(localStorage.getItem("user") as string);

    const bill = {
      user_id: user._id,
      total_price: totalprice,
      items: items,
    };
    await addBill(bill);
    alert("Đặt hàng thành công");
  };
  return (
    <>
      <section className="blog mt-5 pt-5 container">
        <h1 className="font-weight-bold pt-5">Shopping Cart</h1>
        <hr />
        <div className="cart container mt-5 pt-5">
          <table className="table">
            <thead>
              <td>Product</td>
              <td>Image</td>
              <td>Price</td>
              <td>Quanlity</td>
              <td>Total</td>
              <td>Action</td>
            </thead>
            <tbody>
              {cartItem.cart?.map((cart: any) => {
                return (
                  <tr key={cart.product_id}>
                    <td>
                      <h5>{cart.name}</h5>
                    </td>
                    <td>
                      <img src={cart.image} alt="" />
                    </td>
                    <td>
                      <h5>${cart.price}</h5>
                    </td>
                    <td>{cart.quantity}</td>
                    <td>
                      <h5>${cart.subtotal}</h5>
                    </td>
                    <td>
                      <button onClick={() => handleRemove(cart)}>
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div>
            <button type="submit" onClick={() => onHandleOrder(cartItem.cart)}>
              Mua Hàng
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
