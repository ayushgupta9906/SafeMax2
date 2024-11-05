import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
            <img src="https://github.com/ayushgupta9906/SafeMax2/blob/main/src/assests/sm.png" alt="Shield" className="h-16 w-16" />

              <span className="text-2xl font-bold text-gray-900">SafeMax Security</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/#services" className="text-gray-700 hover:text-blue-600">Services</Link>
            <Link to="/#about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/#contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            <Link
              to="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
