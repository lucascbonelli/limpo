import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import BeforeAfter from './components/BeforeAfter'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <BeforeAfter />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
