import React, { useState } from "react";
import dynamic from "next/dynamic";
const Specifications = dynamic(() => import("./Specifications"), {
  ssr: false,
  loading: () => null,
});
const RecomendedProducts = dynamic(() => import("./RecomendedProducts"), {
  ssr: false,
  loading: () => null,
});
const ProductDetailsSlider = dynamic(
  () => import("../components/ProductDetailsSlider"),
  { ssr: false, loading: () => null }
);
const PlusMinusInput = dynamic(() => import("../components/PlusMinusInput"), {
  ssr: false,
  loading: () => null,
});
import classes from "./ProductDetails.module.scss";
import { currencyFormat } from "../helpers/functions";
import {
  useGlobalAddToCart,
  useGlobalAddToWishList,
} from "../pages/api/globals";
import { BsHandbag } from "react-icons/bs";

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

  const globalAddToCart = useGlobalAddToCart();
  const addToWishList = useGlobalAddToWishList();

  const [printClicked, setPrintClicked] = useState(false);

  const addToCart = () => {
    if (Number(productData?.inventory?.amount) > 0) {
      globalAddToCart(productData.id, productAmount);
      setProductAmount(1);
    }
  };

  const pagePrintClicked = () => {
    setPrintClicked(true);
  };

  useEffect(() => {
    if (printClicked) {
      window.print();
      setPrintClicked(false);
    }
  }, [printClicked]);

  return (
    <div className={`${classes["product-details-holder"]}`}>
      {/* <div className='container'> */}
      <div className={`row ${classes["grid-print"]}`}>
        <div
          className={`${
            classes["slider-holder"] + " col-xl-5 col-lg-4 col-md-12"
          }`}
        >
          <ProductDetailsSlider
            images={gallery.gallery}
            addToWishList={() => addToWishList(productData?.id)}
            onClick={pagePrintClicked}
          />
        </div>
        <div
          className={`${
            classes["info-holder"] + " col-xl-7 col-lg-8 col-md-12"
          }`}
        >
          <h3>{productData?.basic_data?.name}</h3>
          <ul className={`${classes["code-list"]}`}>
            <li>
              <span>Šifra artikla:</span>
              {productData?.basic_data?.sku}
            </li>
            <li>
              <span>Barcode:</span>
              {productData?.basic_data?.barcode}
            </li>
            {/* <li>
              <span>EAN Code:</span>
              {productData?.basic_data?.barcode}
            </li> */}
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

          <ul className={`${classes["shortDesc"]}`}>
            <li>
              <span>Kratak opis:</span>

              {productData?.basic_data?.short_description
                ? productData?.basic_data?.short_description
                : "/"}
            </li>
          </ul>

          <ul className={`${classes["price-list"]}`}>
            <li className={`${classes["old-price"]}`}>
              {currencyFormat(
                productData?.price?.discount?.active
                  ? productData?.price?.price?.original
                  : null,
                productData?.price?.currency
              )}
            </li>
            <li className={`${classes["price"]}`}>
              {currencyFormat(
                productData?.price?.discount?.active
                  ? productData?.price?.price?.discount
                  : productData?.price?.price?.original,
                productData?.price?.currency
              )}
            </li>

            {/* <li>Ušteda: 26.221 RSD</li>
              <li>Akcija traje od 23.5.2022. do 28.5.2022. </li> */}
          </ul>
          {Number(productData?.inventory?.amount) > 0 && (
            <div className=" d-flex align-items-center">
              <div className={`${classes["button-quantity-holder"]}`}>
                <div className={`${classes["button-quantity"]}`}>
                  <PlusMinusInput
                    className={classes["amount-input"]}
                    amount={productAmount}
                    setCount={setProductAmount}
                  />
                </div>
              </div>
              <div className={`${classes["button-add-to-cart-holder"]}`}>
                <button onClick={addToCart} className={classes["button"]}>
                  <div className={`${classes["img-holder"]}`}>
                    <BsHandbag />
                  </div>
                  Dodaj u korpu
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Specifications specifications={specifications} />
      {recommendedProducts && recommendedProducts.length > 0 && (
        <RecomendedProducts recommendedProducts={recommendedProducts} />
      )}
      {/* </div> */}
    </div>
  );
};

export default ProductDetails;
