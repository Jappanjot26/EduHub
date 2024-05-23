import Logo from "./no-text-logo.png";
const Footer = () => {
  return (
    <div class="footer-section">
      <div className="subscribe-box">
        <div className="subscribe-input1">
          <h2>Drop your email to get the latest news</h2>
          <div className="subscribe-input row">
            <div className="row">
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your email address.."
                required
              />
              <a href="./login.html" className="sub-btn">
                Subscribe Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="stuc">
          {/* <img src={Logo} alt="Logo" /> */}
          <strong>EduHub</strong>
        </div>
        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Media</h2>
            <ul className="nav__ul">
              <li>
                <a href="#">Online</a>
              </li>
              <li>
                <a href="#">Print</a>
              </li>
              <li>
                <a href="#">Alternative Ads</a>
              </li>
            </ul>
          </li>
          <li className="nav__item">
            <h2 className="nav__title">About</h2>
            <ul className="nav__ul">
              <li>
                <a href="#">Online</a>
              </li>
              <li>
                <a href="#">Print</a>
              </li>
              <li>
                <a href="#">Alternative Ads</a>
              </li>
            </ul>
          </li>
          <li className="nav__item">
            <h2 className="nav__title">Legal</h2>
            <ul className="nav__ul">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="legal">
          <p>&copy; 2024 . All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
