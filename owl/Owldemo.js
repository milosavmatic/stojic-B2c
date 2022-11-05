import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import { ProductItems } from "./helpers/const";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const options = {
  margin: 30,
  responsiveClass: true,
  nav: false,
  dots: true,
  autoplay: true,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
};

export class OwlDemo extends Component {
  render() {
    return (
      <div className="container-fluid">
        {ProductItems.map((item) => (
          <OwlCarousel
            items={3}
            margin={8}
            responsiveClass={true}
            autoplay={true}
            {...options}
            key={Math.random()}
          >
            <div>
              <img className="img" src={process.env.PUBLIC_URL + item.img} />
            </div>
          </OwlCarousel>
        ))}
      </div>
    );
  }
}

export default OwlDemo;
