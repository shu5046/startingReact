import { Component } from "react";
import MovieCard from "./Moviecard";

export default class MovieList extends Component {
  
 
  render() {
    const { movies,addStars,removeStar,handleCart,handleFav } = this.props;
    return (
      <>
        {movies.map((movie) => (
          <MovieCard
            movies={movie}
            addStars={addStars}
            removeStar={removeStar}
            handleFav={handleFav}
            handleCart={handleCart}
          />
        ))}
      </>
    );
  }
}
// title={title}
//                     plot={plot}
//                     price={price}
//                     rating={rating}
//                     stars = {stars}
//                     fav = {fav}
//                     isInCart = {isInCart}
