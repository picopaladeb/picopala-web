// Components
import Navbar from 'src/components/navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="pt-8 max-w-6xl mx-auto px-4 md:px-8">{children}</div>
    </div>
  )
}
