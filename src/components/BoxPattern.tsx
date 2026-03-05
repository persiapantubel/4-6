import type { Box } from '@/types/question';
import { ShapeRenderer } from './ShapeRenderer';

interface BoxPatternProps {
  box: Box;
  label?: string;
  isQuestionMark?: boolean;
  size?: number;
}

export function BoxPattern({ box, label, isQuestionMark = false, size = 160 }: BoxPatternProps) {
  const elementSize = Math.floor(size * 0.42);
  
  return (
    <div className="flex flex-col items-center gap-2">
      {label && (
        <span className="text-sm font-semibold text-slate-600">
          {label}
        </span>
      )}
      <div 
        className={`
          relative border-2 rounded-lg p-2 bg-white shadow-sm
          ${isQuestionMark ? 'border-amber-400 bg-amber-50' : 'border-slate-300'}
        `}
        style={{ width: size, height: size }}
      >
        {isQuestionMark ? (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl font-bold text-amber-500">?</span>
          </div>
        ) : (
          <div className="grid grid-cols-2 grid-rows-2 gap-1 w-full h-full">
            {/* Top Left */}
            <div className="flex items-center justify-center">
              <ShapeRenderer element={box.tl} size={elementSize} />
            </div>
            {/* Top Right */}
            <div className="flex items-center justify-center">
              <ShapeRenderer element={box.tr} size={elementSize} />
            </div>
            {/* Bottom Left */}
            <div className="flex items-center justify-center">
              <ShapeRenderer element={box.bl} size={elementSize} />
            </div>
            {/* Bottom Right */}
            <div className="flex items-center justify-center">
              <ShapeRenderer element={box.br} size={elementSize} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
