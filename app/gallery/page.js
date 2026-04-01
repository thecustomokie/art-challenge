import { Nav, Footer } from '@/components/Layout'
import GalleryContent from './GalleryContent'

export const metadata = {
  title: 'Vote | The Custom Okie Art Challenge',
  description: 'Vote for your favorite student artwork! Top 3 per grade become finalists.',
}

export default function GalleryPage() {
  return (
    <>
      <Nav />
      <GalleryContent />
      <Footer />
    </>
  )
}
