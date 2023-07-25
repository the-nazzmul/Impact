import { Link, NavLink } from "react-router-dom";
import logo from "./../../../assets/logo.svg";

const NavBar = () => {
    const navElements = (
      <>
        <NavLink className='nav-link'>About Us</NavLink>
        <NavLink className='nav-link'>Blog</NavLink>
        <NavLink className='nav-link'>Gallery</NavLink>
        <NavLink className='nav-link'>FAQ</NavLink>
        <NavLink className='nav-link'>Contact</NavLink>
        <NavLink className='nav-link'>Registration</NavLink>
        <NavLink>
          <button className="btn bg-[#F34509] border-0 rounded-[50px] text-white hover:text-black">Call for Paper</button>
        </NavLink>
      </>
    );
  return (
    <nav className="flex justify-between items-center nav-bg h-[100px] relative">
      <div className="bg-black w-full h-full opacity-[.69] absolute z-10"></div>

      {/* content */}
      <div className="absolute z-20 text-white flex justify-between items-center w-full xl:px-20 2xl:px-80">
        <div>
          <Link to="/">
            <div className="flex gap-[13px] items-center">
              <img src={logo} alt="logo" />
              <h3 className="uppercase text-[40px]">Impact</h3>
            </div>
          </Link>
        </div>
        <div>
            <ul className="flex items-center gap-[28px]">
                {navElements}
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
