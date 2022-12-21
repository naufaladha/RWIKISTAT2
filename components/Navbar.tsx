import logo from "../Assets/logo1.png"
import profile from "../Assets/me.jpg"
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
    return (
     <>
            <div className=" p-1 pr-4 bg-emerald-700 w-full h-15 flex flex-row drop-shadow-2xl justify-between items-center">
        <div className="w-full">
          <Link href={"/"}> <Image className="mx-auto" src={logo} alt="logo" width={110} />
          </Link>
        </div>
        <div className="flex flex-row gap-3 ">
        <span className="flex justify-center items-center w-10 h-10 bg-gray-300 rounded-full ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>

        </span>
        <span className="flex justify-center items-center w-10 h-10 bg-gray-300 rounded-full ">
        <Image className="rounded-full h-10 object-contain" src={profile} alt="logo" width={100} />
        </span>
        </div>
      </div>
     </>
    );
}
export default Navbar