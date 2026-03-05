import { useState, useCallback } from 'react';
import { questions } from '@/data/questions';
import { BoxPattern } from './BoxPattern';
import { OptionCard } from './OptionCard';
import { ExplanationPanel } from './ExplanationPanel';
import { ProgressBar } from './ProgressBar';
import { ScoreCard } from './ScoreCard';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, BookOpen, Eye, EyeOff } from 'lucide-react';

export function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const question = questions[currentQuestion];
  const selectedAnswer = answers[currentQuestion];
  const hasAnswered = selectedAnswer !== undefined;

  const handleSelectAnswer = useCallback((optionLabel: string) => {
    if (hasAnswered) return;
    
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: optionLabel
    }));
    setShowExplanation(true);
  }, [currentQuestion, hasAnswered]);

  const handleNext = useCallback(() => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setShowExplanation(false);
    } else {
      setIsCompleted(true);
    }
  }, [currentQuestion]);

  const handlePrevious = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setShowExplanation(answers[currentQuestion - 1] !== undefined);
    }
  }, [currentQuestion, answers]);

  const handleQuestionClick = useCallback((questionIndex: number) => {
    setCurrentQuestion(questionIndex);
    setShowExplanation(answers[questionIndex] !== undefined);
  }, [answers]);

  const handleRestart = useCallback(() => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowExplanation(false);
    setIsCompleted(false);
  }, []);

  const calculateScore = useCallback(() => {
    let correct = 0;
    Object.entries(answers).forEach(([questionIndex, answer]) => {
      if (questions[parseInt(questionIndex)].correctAnswer === answer) {
        correct++;
      }
    });
    return correct;
  }, [answers]);

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
        <div className="max-w-4xl mx-auto py-8">
          <ScoreCard
            score={calculateScore()}
            totalQuestions={questions.length}
            correctAnswers={calculateScore()}
            onRestart={handleRestart}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-5xl mx-auto py-6 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
              QuizMaster TPA Figural
            </h1>
          </div>
          <p className="text-slate-600">
            Latihan Soal Tipe Seri/Lanjutan Pola
          </p>
        </div>

        {/* Progress Bar */}
        <ProgressBar
          totalQuestions={questions.length}
          currentQuestion={currentQuestion}
          answers={answers}
          onQuestionClick={handleQuestionClick}
        />

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          {/* Question Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">
                {question.title}
              </h2>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                Soal {currentQuestion + 1} / {questions.length}
              </span>
            </div>
          </div>

          <div className="p-6 space-y-8">
            {/* Pattern Display */}
            <div className="space-y-4">
              <p className="text-center text-slate-700 font-medium">
                Perhatikan pola berikut dan tentukan kotak ke-5:
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
                {question.boxes.map((box, index) => (
                  <BoxPattern
                    key={index}
                    box={box}
                    label={`Kotak ${index + 1}`}
                    size={160}
                  />
                ))}
                {/* Question Mark Box */}
                <BoxPattern
                  box={{ tl: { type: 'unknown' }, tr: { type: 'unknown' }, bl: { type: 'unknown' }, br: { type: 'unknown' } }}
                  label="Kotak 5 (?)"
                  isQuestionMark={true}
                  size={160}
                />
              </div>
            </div>

            {/* Options */}
            <div className="space-y-4">
              <p className="text-center text-slate-700 font-medium">
                Pilih jawaban yang tepat:
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {question.options.map((option) => (
                  <OptionCard
                    key={option.label}
                    option={option}
                    isSelected={selectedAnswer === option.label}
                    isCorrect={question.correctAnswer === option.label}
                    showResult={hasAnswered}
                    onClick={() => handleSelectAnswer(option.label)}
                    disabled={hasAnswered}
                  />
                ))}
              </div>
            </div>

            {/* Toggle Explanation Button */}
            {hasAnswered && (
              <div className="flex justify-center">
                <Button
                  variant="outline"
                  onClick={() => setShowExplanation(!showExplanation)}
                  className="flex items-center gap-2"
                >
                  {showExplanation ? (
                    <>
                      <EyeOff className="w-4 h-4" />
                      Sembunyikan Pembahasan
                    </>
                  ) : (
                    <>
                      <Eye className="w-4 h-4" />
                      Lihat Pembahasan
                    </>
                  )}
                </Button>
              </div>
            )}

            {/* Explanation Panel */}
            {showExplanation && hasAnswered && (
              <ExplanationPanel question={question} />
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Sebelumnya
          </Button>

          <Button
            onClick={handleNext}
            disabled={!hasAnswered}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
          >
            {currentQuestion === questions.length - 1 ? 'Selesai' : 'Selanjutnya'}
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
