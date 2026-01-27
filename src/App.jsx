import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HomeLogo from './components/Home-logo'
import PropertyList from './components/PropertyList'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <HomeLogo />
        <PropertyList />
      </main>
      <Footer />
    </>
  )
}

export default App
