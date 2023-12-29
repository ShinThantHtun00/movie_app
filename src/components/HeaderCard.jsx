import React from 'react'

function HeaderCard({movie}) {
  return (
    <div className='relative w-full'>
    <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" className='w-full object-cover h-3/6'/>
    <div className=' dark-ov'></div>
      <div className='text-box'>
        <h1 className='text-4xl font-bold mb-5'>{movie.title}</h1>
        <p className='text-lg font-semibold leading-8'>{movie.overview}</p>
        <button className='bg-white text-black px-3 py-3 rounded-md font-medium text-lg mt-5'>Watch now</button>
      </div>
    </div>
  )
}

export default HeaderCard