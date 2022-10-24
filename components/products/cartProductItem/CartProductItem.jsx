import classes from "./CartProductItem.module.scss";
import PlusMinusInput from "../../UI/plusMinusInput/PlusMinusInput";
import { useState } from "react";
const CartProductItem = () => {
  // State that holds amount of products
  const [productAmount, setProductAmount] = useState(2);

  return (
    <>
      <div className={classes["container"] + " row"}>
        <div className={classes["cols"] + " col-2"}>
          <div>
            <img
              className={classes["product-image"]}
              alt="product"
              src={
                "https://www.usa.philips.com/c-dam/b2c/category-pages/sound-and-vision/monitors/redesign/curved-monitors/346e2cuae-png.png"
              }
            />
          </div>
        </div>
        <div className={classes["cols"] + " col-4"}>
          <span>LED TV 43" FOX 43DLE172 1920x1080/F-HD/D...</span>
        </div>
        <div className={classes["cols"] + " col-2"}>
          <span>17.499,00 RSD</span>
        </div>
        <div className={classes["cols"] + " col-2"}>
          <PlusMinusInput
            className={classes["amount-input"]}
            amount={productAmount}
            setCount={setProductAmount}
          />
        </div>
        <div className={classes["cols"] + " col-2"}>
          <span>34.998,00 RSD</span>
        </div>
      </div>
      <div className={classes["mobile-container"] + " row"}>
        <div className={classes["cols"] + " col-3"}>
          <div>
            <img
              className={classes["product-image"]}
              alt="product"
              src={
                "https://www.usa.philips.com/c-dam/b2c/category-pages/sound-and-vision/monitors/redesign/curved-monitors/346e2cuae-png.png"
              }
            />
          </div>
        </div>
        <div className={"col-9"}>
          <div className={"row"}>
            <div className={classes["cols"] + " col-12"}>
              <span>LED TV 43" FOX 43DLE172 1920x1080/F-HD/D...</span>
            </div>
            <div className={classes["cols"] + " col-6"}>
              <span>Količina</span>
              <PlusMinusInput
                className={classes["amount-input"]}
                amount={productAmount}
                setCount={setProductAmount}
              />
            </div>
            <div className={classes["cols"] + " col-6"}>
              <span>34.998,00 RSD</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProductItem;
