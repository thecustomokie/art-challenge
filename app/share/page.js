import { Nav, Footer } from '@/components/Layout'
import ShareContent from './ShareContent'

export const metadata = {
  title: 'Share | The Custom Okie Art Challenge',
}

export default function SharePage() {
  return (
    <>
      <Nav />
      <ShareContent />
      <Footer />
    </>
  )
}
