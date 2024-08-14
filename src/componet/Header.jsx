
import { useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import { BsPersonCircle } from "react-icons/bs";
import { IoHelpBuoySharp } from "react-icons/io5";

export default function Header() {

  const[toggle,settoggle] = useState(false);


  const showSideMenu = () => {
    settoggle(true);
    
  }
  const hideSideMenu =() =>{
    settoggle(false);
  }
  const sideMenu = (e) =>{
    e.stopPropagation();
  }

  const links = [
    {
      icons : <IoSearch/>,
      Name : "Search"
    },
    {
      icons : <RiDiscountPercentFill/>,
      Name : "Offers"
    },
    {
      icons : <FaCartShopping/>,
      Name : "Cart"
    },
    {
      icons : <BsPersonCircle/>,
      Name : "Help"
    },
    {
      icons : <IoHelpBuoySharp/>,
      Name : "Sign Up"
    }
  ]



  return (
   <>
   <div onClick={hideSideMenu}  className="black-overlay w-full h-full fixed duration-500" style={{
    // opacity : toggle ? 1 : 0,
    visibility : toggle ? "visible" : "hidden"
   }}>
    <div onClick={sideMenu}  className=" w-[400px] bg-white  h-full absolute duration-[400ms]"  style={{
      left : toggle ? "0%" : "-100%"
    }}></div>


   </div>
   <div>
    <header className='p-[20px] shadow-xl Sticky top-0 bg-white z-[9999]'>
        <div className="max-w-[1500px] mx-auto  flex items-center  ">
        <div className="w-[100px]  ">
            <img src="Swiggy-emblem.png" alt=""></img>
        </div>
        <div>
           <span className=" font-bold border-b-[3px] border-[black]">Nawanshar</span> ,144514,124,India
           <PiCaretDownBold onClick={showSideMenu}  fontSize={18} className="inline   text-[#fc8019] " ></PiCaretDownBold>
        </div>

        <nav className="flex list-none gap-5 ml-auto  ">

          {
            links.map(
              (link, index) =>{
                return<li  key={index} className="flex items-center gap-2"> 
                      { link.icons}
                      { link.Name}
                </li>
              }
            )
          }
       
        </nav>
        </div>

    </header>
   </div>
   
   </>
  )
}
