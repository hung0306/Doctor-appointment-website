import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__title">Healthy Booking</h3>
            <p className="footer__description">
              Your trusted healthcare companion for booking appointments with
              qualified doctors.
            </p>
          </div>

          <div className="footer__section">
            <h4 className="footer__subtitle">Quick Links</h4>
            <ul className="footer__links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/find-doctor">Find Doctor</a>
              </li>
              <li>
                <a href="/specialties">Specialties</a>
              </li>
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__subtitle">Support</h4>
            <ul className="footer__links">
              <li>
                <a href="/help">Help Center</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__subtitle">Legal</h4>
            <ul className="footer__links">
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms">Terms of Service</a>
              </li>
              <li>
                <a href="/cookies">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2024 Healthy Booking. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
