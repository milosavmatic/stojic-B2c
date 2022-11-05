import React, { useState } from "react";
import Link from "next/link";
import Specifications from "./Specifications";
import RecomendedProducts from "./RecomendedProducts";
import cart from "../components/assets/images/elements/cart-white.png";
import ProductDetailsSlider from "./products/productDetailsSlider/ProductDetailsSlider";
import PlusMinusInput from "./UI/plusMinusInput/PlusMinusInput";
import classes from "./ProductDetails.module.scss";
import Image from "next/image";
import { currencyFormat } from "../components/assets/helpers/functions";
import { globalAddToCart } from "../pages/api/globals";

const ProductDetails = ({
  productData,
  gallery,
  specifications,
  recommendedProducts,
}) => {
  // Holds the selected additional option
  const [additional, setAdditional] = useState("info");
  // State that holds amount of products
  const [productAmount, setProductAmount] = useState(1);

  const addToCart = () => {
    if (Number(productData?.inventory?.amount) > 0) {
      globalAddToCart(productData.id, productAmount);
      setProductAmount(1);
    }
  };

  return (
    <div className={`${classes["product-details-holder"]}`}>
      <div className="container">
        <div className="row">
          <div
            className={`${
              classes["slider-holder"] + " col-xl-6 col-lg-6 col-md-12"
            }`}
          >
            <ProductDetailsSlider images={gallery.gallery} />
          </div>
          <div
            className={`${
              classes["info-holder"] + " col-xl-6 col-lg-6 col-md-12"
            }`}
          >
            <h3>{productData?.basic_data?.name}</h3>
            <ul className={`${classes["code-list"]}`}>
              <li>
                <span>Šifra artikla</span>:{productData?.basic_data?.sku}
              </li>
              <li>
                <span>Barcode</span>:{productData?.basic_data?.barcode}
              </li>
              <li>
                <span>EAN Code</span>:1173214243
              </li>
            </ul>
            <ul className={`${classes["delivery-list"]}`}>
              <li>
                Dostupnost:{" "}
                <span
                  className={`${
                    classes[
                      Number(productData?.inventory?.amount) > 0
                        ? "stock"
                        : "no-stock"
                    ]
                  }`}
                >
                  {productData?.inventory?.status}
                </span>
              </li>
              <li>
                Rok isporuke: <span>5 dana</span>
              </li>
              <li>
                Dostava: <span>Besplatna</span>
              </li>
            </ul>
            <ul className={`${classes["price-list"]}`}>
              <li className={`${classes["old-price"]}`}>
                {currencyFormat(
                  productData?.price?.second,
                  productData?.price?.currency
                )}
              </li>
              <li className={`${classes["price"]}`}>
                {currencyFormat(
                  productData?.price?.first,
                  productData?.price?.currency
                )}
              </li>
              {/* <li>Ušteda: 26.221 RSD</li>
              <li>Akcija traje od 23.5.2022. do 28.5.2022. </li> */}
            </ul>
            <div className="row d-flex align-items-center">
              <div
                className={`${
                  classes["button-quantity-holder"] +
                  " col-xl-2 col-lg-2 col-md-2 col-sm-3 col-xs-4 col-4"
                }`}
              >
                <div className={`${classes["button-quantity"]}`}>
                  <PlusMinusInput
                    className={classes["amount-input"]}
                    amount={productAmount}
                    setCount={setProductAmount}
                  />
                </div>
              </div>
              <div
                className={`${classes["button-add-to-cart-holder"] + " col-6"}`}
              >
                <button onClick={addToCart} className={classes["button"]}>
                  <div className={`${classes["img-holder"]}`}>
                    <Image src={cart} alt="" className="img-fluid" />
                  </div>
                  Dodaj u korpu
                </button>
              </div>
            </div>
          </div>
        </div>
        <Specifications specifications={specifications} />
        <RecomendedProducts recommendedProducts={recommendedProducts} />
      </div>
    </div>
  );
};

export default ProductDetails;
