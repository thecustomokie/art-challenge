'use client'

import Link from 'next/link'
import ArtSVG from '@/components/ArtSVG'
import { SCHOOL, STUDENTS } from '@/lib/data'

export default function HomeContent() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute', width: 20 + i * 12, height: 20 + i * 12, borderRadius: '50%',
            background: ['#C84520','#2E86AB','#4CAF50','#F5A623','#9C27B0','#E8957A'][i], opacity: 0.15,
            top: `${15 + (i * 13) % 60}%`, left: `${5 + (i * 17) % 85}%`,
          }} />
        ))}
        <div className="hero-inner">
          <div className="hero-pretitle">The Custom Okie</div>
          <h1>Art Challenge</h1>
          <div className="hero-line" />
          <p className="hero-subtitle">Student artwork. Real products. School fundraiser.</p>
          <p className="hero-school">Featuring {SCHOOL.name} — Home of the {SCHOOL.mascot}</p>
          <div className="hero-buttons">
            <Link href="/gallery" className="btn btn-primary">Vote Now →</Link>
            <Link href="/store" className="btn btn-outline">Shop Products</Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section section-center">
        <h2>How It Works</h2>
        <div className="section-line" />
        <div className="steps-grid">
          {[
            { num: '1', title: 'Kids Create', desc: 'Students draw what they love about their school using markers on our official template.', color: '#2E86AB' },
            { num: '2', title: 'Community Votes', desc: 'All artwork goes online for public voting. Top 3 per grade become finalists.', color: '#4CAF50' },
            { num: '3', title: 'Shop & Support', desc: 'Finalist designs are printed on real products. 50% of profits go directly to the school.', color: '#C84520' },
          ].map(step => (
            <div className="step" key={step.num}>
              <div className="step-number" style={{ background: step.color }}>{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Live Stats */}
      <section className="stats-bar">
        <div className="stats-grid">
          {[
            { value: '862', label: 'Students', color: '#C84520' },
            { value: '347', label: 'Artworks Submitted', color: '#2E86AB' },
            { value: '4,218', label: 'Votes Cast', color: '#4CAF50' },
            { value: '$1,247', label: 'Raised So Far', color: '#F5A623' },
          ].map(stat => (
            <div className="stat-item" key={stat.label}>
              <div className="stat-value" style={{ color: stat.color }}>{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Artwork */}
      <section className="section section-center">
        <h2>Featured Artwork</h2>
        <p className="section-subtitle">A preview of the incredible art from {SCHOOL.name} students</p>
        <div className="art-grid">
          {STUDENTS.slice(0, 8).map(s => (
            <div className="art-card" key={s.id}>
              <ArtSVG seed={s.seed} size={200} style={{ width: '100%', height: 'auto', borderRadius: 0 }} />
              <div className="art-card-info">
                <div className="art-card-name">{s.name}</div>
                <div className="art-card-grade">Grade {s.grade}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 24 }}>
          <Link href="/gallery" className="btn btn-primary btn-sm">View All Artwork & Vote →</Link>
        </div>
      </section>

      {/* Fundraiser Progress */}
      <section style={{ padding: '40px 20px', background: '#fff' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 24, marginBottom: 6 }}>Fundraiser Progress</h2>
          <p style={{ fontSize: 14, color: '#888', marginBottom: 20 }}>50% of all profits go directly to {SCHOOL.name}</p>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: '42%' }}>
              <span>$1,247</span>
            </div>
          </div>
          <div className="progress-labels">
            <span>$0</span>
            <span style={{ color: '#C84520', fontWeight: 700 }}>Goal: $3,000</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2 style={{ fontSize: 28 }}>Want the Art Challenge at your school?</h2>
        <p>Zero cost. Zero risk. 100% community engagement.</p>
        <button className="btn btn-white">Get In Touch →</button>
      </section>
    </main>
  )
}
