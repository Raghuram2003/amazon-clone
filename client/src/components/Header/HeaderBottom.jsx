import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SideNav from "./SideNav";
import CloseIcon from '@mui/icons-material/Close';
import {motion} from "framer-motion"
import { useRef } from "react";

const HeaderBottom = () => {
  const [sideBar, setSideBar] = useState(false);
  const ref = useRef()
  useEffect(()=>{
    document.body.addEventListener("click",(ev)=>{
      console.log(ev.target)
      if(ev.target.contains(ref.current)){
        setSideBar(false)
      }
    })
  },[ref,sideBar])
  return (
    <div className="w-full h-[36px] px-4 bg-amazon_light text-white flex items-center gap-2 relative">
      <ul className="flex items-center text-sm tracking-wide">
        <li
          onClick={() => setSideBar(true)}
          className="headerHover flex items-center gap-1"
        >
          <MenuIcon />
          All
        </li>
        <li className="headerHover">Todays Deals</li>
        <li className="headerHover">Customer Service</li>
        <li className="headerHover">Gift Cards</li>
        <li className="headerHover">Registry</li>
        <li className="headerHover">Sell</li>
      </ul>
      {sideBar && (
        <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50">
          <div className="relative w-full h-full">
            <motion.div ref={ref} initial={{x:-500,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:.5}} className="w-[350px] h-full bg-white border border-black ">
              <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                <AccountCircleIcon />
                <h3 className="font-titleFont font-bold text-lg tracking-wide">
                  Hello, Sign In
                </h3>
              </div>
              <SideNav
                title="Digital Content & Devices"
                firstItem="Amazon Music"
                secondItem="Kindle E-readers & Books"
                thirdItem="Amazon Appstore"
              />
              <SideNav
                title="Shop By Department"
                firstItem="Electronics"
                secondItem="Computers"
                thirdItem="Smart Home"
              />
              <SideNav
                title="Programs & Features"
                firstItem="Gift Cards"
                secondItem="Amazon live"
                thirdItem="International Shopping"
              />
              <SideNav
                title="Help & Settings"
                firstItem="Your Account"
                secondItem="Customer Service"
                thirdItem="Contact us"
              />
              <span onClick={()=>setSideBar(false)} className="absolute top-0 left-[360px] bg-gray-200 text-black flex items-center justify-center border hover:bg-red-500 hover:text-white duration-300 p-2"><CloseIcon/>
              </span>
            </motion.div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderBottom;
