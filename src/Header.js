import React from 'react';
import earth from "./images/public.svg";

function Header() {
  return(
    <header>
      <div className="writing">
        <img src={earth} alt="icon" width="24" />
        <p>my travel journal</p>
      </div>
    </header>
  )
}

export default Header;
