import classes from "./MobileBannerSlider.module.scss";
import Slider from "react-slick";
const MobileBannerSlider = ({ className }) => {
  return (
    <div className={className}>
      <Slider
        focusOnSelect={false}
        infinite={true}
        draggable={true}
        vertical={false}
        arrows={false}
        dots={true}
        className={classes["mobile-banner-slider"]}
      >
        <div className={classes["slick-small-img-div"]}>
          <img
            className={classes["slick-small-img"]}
            alt=""
            src={"/images/banners/couple-banner-mobile.png"}
          />
        </div>
        <div className={classes["slick-small-img-div"]}>
          <img
            className={classes["slick-small-img"]}
            alt=""
            src={"/images/banners/worker-banner-mobile.png"}
          />
        </div>
        <div className={classes["slick-small-img-div"]}>
          <img
            className={classes["slick-small-img"]}
            alt=""
            src={"/images/banners/cart-banner.png"}
          />
        </div>
      </Slider>
    </div>
  );
};

export default MobileBannerSlider;
