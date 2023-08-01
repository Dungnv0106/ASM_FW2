const ProductDetail = () => {
  return (
    <>
      <section className="container sproduct mx-5 py-5">
        <div className="row mt-5 py-5">
          <div className="col-lg-5">
            <img className="img-fluid w-100" src="img/shop/1.jpg" alt="" />
            <div className="small-img-group">
              <div className="small-img-col">
                <img
                  src="img/shop/1.jpg"
                  width="100%"
                  alt=""
                  className="img-small"
                />
              </div>
              <div className="small-img-col">
                <img
                  src="img/shop/2.jpg"
                  width="100%"
                  alt=""
                  className="img-small"
                />
              </div>
              <div className="small-img-col">
                <img
                  src="img/shop/3.jpg"
                  width="100%"
                  alt=""
                  className="img-small"
                />
              </div>
              <div className="small-img-col">
                <img
                  src="img/shop/4.jpg"
                  width="100%"
                  alt=""
                  className="img-small"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <h6>Home/T-Shirt</h6>
            <h3 className="my-5">Product Name</h3>
            <h2>Product Price</h2>
            <select className="product-size my-4">
              <option>Select Size</option>
              <option value="X">X</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="B">B</option>
            </select>
            <input type="number" value="1" min="1" max="20" />
            <button className="btn-prd mb-4">Add To Cart</button>
            <h4>Product Detail</h4>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              provident distinctio vel saepe perferendis eaque ratione? Minus
              recusandae quos molestiae! Expedita, aperiam non tenetur odit
              excepturi dignissimos alias quod dolorum!
            </span>
          </div>
        </div>
      </section>
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

export default ProductDetail;
