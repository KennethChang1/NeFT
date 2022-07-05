import logo from "../images/logo.png";
const Navbar = () => {
  return (
    <header>
      <nav className="nav">
        <img src={logo} alt="logo" />
        <a href="/NeFT/home">
          <button className="btn btn--primary">Launch App</button>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
