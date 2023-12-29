import {Splide, SplideSlide} from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import HeaderCard from "./HeaderCard";

function Header() {
  return (
    <section>
      <Splide options={{
        type: "loop",
      }}>
        <SplideSlide>
          <HeaderCard imgSrc={"https://images4.alphacoders.com/132/1323605.jpeg"} title={"Oppenheimer"}/>
        </SplideSlide>

        <SplideSlide>
          <HeaderCard imgSrc={"https://images7.alphacoders.com/550/550739.jpg"} title={"Interstellar"}/>
        </SplideSlide>
        
      </Splide>
    </section>
  )
}

export default Header