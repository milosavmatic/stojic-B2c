import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { ProductSlider } from '../helpers/const';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import heartImg from '../assets/images/elements/heart.png';
import printerImg from '../assets/images/elements/print.png';
import compareImg from '../assets/images/elements/compare.png';
import classes from './ProductDetails.module.scss';
import {
  faChevronDown,
  faChevronUp,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useWindowDimensions } from '../helpers/functions';
import Image from 'next/image';

/**
 * Slider for product images on Single product page of B2B
 *
 * @author Aleksandar Ječmenić <aleksandar.jecmenic@croonus.com>
 */
function Arrow(props) {
  let className = props.type === 'next' ? 'nextArrow' : 'prevArrow';
  className += ' arrow';
  const char =
    props.type === 'next' ? (
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
  let className = props.type === 'next' ? 'nextArrow' : 'prevArrow';
  className += ' arrow';
  const char =
    props.type === 'next' ? (
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

const ProductDetailsSlider = ({ images = [], addToWishList, ...props }) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [numberOfImages, setNumberOfImages] = useState(images?.length ?? 5);
  const { height, width } = useWindowDimensions();

  return (
    <>
      <div className=" col-12 product-details-slider-container">
        <div className="row flex-start">
          <div className="col-md-2 slick-flex-down">
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
                className={'vertical-slider'}
              >
                {images.map((item, index) => (
                  <div key={item.image} className="slick-small-img-div">
                    <Image
                      className="slick-small-img"
                      alt=""
                      src={item.image}
                      width={70}
                      height={50}
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
              className={'big-slick-slider'}
            >
              {images.length === 0 && (
                <div key={'missing'} className="slick-small-img-div">
                  <Image
                    className="slick-small-img"
                    alt=""
                    src={'/products/missing.png'}
                    width={600}
                    height={450}
                  />
                </div>
              )}
              {images.map((item) => (
                <div key={item.image} className="slick-big-img-div">
                  <Image
                    className="slick-small-img"
                    alt=""
                    src={item.image}
                    width={600}
                    height={450}
                  />
                </div>
              ))}
            </Slider>

            {props.children}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div
              className={`${classes['under-details-buttons']} ${classes['mobile-show']}`}
            >
              <div className={classes['under-details-buttons-surrounder']}>
                <button className={classes['under-details-buttons-button']}>
                  <Image
                    alt="compare"
                    src={compareImg}
                    className={classes['under-details-image']}
                  />
                  Uporedi
                </button>
              </div>
              <div className={classes['under-details-buttons-surrounder']}>
                <button className={classes['under-details-buttons-button']}>
                  <Image
                    alt="compare"
                    src={printerImg}
                    className={classes['under-details-image']}
                  />
                  Štampaj
                </button>
              </div>
              <div className={classes['under-details-buttons-surrounder']}>
                <button
                  className={classes['under-details-buttons-button']}
                  onClick={addToWishList}
                >
                  <Image
                    alt="compare"
                    src={heartImg}
                    className={classes['under-details-image']}
                  />
                  Sačuvaj
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsSlider;
