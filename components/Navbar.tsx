// components/Navbar.tsx

import { auth } from '../lib/firebaseClient';
import { useRouter } from 'next/router';
import logo from "../Assets/logo1.png"
import profile from "../Assets/me.jpg"
import Image from "next/image";
import Link from "next/link";
import LogoRwikistat from "../Assets/LogoRwikistat.svg"
import TextRwikistat from "../Assets/TextRwikistat.png"
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const router = useRouter();
    const { user } = useAuth(); 
    
    console.log("User: ", user);
    console.log("signInMethod: ", user ? user.signInMethod : "User is null");
    
    const handleSignOut = () => {
        auth.signOut()
            .then(() => {
                router.push('/');
            })
            .catch((error) => {
                console.error("Error signing out:", error);
            });
    };

    return (
        <>
      <div className="gap-[30px] bg-white h-[90px] w-full pl-[70px] pt-2 flex justify-center pr-[70px] items-center ">
        <Image className="flex ml-[600px]" src={LogoRwikistat} alt="Rcompiler" width={50} />
        <Image className="flex" src={TextRwikistat} alt="Rcompiler" width={154} height={24} />
        <div className='relative flex flex-grow  ml-[100px] gap-[10px] pr-2 items-center justify-center divide-x bg-[#F9F9FB] h-[70px] w-[600px]'>
          {user && user.doc && user.doc.name && user.signInMethod === 'nimandpassword' ? 
            <div className='text-[16px] flex flex-grow border-r-2 border-[#E0E0E0] ml-[30px]'>
              Hello, {user.doc.name}! Welcome to RWIKISTAT
            </div> 
            : null}
          {user && user.doc && user.doc.email && user.signInMethod === 'google' ? 
            <div className='text-[16px] flex flex-grow border-r-2 border-[#E0E0E0] ml-[30px]'>
              Hello, {user.doc.email}! Welcome to RWIKISTAT
            </div> 
            : null}
          <button className='flex border-2 static p-2 mt-4 mb-4  bg-[#00726B] rounded-[7px] h-[30px] w-[200px] text[12px] items-center text-white justify-center' onClick={handleSignOut}>Sign Out</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
