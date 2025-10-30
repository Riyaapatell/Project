import { Question } from '../types';

export const questions: Question[] = [
  {
    id: '1',
    category: 'Physical Build',
    question: 'What best describes your body frame?',
    options: {
      vata: 'Thin, light frame with prominent joints',
      pitta: 'Medium build with good muscle tone',
      kapha: 'Large, heavy frame with broad shoulders'
    }
  },
  {
    id: '2',
    category: 'Weight',
    question: 'How would you describe your weight?',
    options: {
      vata: 'Below average, hard to gain weight',
      pitta: 'Moderate, easy to gain or lose weight',
      kapha: 'Above average, easy to gain weight'
    }
  },
  {
    id: '3',
    category: 'Skin',
    question: 'What best describes your skin?',
    options: {
      vata: 'Dry, rough, cool to touch',
      pitta: 'Warm, oily, prone to acne or rashes',
      kapha: 'Smooth, moist, cool and pale'
    }
  },
  {
    id: '4',
    category: 'Hair',
    question: 'What best describes your hair?',
    options: {
      vata: 'Dry, brittle, thin',
      pitta: 'Fine, oily, early graying or balding',
      kapha: 'Thick, lustrous, strong'
    }
  },
  {
    id: '5',
    category: 'Eyes',
    question: 'What best describes your eyes?',
    options: {
      vata: 'Small, dry, nervous movement',
      pitta: 'Medium, sharp, penetrating gaze',
      kapha: 'Large, calm, attractive'
    }
  },
  {
    id: '6',
    category: 'Appetite',
    question: 'How would you describe your appetite?',
    options: {
      vata: 'Variable, sometimes forget to eat',
      pitta: 'Strong, get irritable when hungry',
      kapha: 'Steady, can skip meals easily'
    }
  },
  {
    id: '7',
    category: 'Digestion',
    question: 'How is your digestion?',
    options: {
      vata: 'Irregular, gas, bloating',
      pitta: 'Strong, acid indigestion, heartburn',
      kapha: 'Slow, heavy feeling after eating'
    }
  },
  {
    id: '8',
    category: 'Sleep',
    question: 'How is your sleep pattern?',
    options: {
      vata: 'Light, restless, wake up easily',
      pitta: 'Moderate, wake up refreshed',
      kapha: 'Deep, long, hard to wake up'
    }
  },
  {
    id: '9',
    category: 'Activity Level',
    question: 'What best describes your activity level?',
    options: {
      vata: 'Very active but tire easily',
      pitta: 'Moderate activity with good endurance',
      kapha: 'Less active, prefer leisurely pace'
    }
  },
  {
    id: '10',
    category: 'Mental Activity',
    question: 'How would you describe your mental activity?',
    options: {
      vata: 'Quick mind, many ideas, forgetful',
      pitta: 'Sharp, focused, good concentration',
      kapha: 'Calm, steady, good long-term memory'
    }
  }
];