import slackLogo from "./assets/Slack_Technologies_Logo.svg";
import udemyLogo from "./assets/Udemy_logo.svg";
import courseraLogo from "./assets/coursera-svgrepo-com.svg";
import microsoftLogo from "./assets/Microsoft_logo_(2012).svg";

const Featured = () => {
  return (
    <div className="overall">
      <div className="content">
        <strong>Trusted by various top companies</strong>
      </div>
      <div className="icons">
        <div className="icon">
          <img src={slackLogo} alt="Slack" />
        </div>
        <div className="icon">
          <img src={udemyLogo} alt="Udemy" />
        </div>
        <div className="icon">
          <img src={courseraLogo} alt="Coursera" />
        </div>
        <div className="icon">
          <img src={microsoftLogo} alt="Microsoft" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
