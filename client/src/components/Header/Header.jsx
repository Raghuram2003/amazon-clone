import { logo } from "../../assets";
import { useState } from "react";
import { allItems } from "../../constants";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HeaderBottom from "./HeaderBottom";

const Header = () => {
  const [showAll, setShowAll] = useState(false);
  console.log(showAll);
  return (
    <div className="w-full">
      <div className="bg-amazon_blue text-white px-4 flex items-center gap-4 py-2">
        <div className="headerHover">
          <img src={logo} alt="amazon-logo" className="w-24 mt-2" />
        </div>
        <div className="headerHover gap-1">
          <LocationOnIcon />
          <div className="flex-col">
            <p className="text-sm text-lightText font-light">Deliver to user</p>
            <p className="text-sm">Chennai 600053</p>
          </div>
        </div>
        <div className="h-10 rounded-md flex flex-grow relative items-center">
          <span
            onClick={() => setShowAll(!showAll)}
            className="w-14 h-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 duration-300 border-2 cursor-pointer text-amazon_blue font-titleFont text-sm rounded-l-md"
          >
            All<span></span>
            <ArrowDropDownIcon />
          </span>
          {showAll && (
            <div>
              <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue p-2 flex-col gap-1 z-10 text-black ">
                {/* <li>All Departments</li>
                            <li>All Departments</li>
                            <li>All Departments</li>
                            <li>All Departments</li> */}
                {allItems.map((item) => (
                  <li
                    className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200"
                    key={item._id}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <input
            type="text"
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
          />
          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-r-md">
            <SearchIcon />
          </span>
        </div>
        <div className="flex flex-col items-start justify-center headerHover p-1">
          <p className="text-xs text-lightText font-light">Hello SignIn</p>
          <p className="text-sm font-semibold -mt-1 text-white_text">
            Accounts & Lists
            <span>
              <ArrowDropDownIcon />
            </span>
          </p>
        </div>
        <div className="flex flex-col items-start justify-center headerHover">
          <p className="text-xs text-lightText font-light">Returns</p>
          <p className="text-sm font-semibold -mt-1 text-white_text">
            & Orders
          </p>
        </div>
        <div className="flex items-start justify-center headerHover relative">
          <ShoppingCartIcon />
          <p className="text-xs font-semibold mt-3 text-whiteText">
            Cart{" "}
            <span className="absolute text-xs -top-2 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex items-center justify-center">
              0
            </span>
          </p>
        </div>
      </div>
      <HeaderBottom />
    </div>
  );
};

export default Header;
