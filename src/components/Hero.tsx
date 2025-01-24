import React from 'react';
import { Plane as Plant } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Empowering Farmers with</span>
            <span className="block text-green-600">Smart Agriculture Solutions</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Get instant crop analysis, expert recommendations, and support for your farming needs.
            Join thousands of farmers already benefiting from our platform.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="#detection"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
              >
                <Plant className="mr-2" />
                Start Crop Detection
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}