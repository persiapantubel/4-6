import type { Question } from '@/types/question';

export const questions: Question[] = [
  {
    id: 1,
    title: "Soal 1 - Pola Jam Pasir & Rotasi",
    boxes: [
      {
        tl: { type: 'kapsul', filled: false },
        tr: { type: 'tetes_air', filled: false, rotation: 'atas' },
        bl: { type: 'bintang_4', filled: true },
        br: { type: 'segi_enam', filled: true, lines: 1 }
      },
      {
        tl: { type: 'segi_enam', filled: false, lines: 2 },
        tr: { type: 'kapsul', filled: true },
        bl: { type: 'tetes_air', filled: false, rotation: 'kiri' },
        br: { type: 'bintang_4', filled: true }
      },
      {
        tl: { type: 'bintang_4', filled: true },
        tr: { type: 'segi_enam', filled: true, lines: 3 },
        bl: { type: 'kapsul', filled: false },
        br: { type: 'tetes_air', filled: false, rotation: 'bawah' }
      },
      {
        tl: { type: 'tetes_air', filled: false, rotation: 'kanan' },
        tr: { type: 'bintang_4', filled: true },
        bl: { type: 'segi_enam', filled: false, lines: 4 },
        br: { type: 'kapsul', filled: true }
      }
    ],
    options: [
      {
        label: 'A',
        tl: { type: 'kapsul', filled: true },
        tr: { type: 'tetes_air', filled: false, rotation: 'bawah' },
        bl: { type: 'bintang_4', filled: false },
        br: { type: 'segi_enam', filled: true, lines: 5 }
      },
      {
        label: 'B',
        tl: { type: 'kapsul', filled: false },
        tr: { type: 'tetes_air', filled: true, rotation: 'atas' },
        bl: { type: 'bintang_4', filled: true },
        br: { type: 'segi_enam', filled: false, lines: 5 }
      },
      {
        label: 'C',
        tl: { type: 'kapsul', filled: false },
        tr: { type: 'tetes_air', filled: false, rotation: 'kanan' },
        bl: { type: 'bintang_4', filled: true },
        br: { type: 'segi_enam', filled: true, lines: 4 }
      },
      {
        label: 'D',
        tl: { type: 'kapsul', filled: false },
        tr: { type: 'tetes_air', filled: false, rotation: 'atas' },
        bl: { type: 'bintang_4', filled: true },
        br: { type: 'segi_enam', filled: true, lines: 5 }
      },
      {
        label: 'E',
        tl: { type: 'kapsul', filled: false },
        tr: { type: 'tetes_air', filled: false, rotation: 'atas' },
        bl: { type: 'bintang_4', filled: false },
        br: { type: 'segi_enam', filled: true, lines: 6 }
      }
    ],
    correctAnswer: 'D',
    rules: [
      "Pergeseran: Pola jam pasir (Kiri Atas → Kanan Atas → Kiri Bawah → Kanan Bawah → Kiri Atas)",
      "Rotasi: Tetes Air berputar 90° berlawanan arah jarum jam (atas→kiri→bawah→kanan→atas)",
      "Warna: Bintang 4 selalu HITAM, Tetes Air selalu PUTIH, Kapsul & Segi Enam bergantian",
      "Garis: Segi Enam bertambah 1 garis setiap kotak"
    ],
    explanation: [
      "Pertama, perhatikan rute pergeseran yang membentuk pola jam pasir. Bangun di Kiri Atas berpindah ke Kanan Atas, lalu menyilang ke Kiri Bawah, ke Kanan Bawah, dan kembali ke Kiri Atas.",
      "Kedua, perhatikan rotasi spesifik pada Tetes Air. Bangun Tetes Air selalu berputar 90 derajat berlawanan arah jarum jam. Pada Kotak 4 menunjuk ke kanan, maka Kotak 5 wajib ke atas.",
      "Ketiga, perhatikan pola warna yang berbasis pada bentuk. Bintang 4 selalu HITAM, Tetes Air selalu PUTIH. Kapsul dan Segi Enam bergantian warna setiap kotak.",
      "Keempat, perhatikan atribut garis dalam Segi Enam. Jumlah garis selalu bertambah satu: 1→2→3→4, maka Kotak 5 = 5 garis."
    ]
  },
  {
    id: 2,
    title: "Soal 2 - Pertukaran Sumbu & Warna Kelompok",
    boxes: [
      {
        tl: { type: 'lensa', filled: true },
        tr: { type: 'layang_layang', filled: true, rotation: 'atas' },
        bl: { type: 'pita', filled: true, tails: 2 },
        br: { type: 'segi_delapan', filled: false }
      },
      {
        tl: { type: 'layang_layang', filled: false, rotation: 'bawah' },
        tr: { type: 'lensa', filled: false },
        bl: { type: 'segi_delapan', filled: true },
        br: { type: 'pita', filled: false, tails: 3 }
      },
      {
        tl: { type: 'segi_delapan', filled: false },
        tr: { type: 'pita', filled: true, tails: 4 },
        bl: { type: 'layang_layang', filled: true, rotation: 'atas' },
        br: { type: 'lensa', filled: true }
      },
      {
        tl: { type: 'pita', filled: false, tails: 5 },
        tr: { type: 'segi_delapan', filled: true },
        bl: { type: 'lensa', filled: false },
        br: { type: 'layang_layang', filled: false, rotation: 'bawah' }
      }
    ],
    options: [
      {
        label: 'A',
        tl: { type: 'lensa', filled: true },
        tr: { type: 'layang_layang', filled: true, rotation: 'atas' },
        bl: { type: 'pita', filled: true, tails: 6 },
        br: { type: 'segi_delapan', filled: false }
      },
      {
        label: 'B',
        tl: { type: 'lensa', filled: false },
        tr: { type: 'layang_layang', filled: false, rotation: 'bawah' },
        bl: { type: 'pita', filled: false, tails: 6 },
        br: { type: 'segi_delapan', filled: true }
      },
      {
        label: 'C',
        tl: { type: 'layang_layang', filled: true, rotation: 'atas' },
        tr: { type: 'lensa', filled: true },
        bl: { type: 'segi_delapan', filled: false },
        br: { type: 'pita', filled: true, tails: 6 }
      },
      {
        label: 'D',
        tl: { type: 'lensa', filled: true },
        tr: { type: 'layang_layang', filled: true, rotation: 'atas' },
        bl: { type: 'pita', filled: true, tails: 5 },
        br: { type: 'segi_delapan', filled: false }
      },
      {
        label: 'E',
        tl: { type: 'pita', filled: true, tails: 6 },
        tr: { type: 'segi_delapan', filled: false },
        bl: { type: 'layang_layang', filled: true, rotation: 'atas' },
        br: { type: 'lensa', filled: true }
      }
    ],
    correctAnswer: 'A',
    rules: [
      "Pertukaran: Bergantian horizontal (Kiri↔Kanan) dan vertikal (Atas↔Bawah)",
      "Warna: Kotak ganjil = Lensa, Layang-layang, Pita HITAM; Segi Delapan PUTIH",
      "Rotasi: Layang-layang berputar 180° setiap kotak (atas↔bawah)",
      "Ekor: Pita bertambah 1 ekor setiap kotak"
    ],
    explanation: [
      "Pertama, perhatikan rute pertukaran posisi yang terjadi secara bergantian sumbu. Kotak 1→2: horizontal, Kotak 2→3: vertikal, Kotak 3→4: horizontal, maka Kotak 4→5: vertikal.",
      "Kedua, perhatikan warna secara berkelompok. Pada kotak ganjil (1, 3, 5): Lensa, Layang-layang, Pita HITAM; Segi Delapan PUTIH. Pada kotak genap: kebalikannya.",
      "Ketiga, perhatikan rotasi Layang-layang. Layang-layang berputar 180 derajat di setiap pergeserannya. Kotak 4 menghadap ke bawah, maka Kotak 5 ke atas.",
      "Keempat, perhatikan jumlah ekor pada Pita. Ekor selalu bertambah satu: 2→3→4→5, maka Kotak 5 = 6 ekor."
    ]
  },
  {
    id: 3,
    title: "Soal 3 - Lompatan Ruang & Warna Lengkung-Lurus",
    boxes: [
      {
        tl: { type: 'jam_pasir', filled: false },
        tr: { type: 'mahkota', filled: false, points: 3 },
        bl: { type: 'perisai', filled: true },
        br: { type: 'daun', filled: true, rotation: 'atas' }
      },
      {
        tl: { type: 'mahkota', filled: true, points: 5 },
        tr: { type: 'perisai', filled: false },
        bl: { type: 'daun', filled: false, rotation: 'kanan' },
        br: { type: 'jam_pasir', filled: true }
      },
      {
        tl: { type: 'perisai', filled: true },
        tr: { type: 'daun', filled: true, rotation: 'bawah' },
        bl: { type: 'jam_pasir', filled: false },
        br: { type: 'mahkota', filled: false, points: 7 }
      },
      {
        tl: { type: 'daun', filled: false, rotation: 'kiri' },
        tr: { type: 'jam_pasir', filled: true },
        bl: { type: 'mahkota', filled: true, points: 9 },
        br: { type: 'perisai', filled: false }
      }
    ],
    options: [
      {
        label: 'A',
        tl: { type: 'jam_pasir', filled: false },
        tr: { type: 'mahkota', filled: false, points: 10 },
        bl: { type: 'perisai', filled: true },
        br: { type: 'daun', filled: true, rotation: 'atas' }
      },
      {
        label: 'B',
        tl: { type: 'jam_pasir', filled: false },
        tr: { type: 'mahkota', filled: false, points: 11 },
        bl: { type: 'perisai', filled: true },
        br: { type: 'daun', filled: true, rotation: 'atas' }
      },
      {
        label: 'C',
        tl: { type: 'jam_pasir', filled: true },
        tr: { type: 'mahkota', filled: true, points: 11 },
        bl: { type: 'perisai', filled: false },
        br: { type: 'daun', filled: false, rotation: 'atas' }
      },
      {
        label: 'D',
        tl: { type: 'jam_pasir', filled: false },
        tr: { type: 'mahkota', filled: false, points: 11 },
        bl: { type: 'perisai', filled: true },
        br: { type: 'daun', filled: true, rotation: 'kiri' }
      },
      {
        label: 'E',
        tl: { type: 'daun', filled: true, rotation: 'atas' },
        tr: { type: 'jam_pasir', filled: false },
        bl: { type: 'mahkota', filled: false, points: 11 },
        br: { type: 'perisai', filled: true }
      }
    ],
    correctAnswer: 'B',
    rules: [
      "Lompatan: Kiri Atas → Kanan Bawah → Kiri Bawah → Kanan Atas → Kiri Atas",
      "Warna Lengkung: Daun & Perisai = HITAM di kotak ganjil (1,3,5), PUTIH di genap",
      "Warna Lurus: Jam Pasir & Mahkota = PUTIH di kotak ganjil, HITAM di genap",
      "Titik Mahkota: Bertambah 2 setiap kotak (3→5→7→9→11)",
      "Rotasi Daun: 90° searah jarum jam (atas→kanan→bawah→kiri→atas)"
    ],
    explanation: [
      "Pertama, perhatikan alur lompatan ruang. Seluruh bangun bergeser dengan pola: Kiri Atas → Kanan Bawah → Kiri Bawah → Kanan Atas → Kiri Atas.",
      "Kedua, perhatikan pola warna berdasarkan jenis garis. Bangun lengkung (Daun, Perisai) HITAM di kotak ganjil. Bangun lurus (Jam Pasir, Mahkota) PUTIH di kotak ganjil.",
      "Ketiga, perhatikan jumlah titik runcing pada Mahkota. Jumlahnya bertambah 2 setiap kotak: 3→5→7→9, maka Kotak 5 = 11 titik.",
      "Keempat, perhatikan rotasi Daun. Daun berputar 90 derajat searah jarum jam. Kotak 4 menunjuk ke kiri, maka Kotak 5 kembali ke atas."
    ]
  }
];
