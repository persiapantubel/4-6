import type { Question } from '@/types/question';
import { Lightbulb, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface ExplanationPanelProps {
  question: Question;
}

export function ExplanationPanel({ question }: ExplanationPanelProps) {
  const [expandedRules, setExpandedRules] = useState(true);
  const [expandedExplanation, setExpandedExplanation] = useState(true);

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-200 p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center gap-2 text-amber-800">
        <Lightbulb className="w-5 h-5" />
        <h3 className="font-bold text-lg">Pembahasan</h3>
      </div>

      {/* Aturan-aturan */}
      <div className="bg-white rounded-lg border border-amber-100 overflow-hidden">
        <button
          onClick={() => setExpandedRules(!expandedRules)}
          className="w-full flex items-center justify-between p-3 bg-amber-100/50 hover:bg-amber-100 transition-colors"
        >
          <span className="font-semibold text-amber-900">Aturan-aturan Pola</span>
          {expandedRules ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {expandedRules && (
          <div className="p-3 space-y-2">
            {question.rules.map((rule, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500 text-white text-xs flex items-center justify-center font-bold">
                  {index + 1}
                </span>
                <p className="text-sm text-slate-700">{rule}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Penjelasan detail */}
      <div className="bg-white rounded-lg border border-amber-100 overflow-hidden">
        <button
          onClick={() => setExpandedExplanation(!expandedExplanation)}
          className="w-full flex items-center justify-between p-3 bg-amber-100/50 hover:bg-amber-100 transition-colors"
        >
          <span className="font-semibold text-amber-900">Penjelasan Detail</span>
          {expandedExplanation ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {expandedExplanation && (
          <div className="p-3 space-y-3">
            {question.explanation.map((exp, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center font-bold">
                  {index + 1}
                </span>
                <p className="text-sm text-slate-700 leading-relaxed">{exp}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Kunci Jawaban */}
      <div className="flex items-center justify-center gap-2 p-3 bg-green-100 rounded-lg border border-green-200">
        <span className="text-green-800 font-medium">Kunci Jawaban:</span>
        <span className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
          {question.correctAnswer}
        </span>
      </div>
    </div>
  );
}
