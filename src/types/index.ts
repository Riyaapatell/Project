export interface UserProfile {
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  height: number; // in cm
  weight: number; // in kg
  medicalHistory: string[];
  currentMedications: string;
  allergies: string;
  chronicConditions: string[];
  sleepHours: number;
  exerciseFrequency: 'none' | 'rarely' | 'weekly' | 'daily';
  stressLevel: 'low' | 'moderate' | 'high';
  dietType: 'vegetarian' | 'non-vegetarian' | 'vegan' | 'mixed';
}

export interface QuestionnaireResponse {
  questionId: string;
  answer: 'vata' | 'pitta' | 'kapha';
}

export interface DoshaScores {
  vata: number;
  pitta: number;
  kapha: number;
}

export interface Question {
  id: string;
  category: string;
  question: string;
  options: {
    vata: string;
    pitta: string;
    kapha: string;
  };
}