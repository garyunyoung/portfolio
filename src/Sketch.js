import React, { Component } from "react";
import Sketch from "react-p5";

export default class Contact extends Component {
  x = 50;
  y = 50;

  style = {
    position: "fixed",
    left: 0,
    zIndex: "-1",
    height: "100%"
  };

  setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
  };

  draw = p5 => {
    p5.background(234);
    p5.ellipse(this.x, this.y, 70, 70);
    this.x++;
  };

  windowResized = p5 => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  render() {
    return (
      <Sketch
        setup={this.setup}
        draw={this.draw}
        windowResized={this.windowResized}
        style={this.style}
      />
    );
  }
}
