import Time from "./assets/IMG-20240416-WA0004.jpg";
import Android from "./assets/IMG-20240428-WA0008.jpg";
import CompNetwork from "./assets/IMG-20240428-WA0007.jpg";
import Stock from "./assets/IMG-20240428-WA0009.jpg";
import WebDev from "./assets/IMG-20240428-WA0010.jpg";
import Graphic from "./assets/IMG-20240428-WA0011.jpg";

const CourseList = () => {
  function handleLeft() {
    const container = document.querySelector(".course-list .square-container");
    container.scrollBy({
      left: -325,
      behavior: "smooth",
    });
  }
  function handleRight() {
    const container = document.querySelector(".course-list .square-container");
    container.scrollBy({
      left: 325,
      behavior: "smooth",
    });
  }

  return (
    <div className="course-list">
      <h1>Browse Our Popular Courses</h1>
      <p className="Courses-title">
        All Courses teach by mentors who are professional and
      </p>
      <p className="Courses-title"> experienced in their respective fields </p>

      <div className="square-container">
        <div className="square">
          <div className="tag">Beginner</div>
          <img src={Stock} alt="Trading photo" />
          <strong> Option trading </strong>
        </div>
        <div className="square">
          <div className="tag">Beginner</div>
          <img src={WebDev} alt="WEB DEV IMAGE" />
          <strong> Web Development </strong>
        </div>
        <div className="square">
          <div className="tag">Beginner</div>
          <img src={Time} alt="TIME MANAGEMENT IMAGE" />
          <strong> Time Management </strong>
        </div>
        <div className="square">
          <div className="tag">Beginner</div>
          <img src={CompNetwork} alt="" />
          <strong> Computer-Networks </strong>
        </div>
        <div className="square">
          <div className="tag">Beginner</div>
          <img src={Graphic} alt="Graphic-Designing" />
          <strong>Graphic-Designing</strong>
        </div>
        <div className="square">
          <div className="tag">Beginner</div>
          <img src={Android} alt="" />
          <strong>Android Development</strong>
        </div>
      </div>

      <div className="buttons">
        <button className="circular-button-left" onClick={handleLeft}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="#ffffff"
            viewBox="0 0 256 256"
          >
            <path d="M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"></path>
          </svg>
        </button>
        <button className="circular-button-right" onClick={handleRight}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="#ffffff"
            viewBox="0 0 256 256"
          >
            <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CourseList;
