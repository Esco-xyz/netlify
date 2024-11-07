import React from 'react';
import { Shield, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-cyan-500/20 bg-gray-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Shield className="w-8 h-8 text-cyan-400 animate-float" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              NULL.NET
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#products" className="text-gray-300 hover:text-cyan-400 transition-all hover:scale-105">Products</a>
            <a href="#distributors" className="text-gray-300 hover:text-cyan-400 transition-all hover:scale-105">Distributors</a>
            <a href="#support" className="text-gray-300 hover:text-cyan-400 transition-all hover:scale-105">Support</a>
            <button className="relative btn-glow rounded-full p-2">
              <ShoppingCart className="w-6 h-6 text-gray-300 hover:text-cyan-400 transition-colors" />
              <span className="absolute -top-2 -right-2 bg-cyan-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}