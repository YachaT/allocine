import React from "react";
import Logo from "./Logo.js";

function Header(props) {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="logoblock">
          <Logo url="/loogo.png" />
        </div>
      </div>
    </div>
  );
}

export default Header;
