import { Trophy, RotateCcw, Target, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ScoreCardProps {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  onRestart: () => void;
}

export function ScoreCard({ totalQuestions, correctAnswers, onRestart }: ScoreCardProps) {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  
  const getMessage = () => {
    if (percentage >= 80) return { text: 'Luar Biasa!', color: 'text-green-600', bg: 'bg-green-100' };
    if (percentage >= 60) return { text: 'Bagus Sekali!', color: 'text-blue-600', bg: 'bg-blue-100' };
    if (percentage >= 40) return { text: 'Terus Berlatih!', color: 'text-amber-600', bg: 'bg-amber-100' };
    return { text: 'Jangan Menyerah!', color: 'text-red-600', bg: 'bg-red-100' };
  };

  const message = getMessage();

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-center">
          <Trophy className="w-16 h-16 text-white mx-auto mb-3" />
          <h2 className="text-2xl font-bold text-white">Hasil Quiz</h2>
          <p className="text-blue-100">Latihan Soal TPA Figural</p>
        </div>

        {/* Score */}
        <div className="p-6 text-center">
          <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full ${message.bg} mb-4`}>
            <div>
              <span className={`text-4xl font-bold ${message.color}`}>{percentage}</span>
              <span className={`text-xl ${message.color}`}>%</span>
            </div>
          </div>

          <div className={`text-xl font-bold mb-4 ${message.color}`}>
            {message.text}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <div className="flex items-center justify-center gap-2 mb-1">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm text-green-700">Benar</span>
              </div>
              <span className="text-2xl font-bold text-green-700">{correctAnswers}</span>
            </div>
            <div className="bg-red-50 rounded-xl p-4 border border-red-200">
              <div className="flex items-center justify-center gap-2 mb-1">
                <XCircle className="w-5 h-5 text-red-600" />
                <span className="text-sm text-red-700">Salah</span>
              </div>
              <span className="text-2xl font-bold text-red-700">{totalQuestions - correctAnswers}</span>
            </div>
          </div>

          {/* Detail */}
          <div className="bg-slate-50 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Target className="w-5 h-5 text-slate-600" />
              <span className="text-sm text-slate-600">Total Soal</span>
            </div>
            <span className="text-xl font-bold text-slate-700">{totalQuestions}</span>
          </div>

          {/* Restart Button */}
          <Button 
            onClick={onRestart}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Coba Lagi
          </Button>
        </div>
      </div>
    </div>
  );
}
