import React from "react";
import { Link, Outlet } from "react-router-dom";

const Core1 = () => {
  return (
    <div>
      <h1>Core1</h1>
      <ul>
        <li>
          <Link to="ToruDutt1">ToruDutt1</Link>
        </li>
        <li>
          <Link to="Auribondo2">Auribondo2</Link>
        </li>
        <li>
          <Link to="Nissim3">Nissim3</Link>
        </li>
        <li>
          <Link to="Sarojini4">Sarojini4</Link>
        </li>
        <li>
          <Link to="Jayant5">Jayant5</Link>
        </li>
        <li>
          <Link to="Ramanujan6">Ramanujan6</Link>
        </li>
        <li>
          <Link to="Sarthi7">Sarthi7</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Core1;
