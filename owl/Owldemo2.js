import dynamic from "next/dynamic";
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from "./Owl.module.css";

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
      items: 6,
    },
  },
};

const Owldemo2 = (props) => {
  return (
    <div className={styles["owl-holder"]}>
      <div className={styles["container-fluid"]}>
        <OwlCarousel
          items={6}
          className={styles["owl-theme"]}
          loop
          responsiveClass={true}
          autoplay={true}
          {...options}
          nav
          margin={8}
        >
          {props.children}
        </OwlCarousel>
      </div>
    </div>
  );
};
export default Owldemo2;
