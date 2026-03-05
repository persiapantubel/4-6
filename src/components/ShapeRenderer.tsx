import type { ShapeElement } from '@/types/question';

interface ShapeRendererProps {
  element: ShapeElement;
  size?: number;
}

export function ShapeRenderer({ element, size = 120 }: ShapeRendererProps) {
  const { type, filled, rotation, dots, direction, petals, position, points, lines, tails } = element;
  
  const fillColor = filled ? '#1a1a1a' : 'white';
  const strokeColor = '#333';
  const strokeWidth = 2;
  
  // Helper untuk rotasi
  const getRotation = () => {
    if (rotation === 'horizontal' || rotation === '0') return 0;
    if (rotation === 'vertical' || rotation === '90') return 90;
    if (rotation === '45') return 45;
    if (rotation === '135') return 135;
    if (rotation === '180') return 180;
    return 0;
  };

  const renderShape = () => {
    const center = size / 2;
    // Scale factor berdasarkan ukuran (120px adalah ukuran default)
    const s = size / 120;
    
    switch (type) {
      // ===== BENTUK DARI SOAL LAMA =====
      case 'trapesium':
        return (
          <polygon
            points={`${center - 25*s},${center + 15*s} ${center + 25*s},${center + 15*s} ${center + 15*s},${center - 15*s} ${center - 15*s},${center - 15*s}`}
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />
        );
        
      case 'elips':
        return (
          <ellipse
            cx={center}
            cy={center}
            rx={25*s}
            ry={18*s}
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />
        );
        
      case 'jajargenjang':
        const jgRotation = rotation === 'vertical' ? 90 : 0;
        return (
          <g transform={`rotate(${jgRotation}, ${center}, ${center})`}>
            <polygon
              points={`${center - 25*s},${center + 15*s} ${center + 15*s},${center + 15*s} ${center + 25*s},${center - 15*s} ${center - 15*s},${center - 15*s}`}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
          </g>
        );
        
      case 'tambah':
        return (
          <g>
            <rect
              x={center - 25*s}
              y={center - 6*s}
              width={50*s}
              height={12*s}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <rect
              x={center - 6*s}
              y={center - 25*s}
              width={12*s}
              height={50*s}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            {dots && dots > 0 && (
              <g>
                {Array.from({ length: Math.min(dots, 6) }).map((_, i) => (
                  <circle
                    key={i}
                    cx={center - 20*s + (i % 3) * 20*s}
                    cy={center + (i < 3 ? -20*s : 20*s)}
                    r={3*s}
                    fill={filled ? 'white' : '#1a1a1a'}
                  />
                ))}
              </g>
            )}
          </g>
        );
        
      case 'hati':
        return (
          <path
            d={`M ${center} ${center + 20*s}
                C ${center} ${center + 15*s}, ${center - 25*s} ${center - 5*s}, ${center - 25*s} ${center - 15*s}
                C ${center - 25*s} ${center - 25*s}, ${center - 15*s} ${center - 25*s}, ${center} ${center - 10*s}
                C ${center + 15*s} ${center - 25*s}, ${center + 25*s} ${center - 25*s}, ${center + 25*s} ${center - 15*s}
                C ${center + 25*s} ${center - 5*s}, ${center} ${center + 15*s}, ${center} ${center + 20*s} Z`}
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />
        );
        
      case 'panah':
        const panahRot = getRotation();
        return (
          <g transform={`rotate(${panahRot}, ${center}, ${center})`}>
            <rect
              x={center - 5*s}
              y={center - 20*s}
              width={10*s}
              height={35*s}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <polygon
              points={`${center},${center + 25*s} ${center - 15*s},${center + 5*s} ${center + 15*s},${center + 5*s}`}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
          </g>
        );
        
      case 'bulan':
        const isLeft = direction === 'left';
        return (
          <g>
            <path
              d={`M ${center} ${center - 25*s}
                  A ${25*s} ${25*s} 0 1 1 ${center} ${center + 25*s}
                  A ${isLeft ? 15*s : 35*s} ${25*s} 0 1 0 ${center} ${center - 25*s}`}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
          </g>
        );
        
      case 'bunga':
        const petalCount = petals || 6;
        const angleStep = 360 / petalCount;
        return (
          <g>
            {Array.from({ length: petalCount }).map((_, i) => (
              <ellipse
                key={i}
                cx={center}
                cy={center - 18*s}
                rx={8*s}
                ry={15*s}
                fill={fillColor}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                transform={`rotate(${i * angleStep}, ${center}, ${center})`}
              />
            ))}
            <circle
              cx={center}
              cy={center}
              r={10*s}
              fill="#FFD700"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
          </g>
        );
        
      case 'silinder':
        const isHorizontal = position === 'horizontal';
        return (
          <g transform={isHorizontal ? `rotate(90, ${center}, ${center})` : ''}>
            <rect
              x={center - 20*s}
              y={center - 15*s}
              width={40*s}
              height={30*s}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <ellipse
              cx={center}
              cy={center - 15*s}
              rx={20*s}
              ry={8*s}
              fill={filled ? '#333' : 'white'}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <ellipse
              cx={center}
              cy={center + 15*s}
              rx={20*s}
              ry={8*s}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
          </g>
        );
        
      case 'kerucut':
        return (
          <g>
            <polygon
              points={`${center},${center - 25*s} ${center - 25*s},${center + 20*s} ${center + 25*s},${center + 20*s}`}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <ellipse
              cx={center}
              cy={center + 20*s}
              rx={25*s}
              ry={8*s}
              fill={filled ? '#333' : 'white'}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
          </g>
        );
        
      case 'kubus':
        const pointCount = points || 0;
        return (
          <g>
            <rect
              x={center - 20*s}
              y={center - 15*s}
              width={30*s}
              height={30*s}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <polygon
              points={`${center + 10*s},${center - 15*s} ${center + 25*s},${center - 25*s} ${center + 25*s},${center + 5*s} ${center + 10*s},${center + 15*s}`}
              fill={filled ? '#444' : '#f0f0f0'}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <polygon
              points={`${center - 20*s},${center - 15*s} ${center - 5*s},${center - 25*s} ${center + 25*s},${center - 25*s} ${center + 10*s},${center - 15*s}`}
              fill={filled ? '#555' : '#e0e0e0'}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            {pointCount > 0 && (
              <g>
                {Array.from({ length: Math.min(pointCount, 6) }).map((_, i) => (
                  <circle
                    key={i}
                    cx={center - 10*s + (i % 3) * 10*s}
                    cy={center - 5*s + Math.floor(i / 3) * 10*s}
                    r={2*s}
                    fill={filled ? 'white' : '#1a1a1a'}
                  />
                ))}
              </g>
            )}
          </g>
        );
        
      case 'piramida':
        return (
          <g>
            <polygon
              points={`${center - 20*s},${center + 15*s} ${center + 20*s},${center + 15*s} ${center + 25*s},${center + 5*s} ${center - 15*s},${center + 5*s}`}
              fill={filled ? '#444' : '#f0f0f0'}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <polygon
              points={`${center - 20*s},${center + 15*s} ${center},${center - 25*s} ${center + 20*s},${center + 15*s}`}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <polygon
              points={`${center + 20*s},${center + 15*s} ${center},${center - 25*s} ${center + 25*s},${center + 5*s}`}
              fill={filled ? '#555' : '#e0e0e0'}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
          </g>
        );

      // ===== BENTUK BARU SOAL 4 =====
      case 'kapsul':
        return (
          <g>
            <rect
              x={center - 12*s}
              y={center - 25*s}
              width={24*s}
              height={50*s}
              rx={12*s}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
          </g>
        );

      case 'tetes_air':
        const tetesRot = rotation === 'atas' ? 0 : rotation === 'kanan' ? 90 : rotation === 'bawah' ? 180 : rotation === 'kiri' ? 270 : 0;
        return (
          <g transform={`rotate(${tetesRot}, ${center}, ${center})`}>
            <path
              d={`M ${center} ${center - 28*s}
                  C ${center - 18*s} ${center - 10*s}, ${center - 18*s} ${center + 10*s}, ${center} ${center + 25*s}
                  C ${center + 18*s} ${center + 10*s}, ${center + 18*s} ${center - 10*s}, ${center} ${center - 28*s}`}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
          </g>
        );

      case 'bintang_4':
        return (
          <g>
            <polygon
              points={`${center},${center - 28*s} ${center + 8*s},${center - 8*s} ${center + 28*s},${center} ${center + 8*s},${center + 8*s} ${center},${center + 28*s} ${center - 8*s},${center + 8*s} ${center - 28*s},${center} ${center - 8*s},${center - 8*s}`}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
          </g>
        );

      case 'segi_enam':
        const lineCount = lines || 0;
        return (
          <g>
            <polygon
              points={`${center},${center - 25*s} ${center + 22*s},${center - 12*s} ${center + 22*s},${center + 12*s} ${center},${center + 25*s} ${center - 22*s},${center + 12*s} ${center - 22*s},${center - 12*s}`}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            {lineCount > 0 && (
              <g>
                {Array.from({ length: Math.min(lineCount, 6) }).map((_, i) => (
                  <line
                    key={i}
                    x1={center - 15*s + i * 6*s}
                    y1={center - 15*s}
                    x2={center - 15*s + i * 6*s}
                    y2={center + 15*s}
                    stroke={filled ? 'white' : '#1a1a1a'}
                    strokeWidth={1.5*s}
                  />
                ))}
              </g>
            )}
          </g>
        );

      // ===== BENTUK BARU SOAL 5 =====
      case 'lensa':
        return (
          <g>
            <path
              d={`M ${center - 20*s} ${center - 20*s}
                  A ${28*s} ${28*s} 0 0 1 ${center + 20*s} ${center - 20*s}
                  A ${28*s} ${28*s} 0 0 1 ${center - 20*s} ${center - 20*s}`}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <path
              d={`M ${center - 20*s} ${center + 20*s}
                  A ${28*s} ${28*s} 0 0 0 ${center + 20*s} ${center + 20*s}
                  A ${28*s} ${28*s} 0 0 0 ${center - 20*s} ${center + 20*s}`}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
          </g>
        );

      case 'layang_layang':
        const llRot = rotation === 'bawah' ? 180 : 0;
        return (
          <g transform={`rotate(${llRot}, ${center}, ${center})`}>
            <polygon
              points={`${center},${center - 28*s} ${center + 20*s},${center} ${center},${center + 28*s} ${center - 20*s},${center}`}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
          </g>
        );

      case 'pita':
        const tailCount = tails || 2;
        return (
          <g>
            <ellipse
              cx={center}
              cy={center - 8*s}
              rx={20*s}
              ry={12*s}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <ellipse
              cx={center}
              cy={center + 8*s}
              rx={20*s}
              ry={12*s}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            {tailCount > 0 && (
              <g>
                {Array.from({ length: Math.min(tailCount, 6) }).map((_, i) => (
                  <path
                    key={i}
                    d={`M ${center - 15*s + i * 10*s} ${center + 18*s}
                        Q ${center - 15*s + i * 10*s} ${center + 28*s} ${center - 10*s + i * 10*s} ${center + 30*s}`}
                    stroke={filled ? 'white' : '#1a1a1a'}
                        strokeWidth={2*s}
                        fill="none"
                  />
                ))}
              </g>
            )}
          </g>
        );

      case 'segi_delapan':
        return (
          <g>
            <polygon
              points={`${center},${center - 25*s} ${center + 18*s},${center - 18*s} ${center + 25*s},${center} ${center + 18*s},${center + 18*s} ${center},${center + 25*s} ${center - 18*s},${center + 18*s} ${center - 25*s},${center} ${center - 18*s},${center - 18*s}`}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
          </g>
        );

      // ===== BENTUK BARU SOAL 6 =====
      case 'jam_pasir':
        return (
          <g>
            <polygon
              points={`${center - 22*s},${center - 22*s} ${center + 22*s},${center - 22*s} ${center},${center} ${center + 22*s},${center + 22*s} ${center - 22*s},${center + 22*s} ${center},${center}`}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
          </g>
        );

      case 'mahkota':
        const crownPoints = points || 3;
        return (
          <g>
            <path
              d={`M ${center - 25*s} ${center + 15*s}
                  L ${center - 25*s} ${center - 5*s}
                  L ${center - 12*s} ${center + 5*s}
                  L ${center} ${center - 15*s}
                  L ${center + 12*s} ${center + 5*s}
                  L ${center + 25*s} ${center - 5*s}
                  L ${center + 25*s} ${center + 15*s} Z`}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            {crownPoints > 0 && (
              <g>
                {Array.from({ length: Math.min(crownPoints, 11) }).map((_, i) => (
                  <circle
                    key={i}
                    cx={center - 20*s + i * 4*s}
                    cy={center - 12*s + (i % 2) * 5*s}
                    r={2*s}
                    fill={filled ? 'white' : '#1a1a1a'}
                  />
                ))}
              </g>
            )}
          </g>
        );

      case 'perisai':
        return (
          <g>
            <path
              d={`M ${center} ${center - 28*s}
                  C ${center + 25*s} ${center - 15*s}, ${center + 25*s} ${center + 10*s}, ${center} ${center + 28*s}
                  C ${center - 25*s} ${center + 10*s}, ${center - 25*s} ${center - 15*s}, ${center} ${center - 28*s}`}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
          </g>
        );

      case 'daun':
        const daunRot = rotation === 'atas' ? 0 : rotation === 'kanan' ? 90 : rotation === 'bawah' ? 180 : rotation === 'kiri' ? 270 : 0;
        return (
          <g transform={`rotate(${daunRot}, ${center}, ${center})`}>
            <path
              d={`M ${center} ${center - 28*s}
                  C ${center + 15*s} ${center - 10*s}, ${center + 15*s} ${center + 15*s}, ${center} ${center + 28*s}
                  C ${center - 15*s} ${center + 15*s}, ${center - 15*s} ${center - 10*s}, ${center} ${center - 28*s}`}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <line
              x1={center}
              y1={center - 20*s}
              x2={center}
              y2={center + 20*s}
              stroke={filled ? 'white' : '#1a1a1a'}
              strokeWidth={1.5*s}
            />
          </g>
        );
        
      default:
        return (
          <rect
            x={center - 20*s}
            y={center - 20*s}
            width={40*s}
            height={40*s}
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />
        );
    }
  };

  return (
    <svg width={size} height={size} className="shape-renderer">
      {renderShape()}
    </svg>
  );
}
