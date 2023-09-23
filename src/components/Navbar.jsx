import "./Navbar.css"

function Navbar() {

  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      
      <div className="searchField">
        <input type="text" placeholder="Suchen" />
      </div>
    </>
  );
}

export default Navbar;
