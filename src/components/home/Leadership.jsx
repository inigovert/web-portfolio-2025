import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Jumbotron } from "./migration";

const Leadership = ({ heading, message, img, imageSize }) => {
  return (
    <Jumbotron
      id="leadership"
      className="m-0"
      style={{ backgroundColor: "white" }}
    >
      <h2 className="display-4 pb-5 text-center">{heading}</h2>
      <div className="row">
        <div className="col-md-5">
          <p className="lead">{message}</p>
        </div>
        <div className="col-md-7">
          <Carousel>
            {img.map((value, index) => {
              return (
                <Carousel.Item key={index}>
                  <div className="carousel-image-container">
                    <img
                      className="d-block w-100 carousel-image"
                      src={value.img}
                      alt={value.label || "Leadership image"}
                    />
                  </div>
                  <Carousel.Caption
                    className="responsive-caption"
                    style={{
                      fontSize: '1rem',
                      background: 'rgba(0, 0, 0, 0.7)',
                      borderRadius: '8px',
                      padding: '5px 10px',
                      bottom: '40px',
                      left: '50%',
                      right: 'auto',
                      transform: 'translateX(-50%)',
                      maxWidth: '90%'
                    }}>
                    <h3>{value.label}</h3>
                    <p>
                      {value.paragraph}
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Leadership;