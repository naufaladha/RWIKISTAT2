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



        </div>
      </div>
     </>
    );
}
export default Navbar