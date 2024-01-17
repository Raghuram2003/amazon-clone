import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SideNav from "./SideNav";

const HeaderBottom = () => {
  const [navBar,setNavBar] = useState(false)
  return (
    <div className="w-full h-[36px] px-4 bg-amazon_light text-white flex items-center gap-2 relative">
      <ul className="flex items-center text-sm tracking-wide">
        <li onClick={()=>setNavBar(true)} className="headerHover flex items-center gap-1"><MenuIcon/>All</li>
        <li className="headerHover">Todays Deals</li>
        <li className="headerHover">Customer Service</li>
        <li className="headerHover">Gift Cards</li>
        <li className="header Hover">Registry</li>
        <li className="headerHover">Sell</li>
      </ul>
      {navBar && (
        <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50">
          <div className="relative w-full h-full">
              <div className="w-[350px] h-full bg-white border border-black ">
                  <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                      <AccountCircleIcon/> 
                      <h3 className="font-titleFont font-bold text-lg tracking-wide">Hello, Sign In</h3>
                  </div>
              </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderBottom;
