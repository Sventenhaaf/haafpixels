import React, { FC } from "react";
import { Link } from "react-router-dom";

interface Props {}

/*
- Work (zie ook resume en doe daar eigen versie van)
  - IVO (link)
  - Wind Farm Uptime Analysis (screencasts)
  - DPG Media (link to app)
  - Envelope (link)
  - Ampelmann Operations (link to website)
- Work or Play?
  - Tax analysis tool 
- Play
  - Squares
  - Sorting Algorithms (old)
  - Square vs Plane (old)
  - Good stuff on the web (links verzamelen, 1-2 zinnen per link, taggen, in visual stoppen)
- Writing
  - Zie Writing
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
        <Link to="/iterations">Iterations</Link>
      </nav>
      <div>Divide these up in:</div>
      <div>- Work</div>
      <div>- Play</div>
      <div>- Writing</div>
    </div>
  );
};

export default Home;
