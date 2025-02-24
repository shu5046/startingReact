import React from "react";
class MovieCard extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "The Avengers",
      plot: "Action movie ",
      price: 199,
      rating: 8.9,
      stars: 0,
    };
  }
  removeStars = ()=>{
    this.setState((ps)=>{
        return {
           stars : ps.stars-0.5,
        }
    })
  }
  addStars = () => {
    //form1
    // this.setState({
    //   stars: this.state.stars + 0.5,
    // });

    //Second form
    this.setState((prevState)=>{
        return{
            stars: prevState.stars+0.5,
        }
    })
  };
  render() {
    const { title, plot, price, rating, stars } = this.state;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              src="https://i.pinimg.com/736x/b1/c4/3e/b1c43e26432f232acbfdc52726a1ae83.jpg"
              alt="Poster"
            ></img>
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
                  onClick={this.removeStars}
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                  className="stars"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                  className="str-btn"
                  onClick={this.addStars}
                />
                <span>{stars}</span>
              </div>

              <button className="fav-btn">Favourite</button>
              <button className="cart-btn">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MovieCard;
