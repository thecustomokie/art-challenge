import { Nav, Footer } from '@/components/Layout'
import StoreContent from './StoreContent'

export const metadata = {
  title: 'Shop | The Custom Okie Art Challenge',
  description: 'Shop finalist designs on real products. 50% of profits go to the school.',
}

export default function StorePage() {
  return (
    <>
      <Nav />
      <StoreContent />
      <Footer />
    </>
  )
}
