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

  circles = [];
  numOfCircles = 13;

  setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
  };

  draw = p5 => {
    // p5.fill(0,50,80);
    // p5.fill(0,20,80);
    // p5.fill(90,10,90);
    // p5.stroke(255);
    // p5.ellipse(0, 0, 0, 0);
  };

  mouseMoved = p5 => {
    p5.ellipse(p5.mouseX, p5.mouseY, 150, 150);
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
        mouseMoved={this.mouseMoved}
      />
    );
  }
}
