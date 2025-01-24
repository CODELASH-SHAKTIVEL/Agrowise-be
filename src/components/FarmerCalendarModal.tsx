import React from 'react';
import cropDataJson from '../cropData.json'; // Import the JSON file

// Define the type for cropData
type CropData = {
  [crop: string]: {
    [stage: string]: {
      activities: string[];
      bestMonths: string[];
      weather: string;
      climate: string;
    };
  };
};

// Type assertion for cropData
const cropData = cropDataJson as CropData;

type FarmerCalendarProps = {
  isOpen: boolean;
  onClose: () => void;
  crop: string;
  stage: string;
};

const FarmerCalendarModal: React.FC<FarmerCalendarProps> = ({ isOpen, onClose, crop, stage }) => {
  if (!isOpen) return null;

  // Get the relevant data dynamically based on the crop and stage
  const cropInfo = cropData[crop]?.[stage] || { activities: [], bestMonths: [], weather: "", climate: "" };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">Farmer Calendar</h3>
          <button
            onClick={onClose}
            className="text-red-500 hover:text-red-700 focus:outline-none"
          >
            Close
          </button>
        </div>
        <div className="mt-4">
          <h4 className="text-lg font-semibold">Crop: {crop}</h4>
          <p className="text-gray-600">Growth Stage: {stage}</p>

          {/* Display Best Months */}
          {cropInfo.bestMonths.length > 0 && (
            <div className="mt-2">
              <p className="font-medium">Best Months for {crop} in the {stage} stage:</p>
              <ul className="list-disc pl-5 mt-2 text-gray-700">
                {cropInfo.bestMonths.map((month, index) => (
                  <li key={index}>{month}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Display Weather */}
          {cropInfo.weather && (
            <div className="mt-2">
              <p className="font-medium">Ideal Weather:</p>
              <p className="text-gray-700">{cropInfo.weather}</p>
            </div>
          )}

          {/* Display Climate */}
          {cropInfo.climate && (
            <div className="mt-2">
              <p className="font-medium">Ideal Climate:</p>
              <p className="text-gray-700">{cropInfo.climate}</p>
            </div>
          )}

          {/* Display Suggested Activities */}
          <div className="mt-4">
            <p className="font-medium">Suggested activities for {crop} in the {stage} stage:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              {cropInfo.activities.length > 0 ? (
                cropInfo.activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))
              ) : (
                <li>No activities found for the selected crop and stage.</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerCalendarModal;
