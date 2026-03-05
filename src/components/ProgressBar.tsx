import { Check } from 'lucide-react';

interface ProgressBarProps {
  totalQuestions: number;
  currentQuestion: number;
  answers: Record<number, string>;
  onQuestionClick?: (questionIndex: number) => void;
}

export function ProgressBar({ 
  totalQuestions, 
  currentQuestion, 
  answers, 
  onQuestionClick 
}: ProgressBarProps) {
  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-slate-200 p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-slate-600">
          Progress: {Object.keys(answers).length} / {totalQuestions} soal
        </span>
        <span className="text-sm font-medium text-slate-600">
          {Math.round((Object.keys(answers).length / totalQuestions) * 100)}%
        </span>
      </div>
      
      {/* Progress bar */}
      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden mb-4">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
          style={{ width: `${(Object.keys(answers).length / totalQuestions) * 100}%` }}
        />
      </div>

      {/* Question indicators */}
      <div className="flex items-center justify-center gap-2">
        {Array.from({ length: totalQuestions }).map((_, index) => {
          const isAnswered = answers[index] !== undefined;
          const isCurrent = index === currentQuestion;
          
          return (
            <button
              key={index}
              onClick={() => onQuestionClick?.(index)}
              className={`
                w-10 h-10 rounded-lg flex items-center justify-center font-semibold text-sm
                transition-all duration-200
                ${isCurrent 
                  ? 'bg-blue-500 text-white ring-2 ring-blue-300 ring-offset-2' 
                  : isAnswered 
                    ? 'bg-green-100 text-green-700 border border-green-300 hover:bg-green-200' 
                    : 'bg-slate-100 text-slate-500 border border-slate-200 hover:bg-slate-200'
                }
              `}
            >
              {isAnswered ? (
                <Check className="w-4 h-4" />
              ) : (
                index + 1
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
