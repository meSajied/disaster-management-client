import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
      <nav className='flex justify-between items-center p-4 mb-3'>
        <div className='flex space-x-4'>
          <Link className='border-2 border-black rounded p-1' to="/crisis">Crisis</Link>
          <Link className='border-2 border-black rounded p-1' to="/donation">Donation</Link>
          <Link className='border-2 border-black rounded p-1' to="/volunteer">Volunteer</Link>
        </div>

        <div className="flex space-x-4">
          <Link className='border rounded p-1 bg-black text-white' to="/login">Login</Link>
          <Link className='border rounded p-1 bg-black text-white' to="/signup">Signup</Link>
        </div>
      </nav>
  );
}

export { Navbar };
