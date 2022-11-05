import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heartImg from "../../assets/images/elements/heart.png";
import printerImg from "../../assets/images/elements/print.png";
import compareImg from "../../assets/images/elements/compare.png";
import classes from "./ProductDetailsSlider.module.scss";
import {
  faChevronDown,
  faChevronUp,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowDimensions } from "../../assets/helpers/functions";
import Image from "next/image";

function Arrow(props) {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className += " arrow";
  const char =
    props.type === "next" ? (
      <FontAwesomeIcon
        className={classes["slick-next-arrow"]}
        icon={faChevronDown}
      />
    ) : (
      <FontAwesomeIcon
        className={classes["slick-prev-arrow"]}
        icon={faChevronUp}
      />
    );
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
}
function Arrow2(props) {
  let className = props.type === "next" ? classes.nextArrow : classes.prevArrow;
  className = className + classes.arrow;
  const char =
    props.type === "next" ? (
      <FontAwesomeIcon
        className={`${classes["slick-next-arrow"]} ${classes.nextArrow} ${classes.arrow}`}
        icon={faChevronRight}
      />
    ) : (
      <FontAwesomeIcon
        className={`${classes["slick-prev-arrow"]} ${classes.prevArrow} ${classes.arrow}`}
        icon={faChevronLeft}
      />
    );
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
}

const ProductDetailsSlider = ({ images = [], ...props }) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [numberOfImages, setNumberOfImages] = useState(images?.length ?? 5);
  const { height, width } = useWindowDimensions();
  return (
    <>
      <div className={classes["product-details-slider-container"] + " col-12"}>
        <div className=" row flex-start">
          <div className=" col-md-2 ">
            <div className="col-10">
              <Slider
                asNavFor={nav2}
                ref={(slider1) => setNav1(slider1)}
                focusOnSelect={true}
                centerPadding="20px"
                arrows={false}
                vertical={width > 767.98 ? true : false}
                infinite={true}
                verticalSwiping={width > 767.98 ? true : false}
                dots={false}
                slidesToShow={numberOfImages > 3 ? 3 : numberOfImages}
                className={"vertical-slider"}
              >
                {images.map((item, index) => (
                  <div key={item.image} className="slick-small-img-div">
                    <Image
                      className="slick-small-img"
                      alt=""
                      src={item.image}
                      layout="fill"
                    />
                  </div>
                ))}
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
              arrows={width > 767.98 ? true : false}
              nextArrow={<Arrow2 type="next" />}
              prevArrow={<Arrow2 type="prev" />}
              dots={false}
              className={"big-slick-slider"}
            >
              {images.map((item) => (
                <div key={item.image} className="slick-big-img-div">
                  <Image
                    className="slick-small-img"
                    alt=""
                    src={item.image}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              ))}
            </Slider>
            <div
              className={`${classes["under-details-buttons"]} ${classes["mobile-show"]}`}
            >
              <div className={classes["under-details-buttons-surrounder"]}>
                <button className={classes["under-details-buttons-button"]}>
                  <Image
                    alt="compare"
                    src={compareImg}
                    className={classes["under-details-image"]}
                  />
                  Uporedi
                </button>
              </div>
              <div className={classes["under-details-buttons-surrounder"]}>
                <button className={classes["under-details-buttons-button"]}>
                  <Image
                    alt="compare"
                    src={printerImg}
                    className={classes["under-details-image"]}
                  />
                  Štampaj
                </button>
              </div>
              <div className={classes["under-details-buttons-surrounder"]}>
                <button className={classes["under-details-buttons-button"]}>
                  <Image
                    alt="compare"
                    src={heartImg}
                    className={classes["under-details-image"]}
                  />
                  Sačuvaj
                </button>
              </div>
            </div>
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsSlider;
