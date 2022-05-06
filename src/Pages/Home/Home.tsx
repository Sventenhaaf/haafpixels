import React, { FC } from "react";
import { Link } from "react-router-dom";

interface Props {}

/*
- Work (zie ook resume en doe daar eigen versie van)
  - IVO (link)
  - DPG Media (link to app)
  - Envelope (link)
  - Ampelmann Operations (link to website)
- Play
  - Squares
  - Sorting Algorithms (old)
  - Square vs Plane (old)
*/

const Home: FC<Props> = () => {
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/squares">Squares</Link>
        <Link to="/new">New</Link>
        <Link to="/writing">Writing</Link>
      </nav>
      <div>Divide these up in:</div>
      <div>- Work</div>
      <div>- Play</div>
      <div>- Writing</div>
      <div>- Interesting stuff on the web</div>
    </div>
  );
};

export default Home;
