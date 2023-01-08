

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer, Contact } from './components'
import {
  Home,
  About,
  Products,
  SingleProduct,
  Cart,
  Error,
  Checkout,
  PrivateRoute,
  AuthWrapper,
} from './pages'
function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products/:id' element={<SingleProduct />} />
        <Route
          path='/checkout'
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route path='/*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
