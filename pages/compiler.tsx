import dynamic from "next/dynamic";
import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

const Ace = dynamic(() => import("../components/EditorCompiler"), { ssr: false });

const Home = () => {
  return (
    <>
   <Head>
    <title>Rwikistat-Compiler</title>
   </Head>
   <Navbar />
      <Ace />
    </>
  );
};

export default Home;
