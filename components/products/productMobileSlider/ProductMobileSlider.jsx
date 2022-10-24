// import classes './ProductMobileSlider.module.scss';
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
        className={"mobile-banner-slider"}
      >
        <div className="slick-small-img-div">
          <ProductBoxSimpleSmall />
        </div>
        <div className="slick-small-img-div">
          <ProductBoxSimpleSmall />
        </div>
      </Slider>
    </div>
  );
};

export default ProductMobileSlider;
