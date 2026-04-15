import { Route, Routes } from 'react-router-dom'
import Navbar from "./components/navbar/navbar.jsx"
import Product from "./pages/product.jsx"
import Contact from "./pages/contact.jsx"
import Home from "./pages/home.jsx"
import Footer from "./components/footer/footer.jsx"
import Catagories from "./pages/catagories.jsx"
import Accessories from "./pages/accessories.jsx"
import Invalid from "./pages/404.jsx"
import Details from "./pages/accDetails.jsx"

const App = () => {
  return (
    <div className="flex flex-col justify-between h-screen w-full bg-gray-700">

      <div className='flex flex-col'>

      <div className="flex justify-center items-center h-18">
      <Navbar />
      </div>


      <div className='mt-10'>
      <Routes>
        <Route  path="/" element = {<Home />}/>
        <Route  path="product" element = {<Product />} />
        <Route  path="product/:catagories" element = {<Catagories />}>
        <Route  path=":details" element = {<Details />} />
        </Route>
        <Route  path="contact" element = {<Contact />}/>
        <Route  path="*" element = {<Invalid />}/>
      </Routes>
      </div>
      </div>

      <div className="flex justify-center">
      <Footer />
      </div>
    </div>
  )
}

export default App