import React, { Component } from "react";
import heroFace from "../images/productHero/face.jpg";
import heroArm from "../images/productHero/armShields.jpg";
import heroDeals from "../images/productHero/dailyDeals.jpg";
import heroSwim from "../images/productHero/swimWear.jpg";
import heroStrawHats from "../images/productHero/strawHats.jpg";
import heroApparel from "../images/productHero/apparel.jpg";
import heroHeadWear from "../images/productHero/headWear.jpg";
import rings from "../images/productHero/rings.jpg";
import warmGear from "../images/productHero/warmGear.jpg";
import coldGear from "../images/productHero/coldGear.jpg";
import { Button, Col, Row, Container } from "react-bootstrap";

export default class Products extends Component {
  render() {
    return (
      <div>
        <Container fluid style={{ paddingTop: 25 }}>
          <Row>
            <Col
              style={{
                backgroundImage: `url(${heroFace})`,
                height: 500,
              }}
            >
              <div className="heroProducts">
                <h1 style={{ textShadow: "1px 2px #30b7d4" }}>FACE SHIELDS®</h1>
                <h5>The Ultimate Outdoor Protection</h5>
                <Button
                  style={{
                    backgroundColor: "#30b7d4",
                    textShadow: "1px 1px #000000",
                    fontSize: 25,
                  }}
                >
                  SHOP NOW
                </Button>
              </div>
            </Col>
            <Col
              style={{
                backgroundImage: `url(${heroStrawHats})`,
                height: 500,
              }}
            >
              <div className="heroProducts">
                <h1 style={{ textShadow: "3px 3px #30b7d4" }}>STRAW HATS</h1>
                <h5>Make life your Beach!</h5>
                <Button
                  style={{
                    backgroundColor: "#30b7d4",
                    textShadow: "1px 1px #000000",
                    fontSize: 25,
                  }}
                >
                  SHOP NOW
                </Button>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col
              md="4"
              style={{
                backgroundImage: `url(${heroArm})`,
                height: 500,
              }}
            >
              <div className="heroProducts">
                <h1 style={{ textShadow: "3px 3px #000000", color: "#ffff" }}>
                  ARM SHIELDS™
                </h1>
                <h5 style={{ textShadow: "3px 3px #000000", color: "#ffff" }}>
                  Lightweight, Breathable, UPF 30
                </h5>
                <Button
                  style={{
                    backgroundColor: "#30b7d4",
                    textShadow: "1px 1px #000000",
                    fontSize: 25,
                  }}
                >
                  SHOP NOW
                </Button>
              </div>
            </Col>
            <Col
              md="8"
              style={{
                backgroundImage: `url(${heroSwim})`,
                height: 500,
              }}
            >
              <div className="heroProducts">
                <h1 style={{ textShadow: "3px 3px #000000", color: "#ffff" }}>
                  SWIMWEAR
                </h1>
                <h5 style={{ textShadow: "2px 2px #000000", color: "#ffff" }}>
                  Featherlight 4-Way Stretch
                </h5>
                <Button
                  style={{
                    backgroundColor: "#30b7d4",
                    textShadow: "1px 1px #000000",
                    fontSize: 25,
                  }}
                >
                  SHOP NOW
                </Button>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col
              md="12"
              style={{
                backgroundImage: `url(${heroDeals})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top",
                height: 700,
              }}
            >
              <div className="heroProducts">
                <h1 style={{ textShadow: "3px 3px #000000", color: "#ffff" }}>
                  DAILY DEALS
                </h1>
                <h5 style={{ textShadow: "2px 2px #000000", color: "#ffff" }}>
                  Save Big on SA Apparel Packs
                </h5>
                <Button
                  style={{
                    backgroundColor: "#30b7d4",
                    textShadow: "1px 1px #000000",
                    fontSize: 25,
                  }}
                >
                  SHOP NOW
                </Button>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col
              md="8"
              style={{
                backgroundImage: `url(${heroHeadWear})`,
                height: 500,
              }}
            >
              <div className="heroProducts">
                <h1 style={{ textShadow: "3px 3px #000000", color: "#ffff" }}>
                  HEADWEAR
                </h1>
                <h5 style={{ textShadow: "2px 2px #000000", color: "#ffff" }}>
                  Designed for the Outdoors
                </h5>
                <Button
                  style={{
                    backgroundColor: "#30b7d4",
                    textShadow: "1px 1px #000000",
                    fontSize: 25,
                  }}
                >
                  SHOP NOW
                </Button>
              </div>
            </Col>
            <Col
              md="4"
              style={{
                backgroundImage: `url(${rings})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: 500,
              }}
            >
              <div className="heroProducts">
                <h1 style={{ textShadow: "3px 3px #000000", color: "#ffff" }}>
                  SILICONE RINGS
                </h1>
                <h5 style={{ textShadow: "2px 2px #000000", color: "#ffff" }}>
                  Comfortable & Safe Alternative
                </h5>
                <Button
                  style={{
                    backgroundColor: "#30b7d4",
                    textShadow: "1px 1px #000000",
                    fontSize: 25,
                  }}
                >
                  SHOP NOW
                </Button>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col
              md="12"
              style={{
                backgroundImage: `url(${heroApparel})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top",
                height: 700,
              }}
            >
              <div className="heroProducts">
                <h1 style={{ textShadow: "3px 3px #000000", color: "#ffff" }}>
                  APPAREL
                </h1>
                <h5 style={{ textShadow: "2px 2px #000000", color: "#ffff" }}>
                  Complete The Look
                </h5>
                <Button
                  style={{
                    backgroundColor: "#30b7d4",
                    textShadow: "1px 1px #000000",
                    fontSize: 25,
                  }}
                >
                  SHOP NOW
                </Button>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col
              style={{
                backgroundImage: `url(${warmGear})`,
                height: 500,
              }}
            >
              <div className="heroProducts">
                <h1 style={{ textShadow: "1px 2px #30b7d4", color: "#ffff" }}>
                  WARM GEAR
                </h1>
                <h5 style={{ textShadow: "1px 2px #30b7d4", color: "#ffff" }}>
                  Stay Cool & Feel Good
                </h5>
                <Button
                  style={{
                    backgroundColor: "#30b7d4",
                    textShadow: "1px 1px #000000",
                    fontSize: 25,
                  }}
                >
                  SHOP NOW
                </Button>
              </div>
            </Col>
            <Col
              style={{
                backgroundImage: `url(${coldGear})`,
                height: 500,
              }}
            >
              <div className="heroProducts">
                <h1 style={{ textShadow: "2px 2px #30b7d4" }}>
                  FLEECE FACE SHIELDS®
                </h1>
                <h5 style={{ color: "#ffff" }}>Superior Cold Protection</h5>
                <Button
                  style={{
                    backgroundColor: "#30b7d4",
                    textShadow: "1px 1px #000000",
                    fontSize: 25,
                  }}
                >
                  SHOP NOW
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
