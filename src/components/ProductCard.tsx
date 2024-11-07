import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface ProductProps {
  name: string;
  price: string;
  description: string;
  image: string;
}

export default function ProductCard({ name, price, description, image }: ProductProps) {
  return (
    <div className="bg-gray-800/50 rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 border border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/20">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover transform hover:scale-110 transition-all duration-500" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">{name}</h3>
        <p className="text-gray-400 mt-2">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl font-bold text-cyan-400">{price}</span>
          <button className="btn-glow bg-cyan-500 hover:bg-cyan-600 p-2 rounded-lg">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}