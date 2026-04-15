import React from 'react'

const home = () => {
  return (
    <div className='flex  flex-col items-center'>
        <h1 className='text-6xl font-extrabold text-white'>This is Home page</h1>
        <p className='px-5 text-white py-3'>Dynamic routing allows us to create routes with variable parameters so that the same component can display different content based on the URL. <br /> <br />Without dynamic routing, we would have to create separate routes for each item:</p>
    </div>
  )
}

export default home