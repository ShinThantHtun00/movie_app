
import {Splide, SplideSlide} from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import HeaderCard from "./HeaderCard";
import { useEffect, useState } from "react";

const Header = () => {

  const [relatedMovies, setRelatedMovies] = useState([]);

    useEffect(() => {
      getRelatedMovies();
  },[]);

  const getRelatedMovies = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=ae1aef421d4eefc14e88dc9097be2e49&language=en-US");
    
    const data = await response.json()
    setRelatedMovies(data.results)
    console.log(data.results);
  };

  return (
    <section>
      <Splide options={{
        type: "loop",
        arrows : false,
      }}>

        {
          relatedMovies.map((movie) => {
            return(
              <SplideSlide>
                <HeaderCard movie={movie}/>
              </SplideSlide>
            )
          })}
      </Splide>
    </section>
  )
}

export default Header