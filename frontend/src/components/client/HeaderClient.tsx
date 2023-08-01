import { Link } from "react-router-dom";

const HeaderClient = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 fixed-top">
        <div className="container">
          <img src="/img/logo1.png" alt="" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i className="fa-light fa-bars"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/"}>
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/shop"}>
                  <a className="nav-link" href="#">
                    shop
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/blog"}>
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/register"}>
                  <a className="nav-link" href="#">
                    Register
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/login"}>
                  <a className="nav-link" href="#">
                    Login
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {/* <i className="fal fa-search"></i> */}
                  <Link to={"/cart"}>
                    <i className="fal fa-shopping-bag"></i>
                  </Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderClient;
