import './Footer.css'

export function Footer (){
  return (
    <footer className="footer">
  <div className="footer-container">

    <div className="footer-brand">
      <h2>SahyogSetu</h2>
      <p>
        Connecting communities with trusted service professionals.
      </p>

      <div className="social-icons">
        <a href="#" aria-label="Facebook">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="#" aria-label="Instagram">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="#" aria-label="LinkedIn">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="#" aria-label="Twitter">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a href="#" aria-label="YouTube">
          <i className="fa-brands fa-youtube"></i>
        </a>
      </div>
    </div>

    <div className="footer-links">
      <div className="footer-column">
        <h3>Platform</h3>
        <a href="#">Find a Professional</a>
        <a href="#">Book a Service</a>
        <a href="#">Book Inspection</a>
        <a href="#">Become a Professional</a>
      </div>

      <div className="footer-column">
        <h3>Company</h3>
        <a href="#">About Us</a>
        <a href="#">How It Works</a>
        <a href="#">Cooperatives</a>
        <a href="#">Contact Us</a>
      </div>

      <div className="footer-column">
        <h3>Support</h3>
        <a href="#">Help Center</a>
        <a href="#">Safety</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy Policy</a>
      </div>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 KaamSetu. All rights reserved.</p>

    <div className="footer-bottom-links">
      <a href="#">Privacy</a>
      <a href="#">Terms</a>
      <a href="#">Help</a>
    </div>
  </div>
</footer>
  );
}