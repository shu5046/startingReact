import React from "react";
class MovieCard extends React.Component {
  render() {
    const { title, plot, poster, price, rating, star, fav, isInCart } =
      this.props.movies;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img src={poster} alt="Poster"></img>
          </div>
          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot} </div>
            <div className="price">Rs. {price}</div>
            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  className="str-btn"
                  src="https://cdn-icons-png.flaticon.com/128/9146/9146915.png"
                  onClick={() => {
                    this.props.removeStar(this.props.movies);
                  }}
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                  className="stars"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                  className="str-btn"
                  onClick={() => {
                    this.props.addStars(this.props.movies);
                  }}
                />
                <span>{star}</span>
              </div>
              <button
                className={fav ? "unfav-btn" : "fav-btn"}
                onClick={() => {
                  this.props.handleFav(this.props.movies);
                }}
              >
                {fav ? "Un-favourite" : "Favourite"}
              </button>
              <button
                className={isInCart ? "uncart-btn" : "cart-btn"}
                onClick={() => {
                  this.props.handleCart(this.props.movies);
                }}
              >
                {isInCart ? "Remove from cart" : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MovieCard;
