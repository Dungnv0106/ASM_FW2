import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { addToCart } from "../../store/feature/cartSlice";

const ProductDetail = ({ productsList, categoryList }: any) => {
  // console.log(productsList?.docs);
  // console.log(categoryList);
  const [number, setNumber] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();
  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    setNumber(number - 1);
    if (number <= 0) {
      setNumber(0);
    }
  };

  const currentProduct = productsList?.find(
    (product: any) => product._id === id
  );
  // console.log(currentProduct);
  const category = categoryList?.find(
    (category: any) => category._id === currentProduct.categoryId
  );
  // console.log(category);
  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(
      addToCart({
        product_id: currentProduct._id,
        name: currentProduct.productName,
        price: currentProduct.price,
        image: currentProduct.image[0].url,
        quantity: number,
        subtotal: Number(currentProduct.price * number),
      })
    );
    navigate("/cart ");
  };

  return (
    <>
      <section className="container sproduct mx-5 py-5">
        <div className="row mt-5 py-5">
          <div className="col-lg-5">
            <img
              className="img-fluid w-100"
              src={currentProduct?.image[0].url}
              alt=""
            />
            <div className="small-img-group">
              <div className="small-img-col">
                <img
                  src="/img/shop/1.jpg"
                  width="100%"
                  alt=""
                  className="img-small"
                />
              </div>
              <div className="small-img-col">
                <img
                  src="/img/shop/2.jpg"
                  width="100%"
                  alt=""
                  className="img-small"
                />
              </div>
              <div className="small-img-col">
                <img
                  src="/img/shop/3.jpg"
                  width="100%"
                  alt=""
                  className="img-small"
                />
              </div>
              <div className="small-img-col">
                <img
                  src="/img/shop/4.jpg"
                  width="100%"
                  alt=""
                  className="img-small"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <h6>Home/{category?.name}</h6>
            <h3 className="my-5">{currentProduct?.productName}</h3>
            <h2 style={{ color: "red" }}>$ {currentProduct?.price}</h2>

            <button onClick={decrement}>-</button>
            <input value={number} min="1" max="20" />
            <button onClick={increment}>+</button>

            <button className="btn-prd mb-4" onClick={handleCart}>
              Add To Cart
            </button>
            <h4>Product Detail</h4>
            <span>{currentProduct?.description}</span>
          </div>
        </div>
      </section>
      {/* <div className="featured">
        <div className="container text-center mt-5 py-5">
          <h3>Our Category</h3>
          <hr className="mx-auto" />
          <p>Here you can check out our new products with fair price on rymo</p>
        </div>
        <div
          className="row mx-auto container-fluid"
          style={{ overflow: "hidden" }}
        >
          {productsList?.map((product: any, index: any) => {
            return (
              // <Link to="/product/:id">
              <div className="product col-lg-3" key={index}>
                <Link to={`/product/${product._id}`}>
                  <div style={{ overflow: "hidden" }}>
                    <img
                      style={{ width: "310px", height: "340px" }}
                      src={product.image?.[0].url}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="product_name">{product.productName}</p>
                  <p className="product_price">${product.price}</p>
                  <button className="btn-product">BUY NOW</button>
                </Link>
              </div>
              // </Link>
            );
          })}
        </div>
      </div> */}
    </>
  );
};

export default ProductDetail;
