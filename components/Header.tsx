import React from 'react';
import { ChevronDownIcon, EloRocketLogo } from './Icons';

const Header: React.FC = () => {
  const navItems = ['Serviços', 'Astronautas', 'Avaliações', 'Empregos'];

  return (
    <header className="sticky top-0 bg-black bg-opacity-80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 border-b border-gray-800">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <EloRocketLogo />
              <span className="text-xl font-bold text-white tracking-wider">ELO ROCKET</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              {navItems.map((item, index) => (
                <a key={item} href="#" className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                  {item}
                  {index === 0 && <ChevronDownIcon className="w-4 h-4 ml-1" />}
                  {item === 'Empregos' && <span className="ml-2 bg-cyan-400 text-black text-xs font-bold px-2 py-0.5 rounded-full">NEW</span>}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center">
             <button className="w-10 h-10 rounded-full overflow-hidden hover:opacity-90 transition-opacity">
                <img src="https://i.imgur.com/8bZJgQ9.png" alt="User Avatar" className="w-full h-full object-cover" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;