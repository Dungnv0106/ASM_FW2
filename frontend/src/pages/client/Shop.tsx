const Shop = ({ productsList }: any) => {
  return (
    <>
      <div className="featured">
        <div className="container mt-5 py-5">
          <h3>Our Featured</h3>
          <hr />
          <p>Here you can check out our new products with fair price on rymo</p>
        </div>
        {/* <div className="row mx-auto container">
          
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
        </div> */}
        <div className="row mx-auto container" style={{ overflow: "hidden" }}>
          {productsList?.map((product: any, index: any) => {
            return (
              <div className="product col-lg-3" key={index}>
                {/* <Link ></Link> */}
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
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Shop;
