import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Customer = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") as string);
  //   console.log(user);
  if (!user) {
    window.location.href = "/";
    return false;
  }
  const logout = async () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div>
      <div className="container">
        <div className="content2">
          <div className="breadcrumb">
            <div className="breadcrumb-title">
              <Link to="">Home</Link> - information
            </div>
          </div>
          <section className="section__info">
            <div className="section__info--menu">
              <div className="info--menu__img--box">
                <img
                  src="/src/assets/images/img19.png"
                  alt="avatar"
                  className="header__user--img"
                  width={200}
                  height={200}
                />
              </div>
              <div className="info--menu__username--box">
                <div className="info--menu__username"></div>
              </div>

              <div className="info--menu__function">
                <div className="info--menu__function--box">
                  <Link to="/bill" className="info--menu__function--link">
                    <div className="info--menu__function--img--box">
                      <img
                        src="/src/assets/images/shopping-cart.png"
                        alt=""
                        className="info--menu__function--img"
                      />
                    </div>
                    <div className="info--menu__function--label">
                      Quản Lý giỏ hàng
                    </div>
                  </Link>
                </div>
                <div className="info--menu__function--box">
                  <Link to="" className="info--menu__function--link">
                    <div className="info--menu__function--img--box">
                      <img
                        src="/src/assets/images/wallet.png"
                        alt=""
                        className="info--menu__function--img"
                      />
                    </div>
                    <div className="info--menu__function--label">
                      Ví của tôi
                    </div>
                  </Link>
                </div>
                <div className="info--menu__logout">
                  <button
                    className="info--menu__logout--link"
                    id="btn-logout"
                    onClick={() => logout()}
                  >
                    <div className="info--menu__logout--img--box">
                      <img
                        src="/src/assets/images/shutdown.png"
                        alt=""
                        className="info--menu__logout--img"
                      />
                    </div>
                    <div className="info--menu__logout--label">Đăng xuất</div>
                  </button>
                </div>
              </div>
            </div>
            <div className="section__info--display">
              <div className="section__info--display--box">
                <label className="section__info--display--label">
                  Họ và tên: {user.name}
                </label>
                <div className="section__info--display--textContent"></div>
              </div>
              <div className="section__info--display--box">
                <label className="section__info--display--label">
                  Email: {user.email}{" "}
                </label>
                <div className="section__info--display--textContent">
                  <div className="section__info--display--textContent"></div>
                </div>
              </div>

              <div className="section__info--display--box">
                <label className="section__info--display--label">
                  Mật khẩu: {user.password}
                </label>
                <div className="section__info--display--textContent"></div>
              </div>
              <div className="section__info--display--box">
                <label className="section__info--display--label">
                  Số điện thoại: {user.num_phone}
                </label>
                <div className="section__info--display--textContent"></div>
              </div>
              <div className="section__info--display--box">
                <label className="section__info--display--label">
                  Địa chỉ: {user.address}
                </label>
                <div className="section__info--display--textContent"></div>
              </div>
              <div className="section__info--display--box">
                <label className="section__info--display--label">
                  Ngày tạo: {user.createAt ? user.createAt : user.updatedAt}
                </label>
                <div className="section__info--display--textContent">
                  <div className="section__info--display--textContent"></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Customer;
