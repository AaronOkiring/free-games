import React, { useState } from `react`;
import { IoMdGift } from "react-icons/io";
import { FaRegListAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { SiGameloft } from "react-icons/si";




function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed z-50 top-0 left-0 right-0 bg-cyan-800 lg:flex  h-15  flex  flex-wrap  place-content-evenly"   >
      <div className="fixed z-50 top-0 hidden  bg-cyan-800 lg:flex min-w-[250px] items-start flex-wrap h-15 place-content-evenly w-12/12 ">
        <div className="inline-block  text-amber-50" ><SiGameloft className="inline-block text-5xl" />         FREETOGAME</div>
        <div className="inline-block text-amber-50">Special offers  <IoMdGift className="inline-block ml-1 text-3xl" />  </div>
        <div className="inline-block text-amber-50 left-0">Gamelist </div>
      </div>
  <div className="relative">
  <button onClick={()=>toggleMenu()}>
        <GiHamburgerMenu className=" text-white  ml-2 text-2xl" />
      </button>
      {
        isOpen && (
          <div className="grid gap-4 p-4 absolute top-10 bg-blue-800">
        <div className="inline-block  text-amber-50" ><SiGameloft className="inline-block text-5xl" />         FREETOGAME</div>
        <div className="inline-block text-amber-50">Special offers  <IoMdGift className="inline-block ml-1 text-3xl" />  </div>
        <div className="inline-block text-amber-50 left-0">Gamelist </div>
          </div>
        )
      }
  </div>
    </div>
  );
};
export default HamburgerMenu;




