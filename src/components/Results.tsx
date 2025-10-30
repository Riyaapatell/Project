import React from 'react';
import { UserProfile, DoshaScores } from '../types';

interface ResultsProps {
  profile: UserProfile;
  scores: DoshaScores;
  onRestart: () => void;
}

export const Results: React.FC<ResultsProps> = ({ profile, scores, onRestart }) => {
  const total = scores.vata + scores.pitta + scores.kapha;
  const percentages = {
    vata: Math.round((scores.vata / total) * 100),
    pitta: Math.round((scores.pitta / total) * 100),
    kapha: Math.round((scores.kapha / total) * 100)
  };

  const dominantDosha = Object.entries(percentages).reduce((a, b) => 
    percentages[a[0] as keyof typeof percentages] > percentages[b[0] as keyof typeof percentages] ? a : b
  )[0];

  const doshaDescriptions = {
    vata: {
      title: 'Vata (Air + Space)',
      characteristics: [
        'Creative and energetic',
        'Quick thinking and adaptable',
        'Prone to anxiety when imbalanced',
        'Irregular appetite and digestion'
      ],
      recommendations: [
        'Maintain regular routines',
        'Eat warm, nourishing foods',
        'Practice calming activities like yoga',
        'Get adequate rest and sleep'
      ]
    },
    pitta: {
      title: 'Pitta (Fire + Water)',
      characteristics: [
        'Intelligent and focused',
        'Strong leadership qualities',
        'Good digestion and metabolism',
        'Can become irritable when stressed'
      ],
      recommendations: [
        'Avoid excessive heat and spicy foods',
        'Practice cooling activities',
        'Maintain work-life balance',
        'Stay hydrated and eat regular meals'
      ]
    },
    kapha: {
      title: 'Kapha (Earth + Water)',
      characteristics: [
        'Calm and stable nature',
        'Strong immunity and endurance',
        'Loyal and compassionate',
        'May struggle with weight gain'
      ],
      recommendations: [
        'Engage in regular physical activity',
        'Eat light, warm foods',
        'Avoid oversleeping',
        'Seek variety and stimulation'
      ]
    }
  };

  const dominant = doshaDescriptions[dominantDosha as keyof typeof doshaDescriptions];

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 border border-gray-200">
      <h2 className="text-2xl font-medium mb-6">Your Prakruti Analysis Results</h2>
      
      <div className="mb-6 p-4 bg-gray-50 border border-gray-200">
        <h3 className="font-medium mb-2">Profile Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <p><span className="font-medium">Name:</span> {profile.name}</p>
          <p><span className="font-medium">Age:</span> {profile.age}</p>
          <p><span className="font-medium">Gender:</span> {profile.gender}</p>
          <p><span className="font-medium">Height:</span> {profile.height} cm</p>
          <p><span className="font-medium">Weight:</span> {profile.weight} kg</p>
          { <p><span className="font-medium">BMI:</span> {((profile.weight / ((profile.height/100) ** 2))).toFixed(1)}</p> }
          <p><span className="font-medium">Sleep:</span> {profile.sleepHours} hours/night</p>
          <p><span className="font-medium">Exercise:</span> {profile.exerciseFrequency}</p>
          <p><span className="font-medium">Stress Level:</span> {profile.stressLevel}</p>
          <p><span className="font-medium">Diet Type:</span> {profile.dietType}</p>
        </div>
        {(profile.medicalHistory.length > 0 || profile.chronicConditions.length > 0) && (
          <div className="mt-3 pt-3 border-t border-gray-300">
            {profile.medicalHistory.length > 0 && (
              <p className="text-sm"><span className="font-medium">Medical History:</span> {profile.medicalHistory.join(', ')}</p>
            )}
            {profile.chronicConditions.length > 0 && (
              <p className="text-sm"><span className="font-medium">Chronic Conditions:</span> {profile.chronicConditions.join(', ')}</p>
            )}
          </div>
        )}
      </div>

      { <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Dosha Distribution</h3>
        <div className="space-y-4">
          {Object.entries(percentages).map(([dosha, percentage]) => (
            <div key={dosha} className="flex items-center">
              <div className="w-16 text-sm font-medium capitalize">{dosha}:</div>
              <div className="flex-1 bg-gray-200 h-6 mx-4">
                <div 
                  className={`h-6 transition-all duration-500 ${
                    dosha === 'vata' ? 'bg-blue-500' :
                    dosha === 'pitta' ? 'bg-red-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <div className="w-12 text-sm font-medium">{percentage}%</div>
            </div>
          ))}
        </div>
      </div> }

      <div className="mb-8 p-6 border border-gray-300">
        <h3 className="text-xl font-medium mb-4">
          Dominant Dosha: {dominant.title}
        </h3>
        
       
      </div>

      <div className="text-center">
        <button
          onClick={onRestart}
          className="px-6 py-2 bg-gray-800 text-white hover:bg-gray-700 transition-colors"
        >
          Take Assessment Again
        </button>
      </div>
    </div>
  );
};