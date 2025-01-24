import { X, Trash2, ArrowRight } from 'lucide-react';
import type { CartItem } from '../../types';
import { Link } from 'react-router-dom';

interface Props {
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

export default function Cart({ items, onClose, onUpdateQuantity, onRemoveItem }: Props) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    // In a real app, this would navigate to a checkout page
    localStorage.setItem('cart', JSON.stringify(items));
    window.location.href = '/invoice';
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>
          <button onClick={onClose}>
            <X className="h-6 w-6 text-gray-400 hover:text-gray-500" />
          </button>
        </div>

        {items.length === 0 ? (
          <p className="text-center text-gray-500 py-8">Your cart is empty</p>
        ) : (
          <>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 py-4 border-b">
                  <img
                    src={item.imageUrl}
                    alt={item.cropType}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 capitalize">
                      {item.cropType}
                    </h3>
                    <p className="text-sm text-gray-500">${item.price}/kg</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => onUpdateQuantity(item.id, Number(e.target.value))}
                      className="w-16 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    />
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t pt-4">
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button
                onClick={handleCheckout}
                className="mt-4 w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
              >
               <Link to='/invoice'>Proceed to Checkout</Link>
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}