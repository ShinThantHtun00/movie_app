import {Splide, SplideSlide} from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import HeaderCard from "./HeaderCard";
import { useEffect } from "react";

function Header() {
    useEffect(() => {
      getRelatedMovies();
  },[]);

  const getRelatedMovies = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=ae1aef421d4eefc14e88dc9097be2e49&language=en-US");
    
    const data = await response.json()
    console.log(data);
  }



  return (
    <section>
      <Splide options={{
        type: "loop",
      }}>
        <SplideSlide>
          <HeaderCard imgSrc={"https://images4.alphacoders.com/132/1323605.jpeg"} title={"Oppenheimer"}/>
        </SplideSlide>
      </Splide>
    </section>
  )
}

export default Header