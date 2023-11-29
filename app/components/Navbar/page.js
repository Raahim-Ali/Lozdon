import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">OCTALCODE</div>
      <div className="navbar-items">
        <div>HOME</div>
        <div>WHY US</div>
        <div>CASE STUDIES</div>
        <div>FAQs</div>
        <button className="btn">
          <p className="btnText">CONTACT US</p>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
