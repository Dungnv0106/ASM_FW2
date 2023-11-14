import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../store/api/api";
import { LoginCredentials, LoginResponse } from "../../interfaces/user";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import isLogin from "../../components/client/isLogin";

const Login = () => {
  // dữ liệu form
  const [formData, setFormData] = useState<LoginCredentials>({
    email: "",
    password: "",
  });
  const [loginErrors, setLoginErrors] = useState<string[]>([]);

  const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const [loginMutation, { isLoading }] = useLoginMutation();

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const handleLogin = async (event: any) => {
    event.preventDefault();
    // console.log(formData)
    // lỗi validate
    const errors: string[] = [];

    if (!formData.email) {
      errors.push("Vui lòng nhập địa chỉ email.");
    } else if (!emailPattern.test(formData.email)) {
      errors.push("Email không đúng định dạng");
    }
    if (!formData.password) {
      errors.push("Vui lòng nhập mật khẩu.");
    }

    if (errors.length > 0) {
      setLoginErrors(errors); // Cập nhật mảng lỗi
      return;
    }
    try {
      const response: any = await loginMutation(formData);
      console.log(response.data);

      console.log("Login successful:", response.data);

      localStorage.setItem("accessToken", response.data.accessToken);
      console.log(response.data);

      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="login-block">
        <div className="container">
          <div className="row">
            <div className="col-md-4 login-sec">
              {isLogin() ? (
                <div>
                  <p>Bạn đã đăng nhập rồi.</p>
                  {/* Hiển thị nút để đăng xuất */}
                  <button
                    className="btn btn-login float-right"
                    onClick={() => {
                      localStorage.removeItem("user");
                      localStorage.removeItem("accessToken");
                      navigate("/");
                    }}
                  >
                    Đăng xuất
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-center">Login Now</h2>
                  <form className="login-form" onSubmit={handleLogin}>
                    <div className="form-group">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="text-uppercase"
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="text-uppercase"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder=""
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="form-check">
                      <label className="form-check-label">
                        {/* <input type="checkbox" className="form-check-input" /> */}
                        <a href="/forgot-password">
                          <small>Quên mật khẩu</small>
                        </a>{" "}
                        <br />
                        <a href="/register">
                          <small>Đăng kí</small>
                        </a>
                      </label>
                      <button
                        type="submit"
                        className="btn btn-login float-right"
                      >
                        Đăng nhập
                      </button>
                    </div>
                  </form>
                  {loginErrors.length > 0 && (
                    <div className="alert alert-danger">
                      <ul>
                        {loginErrors.map((error, index) => (
                          <li key={index}>{error}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}

              <div className="copy-text">
                Created with <i className="fa fa-heart"></i> by Grafreez
              </div>
            </div>
            <div className="col-md-8 banner-sec">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <img
                      className="d-block img-fluid"
                      src="https://static.pexels.com/photos/33972/pexels-photo.jpg"
                      alt="First slide"
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <div className="banner-text">
                        <h2>This is Heaven</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block img-fluid"
                      src="https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg"
                      alt="First slide"
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <div className="banner-text">
                        <h2>This is Heaven</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      className="img-fluid"
                      src="https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg"
                      alt="First slide"
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <div className="banner-text">
                        <h2>This is Heaven</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
