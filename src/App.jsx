import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import PropertyList from './pages/PropertyList'
import PropertyDetails from './pages/PropertyDetails'
import About from './pages/About'
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
              <Banner />
              <PropertyList />
            </main>
          }
        />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
