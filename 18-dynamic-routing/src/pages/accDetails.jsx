import React from 'react'
import { useParams } from 'react-router-dom'

const accessoryDetails = [
{
    id : "covers",
    acsObj : {
        cover1 : {model:"poco x4 pro",price: 499, src:"https://iconape.com/wp-content/png_logo_vector/google-web-dev-logo.png"}, 
        cover2 : {model: "poco x5 pro",price: 599, src:"https://iconape.com/wp-content/png_logo_vector/google-web-dev-logo.png"}, 
        cover3 : {model: "poco x6 pro",price: 699, src:"https://iconape.com/wp-content/png_logo_vector/google-web-dev-logo.png"}, 
        cover4 : {model: "samsung s22 ultra",price: 1199, src:"https://iconape.com/wp-content/png_logo_vector/google-web-dev-logo.png"}, 
        cover5 : {model: "iphone 17 pro",price: 2499, src:"https://iconape.com/wp-content/png_logo_vector/google-web-dev-logo.png"}, 
        cover6 : {model: "motorolla fusion 70",price: 299, src:"https://iconape.com/wp-content/png_logo_vector/google-web-dev-logo.png"}, 
        cover7 : {model: "motorolla edge 60 pro",price: 499, src:"https://iconape.com/wp-content/png_logo_vector/google-web-dev-logo.png"}, 
        cover8 : {model: "iphone 16 pro max",price: 3099, src:"https://iconape.com/wp-content/png_logo_vector/google-web-dev-logo.png"}, 
    }


}, 
{
    id: "chargers",
    acsObj : {
        charger1 : {model: "abc", price: 1000, src:"https://m.media-amazon.com/images/I/61aXPAYVhML._AC_UF1000,1000_QL80_.jpg"},
        charger2 : {model: "xyz", price: 1234, src:"https://m.media-amazon.com/images/I/61aXPAYVhML._AC_UF1000,1000_QL80_.jpg"},
        charger3 : {model: "pqr", price: 455, src:"https://m.media-amazon.com/images/I/61aXPAYVhML._AC_UF1000,1000_QL80_.jpg"},
        charger4 : {model: "rst", price: 200, src:"https://m.media-amazon.com/images/I/61aXPAYVhML._AC_UF1000,1000_QL80_.jpg"},
    }
},

{
    id: "earphones",
    acsObj : {
        earphone1: {model: "abc", price: 299, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZx0ubYSUVqca_Z_vDpdx2qyS5-jcnJJlkw&s"},
        earphone2: {model: "abc", price: 299, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZx0ubYSUVqca_Z_vDpdx2qyS5-jcnJJlkw&s"},
        earphone3: {model: "abc", price: 299, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZx0ubYSUVqca_Z_vDpdx2qyS5-jcnJJlkw&s"},
        earphone4: {model: "abc", price: 299, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZx0ubYSUVqca_Z_vDpdx2qyS5-jcnJJlkw&s"},
        earphone5: {model: "abc", price: 299, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZx0ubYSUVqca_Z_vDpdx2qyS5-jcnJJlkw&s"},
    }
}

]

const accDetails = () => {
    const {details} = useParams();
    const result = accessoryDetails.find((param)=> {
        
        return param.id === details
    })
    
    const Components = () => {

        let detailsArr = Object.values(result.acsObj);
        // console.log(detailsArr);
        return <div className='flex flex-wrap gap-4 p-4 justify-center'>
        {detailsArr.map((values, idx)=> {
            return <div key={idx} className='w-40 h-40 bg-white/20 flex flex-col justify-center items-center'>
                    <img src={values.src} alt="img" className='w-20'/>
                    <p>{values.model}</p>
                    <p>{values.price}</p>
                </div>
        })}
        
        </div>
    }

   
    // console.log(details);
    console.log(result);
    return (
    <div className='w-[90%] max-h-140 bg-black/30 backdrop-blur-md shadow-md rounded-xl'>
        <Components />
    </div>
  )
}

export default accDetails