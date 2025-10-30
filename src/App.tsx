import React, { useState } from 'react';
import { UserProfile } from './components/UserProfile';
import { Questionnaire } from './components/Questionnaire';
import { Results } from './components/Results';
import { questions } from './data/questions';
import { UserProfile as UserProfileType, QuestionnaireResponse, DoshaScores } from './types';

type Step = 'profile' | 'questionnaire' | 'results';

function App() {
  const [currentStep, setCurrentStep] = useState<Step>('profile');
  const [profile, setProfile] = useState<UserProfileType>({
    name: '',
    age: 0,
    gender: 'male',
    height: 0,
    weight: 0,
    medicalHistory: [],
    currentMedications: '',
    allergies: '',
    chronicConditions: [],
    sleepHours: 8,
    exerciseFrequency: 'weekly',
    stressLevel: 'moderate',
    dietType: 'mixed'
  });
  const [responses, setResponses] = useState<QuestionnaireResponse[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleProfileNext = () => {
    setCurrentStep('questionnaire');
  };

  const handleAnswerSelect = (questionId: string, answer: 'vata' | 'pitta' | 'kapha') => {
    setResponses(prev => {
      const existing = prev.find(r => r.questionId === questionId);
      if (existing) {
        return prev.map(r => 
          r.questionId === questionId ? { ...r, answer } : r
        );
      }
      return [...prev, { questionId, answer }];
    });
  };

  const handleNext = () => {
    setCurrentQuestionIndex(prev => Math.min(prev + 1, questions.length - 1));
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex(prev => Math.max(prev - 1, 0));
  };

  const handleComplete = () => {
    setCurrentStep('results');
  };

  const calculateScores = (): DoshaScores => {
    const scores = { vata: 0, pitta: 0, kapha: 0 };
    responses.forEach(response => {
      scores[response.answer]++;
    });
    return scores;
  };

  const handleRestart = () => {
    setCurrentStep('profile');
    setProfile({
      name: '',
      age: 0,
      gender: 'male',
      height: 0,
      weight: 0,
      medicalHistory: [],
      currentMedications: '',
      allergies: '',
      chronicConditions: [],
      sleepHours: 8,
      exerciseFrequency: 'weekly',
      stressLevel: 'moderate',
      dietType: 'mixed'
    });
    setResponses([]);
    setCurrentQuestionIndex(0);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-medium text-gray-900 mb-2">
            Ayurveda Dosha Assessment
          </h1>
          <p className="text-gray-600">
            Discover your unique constitutional type through traditional Ayurvedic analysis
          </p>
        </header>

        {currentStep === 'profile' && (
          <UserProfile
            profile={profile}
            onProfileChange={setProfile}
            onNext={handleProfileNext}
          />
        )}

        {currentStep === 'questionnaire' && (
          <Questionnaire
            questions={questions}
            responses={responses}
            currentQuestionIndex={currentQuestionIndex}
            onAnswerSelect={handleAnswerSelect}
            onNext={handleNext}
            onPrevious={handlePrevious}
            onComplete={handleComplete}
          />
        )}

        {currentStep === 'results' && (
          <Results
            profile={profile}
            scores={calculateScores()}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
}

export default App;