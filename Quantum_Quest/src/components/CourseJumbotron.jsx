import { FaLocationArrow } from "react-icons/fa6";

const CourseJumbotron = ({ children }) => {
  return (
    <>
      <div className="p-5 text-center bg-body-tertiary rounded-3">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="col">{children}</div>
          <div className="col">{children}</div>
          <div className="col">{children}</div>
        </div>
        <div
          className="d-inline-flex gap-2 mb-5"
          style={{ margin: "50px 0px 0px 0px" }}
        >
          <button
            className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
            type="button"
          >
            More Courses
            <span style={{ padding: "0px 0px 3px 5px" }}>
              <FaLocationArrow />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CourseJumbotron;
