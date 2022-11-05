import classes from "./ProductBoxSpecial.module.scss";
import Link from "next/link";

const ProductBoxSpecial = () => {
  return (
    <div className={classes["container"]}>
      <div>
        <p className={classes["special-name"]}>Specijalna ponuda</p>
        <Link href="/proizvod">
          <a className={classes["product-name"]}>Podna lampa XXX</a>
        </Link>
      </div>
      <Link href="/proizvod">
        <img
          alt="kabl"
          src={"/images/products/lamp1.jpg"}
          className={classes["product-img"]}
        />
      </Link>
      <div className={classes["price"]}>
        <p className={classes["old-price"]}>9.000 RSD</p>
        <p className={classes["new-price"]}>6.999 RSD</p>
      </div>
      <div className={classes["discount"]}>
        <span>30%</span>
      </div>
      <button type="button" className={classes["add-to-basket"]}>
        <img className="button-img" src={"/images/icons/bag.png"} />
        <span className={classes["add-to-basket-span"]}>Dodaj u korpu</span>
      </button>
    </div>
  );
};

export default ProductBoxSpecial;
