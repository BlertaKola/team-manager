import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Nav = (props) => {

    return (
      <div>
        <span  className="global-nav-text">
          <Link to="/players/list">Manage Players | </Link>
        </span>
        <span className="global-nav-text" >
          <Link to="/status/game/1">Manage Player Status</Link>
        </span>
      </div>
    );
  };
  
  export default Nav;