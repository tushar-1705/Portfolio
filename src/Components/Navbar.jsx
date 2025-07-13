import React, { useState } from "react";
import pic from "../../public/photo.jpg";
import { TiThMenuOutline } from "react-icons/ti";
import { MdCancel } from "react-icons/md";
import {Link} from 'react-scroll'

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Project" },
    { id: 4, text: "Skills" },
    { id: 5, text: "Resume" },
    { id: 6, text: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 max-w-screen-2xl container mx-auto px-4 md:px-15">
      <div className="max-w-screen-2xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img src={pic} alt="Logo" className="w-12 h-12 rounded-full" />
          <div>
            <h1 className="text-xl font-bold cursor-pointer">
              Tush
              <span className="text-green-500 text-2xl">ar</span>
            </h1>
            <p className="text-sm text-gray-500">Web Developer</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(({ id, text }) => (
            <li
              key={id}
              className="list-none text-gray-700 font-medium hover:text-green-500 hover:scale-105 transition duration-200 cursor-pointer"
            >
              <Link to={text} smooth={true} duration={500} offset={-70} activeClass="active">{text}</Link>
            </li>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <div className="md:hidden cursor-pointer" onClick={() => setMenu(!menu)}>
          {menu ? <MdCancel size={28} /> : <TiThMenuOutline size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <nav className="md:hidden bg-white px-6 pb-4">
          <ul className="flex flex-col items-center space-y-4">
            {navItems.map(({ id, text }) => (
              <li
                key={id}
                className="text-gray-700 font-medium hover:text-green-500 hover:scale-105 transition duration-200 cursor-pointer"
                
              >
                <Link to={text} smooth={true} duration={500} offset={-70} activeClass="active" onClick={() => setMenu(false)}>{text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;


// <div className="max-w-screen-2xl container mx-auto px-4 md:px-15 shadow-md fixed top-0 left-0 right-0 bg-white">