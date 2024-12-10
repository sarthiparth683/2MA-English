import React from "react";
import { Link, Outlet } from "react-router-dom";

const Core4 = () => {
  return (
    <div>
      <h1>Core4</h1>
      <ul>
        <li>
          <Link to="Johnson2">UNIT-I-Johnson2</Link>
        </li>
        <li>
          <Link to="Sydney1">UNIT-I-Sydney1</Link>
        </li>
        <li>
          <Link to="Arnold1">UNIT-II-Arnold1</Link>
        </li>
        <li>
          <Link to="Arnold2">UNIT-II-Arnold2</Link>
        </li>
        <li>
          <Link to="Wordsworth1">UNIT-II-Wordsworth1</Link>
        </li>
        <li>
          <Link to="Eliot1">UNIT-III -Eliot1</Link>
        </li>
        <li>
          <Link to="Eliot2">UNIT-III -Eliot2</Link>
        </li>
        <li>
          <Link to="Richard1">UNIT-III Richard1</Link>
        </li>
        <li>
          <Link to="Structural">UNIT-IV - Structural</Link>
        </li>
        <li>
          <Link to="Feminism"> UNIT-V - Feminism</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Core4;
