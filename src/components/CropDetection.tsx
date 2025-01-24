import React, { useState } from 'react';
import { Plane as Plant, Leaf, AlertCircle } from 'lucide-react';
import type { CropType, GrowthStage, IssueType } from '../types';
import FarmerCalendarModal from './FarmerCalendarModal';

const CROPS: CropType[] = ['wheat', 'rice', 'maize', 'potato', 'soybean'];
const GROWTH_STAGES: GrowthStage[] = ['sowing', 'vegetative', 'flowering', 'harvesting'];
const ISSUES: IssueType[] = [
  { id: 'wilting', label: 'Wilting', checked: false },
  { id: 'yellowing', label: 'Yellowing', checked: false },
  { id: 'pests', label: 'Pest Damage', checked: false },
  { id: 'spots', label: 'Leaf Spots', checked: false },
];

export default function CropDetection() {
  const [crop, setCrop] = useState<CropType>('wheat');
  const [stage, setStage] = useState<GrowthStage>('sowing');
  const [issues, setIssues] = useState<IssueType[]>(ISSUES);
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false); // State for modal visibility

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowRecommendation(true);
    setIsCalendarOpen(true); // Open the calendar when the recommendation is shown
  };

  const handleReset = () => {
    setCrop('wheat');
    setStage('sowing');
    setIssues(ISSUES);
    setShowRecommendation(false);
    setIsCalendarOpen(false); // Close the calendar on reset
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="detection">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <Plant className="mr-2 text-green-600" />
              Crop Detection
            </h2>
            
            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Select Crop</label>
                <select
                  value={crop}
                  onChange={(e) => setCrop(e.target.value as CropType)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                >
                  {CROPS.map((c) => (
                    <option key={c} value={c}>
                      {c.charAt(0).toUpperCase() + c.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Growth Stage</label>
                <select
                  value={stage}
                  onChange={(e) => setStage(e.target.value as GrowthStage)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                >
                  {GROWTH_STAGES.map((s) => (
                    <option key={s} value={s}>
                      {s.charAt(0).toUpperCase() + s.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Observed Issues</label>
                <div className="mt-2 space-y-2">
                  {issues.map((issue) => (
                    <div key={issue.id} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={issue.checked}
                        onChange={() => {
                          setIssues(issues.map(i =>
                            i.id === issue.id ? { ...i, checked: !i.checked } : i
                          ));
                        }}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <label className="ml-2 text-sm text-gray-700">{issue.label}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  <Leaf className="mr-2" />
                  Analyze Crop
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Reset
                </button>
              </div>
            </form>

            {showRecommendation && (
              <div className="mt-6 bg-green-50 border border-green-200 rounded-md p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800">Recommendations</h3>
                    <div className="mt-2 text-sm text-green-700">
                      <p>Based on your {crop} crop in the {stage} stage:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Ensure proper irrigation scheduling</li>
                        <li>Monitor soil moisture levels</li>
                        <li>Consider applying organic fertilizers</li>
                        {issues.some(i => i.checked) && (
                          <li>Address identified issues promptly to prevent crop damage</li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Farmer's Calendar Modal */}
      <FarmerCalendarModal
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
        crop={crop}
        stage={stage}
      />
    </div>
  );
}
