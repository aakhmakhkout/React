import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-evenly h-full'>
        <div className='bg-purple-500 text-6xl font-extrabold text-white px-15 py-4 rounded-2xl shadow-lg'>Home</div>
        <div className='flex flex-col gap-5 px-4'>
            <p className='text-4xl font-bold text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quod sint beatae dolore eaque illum placeat voluptas? Animi, et tenetur?</p>
            <p className='text-white/70 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sequi adipisci voluptas iste eaque voluptates dolor quidem eligendi aut neque. Nesciunt beatae, reiciendis veniam, suscipit excepturi quidem provident molestias cupiditate facere expedita esse perspiciatis deserunt quod porro ad quisquam eos illum ex possimus repellendus! Asperiores quaerat provident aliquam dolorum quidem.</p>
            <p className='text-white/70 bg-black/50 px-3 py-3 rounded-md shadow-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius vitae quidem reprehenderit harum explicabo! Tenetur iste magnam cupiditate. Distinctio nemo enim provident voluptatibus perspiciatis beatae molestias, nulla eligendi explicabo ipsa atque maxime velit facere dolor vitae ipsum, quasi blanditiis? Eaque.</p>
        </div>

        <div className='flex gap-20'>
            <button className='bg-purple-400 px-5 py-2 rounded-md text-white font-bold'>See more</button>
            <button className='text-orange-400 font-extrabold'>About us</button>
        </div>
    </div>
  )
}

export default Home