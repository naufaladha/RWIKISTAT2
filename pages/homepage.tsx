// pages/homepage.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Navbar from "../components/Navbar";
import profile from "../Assets/me.jpg"
import Module from "../Assets/modules.png";
import Rcompiler from "../Assets/Rcompiler.png";
import Menumodul from "../Assets/menumodul.png";
import Menucompiler from "../Assets/menucompiler.png";
import eclipse from "../Assets/eclipse.png";
import withAuth from '../components/withAuth';

const HomePage = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  // useEffect(() => {
  //   if (!loading && !user) {
  //     router.push('/');
  //   }
  // }, [user, loading, router]);

  // if (loading) {
  //   return <div>Just a Minute..</div>;
  // }

  return (
    <>
      <Head>
        <title>Rwikistat</title>
      </Head>

      <div className="h-screen w-full bg-[#F9F9FB]">
        <Navbar />
        <div className="flex flex-col pt-[50px] items-center h-[70%]">
          <h1 className="flex text-[50px] font-bold text-[#3D3D3D]">Jelajahi Rwikistat</h1>
          <div className="pt-[20px] flex flex-row justify-center items-center  gap-[140px]">
            <div className="text-[#3D3D3D] rounded-xl border-4 bg-white border-[#F7F7F8] w-[400px] h-[500px] drop-shadow-2xl">
              <Image className="mx-auto pt-2" src={Menumodul} alt="modules" width={300} height={600} />
              <h1 className="pt-[30px] text-[40px] font-bold text-center text-[#3D3D3D]">Modules</h1>
              <p className="text-[#919AA4] text-center w-2/3 mx-auto">Pelajari, baca dan pahami berbagai modul R yang tersedia</p>
              <Link href={"/submodules"} scroll={false}>
                <button className="hover:bg-white hover:border-black hover:border-2 hover:text-black mt-8 font-bold flex text-[16px] mx-auto text-white w-[200px] h-[40px] bg-[#00726B] items-center justify-evenly  rounded-md">
                  Jelajahi Modules
                </button>
              </Link>         
            </div>
            <div className="text-[#3D3D3D] rounded-xl border-4 bg-white border-[#F7F7F8] w-[400px] h-[500px] drop-shadow-2xl">
              <Image className="mx-auto pt-2" src={Menucompiler} alt="compiler" width={300} height={500} />
              <h1 className="pt-[18px] text-[40px] font-bold text-center text-[#3D3D3D]">R Compiler</h1>
              <p className="text-[#919AA4] text-center w-2/3 mx-auto">Langsung Coba pakai r melalui compiler yang telah ada</p>
              <Link href={"/compiler"} scroll={false}>
                <button className="hover:bg-white hover:border-black hover:border-2 hover:text-black mt-6 font-bold flex text-[16px] mx-auto text-white w-[200px] h-[40px] bg-[#00726B] items-center justify-evenly rounded-md">
                  Coba R Compiler
                </button>
              </Link>      
            </div>
          </div>
          <Image className="bottom-0 mx-auto pt-2" src={eclipse} alt="compiler" width={2000} />
        </div>
      </div>
    </>
  );
};

export default withAuth(HomePage);
