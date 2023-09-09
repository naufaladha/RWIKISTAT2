import Link from "next/link";
import React, { useState } from "react";
import logo from "../Assets/logo1.png"
import Image from "next/image";
import Head from "next/head";
import profile from "../Assets/me.jpg"
import Module from "../Assets/modules.png";
import Navbar2 from "../components/Navbar2";
import Rcompiler from "../Assets/Rcompiler.png";
import Menumodul from "../Assets/menumodul.png";
import Menucompiler from "../Assets/menucompiler.png";
import eclipse from "../Assets/eclipse.png";
import Right from "../Assets/right.png";
import withAuth from '../components/withAuth';
import Cookies from 'js-cookie';
import imagemodule1 from "../Assets/imagemodule1.png";
import imagemodule2 from "../Assets/imagemodule2.png";
import imagemodule3 from "../Assets/imagemodule3.png";
const submodules = () => {
    const [aktif, setaktif] = useState(false);
    const dropdown = () =>{
        setaktif(!aktif)
    };

  return (
    <>
      <Head>
        <title>Rwikistat</title>
      </Head>
    
    <div className="h-full w-full bg-[#F9F9FB]">
      <Navbar2 />
        <div className="flex flex-col relative mx-auto pl-10 pr-10 mt-[100px] w-[1500px]  h-[900px] drop-shadow-2xl bg-white ">
         <h1 className=" text-center text-[54px] font-bold text-[#3D3D3D] pt-[30px]">Modul-modul Rwikistat</h1>
         <div className="flex flex-row static justify-center items-center gap-[20px] pt-[30px]  rounded-md p-10 ">
          <Link href={"/ModuleBab1"}>
            <div className="overflow-hidden bg-clip-content cursor-pointer text-[#3D3D3D]  rounded-xl border-4 bg-[#00726B] border-[#F7F7F8] w-[500px] h-[200px] drop-shadow-2xl items-center">
              <Image className="inset-0 mx-auto pt-1" src={imagemodule1} alt="modules" width={500} height={500} />
              <h1 className="absolute text-center inset-0 font-sans pl-2 pt-2 text-bold text-[37px] text-white  h-full w-full flex items-center justify-center">
              BAB I  <br />
                PENGENALAN R  <br />DAN R-STUDIO
              </h1>
            </div>
          </Link>   
          <Link href={"/ModuleBab2"}>
            <div className="flex felx-col overflow-hidden bg-clip-content relative bg-blend-multiply cursor-pointer text-[#3D3D3D]  rounded-xl border-4 bg-[#00726B] border-[#F7F7F8] w-[500px] h-[200px] drop-shadow-2xl items-center">
              <Image className="inset-0 mx-auto pt-1" src={imagemodule2} alt="modules" width={500} height={500} />
              <h1 className="absolute text-center inset-0 font-sans pl-2 pt-2 text-bold text-[40px] text-white  h-full w-full flex items-center justify-center">
                BAB II <br />
                STATISTIKA
              </h1>
              </div>
            </Link>   
          </div> 
          <div className="flex flex-row static justify-center items-center gap-[20px] pt-[10px]  rounded-md p-10 " >
            <Link href={"/ModuleBab3"}>
              <div className="flex felx-col overflow-hidden bg-clip-content relative bg-blend-multiply cursor-pointer text-[#3D3D3D]  rounded-xl border-4 bg-[#00726B] border-[#F7F7F8] w-[500px] h-[200px] drop-shadow-2xl items-center">
              <Image className="inset-0 mx-auto pt-1" src={imagemodule3} alt="modules" width={500} height={500} />
              <h1 className="absolute text-center inset-0 font-sans pl-2 pt-2 text-bold text-[40px] text-white  h-full w-full flex items-center justify-center">
                BAB III <br />
                PENYAJIAN DATA
              </h1>
           </div>
          </Link>
        </div>               
    </div>
        
      <Image className="bottom-0 mx-auto pt-2 w-full" src={eclipse} alt="compiler"  />
    </div>
    </>
  );
};

export default withAuth(submodules);