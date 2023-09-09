import dynamic from "next/dynamic";
import React from "react";
import Head from "next/head";
import Navbar2 from "../components/Navbar2";

const Ace = dynamic(() => import("../components/EditorCompiler"), { ssr: false });

const Home = () => {
  return (
    <>
   <Head>
    <title>Rwikistat Compiler</title>
   </Head>
   <Navbar2 />
      <Ace />
    </>
  );
};

export default Home;
