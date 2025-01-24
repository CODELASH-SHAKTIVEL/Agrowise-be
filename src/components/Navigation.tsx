import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">AgroSupport</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700">Home</a>
              <a href="#detection" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700">Crop Detection</a>
              <a href="#marketplace" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700">Marketplace</a>
              <a href="#schemes" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700">Schemes</a>
              <a href="#about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700">About</a>
              <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-green-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700">Home</a>
            <a href="#detection" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700">Crop Detection</a>
            <a href="#marketplace" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700">Marketplace</a>
            <a href="#schemes" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700">Schemes</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700">About</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}