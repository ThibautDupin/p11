import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
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
              <Banner />
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
