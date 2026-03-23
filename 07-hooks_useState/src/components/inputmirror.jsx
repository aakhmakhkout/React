import React, {useState} from 'react'

const inputmirror = () => {

    const [text, settext] = useState("");
    function mirror(value) {
        settext(value)
    }

    // const [gettext, setgettext] = useState("")
    // function getText(value) {
    //     setgettext(()=> {
    //         return value
    //     })
    // }
 
  return (
    <div className='flex flex-col h-50 justify-center items-center'>
        <div className='flex flex-col bg-green-400 justify-center items-center w-70 h-40 rounded-2xl gap-3'>
            <input className='bg-white p-2 rounded-xl overflow-auto' type="text" placeholder='Write anything' onChange={(elem)=> {
                let value = elem.target.value;
                 mirror(value);
            }}/>
           <p className='bg-white p-2 rounded-xl w-50 h-20 wrap-break-word overflow-y-scroll' id="inputmirrorpara" name="inputmirror">{text}</p>
        </div>
    </div>
  )
}

export default inputmirror