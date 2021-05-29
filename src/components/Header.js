import React from 'react';
import NavItem from './NavItem';

function Header() {
  return (
    <div className="w-screen border-b border-gray-200 h-16 text-center flex items-center">
      <div className="container flex items-center w-9/12 mx-auto">
        <h1 className="font-mono text-center w-screen"><a href="/">annotateApp</a></h1>
        <NavItem linkTitle="Login" linkLocation="/login" classes="font-mono text-gray-500 hover:text-gray-700 transition-all duration-300 text-sm text-right mr-3"/>
        <NavItem linkTitle="Signup" linkLocation="/signup" classes="font-mono text-green-500 hover:text-green-700 transition-all duration-300 text-sm text-right"/>
      </div>
    </div>
  );
}

export default Header;