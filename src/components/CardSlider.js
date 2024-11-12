
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomStyles.css';

const CardSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className=" mt-5 dk">
      <h2 className="text-center mb-4 section-header-title">SECTION III</h2>
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        indicators={false}
        interval={null}
        nextIcon={<span className="carousel-control-next-icon" aria-hidden="true"></span>}
        prevIcon={<span className="carousel-control-prev-icon" aria-hidden="true"></span>}
        className="new-custom-carousel"
      >
        <Carousel.Item>
          <div className="new-card p-4">
            <div className="new-card-body">
              <h5 className="new-card-title text-center">Card 1</h5>
              <p className="new-quote new-card-text">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="new-card p-4">
            <div className="new-card-body">
              <h5 className="new-card-title text-center">Card 2</h5>
              <p className="new-quote new-card-text">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <div className="new-carousel-indicators text-center">
        <button
          type="button"
          data-bs-target=".new-custom-carousel"
          data-bs-slide-to="0"
          className={activeIndex === 0 ? "active" : ""}
          onClick={() => handleSelect(0)}
        ></button>
        <button
          type="button"
          data-bs-target=".new-custom-carousel"
          data-bs-slide-to="1"
          className={activeIndex === 1 ? "active" : ""}
          onClick={() => handleSelect(1)}
        ></button>
      </div>
      <div className="text-center mt-3">
        <button type="button" className="btn btn-primary new-slider-button">Slider Button</button>
      </div>
    </div>
  );
};

export default CardSlider;
