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
        <div className="searchField">
        <input type="text" placeholder="Suchen..." />
      </div>
      </nav>
      
    
    </>
  );
}

export default Navbar;
