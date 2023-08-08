import { useGetAllProductsQuery } from "../../store/api/products";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Home = ({ productsList }: any) => {
  // console.log(productsList);

  // const {
  //   isLoading,
  //   isError,
  //   data: productList,
  // } = useGetAllProductsQuery(null);
  // console.log(productList?.docs);

  // if (isLoading) return <>Loading.......</>;

  return (
    <>
      <section className="home">
        <div className="container">
          <h5>NEW ARRAIVALS</h5>
          <h1>
            <span>Best Price</span> This Year
          </h1>
          <p>
            shoomatic offers yours very comfortable time <br />
            on walking and exercises
          </p>
          <button>Shop Now</button>
        </div>
      </section>
      <div className="brand container flex">
        <div className="row">
          <img className="img-fluid col-lg-2" src="img/brand/1.png" alt="" />
          <img className="img-fluid col-lg-2" src="img/brand/2.png" alt="" />
          <img className="img-fluid col-lg-2" src="img/brand/3.png" alt="" />
          <img className="img-fluid col-lg-2" src="img/brand/4.png" alt="" />
          <img className="img-fluid col-lg-2" src="img/brand/5.png" alt="" />
          <img className="img-fluid col-lg-2" src="img/brand/6.png" alt="" />
        </div>
      </div>
      <div className="featured">
        <div className="container text-center mt-5 py-5">
          <h3>Our Featured</h3>
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
      </div>

      <div className="featured">
        <div className="container text-center mt-5 py-5">
          <h3>Our Category</h3>
          <hr className="mx-auto" />
          <p>Here you can check out our new products with fair price on rymo</p>
        </div>
        <div className="row mx-auto container-fluid"></div>
      </div>
    </>
  );
};

export default Home;
