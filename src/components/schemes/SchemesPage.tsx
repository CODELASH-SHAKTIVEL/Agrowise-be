import { useState } from 'react'; 
import { Search, Info } from 'lucide-react';
import type { GovernmentScheme, CropType } from '../../types';

const SAMPLE_SCHEMES: GovernmentScheme[] = [
  {
    id: '1',
    title: 'Crop Insurance Support Program',
    description: 'Government-backed insurance scheme to protect farmers against crop failures and natural disasters.',
    eligibility: [
      'Small and medium-scale farmers',
      'Land holding less than 5 hectares',
      'Active farming for past 2 years',
    ],
    benefits: [
      'Up to 80% coverage for crop damage',
      'Subsidized premium rates',
      'Quick claim settlement',
    ],
    region: 'National',
    cropTypes: ['wheat', 'rice', 'maize'],
    applicationProcess: 'Apply through local agricultural office with land documents and farmer ID.',
    deadline: '2024-12-31',
    status: 'active',
  },
  {
    id: '2',
    title: 'Modern Farming Equipment Subsidy',
    description: 'Financial assistance for purchasing modern farming equipment and machinery.',
    eligibility: [
      'Registered farmers',
      'Minimum 3 years of farming experience',
      'No previous subsidy availed in last 2 years',
    ],
    benefits: [
      '50% subsidy on equipment cost',
      'Technical training provided',
      'Maintenance support for 1 year',
    ],
    region: 'State-wide',
    cropTypes: ['wheat', 'rice', 'potato', 'soybean'],
    applicationProcess: 'Online application through government portal with required documents.',
    deadline: '2024-06-30',
    status: 'active',
  },
];

export default function SchemesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    region: '',
    cropType: '',
    status: '',
  });
  const [selectedScheme, setSelectedScheme] = useState<GovernmentScheme | null>(null);

  const filteredSchemes = SAMPLE_SCHEMES.filter(scheme => {
    if (searchTerm && !scheme.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    if (filters.region && scheme.region !== filters.region) {
      return false;
    }
    if (filters.cropType && !scheme.cropTypes.includes(filters.cropType as CropType)) {
      return false;
    }
    if (filters.status && scheme.status !== filters.status) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Government Schemes</h1>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-1 md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search schemes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
            </div>
            <div>
              <select
                value={filters.region}
                onChange={(e) => setFilters({ ...filters, region: e.target.value })}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              >
                <option value="">All Regions</option>
                <option value="National">National</option>
                <option value="State-wide">State-wide</option>
              </select>
            </div>
            <div>
              <select
                value={filters.status}
                onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              >
                <option value="">All Status</option>
                <option value="active">Active</option>
                <option value="upcoming">Upcoming</option>
                <option value="closed">Closed</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {filteredSchemes.map((scheme) => (
            <div
              key={scheme.id}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{scheme.title}</h2>
                  <p className="mt-2 text-gray-600">{scheme.description}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    scheme.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : scheme.status === 'upcoming'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {scheme.status.charAt(0).toUpperCase() + scheme.status.slice(1)}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Region: {scheme.region}</p>
                  <p className="text-gray-500">Deadline: {new Date(scheme.deadline).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-gray-500">Eligible Crops: {scheme.cropTypes.join(', ')}</p>
                </div>
              </div>

              <button
                onClick={() => setSelectedScheme(scheme)}
                className="mt-4 inline-flex items-center text-sm text-green-600 hover:text-green-700"
              >
                <Info className="h-4 w-4 mr-1" />
                View Details
              </button>
            </div>
          ))}
        </div>

        {selectedScheme && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{selectedScheme.title}</h2>
                <button
                  onClick={() => setSelectedScheme(null)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  X
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Description</h3>
                  <p className="mt-2 text-gray-600">{selectedScheme.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900">Eligibility Criteria</h3>
                  <ul className="mt-2 list-disc pl-5 text-gray-600">
                    {selectedScheme.eligibility.map((criterion, index) => (
                      <li key={index}>{criterion}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900">Benefits</h3>
                  <ul className="mt-2 list-disc pl-5 text-gray-600">
                    {selectedScheme.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900">How to Apply</h3>
                  <p className="mt-2 text-gray-600">{selectedScheme.applicationProcess}</p>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <button
                    onClick={() => window.open('https://example.com/apply', '_blank')}
                    className="w-full sm:w-auto flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
