import { Link } from "react-router-dom";
const MyCourses = () => {
  return (
    <div className="myCourse">
      <div className="head">My Courses</div>
      <Link to="/course-preview" className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p className="title">
              <img
                src="https://aadyainstitution.com/wp-content/uploads/2022/07/creative-graphic-designer.png"
                alt="Image"
              />
            </p>
            <p>Introduction to Graphic Designing</p>
          </div>
          <div className="flip-card-back">
            <p className="title">Course Details</p>
            <p className="para">
              This course will enhance your graphic designing skills from
              choosing colors to images. Converting Imagination to reality.
            </p>
          </div>
        </div>
      </Link>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p className="title">
              <img
                src="https://i.ytimg.com/vi/Xq6IEBG7boc/maxresdefault.jpg"
                alt="Image"
              />
            </p>
            <p>Linux Ultimate Course</p>
          </div>
          <div className="flip-card-back">
            <p className="title">Course Details</p>
            <p className="para">
              This course will make you equipped with basic to advanced
              knowledge for Linux with hands on experience on Linux Terminal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
