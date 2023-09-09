import dynamic from "next/dynamic";
import React from "react";

const Ace = dynamic(() => import("../components/EditorShiny1_1"), { ssr: false });

const Home = () => {
  return (
    <>
      <div className="header"> Codeboard Online IDE </div>
      <Ace />
    </>
  );
};

export default Home;
