import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductDetailsSlider.module.scss";
import {
  faChevronDown,
  faChevronUp,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useWindowDimensions } from "../../../helpers/functions";

function Arrow(props) {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className += " arrow";
  const char =
    props.type === "next" ? (
      <FontAwesomeIcon className="slick-next-arrow" icon={faChevronDown} />
    ) : (
      <FontAwesomeIcon className="slick-prev-arrow" icon={faChevronUp} />
    );
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
}
function Arrow2(props) {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className += " arrow";
  const char =
    props.type === "next" ? (
      <FontAwesomeIcon className="slick-next-arrow" icon={faChevronRight} />
    ) : (
      <FontAwesomeIcon className="slick-prev-arrow" icon={faChevronLeft} />
    );
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
}

const ProductDetailsSlider = (props) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [numberOfImages, setNumberOfImages] = useState(5);
  // const { height, width } = useWindowDimensions();
  // useEffect(() => {
  //   console.log(width);
  // }, [width]);
  return (
    <>
      <div className="container col-12 product-details-slider-container">
        <div className="row flex-start">
          <div className="col-md-2 slick-flex-down">
            <div className="col-10">
              <Slider
                asNavFor={nav2}
                ref={(slider1) => setNav1(slider1)}
                focusOnSelect={true}
                centerPadding="20px"
                arrows={false}
                // vertical={width > 767.98 ? true : false}
                infinite={true}
                // verticalSwiping={width > 767.98 ? true : false}
                dots={false}
                slidesToShow={numberOfImages > 3 ? 3 : numberOfImages}
                className={"vertical-slider"}
              >
                <div className="slick-small-img-div">
                  <img
                    className="slick-small-img"
                    alt=""
                    src={process.env.PUBLIC_URL + "/images/1.png"}
                  />
                </div>
                <div className="slick-small-img-div">
                  <img
                    className="slick-small-img"
                    alt=""
                    src={process.env.PUBLIC_URL + "/images/2.png"}
                  />
                </div>
                <div className="slick-small-img-div">
                  <img
                    className="slick-small-img"
                    alt=""
                    src={process.env.PUBLIC_URL + "/images/3.png"}
                  />
                </div>
                <div className="slick-small-img-div">
                  <img
                    className="slick-small-img"
                    alt=""
                    src={process.env.PUBLIC_URL + "/images/4.png"}
                  />
                </div>
                <div className="slick-small-img-div">
                  <img
                    className="slick-small-img"
                    alt=""
                    src={process.env.PUBLIC_URL + "/images/0.png"}
                  />
                </div>
              </Slider>
            </div>
          </div>

          <div className="col-md-10">
            <Slider
              asNavFor={nav1}
              ref={(slider2) => setNav2(slider2)}
              focusOnSelect={false}
              infinite={true}
              draggable={true}
              vertical={false}
              // arrows={width > 767.98 ? true : false}
              nextArrow={<Arrow2 type="next" />}
              prevArrow={<Arrow2 type="prev" />}
              dots={false}
              className={"big-slick-slider"}
            >
              <div className="slick-small-img-div">
                <img
                  className="slick-small-img"
                  alt=""
                  src={process.env.PUBLIC_URL + "/images/1.png"}
                />
              </div>
              <div className="slick-small-img-div">
                <img
                  className="slick-small-img"
                  alt=""
                  src={process.env.PUBLIC_URL + "/images/2.png"}
                />
              </div>
              <div className="slick-small-img-div">
                <img
                  className="slick-small-img"
                  alt=""
                  src={process.env.PUBLIC_URL + "/images/3.png"}
                />
              </div>
              <div className="slick-small-img-div">
                <img
                  className="slick-small-img"
                  alt=""
                  src={process.env.PUBLIC_URL + "/images/4.png"}
                />
              </div>
              <div className="slick-small-img-div">
                <img
                  className="slick-small-img"
                  alt=""
                  src={process.env.PUBLIC_URL + "/images/0.png"}
                />
              </div>
            </Slider>
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsSlider;
