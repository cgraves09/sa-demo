import React, { Component } from "react";
import armBands from "../images/armBands.png";
import faceShields from "../images/faceShields.png";
import headwear from "../images/headwear.png";
import kids from "../images/kids.png";
import shirts from "../images/shirts.png";
import strawHats from "../images/strawHats.png";
import summer from "../images/summer.png";
import { Carousel, Container } from "react-bootstrap";
export default class CarouselComponent extends Component {
  render() {
    return (
      <Container fluid style={{ padding: "0", paddingBottom: 25 }}>
        <Carousel interval="3000">
          <Carousel.Item>
            <img className="d-block w-100" src={summer} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={armBands} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={faceShields}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={headwear} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={kids} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={shirts} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={strawHats} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}
