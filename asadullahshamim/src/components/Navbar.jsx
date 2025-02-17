import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

  const links = (
    <>
      <li><a href="/"> Home </a></li>
      <li><a href="/#about"> About </a></li>
      <li><a href="/#skills"> Skills </a></li>
      <li><a href="/#projects"> Projects </a></li>
      <li><a href="/#contact"> Contact </a></li>
    </>
  )

  return (
    <div>
      <div className="navbar fixed z-10 bg-[#0B093A]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex="0" className="menu menu-sm dropdown-content bg-[#0B093A] rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl w-20">
            <img className="w-full" src="https://i.ibb.co.com/6Rpwjj2t/white-logo.png" alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1"> {links} </ul>
        </div>
        <div className="navbar-end">
          <Link target="_blank" to={"https://drive.google.com/file/d/1tx5oGiqFOalmWjOKx183b3DoCfTXCySV/view?usp=sharing"} className=" bg-white text-[#0B093A] py-2 px-3 rounded-md font-semibold"> View Resume </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;