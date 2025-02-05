// import React from 'react'
import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = true;
  const isAdmin = true;
  return (
    <header className='fixed top-0 left-0 w-full bg-emerald-950 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-emerald-800'>
      <div className='container mx-auto px-4 py-3'>
        <div className='flex flex-wrap justify-between items-center '>
          <Link
            to='/'
            className='text-3xl font-mono font-semibold text-white items-center space-x-2 flex '
          >
            buynow.com
          </Link>

          <nav className='flex flex-wrap items-center gap-4'>
            <Link
              to={"/"}
              className='text-gray-100 hover:text-emerald-400 font-semibold  transition duration-300 ease-in-out'
            >
              Home
            </Link>
            {user && (
              <Link
                to={"/cart"}
                className='relative group hover:text-emerald-400 transition duration-300 ease-in-out'
              >
                <ShoppingCart
                  className='inline-block mr-1 group-hover:text-emerald-400'
                  size={20}
                />
                <span className='hidden sm:inline font-semibold'>Cart</span>
                <span className='absolute -top-2 -right-2 bg-red-800 text-white  rounded-full px-2 py-0.5 text-xs group-hover:bg-red-600 transition duration-300 ease-in-out'>
                  3
                </span>
              </Link>
            )}
            {isAdmin && (
              <Link className='bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1 rounded-md font-small transition duration-300 ease-in-out flex items-center'>
                <Lock className='inline-block mr-1' size={17} />
                <span className='hidden sm:inline'>Dashboard</span>
              </Link>
            )}

            {user ? (
              <button className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out'>
                <LogOut size={18} />
                <span className='hidden sm:inline ml-2'>Log Out</span>
              </button>
            ) : (
              <>
                <Link
                  to={"/signup"}
                  className='bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out'
                >
                  <UserPlus className='mr-2' size={18} />
                  Sign Up
                </Link>
                <Link
                  to={"/login"}
                  className='bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out'
                >
                  <LogIn className='mr-2' size={18} />
                  Login
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
