import React from 'react';

const Footer = () => {
  return (
    <footer id='contactus' className="bg-gray-800 text-white p-4">
    <div className="w-sm mx-auto text-center text-sm">
      <p> &copy; {new Date().getFullYear()} Ruu Artsy. All rights reserved.</p>
      <p className="text-sm">Phone: +94 74 172 2569</p>
      <p className="text-sm">Email: ruuartsy@gmail.com</p>
    </div>
  </footer>
        
  );
};

export default Footer;
