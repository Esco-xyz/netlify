import React, { useState, useEffect } from 'react';
import { Cpu, Zap, Shield } from 'lucide-react';
import LoadingSpinner from './components/LoadingSpinner';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const products = [
    {
      name: "Null Controller X1",
      price: "$299.99",
      description: "High-performance DMA controller with RGB support and quantum acceleration",
      image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Quantum Bridge Pro",
      price: "$449.99",
      description: "Next-gen DMA processing unit with advanced memory management",
      image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Null Accelerator Elite",
      price: "$199.99",
      description: "Enterprise-grade DMA acceleration with real-time optimization",
      image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const distributors = [
    {
      name: "TechForge Solutions",
      location: "Silicon Valley, CA",
      type: "Premium Partner"
    },
    {
      name: "Quantum Computing Inc",
      location: "Austin, TX",
      type: "Authorized Dealer"
    },
    {
      name: "Digital Nexus Ltd",
      location: "New York, NY",
      type: "Premium Partner"
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 damascus-bg flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 damascus-bg">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-float">
            NULL.NET
          </h1>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            Experience unprecedented performance with our cutting-edge DMA controllers and accelerators.
          </p>
        </div>
      </div>

      {/* Products Section */}
      <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Featured Products
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>

      {/* Distributors Section */}
      <section id="distributors" className="bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Authorized Distributors
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {distributors.map((distributor, index) => (
              <div key={index} className="bg-gray-900/50 p-6 rounded-lg border border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">{distributor.name}</h3>
                <p className="text-gray-400">{distributor.location}</p>
                <span className="inline-block mt-3 text-sm px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full">
                  {distributor.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 text-gray-400">
            <div>
              <h3 className="text-lg font-bold text-cyan-400 mb-4">About Us</h3>
              <p>Leading provider of high-performance DMA hardware solutions for enterprise and gaming applications.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-cyan-400 mb-4">Contact</h3>
              <p>support@null.net</p>
              <p>1-800-NULL-NET</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-cyan-400 mb-4">Legal</h3>
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            © 2024 Null.net. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;