import { Nav, Footer } from '@/components/Layout'
import HomeContent from './HomeContent'

export const metadata = {
  title: 'The Custom Okie Art Challenge | Student Art. Real Products. School Fundraiser.',
}

export default function HomePage() {
  return (
    <>
      <Nav />
      <HomeContent />
      <Footer />
    </>
  )
}
