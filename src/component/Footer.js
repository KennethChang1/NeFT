const Footer = () => {
  return (
    <footer className="card">
      <img className="footer-logo" src={require("../images/logo.png")} alt="" />
      <div className="footer-container">
        <p className="footer-title">Contact us</p>
        <div className="socials">
          <img src={require("../images/socials/instagram.png")} alt="" />
          <img src={require("../images/socials/twitter.png")} alt="" />
          <img src={require("../images/socials/facebook.png")} alt="" />
        </div>
      </div>
      <div className="footer-container">
        <p className="footer-title">Attribution</p>
        <a
          href="https://www.flaticon.com/free-icons/stock-market"
          title="stock market icons"
        >
          Stock market icons created by Freepik - Flaticon
        </a>
        <a href="https://www.flaticon.com/free-icons/stake" title="stake icons">
          Stake icons created by amonrat rungreangfangsai - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/leverage"
          title="leverage icons"
        >
          Leverage icons created by Smashicons - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/instagram"
          title="instagram icons"
        >
          Instagram icons created by Pixel perfect - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/twitter"
          title="twitter icons"
        >
          Twitter icons created by Pixel perfect - Flaticon
        </a>
      </div>
    </footer>
  );
};

export default Footer;
