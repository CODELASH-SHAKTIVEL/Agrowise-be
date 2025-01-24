import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-green-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-lg font-semibold">AgroSupport</h3>
            <p className="mt-2 text-green-200">
              Empowering farmers with smart agricultural solutions for a sustainable future.
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-sm font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#home" className="text-green-200 hover:text-white">Home</a>
              </li>
              <li>
                <a href="#detection" className="text-green-200 hover:text-white">Crop Detection</a>
              </li>
              <li>
                <a href="#about" className="text-green-200 hover:text-white">About</a>
              </li>
              <li>
                <a href="#contact" className="text-green-200 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-sm font-semibold">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-green-200 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-green-200 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-green-200 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-green-200 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-green-700 pt-8">
          <p className="text-center text-green-200">
            © {new Date().getFullYear()} AgroSupport. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}