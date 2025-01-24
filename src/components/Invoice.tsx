import { ArrowLeft, ShoppingCart, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { CartItem } from '../types';

export default function Invoice() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
  useEffect(() => {
    // Fetch the cart items from localStorage
    const storedCartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(storedCartItems);
  }, []);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
        <div className="flex items-center justify-between mb-8">
          <Link to="/marketplace" className="text-green-600 flex items-center">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Marketplace
          </Link>
          <h2 className="text-2xl font-bold text-gray-900">Invoice</h2>
        </div>

        <div className="space-y-6">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">No items in your cart</p>
          ) : (
            <>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 py-4 border-b">
                    <img
                      src={item.imageUrl}
                      alt={item.cropType}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900 capitalize">{item.cropType}</h3>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}kg</p>
                    </div>
                    <div className="text-lg font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t pt-4">
                <div className="flex justify-between items-center text-lg font-bold text-gray-900">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="mt-6 text-center">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto" />
                  <p className="mt-4 text-xl font-semibold text-gray-900">Payment Success!</p>
                  <p className="mt-2 text-sm text-gray-500">Thank you for your purchase! Your order is being processed.</p>
                </div>
                <Link to="/order-summary">
                  <button className="mt-4 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 flex justify-center items-center">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    View Order Summary
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
