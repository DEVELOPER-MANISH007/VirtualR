import React from "react";
import logo from "../assets/logo.png";
import {navItems} from "../constants/index"
import {Menu,X} from "lucide-react"

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = React.useState(false);

    const toogleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

  return (
    <nav className="fixed top-0 left-0 right-0 py-3 z-50 bg-black/10 backdrop-blur-md border-b border-neutral-700/30 transition-all duration-300" style={{ maxHeight: 'calc(100vh - 100px)' }}>
      <div className="container px-4 mx-auto relative text-sm ">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2  " src={logo} alt="" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
          {navItems.map((item) => (
             <li key={item.label}>
              <a href={item.href}>{item.label}</a>
             </li> 
          ))}
          </ul>
          <div className="hidden lg:flex justify-center  items-center space-x-12 ">
              <a href="#" className="py-2 px-3 border rounded-md">
                  Sign-In
              </a>
              <a href="#" className="py-2 px-3 border rounded-md bg-gradient-to-r from-orange-500 to-orange-800 ">
                 Create an Account
              </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toogleNavbar}>
                  {mobileDrawerOpen ? <X/> : <Menu/>}
              </button>
          </div>
        </div>
        {mobileDrawerOpen && (
            <div className="fixed right-0  z-20 bg-neutral-900 w-full p-10 flex  flex-col justify-center items-center lg:hidden">
                <ul >
                  {navItems.map((item,index) => (
                     <li key={index} className="py-4">
                      <a href={item.href}>{item.label}</a>
                     </li> 
                  ))}
                </ul>
                <div className="flex space-x-6 ">
                  <a href=""className="py-2 broder rounded-md">Sign-In</a>
                  <a href="" className="py-2 px-3 border rounded-md bg-gradient-to-r from-orange-500 to-orange-800 ">Create an Account</a>
                </div>
            </div>  
        )}
      </div>
    </nav>
  );
};

export default Navbar;
