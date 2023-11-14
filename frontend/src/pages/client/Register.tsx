import { useState } from "react";
import { RegisterData } from "../../interfaces/user";
import { useRegisterMutation } from "../../store/api/api";
import isLogin from "../../components/client/isLogin";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState<RegisterData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    num_phone: '',
    address: '',
  });
  const [errors, setErrors] = useState<string[]>([]);

  const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const [registerMutation, { isLoading }] = useRegisterMutation();

  const handleRegister = async (event: any) => {
    event.preventDefault();
    console.log(formData.confirmPassword == formData.password)
    const errors: string[] = [];
    if (!formData.name) {
      errors.push('Vui lòng nhập tên.');
    }
    if (!formData.email) {
      errors.push('Vui lòng nhập địa chỉ email.');
    } else if (!emailPattern.test(formData.email)) {
      errors.push('Email không đúng định dạng');
    }
    if (!formData.password) {
      errors.push('Vui lòng nhập mật khẩu.');
    }else if(formData.password.length < 6 ){
      errors.push("Mật khẩu phải ít nhất 6 kí tự")
    }
    if (formData.confirmPassword != formData.password) {
      errors.push('Xác nhận mật khẩu phải trùng với mật khẩu');
    }
    if (!formData.num_phone) {
      errors.push('Vui lòng nhập số điện thoại.');
    }
    if (!formData.address) {
      errors.push('Vui lòng nhập địa chỉ.');
    }
    if (errors.length > 0) {
      setErrors(errors); // Cập nhật mảng lỗi
      return;
    }
    try {
      const response: any = await registerMutation(formData);
      console.log(response)
      if (response.data) {
        alert("Đăng kí thành công")
        navigate('/login')
      }else{
        console.log(response.data)
        alert("Email đã được đăng kí rồi")
      }

    } catch (error) {
      alert("Có lỗi xảy ra!")
      console.log(error)
    }

  };
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      <section className="mt-5 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {isLogin() ? (<div>
                <p>Bạn đã đăng nhập rồi.</p>
                {/* Hiển thị nút để đăng xuất */}
                <button
                  className="btn btn-login float-right"
                  onClick={() => {
                    localStorage.removeItem('user');
                    navigate('/');
                  }}
                >
                  Đăng xuất
                </button>
              </div>) : (
                <form role="form" onSubmit={handleRegister}>
                  <h2>
                    Welcome to Rymo
                    <span className="font-weight-bold text-danger fs-1">
                      Sign up
                    </span>
                  </h2>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control input-lg"
                      placeholder="User Name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control input-lg"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="password"
                          name="password"
                          id="password"
                          className="form-control input-lg"
                          placeholder="Password"
                          value={formData.password}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="password"
                          name="confirmPassword"
                          id="confirmPassword"
                          className="form-control input-lg"
                          placeholder="Confirm Password"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="num_phone"
                          id="num_phone"
                          className="form-control input-lg"
                          placeholder="Phone "
                          value={formData.num_phone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6">
                      <div className="form-group">
                        <input type="text"
                          name="address"
                          id="address"
                          className="form-control input-lg"
                          placeholder="Address"
                          value={formData.address}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-md-6">
                      <input
                        type="submit"
                        value="Register"
                        className="btn btn-primary btn-block btn-lg"
                      />
                    </div>
                    <div className="col-xs-12 col-md-6">
                      <a
                        href="/login"
                        className="btn btn-success btn-block btn-lg"
                      >
                        Sign In
                      </a>
                    </div>
                  </div>
                </form>)}
              {errors.length > 0 && (
                <div className="alert alert-danger">
                  <ul>
                    {errors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;