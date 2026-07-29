import { Link, useResolvedPath } from "react-router-dom";
import { ShoppingBagIcon, ShoppingCartIcon, LogOut } from "lucide-react";
import "../assets/styles/Navbar.css";

function Navbar() {
  const { pathname } = useResolvedPath();
  const isHomePage = pathname === "/";

  return (
    <div className="navbar">
      {/* LOGO */}

        <Link to="/" className="logo-link">
          <div className="logo">
            <ShoppingCartIcon size={36} color="var(--primary-color)" />

            <span className="logo-text">
              POSGRESTORE
            </span>
          </div>
        </Link>


      {/* RIGHT SECTION */}

      {isHomePage && (
        <div className="right-Side">
        
            <div className="cart-button">
              <ShoppingBagIcon size={29} color="var(--primary-color)" />
              <span className="cart-badge">
                {/* {products.length} */}
                8
              </span>
            </div>
          
          <div>
            <LogOut size={38} color="var(--primary-color)" />
          </div>
        </div>
      )}

    </div>
  );
}

export default Navbar;