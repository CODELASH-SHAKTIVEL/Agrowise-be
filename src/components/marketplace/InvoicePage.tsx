import React, { useEffect, useState } from 'react';
import { Download, ArrowLeft } from 'lucide-react';
import type { CartItem } from '../../types';

export default function InvoicePage() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [invoiceNumber] = useState(`INV-${Date.now()}`);

  useEffect(() => {
    const cartItems = localStorage.getItem('cart');
    if (cartItems) {
      setItems(JSON.parse(cartItems));
    }
  }, []);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Marketplace
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Invoice</h1>
              <p className="text-gray-500">{invoiceNumber}</p>
              <p className="text-gray-500">{new Date().toLocaleDateString()}</p>
            </div>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <Download className="h-5 w-5 mr-2" />
              Download PDF
            </button>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <h2 className="text-lg font-medium text-gray-900">Items</h2>
            <table className="mt-4 w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500">
                  <th className="pb-4">Item</th>
                  <th className="pb-4">Quantity</th>
                  <th className="pb-4">Price</th>
                  <th className="pb-4 text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td className="py-4">
                      <div className="flex items-center">
                        <img
                          src={item.imageUrl}
                          alt={item.cropType}
                          className="w-12 h-12 object-cover rounded mr-4"
                        />
                        <div>
                          <p className="font-medium text-gray-900 capitalize">{item.cropType}</p>
                          <p className="text-sm text-gray-500">From: {item.farmerName}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">{item.quantity}kg</td>
                    <td className="py-4">${item.price}/kg</td>
                    <td className="py-4 text-right">${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={3} className="pt-6 text-right font-medium">Total:</td>
                  <td className="pt-6 text-right font-bold text-lg">${total.toFixed(2)}</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8 grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">Seller Information</h2>
              {items.map((item) => (
                <div key={item.id} className="text-sm text-gray-500">
                  <p className="font-medium">{item.farmerName}</p>
                  <p>{item.location}</p>
                  <p>Contact: {item.farmerContact}</p>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">Payment Information</h2>
              <p className="text-sm text-gray-500">
                Please complete the payment within 7 days.
                Contact the seller directly to arrange payment and delivery.
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <button
              onClick={() => window.location.href = '/marketplace'}
              className="w-full sm:w-auto flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}