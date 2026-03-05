import type { Option } from '@/types/question';
import { ShapeRenderer } from './ShapeRenderer';
import { Check, X } from 'lucide-react';

interface OptionCardProps {
  option: Option;
  isSelected: boolean;
  isCorrect: boolean;
  showResult: boolean;
  onClick: () => void;
  disabled?: boolean;
}

export function OptionCard({ 
  option, 
  isSelected, 
  isCorrect, 
  showResult, 
  onClick,
  disabled = false 
}: OptionCardProps) {
  
  const getBorderColor = () => {
    if (!showResult) {
      return isSelected ? 'border-blue-500 bg-blue-50' : 'border-slate-300 hover:border-blue-300';
    }
    if (isCorrect) {
      return 'border-green-500 bg-green-50';
    }
    if (isSelected && !isCorrect) {
      return 'border-red-500 bg-red-50';
    }
    return 'border-slate-200 opacity-50';
  };

  const getLabelColor = () => {
    if (!showResult) {
      return isSelected ? 'bg-blue-500 text-white' : 'bg-slate-200 text-slate-700';
    }
    if (isCorrect) {
      return 'bg-green-500 text-white';
    }
    if (isSelected && !isCorrect) {
      return 'bg-red-500 text-white';
    }
    return 'bg-slate-200 text-slate-500';
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all duration-200
        ${getBorderColor()}
        ${disabled ? 'cursor-not-allowed' : 'cursor-pointer hover:shadow-md'}
      `}
    >
      {/* Label A/B/C/D/E */}
      <div className={`
        w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm
        transition-colors duration-200
        ${getLabelColor()}
      `}>
        {showResult && isCorrect ? (
          <Check className="w-5 h-5" />
        ) : showResult && isSelected && !isCorrect ? (
          <X className="w-5 h-5" />
        ) : (
          option.label
        )}
      </div>

      {/* Kotak dengan 4 elemen */}
      <div className="grid grid-cols-2 grid-rows-2 gap-2 w-40 h-40">
        <div className="flex items-center justify-center bg-slate-50 rounded-lg">
          <ShapeRenderer element={option.tl} size={72} />
        </div>
        <div className="flex items-center justify-center bg-slate-50 rounded-lg">
          <ShapeRenderer element={option.tr} size={72} />
        </div>
        <div className="flex items-center justify-center bg-slate-50 rounded-lg">
          <ShapeRenderer element={option.bl} size={72} />
        </div>
        <div className="flex items-center justify-center bg-slate-50 rounded-lg">
          <ShapeRenderer element={option.br} size={72} />
        </div>
      </div>
    </button>
  );
}
