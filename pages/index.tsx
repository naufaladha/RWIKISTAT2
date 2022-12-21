import Link from "next/link";
import React from "react";
import logo from "../Assets/logo1.png"
import Image from "next/image";
import Head from "next/head";
import profile from "../Assets/me.jpg"
import Module from "../Assets/modules.png";
import Navbar from "../components/Navbar";
import Rcompiler from "../Assets/Rcompiler.png";
const Home = () => {
  return (
    <>
      <Head>
        <title>Rwikistat</title>
      </Head>
    
    <div className="h-screen w-full ">
      <Navbar />
      <div className="flex flex-col justify-center items-center h-[70%]">
        
        <div className="flex flex-row justify-center items-center  gap-[140px]">
          <Link href={'/Modules'}  className="hover:bg-white  hover:text-black text-white rounded-xl border-4 cursor-pointer bg-[#FC827E] border-[#FF524D] w-[400px] h-[200px] drop-shadow-2xl">
          <Image className="mx-auto pt-2" src={Module} alt="modules" width={150} />
            <h1 className="text-[50px] text-center">Modules</h1>         
          </Link>
          <Link href={'/compiler'}  className="hover:bg-white  hover:text-black text-white rounded-xl border-4 cursor-pointer bg-[#FFD27A] border-[#FEE2AC] w-[400px] h-[200px] drop-shadow-2xl">
          <Image className="mx-auto pt-2" src={Rcompiler} alt="Rcompiler" width={100} />
            <h1 className="text-[50px] text-center">R Compiler</h1>         
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
