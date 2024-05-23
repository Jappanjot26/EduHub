import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="header-body head-left">
        <div className="head-pri">
          <strong>Improve</strong> Your Skill and Bring Up Your &thinsp;
          <strong>Career</strong>
        </div>
        <div className="head-sec">
          Our innovative platform connects you with a network of accomplished
          mentors who share their industry knowledge and practical experience.
          We understand that everyone learns differently and has busy schedules.
          That's why we offer a wide range of courses designed to fit your
          needs.
        </div>
        <Link className="head-btn" to="/login">
          Get Started
        </Link>
      </div>
      <div className="header-body head-right">
        <img
          src="https://www.tegria.com/wp-content/uploads/2022/09/roadmap-header-1.png"
          alt="Online Learning"
          className="head-img"
        />
      </div>
    </div>
  );
};

export default Header;
