import React, { FC } from "react";
import { Link } from "react-router-dom";

interface Props {}

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
      </nav>
    </div>
  );
};

export default Home;
