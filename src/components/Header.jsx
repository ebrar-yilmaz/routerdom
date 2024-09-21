import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link className="link" to="/">
        Anasayfa
      </Link>
      <Link className="link" to="/About">
        Hakkımızda
      </Link>
      <Link className="link" to="/products">
        Ürünlerimiz
      </Link>
      <Link className="link" to="/contact">
        İletişim{" "}
      </Link>
    </div>
  );
}

export default Header;
