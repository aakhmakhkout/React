import { useEffect, useState } from 'react'
import axios from "axios";
import { Loader } from 'lucide-react';

const App = () => {
  const [pageNo, setPage] = useState(3);
  const [galleryData, setdata] = useState([]);

    const  getData = async () => {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${pageNo}&limit=20`);
      setdata(response.data);
      return response.data;
    }

    useEffect(()=> {
      getData();
    }, [pageNo]);

    function prevPage() {
      if(pageNo > 3) {
        setPage(pageNo-1)
      }
    }

    const loading = ()=> {
      if(galleryData.length <= 0) {
          return <div className='w-150 flex justify-center items-center '>
        <Loader className='text-white' size={100} strokeWidth={1.5} />
          </div>
      }
    }
   
   

  return (
    <div className='w-full h-screen bg-gray-900 flex flex-col items-center'>
      <div className="max-w-300 h-[75vh] bg-black/20 backdrop-blur-md  mt-4 rounded-2xl shadow-lg border border-white/20 flex flex-wrap gap-4 mx-5 justify-center items-center overflow-x-auto py-4 scrollbar ">

      {loading()}

      {galleryData.map((value)=> {
       return <div className="bg-black/10 w-50 h-50 p-4 backdrop-blur-md shadow-lg border border-white/40 rounded-lg" key={value.id}>
        
        <a href={value.url} target='_blank' rel="noopener noreferrer">
        <div className="bg">
          <img src={value.download_url} alt="img" className='w-50 h-30 rounded-lg shadow-lg hover:scale-110 transition-all'/>
          <h1 className='text-center mt-2 text-white font-bold text-lg'>{value.author}</h1>
        </div>
        </a>

        </div>
      })}
      </div>
      
      <div className="flex gap-4 w-full justify-center h-20 items-center">
      <button style={{display: pageNo == 3? 'none':'inline'}} className='bg-yellow-400 px-6 py-2 cursor-pointer rounded-lg active:scale-95 font-bold text-xl' onClick={()=> {
        prevPage();
        setdata([]);
      }}>Prev</button>

      <h2 className='text-white text-xl font-bold'>Page {pageNo-2}</h2>

      <button className='bg-yellow-400 px-6 py-2 cursor-pointer rounded-lg active:scale-95 font-bold text-xl' onClick={()=> {
        setdata([]);
        setPage(pageNo+1);
      }}>Next</button>
      </div>
    </div>
  )
}

export default App