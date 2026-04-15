import { Outlet, useParams } from 'react-router-dom'



import Accessories from './accessories.jsx';
const catagories = () => {
    const catag = useParams();
  
    return (
    <div className='h-190 flex flex-col gap-3'>
    <div className="flex justify-center">
    <h1 className='text-white uppercase text-5xl font-extrabold'>{catag.catagories}</h1> 
    </div>
        <Accessories  catagory = {catag.catagories}/>
   </div>
  )
}

export default catagories