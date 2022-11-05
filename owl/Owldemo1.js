import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React, { Component } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import wishlist from "./assets/images/elements/heart.png";
import cart from "./assets/images/elements/cart-white.png";
import classes from "./Components/ActionProducts.module.scss";
import img1 from "./assets/images/product5.jpg";
import "./Owl.css";
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
      items: 3,
    },
  },
};

export class Owldemo1 extends Component {
  render() {
    return (
      <div className="owl-holder">
        <div className="container-fluid">
          <OwlCarousel
            items={6}
            className="owl-theme"
            loop
            responsiveClass={true}
            autoplay={true}
            {...options}
            nav
            margin={8}
          >
            <div>
              <div className={`${classes["action-product-col"] + " col-12"}`}>
                <div className={`${classes["action-product-holder"]}`}>
                  <div className={classes["image-holder"]}>
                    <img
                      src={img1}
                      className="d-inline-block align-top w-100 img-fluid"
                      alt="React"
                    />
                  </div>
                  <div className={`${classes["info-holder"]}`}>
                    <p>Title</p>
                    <p className={`${classes["old-price"]}`}>300</p>
                    <p className={`${classes["price"]}`}>250</p>
                    <span className={`${classes["badge-action"]}`}>Akcija</span>
                    <span className={`${classes["badge-action-percent"]}`}>
                      -15%
                    </span>
                    <div className={`${classes["wishlist"]}`}>
                      <img
                        src={wishlist}
                        className="d-inline-block w-100 img-fluid"
                        alt="React"
                      />
                    </div>
                    <div className={classes["add-to-cart"]}>
                      <img
                        src={cart}
                        className="d-inline-block align-top img-fluid"
                        alt="React"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={`${classes["action-product-col"] + " col-12"}`}>
                <div className={`${classes["action-product-holder"]}`}>
                  <div className={classes["image-holder"]}>
                    <img
                      src={img1}
                      className="d-inline-block align-top w-100 img-fluid"
                      alt="React"
                    />
                  </div>
                  <div className={`${classes["info-holder"]}`}>
                    <p>Title</p>
                    <p className={`${classes["old-price"]}`}>300</p>
                    <p className={`${classes["price"]}`}>250</p>
                    <span className={`${classes["badge-action"]}`}>Akcija</span>
                    <span className={`${classes["badge-action-percent"]}`}>
                      -15%
                    </span>
                    <div className={`${classes["wishlist"]}`}>
                      <img
                        src={wishlist}
                        className="d-inline-block w-100 img-fluid"
                        alt="React"
                      />
                    </div>
                    <div className={classes["add-to-cart"]}>
                      <img
                        src={cart}
                        className="d-inline-block align-top img-fluid"
                        alt="React"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={`${classes["action-product-col"] + " col-12"}`}>
                <div className={`${classes["action-product-holder"]}`}>
                  <div className={classes["image-holder"]}>
                    <img
                      src={img1}
                      className="d-inline-block align-top w-100 img-fluid"
                      alt="React"
                    />
                  </div>
                  <div className={`${classes["info-holder"]}`}>
                    <p>Title</p>
                    <p className={`${classes["old-price"]}`}>300</p>
                    <p className={`${classes["price"]}`}>250</p>
                    <span className={`${classes["badge-action"]}`}>Akcija</span>
                    <span className={`${classes["badge-action-percent"]}`}>
                      -15%
                    </span>
                    <div className={`${classes["wishlist"]}`}>
                      <img
                        src={wishlist}
                        className="d-inline-block w-100 img-fluid"
                        alt="React"
                      />
                    </div>
                    <div className={classes["add-to-cart"]}>
                      <img
                        src={cart}
                        className="d-inline-block align-top img-fluid"
                        alt="React"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={`${classes["action-product-col"] + " col-12"}`}>
                <div className={`${classes["action-product-holder"]}`}>
                  <div className={classes["image-holder"]}>
                    <img
                      src={img1}
                      className="d-inline-block align-top w-100 img-fluid"
                      alt="React"
                    />
                  </div>
                  <div className={`${classes["info-holder"]}`}>
                    <p>Title</p>
                    <p className={`${classes["old-price"]}`}>300</p>
                    <p className={`${classes["price"]}`}>250</p>
                    <span className={`${classes["badge-action"]}`}>Akcija</span>
                    <span className={`${classes["badge-action-percent"]}`}>
                      -15%
                    </span>
                    <div className={`${classes["wishlist"]}`}>
                      <img
                        src={wishlist}
                        className="d-inline-block w-100 img-fluid"
                        alt="React"
                      />
                    </div>
                    <div className={classes["add-to-cart"]}>
                      <img
                        src={cart}
                        className="d-inline-block align-top img-fluid"
                        alt="React"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={`${classes["action-product-col"] + " col-12"}`}>
                <div className={`${classes["action-product-holder"]}`}>
                  <div className={classes["image-holder"]}>
                    <img
                      src={img1}
                      className="d-inline-block align-top w-100 img-fluid"
                      alt="React"
                    />
                  </div>
                  <div className={`${classes["info-holder"]}`}>
                    <p>Title</p>
                    <p className={`${classes["old-price"]}`}>300</p>
                    <p className={`${classes["price"]}`}>250</p>
                    <span className={`${classes["badge-action"]}`}>Akcija</span>
                    <span className={`${classes["badge-action-percent"]}`}>
                      -15%
                    </span>
                    <div className={`${classes["wishlist"]}`}>
                      <img
                        src={wishlist}
                        className="d-inline-block w-100 img-fluid"
                        alt="React"
                      />
                    </div>
                    <div className={classes["add-to-cart"]}>
                      <img
                        src={cart}
                        className="d-inline-block align-top img-fluid"
                        alt="React"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={`${classes["action-product-col"] + " col-12"}`}>
                <div className={`${classes["action-product-holder"]}`}>
                  <div className={classes["image-holder"]}>
                    <img
                      src={img1}
                      className="d-inline-block align-top w-100 img-fluid"
                      alt="React"
                    />
                  </div>
                  <div className={`${classes["info-holder"]}`}>
                    <p>Title</p>
                    <p className={`${classes["old-price"]}`}>300</p>
                    <p className={`${classes["price"]}`}>250</p>
                    <span className={`${classes["badge-action"]}`}>Akcija</span>
                    <span className={`${classes["badge-action-percent"]}`}>
                      -15%
                    </span>
                    <div className={`${classes["wishlist"]}`}>
                      <img
                        src={wishlist}
                        className="d-inline-block w-100 img-fluid"
                        alt="React"
                      />
                    </div>
                    <div className={classes["add-to-cart"]}>
                      <img
                        src={cart}
                        className="d-inline-block align-top img-fluid"
                        alt="React"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={`${classes["action-product-col"] + " col-12"}`}>
                <div className={`${classes["action-product-holder"]}`}>
                  <div className={classes["image-holder"]}>
                    <img
                      src={img1}
                      className="d-inline-block align-top w-100 img-fluid"
                      alt="React"
                    />
                  </div>
                  <div className={`${classes["info-holder"]}`}>
                    <p>Title</p>
                    <p className={`${classes["old-price"]}`}>300</p>
                    <p className={`${classes["price"]}`}>250</p>
                    <span className={`${classes["badge-action"]}`}>Akcija</span>
                    <span className={`${classes["badge-action-percent"]}`}>
                      -15%
                    </span>
                    <div className={`${classes["wishlist"]}`}>
                      <img
                        src={wishlist}
                        className="d-inline-block w-100 img-fluid"
                        alt="React"
                      />
                    </div>
                    <div className={classes["add-to-cart"]}>
                      <img
                        src={cart}
                        className="d-inline-block align-top img-fluid"
                        alt="React"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={`${classes["action-product-col"] + " col-12"}`}>
                <div className={`${classes["action-product-holder"]}`}>
                  <div className={classes["image-holder"]}>
                    <img
                      src={img1}
                      className="d-inline-block align-top w-100 img-fluid"
                      alt="React"
                    />
                  </div>
                  <div className={`${classes["info-holder"]}`}>
                    <p>Title</p>
                    <p className={`${classes["old-price"]}`}>300</p>
                    <p className={`${classes["price"]}`}>250</p>
                    <span className={`${classes["badge-action"]}`}>Akcija</span>
                    <span className={`${classes["badge-action-percent"]}`}>
                      -15%
                    </span>
                    <div className={`${classes["wishlist"]}`}>
                      <img
                        src={wishlist}
                        className="d-inline-block w-100 img-fluid"
                        alt="React"
                      />
                    </div>
                    <div className={classes["add-to-cart"]}>
                      <img
                        src={cart}
                        className="d-inline-block align-top img-fluid"
                        alt="React"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={`${classes["action-product-col"] + " col-12"}`}>
                <div className={`${classes["action-product-holder"]}`}>
                  <div className={classes["image-holder"]}>
                    <img
                      src={img1}
                      className="d-inline-block align-top w-100 img-fluid"
                      alt="React"
                    />
                  </div>
                  <div className={`${classes["info-holder"]}`}>
                    <p>Title</p>
                    <p className={`${classes["old-price"]}`}>300</p>
                    <p className={`${classes["price"]}`}>250</p>
                    <span className={`${classes["badge-action"]}`}>Akcija</span>
                    <span className={`${classes["badge-action-percent"]}`}>
                      -15%
                    </span>
                    <div className={`${classes["wishlist"]}`}>
                      <img
                        src={wishlist}
                        className="d-inline-block w-100 img-fluid"
                        alt="React"
                      />
                    </div>
                    <div className={classes["add-to-cart"]}>
                      <img
                        src={cart}
                        className="d-inline-block align-top img-fluid"
                        alt="React"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={`${classes["action-product-col"] + " col-12"}`}>
                <div className={`${classes["action-product-holder"]}`}>
                  <div className={classes["image-holder"]}>
                    <img
                      src={img1}
                      className="d-inline-block align-top w-100 img-fluid"
                      alt="React"
                    />
                  </div>
                  <div className={`${classes["info-holder"]}`}>
                    <p>Title</p>
                    <p className={`${classes["old-price"]}`}>300</p>
                    <p className={`${classes["price"]}`}>250</p>
                    <span className={`${classes["badge-action"]}`}>Akcija</span>
                    <span className={`${classes["badge-action-percent"]}`}>
                      -15%
                    </span>
                    <div className={`${classes["wishlist"]}`}>
                      <img
                        src={wishlist}
                        className="d-inline-block w-100 img-fluid"
                        alt="React"
                      />
                    </div>
                    <div className={classes["add-to-cart"]}>
                      <img
                        src={cart}
                        className="d-inline-block align-top img-fluid"
                        alt="React"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={`${classes["action-product-col"] + " col-12"}`}>
                <div className={`${classes["action-product-holder"]}`}>
                  <div className={classes["image-holder"]}>
                    <img
                      src={img1}
                      className="d-inline-block align-top w-100 img-fluid"
                      alt="React"
                    />
                  </div>
                  <div className={`${classes["info-holder"]}`}>
                    <p>Title</p>
                    <p className={`${classes["old-price"]}`}>300</p>
                    <p className={`${classes["price"]}`}>250</p>
                    <span className={`${classes["badge-action"]}`}>Akcija</span>
                    <span className={`${classes["badge-action-percent"]}`}>
                      -15%
                    </span>
                    <div className={`${classes["wishlist"]}`}>
                      <img
                        src={wishlist}
                        className="d-inline-block w-100 img-fluid"
                        alt="React"
                      />
                    </div>
                    <div className={classes["add-to-cart"]}>
                      <img
                        src={cart}
                        className="d-inline-block align-top img-fluid"
                        alt="React"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={`${classes["action-product-col"] + " col-12"}`}>
                <div className={`${classes["action-product-holder"]}`}>
                  <div className={classes["image-holder"]}>
                    <img
                      src={img1}
                      className="d-inline-block align-top w-100 img-fluid"
                      alt="React"
                    />
                  </div>
                  <div className={`${classes["info-holder"]}`}>
                    <p>Title</p>
                    <p className={`${classes["old-price"]}`}>300</p>
                    <p className={`${classes["price"]}`}>250</p>
                    <span className={`${classes["badge-action"]}`}>Akcija</span>
                    <span className={`${classes["badge-action-percent"]}`}>
                      -15%
                    </span>
                    <div className={`${classes["wishlist"]}`}>
                      <img
                        src={wishlist}
                        className="d-inline-block w-100 img-fluid"
                        alt="React"
                      />
                    </div>
                    <div className={classes["add-to-cart"]}>
                      <img
                        src={cart}
                        className="d-inline-block align-top img-fluid"
                        alt="React"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default Owldemo1;
