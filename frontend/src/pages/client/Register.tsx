const Register = () => {
  return (
    <>
      <section className="mt-5 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <form role="form">
                <h2>
                  Welcome to Rymo
                  <span className="font-weight-bold text-danger fs-1">
                    Sign up
                  </span>
                </h2>
                <div className="row">
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        className="form-control input-lg"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        className="form-control input-lg"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="user name"
                    id="user_name"
                    className="form-control input-lg"
                    placeholder="User Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control input-lg"
                    placeholder="Email Address"
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
                      />
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="password"
                        name="password_confirmation"
                        id="password_confirmation"
                        className="form-control input-lg"
                        placeholder="Confirm Password"
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
