'use client'

import { useState } from 'react'
import ArtSVG from '@/components/ArtSVG'
import { SCHOOL, FINALISTS, PRODUCTS } from '@/lib/data'

export default function StoreContent() {
  const [selected, setSelected] = useState(FINALISTS[0])
  const [product, setProduct] = useState(PRODUCTS[0])
  const [cart, setCart] = useState([])

  const salesData = FINALISTS
    .map(f => ({ ...f, sales: Math.floor(f.votes * 0.3 + 20) }))
    .sort((a, b) => b.sales - a.sales)

  return (
    <main className="section">
      <h2 style={{ marginBottom: 6 }}>Shop Finalist Designs</h2>
      <p style={{ fontSize: 14, color: '#888', marginBottom: 8 }}>
        Every purchase supports {SCHOOL.name} — 50% of profits go directly to the school.
      </p>

      <div className="countdown">
        <span className="countdown-label">⏰ Store closes in:</span>
        <div className="countdown-items">
          {[{ v: '06', l: 'Days' }, { v: '14', l: 'Hrs' }, { v: '32', l: 'Min' }].map(t => (
            <div className="countdown-item" key={t.l}>
              <div className="countdown-value">{t.v}</div>
              <div className="countdown-unit">{t.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="store-grid">
        {/* Left - Product Preview */}
        <div>
          <div style={{ background: '#fff', borderRadius: 16, padding: 32, boxShadow: '0 4px 20px rgba(0,0,0,0.08)', marginBottom: 16 }}>
            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <ArtSVG seed={selected.seed} size={240} style={{ borderRadius: 12, border: '3px solid #C84520' }} />
                <div style={{
                  position: 'absolute', bottom: -10, left: '50%', transform: 'translateX(-50%)',
                  background: '#C84520', color: '#fff', padding: '4px 14px', borderRadius: 12,
                  fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap'
                }}>
                  {selected.name} — Grade {selected.grade}
                </div>
              </div>
            </div>
            <div style={{ fontSize: 12, color: '#aaa', textAlign: 'center', marginTop: 16 }}>
              Preview: {product.emoji} {product.name}
            </div>
          </div>

          <div className="product-selector">
            {PRODUCTS.map(p => (
              <button
                key={p.id}
                onClick={() => setProduct(p)}
                className={`product-option ${product.id === p.id ? 'active' : ''}`}
              >
                <div className="product-option-emoji">{p.emoji}</div>
                <div className="product-option-name">{p.name}</div>
                <div className="product-option-price">${p.price}</div>
              </button>
            ))}
          </div>

          <button
            onClick={() => setCart([...cart, { student: selected, product }])}
            className="btn btn-primary"
            style={{ width: '100%', marginTop: 16, textAlign: 'center' }}
          >
            Add to Cart — ${product.price}
          </button>
          {cart.length > 0 && (
            <div style={{ textAlign: 'center', marginTop: 8, fontSize: 13, color: '#4CAF50', fontWeight: 600 }}>
              🛒 {cart.length} item{cart.length > 1 ? 's' : ''} in cart
              (${cart.reduce((s, c) => s + c.product.price, 0)})
            </div>
          )}
        </div>

        {/* Right - Design selector + leaderboard */}
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 10, textTransform: 'uppercase', letterSpacing: 1 }}>
            Choose a Design
          </div>
          <div className="design-grid">
            {FINALISTS.map(f => (
              <div
                key={f.id}
                onClick={() => setSelected(f)}
                className={`design-option ${selected.id === f.id ? 'active' : ''}`}
              >
                <ArtSVG seed={f.seed} size={100} style={{ width: '100%', height: 'auto', borderRadius: 0 }} />
                <div className="design-option-info" style={{ background: selected.id === f.id ? '#C84520' : '#fff' }}>
                  <div style={{ fontSize: 10, fontWeight: 600, color: selected.id === f.id ? '#fff' : '#1A1A1A' }}>{f.name}</div>
                  <div style={{ fontSize: 9, color: selected.id === f.id ? 'rgba(255,255,255,0.7)' : '#aaa' }}>Gr {f.grade}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="leaderboard">
            <div className="leaderboard-title">🏆 Sales Leaderboard</div>
            {salesData.slice(0, 5).map((s, i) => (
              <div className="leaderboard-item" key={s.id}>
                <div className="leaderboard-rank" style={{ background: i === 0 ? '#C84520' : i < 3 ? '#E8957A' : '#eee', color: i < 3 ? '#fff' : '#888' }}>
                  {i + 1}
                </div>
                <ArtSVG seed={s.seed} size={32} style={{ borderRadius: 4, flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>
                    {s.name} <span style={{ color: '#aaa', fontWeight: 400 }}>Gr {s.grade}</span>
                  </div>
                  <div className="leaderboard-bar">
                    <div className="leaderboard-bar-fill" style={{
                      background: i === 0 ? '#C84520' : '#E8957A',
                      width: `${(s.sales / salesData[0].sales * 100)}%`
                    }} />
                  </div>
                </div>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#C84520' }}>{s.sales} sold</div>
              </div>
            ))}
          </div>

          <div className="fundraiser-total" style={{ background: '#4CAF50' }}>
            <div className="fundraiser-total-label">Total Raised for {SCHOOL.name}</div>
            <div className="fundraiser-total-value">$1,247</div>
          </div>
        </div>
      </div>
    </main>
  )
}
