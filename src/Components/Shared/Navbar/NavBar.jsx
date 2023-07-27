import { Link, NavLink } from "react-router-dom";
import logo from "./../../../assets/logo.svg";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navElements = (
    <>
      <NavLink className="nav-link">About Us</NavLink>
      <NavLink className="nav-link">Blog</NavLink>
      <NavLink className="nav-link">Gallery</NavLink>
      <NavLink className="nav-link">FAQ</NavLink>
      <NavLink className="nav-link">Contact</NavLink>
      <NavLink className="nav-link">Registration</NavLink>
      <NavLink>
        <button className="btn custom-bg border-0 rounded-[50px] text-white hover:text-black hover:scale-110">
          Call for Paper
        </button>
      </NavLink>
    </>
  );
  return (
    <nav className="flex justify-between items-center nav-bg h-[100px] fixed z-50 w-full">
      <div className="bg-black w-full h-full opacity-[.69] absolute z-10"></div>

      {/* content */}
      <div className="absolute z-20 text-white flex justify-between items-center w-full px-4 xl:px-20 2xl:px-80">
        {/* logo */}
        <div>
          <Link to="/">
            <div className="flex gap-[13px] items-center">
              <img src={logo} alt="logo" />
              <h3 className="uppercase font-medium text-[40px]">Impact</h3>
            </div>
          </Link>
        </div>
        {/* Menu Items */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-[28px]">{navElements}</ul>
        </div>
        <div className="lg:hidden">
          <div onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <AiOutlineClose size={48}></AiOutlineClose>
            ) : (
              <AiOutlineMenu size={48}></AiOutlineMenu>
            )}
          </div>
          {/* Dropdown menu */}
          {isOpen ? (
            <>
              <div className="absolute rounded-xl shadow-md w-full dotted-bg overflow-hidden right-0 top-20  text-black p-4 transition ">
                <ul className="flex flex-col items-center gap-4 text-white">
                  {navElements}
                </ul>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
