function Footer() {
  return (
    <footer className="site-footer">
      {/* CTA bar */}
      <div className="footer-cta">
        <div className="footer-cta__text">
          <h3>Ready for a consultation?</h3>
          <p>Let&apos;s get started!</p>
        </div>

        <a className="footer-cta__btn" href="#contact">
          Contact us
        </a>
      </div>

      {/* Main footer */}
      <div className="footer-main">
        <div className="footer-col footer-brand">
          <div className="footer-logo">Company Name</div>
          <div className="footer-copy">© {new Date().getFullYear()}</div>
        </div>

        <div className="footer-col">
          <h4>Customers</h4>
          <a href="#buyer">Buyer</a>
          <a href="#supplier">Supplier</a>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <a href="#about">About us</a>
          <a href="#careers">Careers</a>
          <a href="#contact">Contact us</a>
        </div>

        <div className="footer-col">
          <h4>Further Information</h4>
          <a href="#terms">Terms &amp; Conditions</a>
          <a href="#privacy">Privacy Policy</a>
        </div>

        <div className="footer-col">
          <h4>Follow us</h4>
          <div className="footer-social">
            <a className="social" href="#" aria-label="Facebook">f</a>
            <a className="social" href="#" aria-label="Twitter">t</a>
            <a className="social" href="#" aria-label="LinkedIn">in</a>
            <a className="social" href="#" aria-label="Instagram">ig</a>
            <a className="social" href="#" aria-label="Telegram">tg</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
