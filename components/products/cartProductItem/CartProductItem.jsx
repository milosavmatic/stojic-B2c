import classes from "./CartProductItem.module.scss";
import PlusMinusInputCart from "../../PlusMinusInputCart";
import cartimage from "../../assets/images/rproduct14.png";
import { useEffect, useState } from "react";
import Image from "next/image";
import { currencyFormat } from "../../assets/helpers/functions";
import { useGlobalAddToCart } from "../../../pages/api/globals";

const CartProductItem = ({ item }) => {
  // State that holds amount of products
  const [productAmount, setProductAmount] = useState(
    Number(item.cost.quantity)
  );

  const addToCart = useGlobalAddToCart();

  useEffect(() => {
    if (productAmount != item.cost.quantity) {
      addToCart(item.id_product, productAmount);
    }
  }, [productAmount]);

  const cost = item.cost;
  return (
    <>
      <div className={classes["container"] + " row"}>
        <div
          className={
            classes["cols"] + " col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12"
          }
        >
          <div className={classes["product-image"]}>
            <Image
              alt="product"
              src={item.product.image[0]}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div
          className={
            classes["cols"] + " col-xl-4 col-lg-4 col-md-4 col-xs-12 col-sm-12"
          }
        >
          <span>{item.product.basic_data.name}</span>
        </div>
        <div
          className={
            classes["cols"] + " col-xl-2 col-lg-2 col-md-2 col-xs-12 col-sm-12"
          }
        >
          <span>{currencyFormat(cost.per_item.with_vat, cost.currency)}</span>
        </div>
        <div className={classes["cols"] + " col-2"}>
          <PlusMinusInputCart
            className={classes["amount-input"]}
            amount={productAmount}
            setCount={setProductAmount}
          />
        </div>
        <div className={classes["cols"] + " col-2"}>
          <span>{currencyFormat(cost.total.with_vat, cost.currency)}</span>
        </div>
      </div>
      <div className={classes["mobile-container"] + " row"}>
        <div
          className={classes["cols"] + " col-xl-3 col-lg-3 col-md-3 col-sm-12"}
        >
          <div>
            <Image
              className={classes["product-image"]}
              alt="product"
              src={cartimage}
            />
          </div>
        </div>
        <div className={"col-xl-9 col-lg-9 col-md-9 col-12 col-sm-12"}>
          <div className={"row"}>
            <div className={classes["cols"] + " col-12"}>
              <span>{item.product.name}</span>
            </div>
            <div
              className={
                classes["cols"] + " col-xl-6 col-lg-6 col-12 col-sm-12"
              }
            >
              <span>Količina</span>
              <PlusMinusInputCart
                className={classes["amount-input"]}
                amount={productAmount}
                setCount={setProductAmount}
              />
            </div>
            <div
              className={
                classes["cols"] + " col-xl-6 col-lg-6 col-md-6 col-12 col-sm-12"
              }
            >
              <span>{currencyFormat(cost.total.with_vat, cost.currency)}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProductItem;
