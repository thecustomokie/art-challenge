'use client'

import { useState } from 'react'
import ArtSVG from '@/components/ArtSVG'
import { STUDENTS } from '@/lib/data'

export default function GalleryContent() {
  const [grade, setGrade] = useState(0)
  const [voted, setVoted] = useState({})

  const filtered = grade === 0 ? STUDENTS : STUDENTS.filter(s => s.grade === grade)
  const sorted = [...filtered].sort((a, b) => b.votes - a.votes)

  return (
    <main className="section">
      <h2 style={{ marginBottom: 6 }}>Vote for Your Favorites</h2>
      <p style={{ fontSize: 14, color: '#888', marginBottom: 24 }}>
        One vote per grade per day. Top 3 per grade become finalists!
      </p>

      <div className="grade-filter">
        {[
          { v: 0, l: 'All Grades' },
          { v: 1, l: 'Grade 1' },
          { v: 2, l: 'Grade 2' },
          { v: 3, l: 'Grade 3' },
          { v: 4, l: 'Grade 4' },
          { v: 5, l: 'Grade 5' },
        ].map(g => (
          <button
            key={g.v}
            onClick={() => setGrade(g.v)}
            className={`grade-btn ${grade === g.v ? 'active' : ''}`}
          >
            {g.l}
          </button>
        ))}
      </div>

      {grade !== 0 && (
        <div style={{
          background: '#FFF8E1', border: '1px solid #F5A623', borderRadius: 10,
          padding: '12px 16px', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10
        }}>
          <span style={{ fontSize: 20 }}>🏆</span>
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, color: '#1A1A1A' }}>Current Rankings — Grade {grade}</div>
            <div style={{ fontSize: 12, color: '#888' }}>Top 3 are highlighted. Exact vote counts are hidden.</div>
          </div>
        </div>
      )}

      <div className="art-grid">
        {sorted.map((s, idx) => {
          const isTop3 = grade !== 0 && idx < 3
          const hasVoted = voted[`${s.grade}-today`] === s.id
          return (
            <div key={s.id} className={`art-card ${isTop3 ? 'finalist' : ''}`} style={{ position: 'relative' }}>
              {isTop3 && <div className="rank-badge">#{idx + 1}</div>}
              <ArtSVG seed={s.seed} size={220} style={{ width: '100%', height: 'auto', borderRadius: 0 }} />
              <div className="art-card-info">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <div>
                    <div className="art-card-name">{s.name}</div>
                    <div className="art-card-grade">Grade {s.grade}</div>
                  </div>
                </div>
                <button
                  onClick={() => setVoted({ ...voted, [`${s.grade}-today`]: s.id })}
                  className={`vote-btn ${hasVoted ? 'voted' : 'active'}`}
                >
                  {hasVoted ? '✓ Voted!' : 'Vote'}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}
