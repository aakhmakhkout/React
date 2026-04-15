import { Route, Routes } from 'react-router-dom'
import Navbar from "./components/navbar/navbar.jsx"
import Product from "./pages/product.jsx"
import Contact from "./pages/contact.jsx"
import Home from "./pages/home.jsx"
import Footer from "./components/footer/footer.jsx"
import Mobile from "./pages/mobile.jsx"
import Laptop from "./pages/laptop.jsx"
import Kitchen from "./pages/kitchen.jsx"
import Invalid from "./pages/404.jsx"

const App = () => {
  return (
    <div className="flex flex-col justify-between h-screen w-full bg-gray-700">

      <div className="flex justify-center items-center h-18">
      <Navbar />
      </div>


      <div>
      <Routes>
        <Route  path="/" element = {<Home />}/>
        <Route  path="product" element = {<Product />}>
          <Route path="mobile" element = {<Mobile /> }/>
          <Route path="laptop" element = {<Laptop /> }/>
          <Route path="kitchen" element = {<Kitchen /> }/>
        </Route>
        <Route  path="contact" element = {<Contact />}/>
        <Route  path="*" element = {<Invalid />}/>
      </Routes>
      </div>


      <div className="flex justify-center">
      <Footer />
      </div>
    </div>
  )
}

export default App