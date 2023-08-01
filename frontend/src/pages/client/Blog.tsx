const Blog = () => {
  return (
    <>
      <section className="blog mt-5 pt-5 container">
        <h1 className="font-weight-bold pt-5">Blog</h1>
        <hr />
        <div className="row pt-5">
          <div className="post col-md-6 pb-5">
            <div className="post-img">
              <img src="/img/blog/1.jpg" className="img-fluid w-100" alt="" />
            </div>
            <h3 className="text-center fw-normal pt-3">
              Five must-have Clothing Items for your Summer Wardrobe
            </h3>
            <p className="text-center">Feb 19, 2021</p>
          </div>
          <div className="post col-md-6 pb-5">
            <div className="post-img">
              <img src="/img/blog/2.jpg" className="img-fluid w-100" alt="" />
            </div>
            <h3 className="text-center fw-normal pt-3">
              Fashion-forward ideas Tailored to your Personal Needs
            </h3>
            <p className="text-center">Feb 19, 2021</p>
          </div>
          <div className="post col-md-6 pb-5">
            <div className="post-img">
              <img src="/img/blog/3.jpg" className="img-fluid w-100" alt="" />
            </div>
            <h3 className="text-center fw-normal pt-3">
              Casual or Formal: Do it in Style
            </h3>
            <p className="text-center">Feb 19, 2021</p>
          </div>
          <div className="post col-md-6 pb-5">
            <div className="post-img">
              <img src="/img/blog/4.jpg" className="img-fluid w-100" alt="" />
            </div>
            <h3 className="text-center fw-normal pt-3">
              The Hottest New Trends in Modern Fashion
            </h3>
            <p className="text-center">Feb 19, 2021</p>
          </div>
          <div className="col-12 pb-5 mb-3 mb-sm-5">
            <div className="post-img">
              <img
                src="/img/blog/banner.webp"
                className="img-fluid w-100"
                alt=""
              />
            </div>
          </div>
          <div className="post col-lg-4 pb-5">
            <div className="post-img">
              <img src="/img/blog/1.webp" className="img-fluid w-100" alt="" />
            </div>
            <h4 className="fw-normal pt-3">
              Six Quick and Easy Tips to turn your Dress Collection Around
            </h4>
          </div>
          <div className="post col-12 col-lg-4 col-md-6 pb-5">
            <div className="post-img">
              <img src="/img/blog/3.webp" className="img-fluid w-100" alt="" />
            </div>
            <h4 className="fw-normal pt-3">
              What the future holds for Fast Fashion
            </h4>
          </div>
          <div className="post col-12 col-lg-4 col-md-6 pb-5">
            <div className="post-img">
              <img src="/img/blog/2.webp" className="img-fluid w-100" alt="" />
            </div>
            <h4 className="fw-normal pt-3">
              Check out our Hottest New and Exclusive Drops every Tuesday and
              Thursday
            </h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
