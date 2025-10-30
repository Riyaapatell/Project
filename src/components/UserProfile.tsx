import React from 'react';
import { UserProfile as UserProfileType } from '../types';

interface UserProfileProps {
  profile: UserProfileType;
  onProfileChange: (profile: UserProfileType) => void;
  onNext: () => void;
}

export const UserProfile: React.FC<UserProfileProps> = ({
  profile,
  onProfileChange,
  onNext
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (profile.name && profile.age && profile.gender && profile.height && profile.weight) {
      onNext();
    }
  };

  const handleChange = (field: keyof UserProfileType, value: string | number | string[]) => {
    onProfileChange({
      ...profile,
      [field]: value
    });
  };

  const handleMedicalHistoryChange = (condition: string, checked: boolean) => {
    const updated = checked 
      ? [...profile.medicalHistory, condition]
      : profile.medicalHistory.filter(c => c !== condition);
    handleChange('medicalHistory', updated);
  };

  const handleChronicConditionsChange = (condition: string, checked: boolean) => {
    const updated = checked 
      ? [...profile.chronicConditions, condition]
      : profile.chronicConditions.filter(c => c !== condition);
    handleChange('chronicConditions', updated);
  };

  const medicalConditions = [
    'Diabetes', 'Hypertension', 'Heart Disease', 'Thyroid Issues', 
    'Digestive Issues', 'Respiratory Problems', 'Joint Problems', 'Mental Health Issues'
  ];

  const chronicConditions = [
    'Arthritis', 'Asthma', 'Migraine', 'IBS', 'PCOS', 'Insomnia', 'Anxiety', 'Depression'
  ];

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 border border-gray-200">
      <h2 className="text-xl font-medium mb-6">Personal & Health Information</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Details */}
        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-lg font-medium mb-4">Personal Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                value={profile.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                required
              />
            </div>

            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                Age *
              </label>
              <input
                type="number"
                id="age"
                value={profile.age || ''}
                onChange={(e) => handleChange('age', parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                min="1"
                max="120"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender *
              </label>
              <div className="space-y-2">
                {['male', 'female', 'other'].map((gender) => (
                  <label key={gender} className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value={gender}
                      checked={profile.gender === gender}
                      onChange={(e) => handleChange('gender', e.target.value)}
                      className="mr-2"
                      required
                    />
                    <span className="capitalize">{gender}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">
                Height (cm) *
              </label>
              <input
                type="number"
                id="height"
                value={profile.height || ''}
                onChange={(e) => handleChange('height', parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                min="100"
                max="250"
                required
              />
            </div>

            <div>
              <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
                Weight (kg) *
              </label>
              <input
                type="number"
                id="weight"
                value={profile.weight || ''}
                onChange={(e) => handleChange('weight', parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                min="20"
                max="200"
                required
              />
            </div>
          </div>
        </div>

        {/* Health Details */}
        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-lg font-medium mb-4">Health Details</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Medical History 
              </label>
              <div className="grid grid-cols-2 gap-2">
                {medicalConditions.map((condition) => (
                  <label key={condition} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={profile.medicalHistory.includes(condition)}
                      onChange={(e) => handleMedicalHistoryChange(condition, e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-sm">{condition}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Chronic Conditions 
              </label>
              <div className="grid grid-cols-2 gap-2">
                {chronicConditions.map((condition) => (
                  <label key={condition} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={profile.chronicConditions.includes(condition)}
                      onChange={(e) => handleChronicConditionsChange(condition, e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-sm">{condition}</span>
                  </label>
                ))}
              </div>
            </div>

            

          
          </div>
        </div>

        {/* Lifestyle Details */}
        <div>
          <h3 className="text-lg font-medium mb-4">Lifestyle Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="sleepHours" className="block text-sm font-medium text-gray-700 mb-1">
                Average Sleep Hours per Night
              </label>
              <input
                type="number"
                id="sleepHours"
                value={profile.sleepHours || ''}
                onChange={(e) => handleChange('sleepHours', parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                min="1"
                max="12"
                step="0.5"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Exercise Frequency
              </label>
              <div className="space-y-1">
                {[
                  { value: 'none', label: 'None' },
                  { value: 'rarely', label: 'Rarely (1-2 times/month)' },
                  { value: 'weekly', label: 'Weekly (1-3 times/week)' },
                  { value: 'daily', label: 'Daily' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center">
                    <input
                      type="radio"
                      name="exerciseFrequency"
                      value={option.value}
                      checked={profile.exerciseFrequency === option.value}
                      onChange={(e) => handleChange('exerciseFrequency', e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Stress Level
              </label>
              <div className="space-y-1">
                {['low', 'moderate', 'high'].map((level) => (
                  <label key={level} className="flex items-center">
                    <input
                      type="radio"
                      name="stressLevel"
                      value={level}
                      checked={profile.stressLevel === level}
                      onChange={(e) => handleChange('stressLevel', e.target.value)}
                      className="mr-2"
                    />
                    <span className="capitalize text-sm">{level}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Diet Type
              </label>
              <div className="space-y-1">
                {[
                  { value: 'vegetarian', label: 'Vegetarian' },
                  { value: 'non-vegetarian', label: 'Non-Vegetarian' },
                  { value: 'vegan', label: 'Vegan' },
                  { value: 'mixed', label: 'Mixed' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center">
                    <input
                      type="radio"
                      name="dietType"
                      value={option.value}
                      checked={profile.dietType === option.value}
                      onChange={(e) => handleChange('dietType', e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-3 px-4 hover:bg-gray-700 transition-colors"
        >
          Start Dosha Assessment
        </button>
      </form>
    </div>
  );
};