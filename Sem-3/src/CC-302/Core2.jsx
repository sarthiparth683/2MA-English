import React from "react";
import { Link, Outlet } from "react-router-dom";

const Core2 = () => {
  return (
    <div>
      <h1>Core2</h1>
      <ul>
        <li>
          <Link to="Lawrence1">Lawrence1</Link>
        </li>
        <li>
          <Link to="Forster2">Forster2</Link>
        </li>
        <li>
          <Link to="HenryJames3">HenryJames3</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Core2;
