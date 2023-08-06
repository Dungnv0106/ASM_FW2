import { useEffect } from "react";

interface IUser{
  message: string,
  accessToken: string,
  data: any
}

const Home = () => {
  
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
        <div className="row mx-auto container-fluid">
          <div className="product col-lg-3">
            <img src="img/featured/1.jpg" alt="" className="img-fluid" />
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="product_name">Sport Boot</p>
            <p className="product_price">$1000</p>
            <button className="btn-product">BUY NOW</button>
          </div>
          <div className="product col-lg-3">
            <img src="img/featured/2.jpg" alt="" className="img-fluid" />
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="product_name">Sport Boot</p>
            <p className="product_price">$1000</p>
            <button className="btn-product">BUY NOW</button>
          </div>
          <div className="product col-lg-3">
            <img src="img/featured/3.jpg" alt="" className="img-fluid" />
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="product_name">Sport Boot</p>
            <p className="product_price">$1000</p>
            <button className="btn-product">BUY NOW</button>
          </div>
          <div className="product col-lg-3">
            <img src="img/featured/4.jpg" alt="" className="img-fluid" />
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="product_name">Sport Boot</p>
            <p className="product_price">$1000</p>
            <button className="btn-product">BUY NOW</button>
          </div>
        </div>
      </div>
      <div className="featured">
        <div className="container text-center mt-5 py-5">
          <h3>Our Category</h3>
          <hr className="mx-auto" />
          <p>Here you can check out our new products with fair price on rymo</p>
        </div>
        <div className="row mx-auto container-fluid">
          <div className="product col-lg-3">
            <img src="img/featured/1.jpg" alt="" className="img-fluid" />
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="product_name">Sport Boot</p>
            <p className="product_price">$1000</p>
            <button className="btn-product">BUY NOW</button>
          </div>
          <div className="product col-lg-3">
            <img src="img/featured/2.jpg" alt="" className="img-fluid" />
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="product_name">Sport Boot</p>
            <p className="product_price">$1000</p>
            <button className="btn-product">BUY NOW</button>
          </div>
          <div className="product col-lg-3">
            <img src="img/featured/3.jpg" alt="" className="img-fluid" />
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="product_name">Sport Boot</p>
            <p className="product_price">$1000</p>
            <button className="btn-product">BUY NOW</button>
          </div>
          <div className="product col-lg-3">
            <img src="img/featured/4.jpg" alt="" className="img-fluid" />
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="product_name">Sport Boot</p>
            <p className="product_price">$1000</p>
            <button className="btn-product">BUY NOW</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
