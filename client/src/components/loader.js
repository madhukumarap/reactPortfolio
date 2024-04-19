import React from 'react'

function Loader() {
  return (
<div className='h-screen flex items-center justify-center fixed inset-0 bg-primary z-[100]'>
        <div className='flex gap-5 text-9xl sm:text-3xl font-semibold'>
            <h1 className='text-secondary M'>M</h1>
            <h1 className='text-white K'>K</h1>
        </div>
    </div>
  )
}

export default Loader