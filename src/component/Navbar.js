import React, {useState} from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  const isLoggedIn = true;
  const username = 'admin';

  return (
      <nav className='flex justify-between items-center p-4 mb-3'>
        <div className='flex space-x-4'>
          <Link className='border-2 border-black rounded p-1' to="/crisis">Crisis</Link>
          <Link className='border-2 border-black rounded p-1' to="/donation">Donation</Link>
          <Link className='border-2 border-black rounded p-1' to="/volunteer">Volunteer</Link>
          {isLoggedIn && username === 'admin' &&
              (<Link className='border-2 border-black rounded p-1' to="/admin">Admin</Link>)}
        </div>

        {isLoggedIn ? UserDashboard("hello") : <LoginSignup />}
      </nav>
  );
}

function LoginSignup() {
  return (
      <div className="flex space-x-4">
        <Link className='border rounded p-1 bg-black text-white' to="/login">Login</Link>
        <Link className='border rounded p-1 bg-black text-white' to="/signup">Signup</Link>
      </div>
  )
}

function UserDashboard(name) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  }
  return (
      <div className='relative inline-block'>
      <button className='border-2 border-black rounded p-1'
          onClick={toggleDropdown}>
        {name}
      </button>
  {isDropdownOpen && (
      <div className=" absolute -left-28 right-0 mt-2 space-y-2
          bg-white border rounded-md shadow-lg" onClick={toggleDropdown}>
        <div>
        <Link to="/profile" className="px-4 py-2 text-sm text-gray-700
            hover:bg-gray-100 hover:text-red-700" onClick={toggleDropdown}>
          Profile
        </Link>
        </div>

        <div>
        <Link to="/logout" className="px-4 py-2 text-sm text-gray-700
            hover:bg-gray-100 hover:text-red-700" onClick={toggleDropdown}>
          Logout
        </Link>
        </div>
      </div>
  )}
      </div>
  )
}

export {Navbar};
