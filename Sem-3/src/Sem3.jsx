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
import Structural from "./CC-304/unit4/Structural";
import Feminism from "./CC-304/unit5/Feminism";
import Rajgopal1 from "./CC-301/unit-2/1Rajgopal";
import RKNarayan2 from "./CC-301/unit-2/2RKNarayan";
import Anand3 from "./CC-301/unit-2/3Anand";
import RajaRao4 from "./CC-301/unit-2/4RajaRao";
import Padmaraju5 from "./CC-301/unit-2/5Padmaraju";
import Daruwala6 from "./CC-301/unit-2/6Daruwala";
import VirginiaWoolf1 from "./CC-302/unit2/1VirginiaWoolf";
import Huxley2 from "./CC-302/unit2/2Huxley";
import Golding3 from "./CC-302/unit2/3Golding";
import Bacon1 from "./CC-303/1Bacon";
import Addison2 from "./CC-303/2Addison";
import Steele3 from "./CC-303/3Steele";
import Bible4 from "./CC-303/4Bible";
import Lamb5 from "./CC-303/5Lamb";
import Ruskin6 from "./CC-303/6Ruskin";
import Grandier7 from "./CC-303/7Grandier";
import Lynd8 from "./CC-303/8Lynd";
import Lucas9 from "./CC-303/9Lucas";

const Sem3 = () => {
  return (
    <Router>
      <nav>
        <ul className={styles.navigation}>
          <div>
            <Link to="/Core1">Core-301</Link>
          </div>
          <div>
            <Link to="/Core2">Core-302</Link>
          </div>
          <div>
            <Link to="/Core3">Core-303</Link>
          </div>
          <div>
            <Link to="/Core4">Core-304</Link>
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
          <Route path="Rajgopal1" element={<Rajgopal1 />} />
          <Route path="RKNarayan2" element={<RKNarayan2 />} />
          <Route path="Anand3" element={<Anand3 />} />
          <Route path="RajaRao4" element={<RajaRao4 />} />
          <Route path="Padmaraju5" element={<Padmaraju5 />} />
          <Route path="Daruwala6" element={<Daruwala6 />} />
        </Route>

        <Route path="/Core2" element={<Core2 />}>
          <Route path="Lawrence1" element={<Lawrence1 />} />
          <Route path="Forster2" element={<Forster2 />} />
          <Route path="HenryJames3" element={<HenryJames3 />} />
          <Route path="VirginiaWoolf1" element={<VirginiaWoolf1 />} />
          <Route path="Huxley2" element={<Huxley2 />} />
          <Route path="Golding3" element={<Golding3 />} />
        </Route>

        <Route path="/Core3" element={<Core3 />}>
          <Route path="Bacon1" element={<Bacon1 />} />
          <Route path="Addison2" element={<Addison2 />} />
          <Route path="Steele3" element={<Steele3 />} />
          <Route path="Bible4" element={<Bible4 />} />
          <Route path="Lamb5" element={<Lamb5 />} />
          <Route path="Ruskin6" element={<Ruskin6 />} />
          <Route path="Grandier7" element={<Grandier7 />} />
          <Route path="Lynd8" element={<Lynd8 />} />
          <Route path="Lucas9" element={<Lucas9 />} />
        </Route>

        <Route path="/Core4" element={<Core4 />}>
          <Route path="Johnson2" element={<Johnson2 />} />
          <Route path="Sydney1" element={<Sydney1 />} />
          <Route path="Arnold1" element={<Arnold1 />} />
          <Route path="Arnold2" element={<Arnold2 />} />
          <Route path="Wordsworth1" element={<Wordsworth1 />} />
          <Route path="Eliot1" element={<Eliot1 />} />
          <Route path="Eliot2" element={<Eliot2 />} />
          <Route path="Richard1" element={<Richard1 />} />
          <Route path="Structural" element={<Structural />} />
          <Route path="Feminism" element={<Feminism />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Sem3;
