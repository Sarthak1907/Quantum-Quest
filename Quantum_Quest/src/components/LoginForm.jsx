const LoginForm = () => {
  return (
    <>
      {/*  Login 10 - Bootstrap Brain Component  */}
      <section className="bg-light py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
              <div className="mb-5">
                <h4 className="text-center mb-4">
                  Welcome back you've been missed!
                </h4>
                <div className="text-center">
                  <a href="#!" className="btn bsb-btn-2xl btn-danger">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-google"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                    </svg>
                    <span className="ms-2 fs-6">Login In with Google</span>
                  </a>
                </div>
              </div>
              <div className="card border border-light-subtle rounded-4">
                <div className="card-body p-3 p-md-4 p-xl-5">
                  <form action="#!">
                    <p className="text-center mb-4">Or Login In using email</p>
                    <div className="row gy-3 overflow-hidden">
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="name@example.com"
                            required
                          />
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            defaultValue=""
                            placeholder="Password"
                            required
                          />
                          <label htmlFor="password" className="form-label">
                            Password
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-grid">
                          <button
                            className="btn btn-warning btn-lg"
                            type="submit"
                          >
                            Log In
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-4">
                <a href="#!" className="link-dark text-decoration-none">
                  Sign Up
                </a>
                <a href="#!" className="link-secondary text-decoration-none">
                  Forgot password ?
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
