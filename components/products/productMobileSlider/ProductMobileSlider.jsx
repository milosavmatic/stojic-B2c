import classes from "./ProductMobileSlider.module.scss";
import Slider from "react-slick";
import ProductBoxSimpleSmall from "../productBoxSimpleSmall/ProductBoxSimpleSmall";
const ProductMobileSlider = ({ className }) => {
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
          <ProductBoxSimpleSmall />
        </div>
        <div className={classes["slick-small-img-div"]}>
          <ProductBoxSimpleSmall />
        </div>
      </Slider>
    </div>
  );
};

export default ProductMobileSlider;
