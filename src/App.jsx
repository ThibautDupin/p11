import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomeLogo from './components/Home-logo'
import PropertyList from './components/PropertyList'
import PropertyDetails from './components/PropertyDetails'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
function App() {
  const [selectedProperty, setSelectedProperty] = useState(null)

  return (
    <>
      <Header onHomeClick={() => setSelectedProperty(null)} />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              {!selectedProperty && <HomeLogo />}
              {!selectedProperty ? (
                <PropertyList onSelect={setSelectedProperty} />
              ) : (
                <PropertyDetails property={selectedProperty} />
              )}
            </main>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
