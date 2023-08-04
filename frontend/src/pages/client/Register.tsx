import { useState } from "react";
import { RegisterData } from "../../interfaces/user";
import { useRegisterMutation } from "../../store/api/api";

const Register = () => {
  const [formData, setFormData] = useState<RegisterData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    num_phone: '',
    address: '',
  });
  const [registerMutation, { isLoading }] = useRegisterMutation();

  const handleRegister = async (event: any) => {
    event.preventDefault();
    console.log(formData)
    const response = await registerMutation(formData);
    console.log(response)
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
                      <input
                        type="text"
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
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
