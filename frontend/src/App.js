import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Message from './components/layout/Message'
import Container from './components/layout/Container'
import Home from './components/pages/Home'
import Login from './components/pages/Auth/Login'
import Register from './components/pages/Auth/register'
import Profile from './components/pages/User/Profile'
import { UserProvider } from './context/UserContext'
import AddProduct from './components/pages/Product/AddProduct'
import EditProduct from './components/pages/Product/EditProduct'
import ProductDetails from './components/pages/Product/ProductDetails'
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Sobre from './components/pages/Auth/sobre'

function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Message />
        <Container>
          <Routes>
            <Route path="/login" element={<Login />}> </Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/user/profile" element={<Profile />}></Route>
            <Route path="/product/add" element={<AddProduct />}></Route>
            <Route path="/product/edit/:id" element={<EditProduct />}></Route>
            <Route path="/product" element={<ProductDetails />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/Sobre" element={<Sobre />}></Route>
          </Routes>
        </Container>
        <Footer />
      </UserProvider>
    </Router>
  )
}

export default App