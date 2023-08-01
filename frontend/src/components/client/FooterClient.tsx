import { Link } from "react-router-dom";
const FooterClient = () => {
  return (
    <>
      <footer className="py-5">
        <div className="container">
          <div className="row pt-3 mx-auto">
            <div className="col-lg-3 mb-3 footer-one">
              <img src="/img/logo2.png" alt="" />
              <p className="pt-3 pe-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt reiciendis vitae tempora ad velit nulla tempore placeat
                non?
              </p>
            </div>
            <div className="col-lg-3 mb-3 footer-one">
              <h5 className="pb-2">Featured</h5>
              <ul className="list-unstyled text-uppercase">
                <li>
                  <Link to={"/"}>women</Link>
                </li>
                <li>
                  <Link to={"/"}>men</Link>
                </li>
                <li>
                  <Link to={"/"}>girls</Link>
                </li>
                <li>
                  <Link to={"/"}>boys</Link>
                </li>
                <li>
                  <Link to={"/"}>shoes</Link>
                </li>
                <li>
                  <Link to={"/"}>clothes</Link>
                </li>
                <li>
                  <Link to={"/"}>new arrivals</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 mb-3 footer-one">
              <h5 className="pb-2">Contact Us</h5>
              <div>
                <h6 className="text-uppercase">Address</h6>
                <p>1151, PUEBLO STR., ATLANTA, GA</p>
              </div>
              <div>
                <h6 className="text-uppercase">Phone</h6>
                <p>+1 (202) 555-1102</p>
              </div>
              <div>
                <h6 className="text-uppercase">Email</h6>
                <p>rymostore@mail.com</p>
              </div>
            </div>
            <div className="col-lg-3 footer-one">
              <h5 className="pb-2">Instagram</h5>
              <div className="row">
                <img
                  src="/img/insta/1.jpg"
                  className="img-fluid w-25 h-100 m-2"
                  alt=""
                />
                <img
                  src="/img/insta/2.jpg"
                  className="img-fluid w-25 h-100 m-2"
                  alt=""
                />
                <img
                  src="/img/insta/3.jpg"
                  className="img-fluid w-25 h-100 m-2"
                  alt=""
                />
                <img
                  src="/img/insta/4.jpg"
                  className="img-fluid w-25 h-100 m-2"
                  alt=""
                />
                <img
                  src="/img/insta/5.jpg"
                  className="img-fluid w-25 h-100 m-2"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="copyright mt-5">
            <div className="row container mx-auto">
              <div className="col-lg-3 col-md-6 mb-4">
                <img src="/img/payment.png" alt="" />
              </div>
              <div className="col-lg-4 col-md-6 mb-2 text-nowrap">
                <p>Copyright © 2022 | Danny Santino</p>
              </div>
              <div className="col-lg-4 col-md-6 icon-social">
                <a href="">
                  <i className="fab fa-facebook-f rounded-circle bg-light"></i>
                </a>
                <a href="">
                  <i className="fab fa-twitter rounded-circle bg-light"></i>
                </a>
                <a href="">
                  <i className="fab fa-linkedin rounded-circle bg-light"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterClient;
