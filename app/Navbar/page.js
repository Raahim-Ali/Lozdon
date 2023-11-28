import "./Navbar.css";
function Page() {
  return (
    <div className="navbar">
      <div className="logo">OCTALCODE</div>
      <div className="navbar-items">
        <div>HOME</div>
        <div>WHY US</div>
        <div>CASE STUDIES</div>
        <div>FAQs</div>
      </div>
      <button className="btn">CONTACT US</button>
    </div>
  );
}

export default Page;
