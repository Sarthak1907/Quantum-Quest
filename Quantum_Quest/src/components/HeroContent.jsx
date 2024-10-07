const HeroContent = () => {
  return (
    <>
      <div
        className="container col-xxl-8 px-4 py-5"
        style={{ backgroundColor: "#A2A77F", width: "auto" }}
      >
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="bootstrap-themes.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Quantum Quest
            </h1>
            <h6>A quest to learn something new.</h6>
            <h6>Take a Quantum leap with Quantum Quest!!!</h6>
            <br />
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-warning btn-lg px-4 me-md-2"
              >
                About
              </button>
              <button
                type="button"
                className="btn btn-outline-light btn-lg px-4"
              >
                Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroContent;
