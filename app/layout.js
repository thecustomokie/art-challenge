import './globals.css'

export const metadata = {
  title: 'The Custom Okie Art Challenge',
  description: 'Student artwork. Real products. School fundraiser. 50% of profits go to your school.',
  openGraph: {
    title: 'The Custom Okie Art Challenge',
    description: 'Student artwork. Real products. School fundraiser.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Custom Okie Art Challenge',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
