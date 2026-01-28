import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomeLogo from './components/Home-logo'
import PropertyList from './components/PropertyList'
import PropertyDetails from './components/PropertyDetails'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <HomeLogo />
              <PropertyList />
            </main>
          }
        />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
