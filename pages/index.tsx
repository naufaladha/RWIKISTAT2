import React from 'react';
import Link from "next/link";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../lib/firebaseClient';
import { useAuth } from '../context/AuthContext';
import logo from "../Assets/logo1.png"
import Image from "next/image";
import Head from "next/head";
import profile from "../Assets/me.jpg"
import Module from "../Assets/modules.png";
import Navbar from "../components/Navbar";
import LogoRwikistat from "../Assets/LogoRwikistat.svg";
import Notebook from "../Assets/Notebook.png"
import Circledown from "../Assets/circledown.png"
import Backdropimage from "../Assets/backdropimage.png"
import Frame from "../Assets/frame.png"
import Intro1 from "../Assets/intro1.png"
import Intro2 from "../Assets/intro2.png"
import Intro3 from "../Assets/intro3.png"
import signin from "../Assets/signin.png"
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Cookies from 'js-cookie';
import { Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';
import MuiAlert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import HomePage from './homepage'

const Home = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { user, loading } = useAuth();

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };
  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };
  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  useEffect(() => {
    if (Cookies.get('unauthorized-access')) {
      setOpen(true);
      Cookies.remove('unauthorized-access');
    }
    const handleRouteChange = (url: string) => {
      if (Cookies.get('unauthorized-access')) {
        setOpen(true);
        Cookies.remove('unauthorized-access');
      }
    }

    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    }
  }, [router]);

  const handleClose = (event: React.SyntheticEvent | Event) => {
    setOpen(false);
  };
  
  
  return (
    <>
      <Head>
        <title>Welcome to RWIKISTAT</title>
      </Head>
    <div className="h-screen">
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
    <Alert onClose={handleClose} severity="warning">
  You must be logged in to access the pages.
      </Alert>
    </Snackbar>
{/* Login Modal */}
<Transition.Root show={isLoginModalOpen} as={Fragment}>
  <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeLoginModal}>
    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </Transition.Child>
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enterTo="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 translate-y-0 sm:scale-100" leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
          <LoginForm />
        </div>
      </Transition.Child>
    </div>
  </Dialog>
</Transition.Root>

{/* Register Modal */}
<Transition.Root show={isRegisterModalOpen} as={Fragment}>
<Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeRegisterModal}>
    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </Transition.Child>
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enterTo="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 translate-y-0 sm:scale-100" leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
          <RegisterForm />
        </div>
      </Transition.Child>
    </div>
  </Dialog>
</Transition.Root>
      <div className="bg-white h-[90px] w-full pl-[70px] pt-2 flex justify-between pr-[70px] items-center">
        <Image className="flex" src={LogoRwikistat} alt="Rcompiler" width={50} height={100} />
        <div className="flex flex-col items-center justify-between pt-2">
        <button onClick={openLoginModal} className="flex bg-[#00726B] w-[250px] h-[40px] text-white items-center justify-evenly rounded-md pr-[30px] font-semibold text-[17px]">
        <Image className="" src={signin} alt="Rcompiler" width={30} />
        Sign In to RWIKISTAT
        </button>
        </div>
      </div>
      <div className="bggradient h-full p-24 pr-0 flex">
        <div className="flex flex-col gap-8 justify-center h-full w-2/3">
          <h1 className="text-[64px] text-white leading-none ">Belajar <span className="font-bold ">Statistika</span> 
             <br></br> Lebih <span className="font-bold ">Mudah</span>
             <br></br>Menggunakan <span className="font-bold ">RWIKISTAT</span>
          </h1>
          <p className="text-[22px] text-white leading-none">Dilengkapi Modul Menarik dan Praktik Langsung
          </p>
          <Link className=" font-bold flex text-[16px] bg-white w-[200px] h-[40px] text-[#00726B] items-center justify-evenly  rounded-md" href={"#section-2"} scroll={false} >
            <Image className="" src={Circledown} alt="Rcompiler" width={30} />
            jelajahi RWIKISTAT
          </Link>
        </div>       
        <div className="flex flex-col w-1/3 justify-center items-end">
          <Image className="" src={Backdropimage} alt="backdropimage" width={500} />
        </div> 
      </div>
      <div id="section-2" className=" bg-white h-screen flex flex-col gap-[700px]  items-center pt-[300px]">
       <div className="flex relative w-full h-full mx-auto justify-center "> 
        <Image className="absolute mx-auto" src={Frame} alt="frame" width={1200} />
        <Image className="absolute left-[250px] top-[-100px]" src={Intro1} alt="frame" width={700} height={600} />
        <div className="absolute left-[900px] top-[110px]">
          <h1 className=" text-[36px] font-bold text-[#3D3D3D]">Apa itu Rwikistat?</h1>
          <p className="w-2/3 pt-10 text-[20px]">RWIKISTAT Merupakan platform pembelajaran statistika yang berbasis Website. RWIKISTAT dilengkapi dengan fitur-fitur yang akan meningkatkan kepahaman pengguna mengenai materi-materi ilmu statistika</p>
        </div>
       </div>
       <div className="flex relative w-full h-full mx-auto justify-center "> 
        <Image className="absolute mx-auto" src={Frame} alt="frame" width={1200} />
        <Image className="absolute left-[250px] " src={Intro3} alt="frame" width={700} height={800} />
        <div className="absolute left-[900px] top-[110px]">
          <h1 className=" text-[36px] font-bold text-[#3D3D3D]">Modules</h1>
          <p className="w-2/3 pt-10 text-[20px]">Aplikasi RWIKISTAT dilengkapi dengan modul-modul pembelajaran ilmu statistika yang lengkap dengan latihan dan contoh soal serta anda dapat melakukan compile secara langsung terkait dengan maetri yang dipelajari pada modul tertentu</p>
        </div>
       </div>
       <div className="flex relative w-full h-full mx-auto justify-center"> 
        <Image className="absolute mx-auto" src={Frame} alt="frame" width={1200} />
        <Image className="absolute right-[170px] top-[-90px]" src={Intro2} alt="frame" width={500} height={500} />
        <div className="absolute left-[300px] top-[110px]">
          <h1 className=" text-[36px] font-bold text-[#3D3D3D]">R Compiler</h1>
          <p className="w-1/2 pt-10 text-[20px]">Selain fitur-fitur pembelajaran, aplikasi RWIKISTAT juga memungkinkan para penggunanya untuk melakukan compile R code menggunakan R compiler, hasil compile akan ditampilkan secara real-time</p>
        </div>
       </div>
      </div>
    </div>
        </>
  );
};

export default Home;
