import React from "react";
import { Link, Outlet } from "react-router-dom";

const Core3 = () => {
  return (
    <div>
      <h1>Core3</h1>
      <p>
        BRITISH PROSE - Natural Language: Prose mirrors how people speak in real life. Structure: It is organized into sentences and paragraphs, rather than.
        Purpose: Prose is used to convey information, tell stories, or express ideas in a straightforward manner. Examples of prose include:- Novels Short
        stories Essays Biographies News articles
      </p>
      <ul>
        <li>
          <Link to="Bacon1">Bacon1</Link>
        </li>
        <li>
          <Link to="Addison2">Addison2</Link>
        </li>
        <li>
          <Link to="Steele3">Steele3</Link>
        </li>
        <li>
          <Link to="Bible4">Bible4</Link>
        </li>
        <li>
          <Link to="Lamb5">Lamb5</Link>
        </li>
        <li>
          <Link to="Ruskin6">Ruskin6</Link>
        </li>
        <li>
          <Link to="Grandier7">Grandier7</Link>
        </li>
        <li>
          <Link to="Lynd8">Lynd8</Link>
        </li>
        <li>
          <Link to="Lucas9">Lucas9</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Core3;
