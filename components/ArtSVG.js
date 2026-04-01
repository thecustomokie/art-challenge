'use client'

import { generateArt } from '@/lib/data'

export default function ArtSVG({ seed, size = 200, style = {} }) {
  const shapes = generateArt(seed, size)
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ background: '#fff', ...style }}>
      {shapes.map((s, i) =>
        s.type === 'circle' ? (
          <circle key={i} cx={s.x} cy={s.y} r={s.r} fill={s.color} opacity={0.8} />
        ) : (
          <rect key={i} x={s.x - s.r / 2} y={s.y - s.r / 2} width={s.r} height={s.r}
            fill={s.color} opacity={0.8} rx={4}
            transform={`rotate(${s.rotation} ${s.x} ${s.y})`}
          />
        )
      )}
    </svg>
  )
}
