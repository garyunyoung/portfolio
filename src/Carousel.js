import React from "react";
import "./Carousel.scss";

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        currentSlide:0
    }
  }

  handleClick(indexChange) {
    this.setState((prevState, props) => {
      const newIndex = prevState.currentSlide + indexChange;
      return {
        currentSlide: (newIndex + props.images.length) % props.images.length
      };
    });
  }

  render() {
    return (
      <section className="carousel">
        <h1 className="carousel__button"
            onClick={() => { this.handleClick(-1);
            }}>{`<`}</h1>
        <div className="carousel__wrapper">
          <img className="carousel__image" src={this.props.images[this.state.currentSlide].img} />
          <p className="carousel__image__info">{this.props.images[this.state.currentSlide].imgInfo}</p>
        </div>
        <h1 className="carousel__button" 
            onClick={() => { this.handleClick(-1);
            }}>{`>`}</h1>
      </section>
    );
  }
}
