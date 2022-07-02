const Footer = () => {
  return (
    <footer className="card card--footer">
      <div className="footer-container">
        <p className="footer__title">Contact us</p>
        <div className="footer__links">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
        </div>
      </div>

      <div className="footer-container">
        <p className="footer__title">Attribute</p>
        <div className="footer__links">
          <a
            href="https://www.flaticon.com/free-icons/stock-market"
            title="stock market icons"
          >
            Stock market icons created by Freepik - Flaticon
          </a>
          <a
            href="https://www.flaticon.com/free-icons/stake"
            title="stake icons"
          >
            Stake icons created by amonrat rungreangfangsai - Flaticon
          </a>
          <a
            href="https://www.flaticon.com/free-icons/leverage"
            title="leverage icons"
          >
            Leverage icons created by Smashicons - Flaticon
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
