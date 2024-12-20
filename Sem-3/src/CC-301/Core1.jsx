import React from "react";
import { Link, Outlet } from "react-router-dom";

const Core1 = () => {
  return (
    <div>
      <h1>Core1 - </h1>
      <p>INDIAN WRITING IN ENGLISH-POETRY AND SHORT-STORY</p>

      <ul>
        <p>Unit I-- Poems</p>
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
        <p>Unit II—Short Story</p>
        <li>
          <Link to="Rajgopal1">Rajgopal1</Link>
        </li>
        <li>
          <Link to="RKNarayan2">RKNarayan2</Link>
        </li>
        <li>
          <Link to="Anand3">Anand3</Link>
        </li>
        <li>
          <Link to="RajaRao4">RajaRao4</Link>
        </li>
        <li>
          <Link to="Padmaraju5">Padmaraju5</Link>
        </li>
        <li>
          <Link to="Daruwala6">Daruwala6</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Core1;
