import React from 'react';
import { Question, QuestionnaireResponse } from '../types';

interface QuestionnaireProps {
  questions: Question[];
  responses: QuestionnaireResponse[];
  currentQuestionIndex: number;
  onAnswerSelect: (questionId: string, answer: 'vata' | 'pitta' | 'kapha') => void;
  onNext: () => void;
  onPrevious: () => void;
  onComplete: () => void;
}

export const Questionnaire: React.FC<QuestionnaireProps> = ({
  questions,
  responses,
  currentQuestionIndex,
  onAnswerSelect,
  onNext,
  onPrevious,
  onComplete
}) => {
  const currentQuestion = questions[currentQuestionIndex];
  const currentResponse = responses.find(r => r.questionId === currentQuestion.id);
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const canProceed = currentResponse !== undefined;

  const handleAnswerSelect = (answer: 'vata' | 'pitta' | 'kapha') => {
    onAnswerSelect(currentQuestion.id, answer);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      onComplete();
    } else {
      onNext();
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 border border-gray-200">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-medium">Prakruti Analysis</h2>
          <span className="text-sm text-gray-500">
            {currentQuestionIndex + 1} of {questions.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 h-2">
          <div 
            className="bg-gray-600 h-2 transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="mb-6">
        
        
        <div className="space-y-3">
          {Object.entries(currentQuestion.options).map(([dosha, option]) => (
            <label 
              key={dosha}
              className={`block p-3 border cursor-pointer transition-colors ${
                currentResponse?.answer === dosha
                  ? 'border-gray-600 bg-gray-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <input
                type="radio"
                name={`question-${currentQuestion.id}`}
                value={dosha}
                checked={currentResponse?.answer === dosha}
                onChange={() => handleAnswerSelect(dosha as 'vata' | 'pitta' | 'kapha')}
                className="mr-3"
              />
              <span className="font-medium capitalize mr-2">{dosha}:</span>
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={onPrevious}
          disabled={currentQuestionIndex === 0}
          className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        
        <button
          onClick={handleNext}
          disabled={!canProceed}
          className="px-4 py-2 bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLastQuestion ? 'Complete Analysis' : 'Next'}
        </button>
      </div>
    </div>
  );
};