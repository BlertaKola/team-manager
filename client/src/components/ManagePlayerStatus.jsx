import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const ManagePlayerStatus = (props) => {

    return (
      <div>
        <span className="sub-nav-text">
          <Link to="/status/game/1">Game 1 | </Link>
        </span>
        <span className="sub-nav-text" >
          <Link to="/status/game/2">Game 2 | </Link>
        </span>
        <span className="sub-nav-text" >
          <Link to="/status/game/3">Game 3</Link>
        </span>
      </div>
    );
  };
  
  export default ManagePlayerStatus;