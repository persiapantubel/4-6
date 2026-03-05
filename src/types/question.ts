// Tipe data untuk elemen dalam kotak
export interface ShapeElement {
  type: string;
  filled?: boolean;
  rotation?: string;
  dots?: number;
  direction?: string;
  petals?: number;
  position?: string;
  points?: number;
  lines?: number;
  tails?: number;
}

// Tipe data untuk satu kotak (berisi 4 elemen: tl, tr, bl, br)
export interface Box {
  tl: ShapeElement; // Top Left
  tr: ShapeElement; // Top Right
  bl: ShapeElement; // Bottom Left
  br: ShapeElement; // Bottom Right
}

// Tipe data untuk pilihan jawaban
export interface Option {
  label: string;
  tl: ShapeElement;
  tr: ShapeElement;
  bl: ShapeElement;
  br: ShapeElement;
}

// Tipe data untuk satu soal
export interface Question {
  id: number;
  title: string;
  boxes: Box[]; // 4 kotak pola
  options: Option[]; // 5 pilihan A-E
  correctAnswer: string;
  explanation: string[];
  rules: string[]; // Aturan-aturan pola
}

// Tipe data untuk state quiz
export interface QuizState {
  currentQuestion: number;
  answers: Record<number, string>; // questionId -> selectedOption
  showExplanation: boolean;
  isCompleted: boolean;
  score: number;
}
