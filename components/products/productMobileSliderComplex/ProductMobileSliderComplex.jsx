// import "./ProductMobileSliderComplex.module.scss";
import Slider from "react-slick";
import ProductBoxComplexSmall from "../productBoxComplexSmall/ProductBoxComplexSmall";
const ProductMobileSliderComplex = ({ className }) => {
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
          <ProductBoxComplexSmall img="1" />
        </div>
        <div className="slick-small-img-div">
          <ProductBoxComplexSmall img="2" />
        </div>
        <div className="slick-small-img-div">
          <ProductBoxComplexSmall img="3" />
        </div>
        <div className="slick-small-img-div">
          <ProductBoxComplexSmall img="2" />
        </div>
        <div className="slick-small-img-div">
          <ProductBoxComplexSmall img="4" />
        </div>
        <div className="slick-small-img-div">
          <ProductBoxComplexSmall img="1" />
        </div>
        <div className="slick-small-img-div">
          <ProductBoxComplexSmall img="3" />
        </div>
      </Slider>
    </div>
  );
};

export default ProductMobileSliderComplex;
