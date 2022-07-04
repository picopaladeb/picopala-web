// Components
import Navbar from 'src/components/navbar'
import Footer from 'src/components/footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Navbar />
      <div className="pt-8 max-w-6xl mx-auto px-4 md:px-8">{children}</div>
      <Footer />
    </div>
  )
}
