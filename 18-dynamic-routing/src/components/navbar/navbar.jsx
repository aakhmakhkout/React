import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div className='bg-cyan-500 flex justify-between items-center w-[90%] h-15 rounded-2xl px-2'>
        <div className='w-50 font-bold'>Dynamic Routing</div>
        <div className="w-100 flex justify-between">
            <Link className='font-bold ' to="/" >Home</Link>
            <Link className='font-bold ' to="https://gallery-app-one-green.vercel.app/" target="_blank">Gallery</Link>
            <Link className='font-bold ' to="product">Products</Link>
            <Link className='font-bold ' to="contact">Contact Us</Link>
        </div>
    </div>
  )
}

export default navbar