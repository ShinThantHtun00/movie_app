import {Splide, SplideSlide} from "@splidejs/react-splide"
import '@splidejs/react-splide/css';

function Header() {
  return (
    <section>
      <Splide options={{
        type: "loop",
      }}>
        <SplideSlide>
          <div className='relative'>
            <img src="https://4kwallpapers.com/images/wallpapers/oppenheimer-8k-2023-8000x4500-12220.jpg" alt="" className='w-full object-cover'/>
            <div className=' dark-ov'></div>
              <div className='text-box'>
                <h1 className='text-4xl font-bold mb-5'>Oppenheimer</h1>
                <p className='text-lg font-semibold leading-8'>
                  During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. 
                </p>
                <button className='bg-white text-black px-3 py-3 rounded-md font-medium text-lg mt-5'>Watch now</button>
              </div>
            </div>
        </SplideSlide>
      </Splide>
    </section>
  )
}

export default Header