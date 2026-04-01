'use client'

import ArtSVG from '@/components/ArtSVG'
import { SCHOOL, STUDENTS } from '@/lib/data'

export default function ShareContent() {
  const student = STUDENTS[0]
  const shareUrl = 'customomkie.com/art/cross-timbers/emma-gr1'

  return (
    <main className="section" style={{ maxWidth: 700 }}>
      <h2 style={{ marginBottom: 6 }}>Shareable Pages</h2>
      <p style={{ fontSize: 14, color: '#888', marginBottom: 24 }}>
        Every design gets its own page optimized for social sharing. Here is what it looks like:
      </p>

      {/* Share preview card */}
      <div className="share-card">
        <div className="share-browser-bar">
          <div className="browser-dot" style={{ background: '#ff5f56' }} />
          <div className="browser-dot" style={{ background: '#ffbd2e' }} />
          <div className="browser-dot" style={{ background: '#27ca40' }} />
          <div className="share-url-bar">🔒 {shareUrl}</div>
        </div>

        <div style={{ padding: 32, textAlign: 'center' }}>
          <ArtSVG seed={student.seed} size={280} style={{ borderRadius: 12, border: '3px solid #C84520', margin: '0 auto' }} />

          <h3 style={{ fontSize: 24, fontWeight: 800, marginTop: 20, marginBottom: 4 }}>
            Vote for {student.name}&apos;s Artwork!
          </h3>
          <p style={{ fontSize: 14, color: '#888', marginBottom: 20 }}>
            Grade {student.grade} — {SCHOOL.name}
          </p>
          <p style={{ fontSize: 14, color: '#888', marginBottom: 24, maxWidth: 400, margin: '0 auto 24px' }}>
            {student.name}&apos;s artwork is part of The Custom Okie Art Challenge.
            Vote to help it become a finalist — the top designs get printed on real products!
          </p>

          <button className="btn btn-primary" style={{ marginBottom: 20 }}>
            Vote for {student.name} →
          </button>

          <div className="share-buttons">
            {[
              { label: 'Facebook', bg: '#1877F2' },
              { label: 'Text / SMS', bg: '#4CAF50' },
              { label: 'Copy Link', bg: '#666' },
              { label: 'Email', bg: '#2E86AB' },
            ].map(btn => (
              <button key={btn.label} className="share-btn" style={{ background: btn.bg }}>
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Social preview */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 10, textTransform: 'uppercase', letterSpacing: 1 }}>
          Social Media Link Preview
        </div>
        <div className="social-preview">
          <div className="social-preview-image">
            <ArtSVG seed={student.seed} size={140} style={{ borderRadius: 0 }} />
          </div>
          <div className="social-preview-text">
            <div style={{ fontSize: 10, color: '#2E86AB', marginBottom: 4 }}>CUSTOMOMKIE.COM</div>
            <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>
              Vote for {student.name}&apos;s Artwork!
            </div>
            <div style={{ fontSize: 13, color: '#888', lineHeight: 1.4 }}>
              {student.name}&apos;s drawing is in The Custom Okie Art Challenge at {SCHOOL.name}.
              Vote now to help it become a finalist!
            </div>
          </div>
        </div>
      </div>

      {/* Text message mockup */}
      <div>
        <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 10, textTransform: 'uppercase', letterSpacing: 1 }}>
          Text Message Preview
        </div>
        <div className="text-mockup">
          <div className="text-bubble" style={{ background: '#4CAF50' }}>
            <p>Hey! {student.name}&apos;s artwork is in an art contest at school. Can you vote for her? It takes 2 seconds! 🎨</p>
          </div>
          <div className="text-bubble" style={{ background: '#4CAF50' }}>
            <p>{shareUrl}</p>
          </div>
        </div>
      </div>
    </main>
  )
}
