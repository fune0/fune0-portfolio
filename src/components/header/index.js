import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  
  return (
    <nav className="navbar">
      <div className="nav">
      <div className="site-title">
        <h1>
          <Link to="/" style={{color: '#fff', textDecoration: 'none'}}>
            {siteTitle}
          </Link>
        </h1>
      </div>

      <ul className="navbar-brand">
        
        <li>
        <Link to="/" style={{color: '#fff', textDecoration: 'none'}}>Home</Link>
        </li>

        <li>
        <Link to="/skills" style={{color: '#fff', textDecoration: 'none'}}>Skills</Link>
        </li>

        <li>
        <Link to="/works/" style={{color: '#fff', textDecoration: 'none'}}>Works</Link>
        </li>

        <li>
        <Link to="/about/" style={{color: '#fff', textDecoration: 'none'}}>About</Link>
        </li>
        
      </ul>
      </div>
      
    </nav>
    
  );
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;