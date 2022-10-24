import classes from "./CartProductBox.module.scss";
import CartProductItem from "../cartProductItem/CartProductItem";

const CartProductBox = () => {
  return (
    <div className={classes["container"] + " row"}>
      <div className={classes["titles"] + " row"}>
        <div className={"col-2"}></div>
        <div className={"col-4"}>
          <span>Proizvod:</span>
        </div>
        <div className={"col-2"}>
          <span>Cena:</span>
        </div>
        <div className={"col-2"}>
          <span>Količina:</span>
        </div>
        <div className={"col-2"}>
          <span>Ukupno:</span>
        </div>
      </div>
      <CartProductItem />
      <CartProductItem />
      <CartProductItem />
      <CartProductItem />
      <CartProductItem />
    </div>
  );
};

export default CartProductBox;
