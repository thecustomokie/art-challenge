'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Nav() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/gallery', label: 'Gallery & Vote' },
    { href: '/store', label: 'Shop' },
    { href: '/share', label: 'Share' },
  ]

  return (
    <>
      <div style={{ background: '#4CAF50', padding: '10px 20px', textAlign: 'center' }}>
        <span style={{ color: '#fff', fontWeight: 700, fontSize: 14, letterSpacing: 2, textTransform: 'uppercase' }}>
          Voting is Live!
        </span>
        <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13, marginLeft: 16 }}>
          ⏰ 6 days, 14 hours remaining
        </span>
      </div>
      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="nav-logo" style={{ textDecoration: 'none' }}>
            <div className="nav-logo-icon">CO</div>
            <span className="nav-logo-text">ART CHALLENGE</span>
          </Link>
          <div className="nav-links">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <div className="nav-logo-icon" style={{ width: 28, height: 28, fontSize: 12 }}>CO</div>
            <span style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>Custom Okie</span>
          </div>
          <p className="footer-text">Oklahoma Made. Community Powered.</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p className="footer-text">customomkie.com</p>
          <p className="footer-text">© 2026 Custom Okie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
