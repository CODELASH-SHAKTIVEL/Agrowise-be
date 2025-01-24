import { ShoppingCart } from 'lucide-react';
import type { CropListing } from '../../types';
import wheatlogo from '../../assets/fresh-wheat-crop.jpg';
import ricelogo from '../../assets/iso__0005_WhiteRice1_1024x1024@2x.webp';

interface Props {
  filter: {
    cropType: string;
    minPrice: string;
    maxPrice: string;
  };
  onAddToCart: (listing: CropListing) => void;
}

// Sample data - in a real app, this would come from an API
const SAMPLE_LISTINGS: CropListing[] = [
  {
    id: '1',
    cropType: 'wheat',
    description: 'High-quality wheat, freshly harvested',
    quantity: 1000,
    price: 25,
    imageUrl: wheatlogo,  // Direct reference
    farmerName: 'John Doe',
    farmerContact: '+1234567890',
    location: 'Farm County',
    dateAdded: '2024-03-15',
  },
  {
    id: '2',
    cropType: 'rice',
    description: 'Premium basmati rice',
    quantity: 500,
    price: 35,
    imageUrl: ricelogo,  // Direct reference
    farmerName: 'Jane Smith',
    farmerContact: '+1234567891',
    location: 'Rice Valley',
    dateAdded: '2024-03-14',
  },
];

export default function CropList({ filter, onAddToCart }: Props) {
  const filteredListings = SAMPLE_LISTINGS.filter(listing => {
    if (filter.cropType && listing.cropType !== filter.cropType) return false;
    if (filter.minPrice && listing.price < Number(filter.minPrice)) return false;
    if (filter.maxPrice && listing.price > Number(filter.maxPrice)) return false;
    return true;
  });

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {filteredListings.map((listing) => (
        <div key={listing.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="relative w-full h-48">
            {/* Image handling with lazy loading and object-fit */}
            <img
              src={listing.imageUrl}
              alt={`${listing.cropType} image`}  // Use a meaningful alt description
              loading="lazy"  // Lazy loading for better performance
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 capitalize">
              {listing.cropType}
            </h3>
            <p className="mt-2 text-sm text-gray-500">{listing.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <div>
                <p className="text-lg font-bold text-gray-900">${listing.price}/kg</p>
                <p className="text-sm text-gray-500">{listing.quantity}kg available</p>
              </div>
              <button
                onClick={() => onAddToCart(listing)}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </button>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Seller: {listing.farmerName}
              </p>
              <p className="text-sm text-gray-500">
                Location: {listing.location}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
