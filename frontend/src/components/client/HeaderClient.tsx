import { Link } from "react-router-dom";
import isLogin from "./isLogin";

const HeaderClient = () => {

  // const navigate = useNavigate();
  // const logout = () => {
  //   // Xóa dữ liệu người dùng khỏi localStorage
  //   localStorage.removeItem('user');


  //   navigate('/login')
  // };


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
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/shop"} className="nav-link">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/blog"} className="nav-link">
                  Blog
                </Link>
              </li>
              {isLogin() ? (
                <>
                  <li className="nav-item">
                    <Link to={"/cart"} className="nav-link">
                      <i className="fal fa-shopping-bag"></i>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/information"} className="nav-link">
                      <i className="fal fa-user"></i>{" "}
                      {/* Đây là mã icon người dùng từ FontAwesome */}
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to={"/register"} className="nav-link">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/login"} className="nav-link">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderClient;
