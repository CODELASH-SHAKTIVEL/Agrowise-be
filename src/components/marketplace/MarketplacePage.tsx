import React, { useState } from 'react';
import { ShoppingCart, Filter, Plus } from 'lucide-react';
import CropListingForm from './CropListingForm';
import CropList from './CropList';
import Cart from './Cart';
import type { CropListing, CartItem } from '../../types';

export default function MarketplacePage() {
  const [showListingForm, setShowListingForm] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [filter, setFilter] = useState({
    cropType: '',
    minPrice: '',
    maxPrice: '',
  });

  const addToCart = (listing: CropListing) => {
    const existingItem = cartItems.find(item => item.id === listing.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === listing.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...listing, quantity: 1 }]);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12" id="marketplace">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Crop Marketplace</h1>
          <div className="flex space-x-4">
            <button
              onClick={() => setShowListingForm(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
            >
              <Plus className="h-5 w-5 mr-2" />
              List Your Crop
            </button>
            <button
              onClick={() => setShowCart(true)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Cart ({cartItems.length})
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center space-x-4">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={filter.cropType}
              onChange={(e) => setFilter({ ...filter, cropType: e.target.value })}
              className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-green-500 focus:border-green-500"
            >
              <option value="">All Crops</option>
              <option value="wheat">Wheat</option>
              <option value="rice">Rice</option>
              <option value="maize">Maize</option>
              <option value="potato">Potato</option>
              <option value="soybean">Soybean</option>
            </select>
            <input
              type="number"
              placeholder="Min Price"
              value={filter.minPrice}
              onChange={(e) => setFilter({ ...filter, minPrice: e.target.value })}
              className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
            <input
              type="number"
              placeholder="Max Price"
              value={filter.maxPrice}
              onChange={(e) => setFilter({ ...filter, maxPrice: e.target.value })}
              className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>
        </div>

        <CropList filter={filter} onAddToCart={addToCart} />

        {showListingForm && (
          <CropListingForm onClose={() => setShowListingForm(false)} />
        )}

        {showCart && (
          <Cart
            items={cartItems}
            onClose={() => setShowCart(false)}
            onUpdateQuantity={(id, quantity) => {
              setCartItems(cartItems.map(item =>
                item.id === id ? { ...item, quantity } : item
              ));
            }}
            onRemoveItem={(id) => {
              setCartItems(cartItems.filter(item => item.id !== id));
            }}
          />
        )}
      </div>
    </div>
  );
}