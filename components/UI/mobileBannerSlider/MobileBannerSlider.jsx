import "./MobileBannerSlider.module.scss";
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
        className={"mobile-banner-slider"}
      >
        <div className="slick-small-img-div">
          <img
            className="slick-small-img"
            alt=""
            src={"/images/banners/couple-banner-mobile.png"}
          />
        </div>
        <div className="slick-small-img-div">
          <img
            className="slick-small-img"
            alt=""
            src={"/images/banners/worker-banner-mobile.png"}
          />
        </div>
        <div className="slick-small-img-div">
          <img
            className="slick-small-img"
            alt=""
            src={"/images/banners/cart-banner.png"}
          />
        </div>
      </Slider>
    </div>
  );
};

export default MobileBannerSlider;
