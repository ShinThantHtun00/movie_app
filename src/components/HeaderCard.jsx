import React from 'react'

function HeaderCard({imgSrc,title}) {
  return (
    <div className='relative w-full'>
    <img src={imgSrc} alt="" className='w-full object-cover h-3/6'/>
    <div className=' dark-ov'></div>
      <div className='text-box'>
        <h1 className='text-4xl font-bold mb-5'>{title}</h1>
        <p className='text-lg font-semibold leading-8'>
          During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. 
        </p>
        <button className='bg-white text-black px-3 py-3 rounded-md font-medium text-lg mt-5'>Watch now</button>
      </div>
    </div>
  )
}

export default HeaderCard