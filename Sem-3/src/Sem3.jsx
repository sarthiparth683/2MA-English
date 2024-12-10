import React from "react";
import styles from "./Styles/Home.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Core1 from "./CC-301/core1";
import ToruDutt1 from "./CC-301/unit-1/1ToruDutt";
import Auribondo2 from "./CC-301/unit-1/2Auribondo";
import Nissim3 from "./CC-301/unit-1/3Nissim";
import Sarojini4 from "./CC-301/unit-1/4Sarojini";
import Jayant5 from "./CC-301/unit-1/5Jayant";
import Ramanujan6 from "./CC-301/unit-1/6Ramanujan";
import Sarthi7 from "./CC-301/unit-1/7Sarthi";
import Core2 from "./CC-302/core2";
import Lawrence1 from "./CC-302/unit1/1Lawrence";
import Forster2 from "./CC-302/unit1/2Forster";
import HenryJames3 from "./CC-302/unit1/3HenryJames";
import Core3 from "./CC-303/Core3";
import Core4 from "./CC-304/Core4";
import Johnson2 from "./CC-304/unit1/Johnson2";
import Sydney1 from "./CC-304/unit1/Sydney1";
import Arnold1 from "./CC-304/unit2/Arnold1";
import Arnold2 from "./CC-304/unit2/Arnold2";
import Wordsworth1 from "./CC-304/unit2/Wordsworth1";
import Eliot1 from "./CC-304/unit3/Eliot1";
import Eliot2 from "./CC-304/unit3/Eliot2";
import Richard1 from "./CC-304/unit3/Richard1";
import Richard2 from "./CC-304/unit3/Richard2";
import Structural from "./CC-304/unit4/Structural";
import Feminism from "./CC-304/unit5/Feminism";

const Sem3 = () => {
  return (
    <Router>
      <nav>
        <ul className={styles.navigation}>
          <div>
            <Link to="/Core1">Core1</Link>
          </div>
          <div>
            <Link to="/Core2">Core2</Link>
          </div>
          <div>
            <Link to="/Core3">Core3</Link>
          </div>
          <div>
            <Link to="/Core4">Core4</Link>
          </div>
        </ul>
      </nav>

      <Routes>
        <Route path="/Core1" element={<Core1 />}>
          <Route path="ToruDutt1" element={<ToruDutt1 />} />
          <Route path="Auribondo2" element={<Auribondo2 />} />
          <Route path="Nissim3" element={<Nissim3 />} />
          <Route path="Sarojini4" element={<Sarojini4 />} />
          <Route path="Jayant5" element={<Jayant5 />} />
          <Route path="Ramanujan6" element={<Ramanujan6 />} />
          <Route path="Sarthi7" element={<Sarthi7 />} />
        </Route>

        <Route path="/Core2" element={<Core2 />}>
          <Route path="Lawrence1" element={<Lawrence1 />} />
          <Route path="Forster2" element={<Forster2 />} />
          <Route path="HenryJames3" element={<HenryJames3 />} />
        </Route>

        <Route path="/Core3" element={<Core3 />} />

        <Route path="/Core4" element={<Core4 />}>
          <Route path="Johnson2" element={<Johnson2 />} />
          <Route path="Sydney1" element={<Sydney1 />} />
          <Route path="Arnold1" element={<Arnold1 />} />
          <Route path="Arnold2" element={<Arnold2 />} />
          <Route path="Wordsworth1" element={<Wordsworth1 />} />
          <Route path="Eliot1" element={<Eliot1 />} />
          <Route path="Eliot2" element={<Eliot2 />} />
          <Route path="Richard1" element={<Richard1 />} />
          <Route path="Richard2" element={<Richard2 />} />
          <Route path="Structural" element={<Structural />} />
          <Route path="Feminism" element={<Feminism />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Sem3;
