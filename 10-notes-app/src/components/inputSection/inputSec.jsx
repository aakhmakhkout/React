import { useState } from 'react'
import {Delete} from "lucide-react"

const inputSec = () => {
  const [text, settext] = useState("");

  function getText(value) {
    settext(value)
  }

  const [details, setdetails] = useState("");

  function getDetails(value) {
    setdetails(value);
  }

  function submitHandler(elem) {
    elem.preventDefault();
    const prevNote = [...note];
    prevNote.push({text, details});

    setnote(prevNote);
    settext("");
    setdetails("");
  
  }

  const [note, setnote] = useState([]);

  function deleteNote(target) {
    const notes = [...note];
    notes.splice(target, 1);

    setnote(notes);
  }

  return (
    <div className='flex flex-col justify-around h-full'>

    <div className='bg-white/20 backdrop-blur-md shadow-lg rounded-md h-70 flex justify-center border border-white/20 mx-2'>
            <form className='flex flex-col justify-around items-center h-full w-full' onSubmit={(elem)=> {
              submitHandler(elem);

            }}>
                <input className='bg-white/20 backdrop-blur-md shadow-lg border border-white/20 px-3 py-2 w-130 outline-none font-bold rounded-md' type="text" placeholder='Write note heading' value={text} onChange={(elem)=> {
                  getText(elem.target.value);
                }}/>

                <textarea className='bg-white/20 backdrop-blur-md shadow-lg border border-white/20 px-3 py-2 w-130 outline-none rounded-md h-40 resize-none' type="text" placeholder='Write note details' value={details} onChange={(detailselem)=> {
                  getDetails(detailselem.target.value);
                }}/>

                <button className='bg-black/40 backdrop-blur-md border border-black/20 text-white px-4 py-1 rounded-2xl shadow-lg hover:bg-black/70 active:scale-95'>Add Note</button>
            </form>


    </div>

    <div className='bg-black/40 backdrop-blur-md shadow-lg rounded-md h-130 border border-white/30 mx-2 flex flex-col'>
               <div className='flex flex-wrap gap-2 overflow-y-scroll notes-scroll'>
               {note.map(function(value, index) {
                if(value.text !== "" || value.details !== "") {

                  return <div key={index} className='bg-black/10 flex justify-start w-60 h-80 bg-cover relative mx-3 my-2 rounded-lg backdrop-blur-md shadow-lg border border-white/20'> 
                  <div className='absolute top-3 right-4'>
                    <button className='cursor-pointer text-white' onClick={()=> { 
                      deleteNote(index);
                    }}><Delete size={20} strokeWidth={1.25} /></button>
                  </div>
                  <div className='absolute top-8 px-3 w-full text-white'>
                    <div><h1 className='break-all font-bold'>{value.text}</h1></div>
                    <hr />
                    <div><p className='break-all py-2'>{value.details}</p></div>
                  </div>
                </div>
              }
               })}
               </div>
    </div>
    </div>
  )
}

export default inputSec