import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

import ProductBoxSimpleSmall from "../../components/products/productBoxSimpleSmall/ProductBoxSimpleSmall";
import ProductBoxSimpleBig from "../../components/products/productBoxSimpleBig/ProductBoxSimpleBig";
import classes from "./HomePage.module.scss";
import ProductBoxSpecial from "../../components/products/productBoxSpecial/ProductBoxSpecial";
import ProductBoxComplexSmall from "../../components/products/productBoxComplexSmall/ProductBoxComplexSmall";
import MobileBannerSlider from "../../components/UI/mobileBannerSlider/MobileBannerSlider";
import ProductMobileSlider from "../../components/products/productMobileSlider/ProductMobileSlider";
import ProductMobileSliderComplex from "../../components/products/productMobileSliderComplex/ProductMobileSliderComplex";
import data from "./data.json";
import data1 from "./data1.json";
import { useRouter } from "next/router";

const HomePage = () => {
  // Change selected block 1 category
  const [block2Category, setBlock2Category] = useState("sijalice");
  // Change selected block 2 option
  const [block1Option, setBlock1Option] = useState("izdvojeni");

  return (
    <>
      <MobileBannerSlider className={classes["mobile-banner-slider"]} />
      <div className={classes["homepage-banners-1"] + " row"}>
        <div
          className={
            classes["homepage-banners-1-big-banner-container"] + " col-8"
          }
        >
          <div className={classes["homepage-banners-1-big-banner"]}>
            <Link href="/product">
              <a className="banner-link">
                <img
                  src={"/images/banners/couple-banner.png"}
                  alt="banner-1-big"
                  className="banner-img"
                />
              </a>
            </Link>
          </div>
        </div>
        <div
          className={classes["homepage-banners-1-small-banners"] + " col-4 row"}
        >
          <div
            className={
              classes["homepage-banners-1-small-banner-top-container"] +
              " col-12"
            }
          >
            <div className={classes["homepage-banners-1-small-banner-top"]}>
              <Link href="/product">
                <a className="banner-link">
                  <img
                    src={"/images/banners/cart-banner.png"}
                    alt="banner-1-big"
                    className="banner-img"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div
            className={
              classes["homepage-banners-1-small-banner-bottom-container"] +
              " col-12"
            }
          >
            <div className={classes["homepage-banners-1-small-banner-bottom"]}>
              <Link href="/product">
                <a className="banner-link">
                  <img
                    src={"/images/banners/worker-banner.png"}
                    alt="banner-1-big"
                    className="banner-img"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={classes["additional-services"] + " row"}>
        <div
          className={classes["additonal-services-item"] + " col-xxl-3 col-6"}
        >
          <img
            alt="truck"
            src={"/images/icons/truck.png"}
            className={`height-100 img-primary-color`}
          />

          <p>
            <b>Besplatna dostava</b>
            <br />
            preko 2.000 RSD
          </p>
        </div>
        <div
          className={classes["additonal-services-item"] + " col-xxl-3 col-6"}
        >
          <img
            alt="support"
            src={"/images/icons/support.png"}
            className={`height-100 img-primary-color`}
          />

          <p>
            <b>Call centar</b>
            <br />
            podrška
          </p>
        </div>
        <div
          className={classes["additonal-services-item"] + " col-xxl-3 col-6"}
        >
          <img
            alt="return"
            src={"/images/icons/refund.png"}
            className={`height-100 img-primary-color`}
          />

          <p>
            <b>Povrat robe</b>
            <br />
            14 dana od kupovine
          </p>
        </div>
        <div
          className={classes["additonal-services-item"] + " col-xxl-3 col-6"}
        >
          <img
            alt="card"
            src={"/images/icons/credit.png"}
            className={`height-100 img-primary-color`}
          />

          <p>
            <b>Odloženo plaćanje</b>
            <br />
            do 24 mesečne rate
          </p>
        </div>
      </div>
      <div className={classes["product-block-1"]}>
        <div className="row">
          <div className="col-4"></div>
          <div className={classes["product-block-1-options"] + " col-xxl-8"}>
            <div className={classes["product-block-1-options-div"]}>
              <span
                className={
                  block1Option === "izdvojeni"
                    ? classes["product-block-1-options-div-active"]
                    : undefined
                }
                onClick={() => setBlock1Option("izdvojeni")}
              >
                Izdvojeni artikli
              </span>
              <span
                className={
                  block1Option === "rasprodaja"
                    ? classes["product-block-1-options-div-active"]
                    : undefined
                }
                onClick={() => setBlock1Option("rasprodaja")}
              >
                Rasprodaja
              </span>
              <span
                className={
                  block1Option === "ocenjeni"
                    ? classes["product-block-1-options-div-active"]
                    : undefined
                }
                onClick={() => setBlock1Option("ocenjeni")}
              >
                Najbolje ocenjeni proizvodi
              </span>
            </div>
          </div>
        </div>
        <div className={classes["special-products-container"] + " row"}>
          <div className={classes["special-product"] + " col-xxl-4"}>
            <ProductBoxSpecial />
          </div>
          <div className={classes["block-1-products"] + " col-xxl-8"}>
            <div className={classes["block-1-products-div"] + " row"}>
              {Array.isArray(data) &&
                data.map((item) => {
                  return (
                    <ProductBoxComplexSmall
                      key={Math.random()}
                      img={Math.floor(Math.random() * 5)}
                      description={item.description}
                      name={item.name}
                      oldPrice={item.oldPrice}
                      newPrice={item.newPrice}
                    />
                  );
                })}
            </div>
            <div className={classes["mobile-show"]}>
              <ProductMobileSliderComplex />
            </div>
          </div>
        </div>
      </div>
      <div className={classes["three"] + " row"}>
        <div className={classes["three-col"] + " col-xl-4"}>
          <div className={classes["three-col-div"]}>
            <a
              href="https://youtube.com"
              className={classes["banner-2-link"] + " banner-link"}
            >
              <img
                src={"/images/banners/house-lights.png"}
                alt="banner-1-big"
                className={classes["banner-2-img"] + " banner-img"}
              />
              <span className={classes["inside-banner-2-text"]}>
                SPOLJNA RASVETA
              </span>
              <div className={classes["banner-2-overlay"]}></div>
            </a>
          </div>
        </div>
        <div className={classes["three-col"] + " col-xl-4"}>
          <div className={classes["three-col-div"]}>
            <a
              href="https://youtube.com"
              className={classes["banner-2-link"] + " banner-link"}
            >
              <img
                src={"/images/banners/cart-banner.png"}
                alt="banner-1-big"
                className="banner-img"
              />
              <span className={classes["inside-banner-2-text"]}>B2B</span>
              <div className={classes["banner-2-overlay"]}></div>
            </a>
          </div>
        </div>
        <div className={classes["three-col"] + " col-xl-4"}>
          <div className={classes["three-col-div"]}>
            <a
              href="https://youtube.com"
              className={classes["banner-2-link"] + " banner-link"}
            >
              <img
                src={"/images/banners/worker-banner.png"}
                alt="banner-1-big"
                className="banner-img"
              />
              <span className={classes["inside-banner-2-text"]}>KABLOVI</span>
              <div className={classes["banner-2-overlay"]}></div>
            </a>
          </div>
        </div>
      </div>
      <div className={classes["product-block-2"]}>
        <div className={classes["product-block-2-categories"]}>
          <span
            className={
              block2Category === "sijalice"
                ? classes["product-block-2-categories-active"]
                : undefined
            }
            onClick={() => setBlock2Category("sijalice")}
          >
            Sijalice
          </span>
          <span
            className={
              block2Category === "lampe"
                ? classes["product-block-2-categories-active"]
                : undefined
            }
            onClick={() => setBlock2Category("lampe")}
          >
            Lampe
          </span>
          <span
            className={
              block2Category === "kablovi"
                ? classes["product-block-2-categories-active"]
                : undefined
            }
            onClick={() => setBlock2Category("kablovi")}
          >
            Produžni kablovi
          </span>
          <span
            className={
              block2Category === "plafonjere"
                ? classes["product-block-2-categories-active"]
                : undefined
            }
            onClick={() => setBlock2Category("plafonjere")}
          >
            Plafonjere
          </span>
          <span
            className={
              block2Category === "provodnici"
                ? classes["product-block-2-categories-active"]
                : undefined
            }
            onClick={() => setBlock2Category("provodnici")}
          >
            Provodnici
          </span>
          <span
            className={
              block2Category === "galanterija"
                ? classes["product-block-2-categories-active"]
                : undefined
            }
            onClick={() => setBlock2Category("galanterija")}
          >
            Galanterija
          </span>
        </div>
        <div className={classes["product-block-2-products"] + " row"}>
          {Array.isArray(data1) &&
            data1.map((item) => {
              return (
                <ProductBoxSimpleSmall
                  key={Math.random()}
                  // img={Math.floor(Math.random() * 5)}
                  productName={item.productName}
                  categoryName={item.categoryName}
                  price={item.price}
                />
              );
            })}

          {/* <div className={classes["box-simple-cols"]}>
              <ProductBoxSimpleSmall />
            </div>
          </div>
          <div className={classes["box-simple-cols"] + " col-xl-2 col-sm-4"}>
            <div className={classes["box-simple-cols"]}>
              <ProductBoxSimpleSmall />
            </div>
            <div className={classes["box-simple-cols"]}>
              <ProductBoxSimpleSmall />
            </div>
          </div>
          <div
            className={`${classes["box-simple-cols"]} col-xl-4 ${classes["box-simple-big"]}`}
          >
            <div className={classes["box-simple-cols"]}>
              <ProductBoxSimpleBig />
            </div>
          </div>

          <div className={classes["box-simple-cols"] + " col-xl-2 col-sm-4"}>
            <div className={classes["box-simple-cols"]}>
              <ProductBoxSimpleSmall />
            </div>
            <div className={classes["box-simple-cols"]}>
              <ProductBoxSimpleSmall />
            </div> */}

          <div
            className={`${classes["box-simple-cols"]} ${classes["mobile-show"]}`}
          >
            <div
              className={`${classes["box-simple-cols"]} ${classes["mobile-show"]}`}
            >
              <ProductMobileSlider />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
export const getServerSideProps = async () => {
  const api = ApiHandler();
  return {
    props: {
      banners: await api
        .get("banners/index_slider")
        .then((response) => response?.payload),
      mobileBanners: await api
        .get("banners/index_slider_mobile")
        .then((response) => response?.payload),
      recommendedCategories: await api
        .list("categories/section/recomended", { limit: 6 })
        .then((response) => response?.payload?.items),
      recommendedProducts: await api
        .list("products/section/action")
        .then((response) => response?.payload?.items),
      actionBanners: await api
        .get("banners/action_banners")
        .then((response) => response?.payload),
    },
  };
};
