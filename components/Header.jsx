import React from 'react';
import { Link } from '@sveltejs/kit';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="header-content">
          <img src="/static/images/logo.jpg" alt="Logo" className="logo h-12" />
        </div>
        <nav className="flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
            Accueil
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
            Services
          </Link>
          <Link href="/events" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Événements
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 