import classes from "./ProductBoxSimpleBig.module.scss";
import Link from "next/link";

const ProductBoxSimpleBig = () => {
  return (
    <div className={classes["container"]}>
      <span className={classes["category-name"]}>Nagradni led paneli</span>
      <Link href="/product">
        <a className={classes["product-name"]}>Nagradni led panel 30x40cm</a>
      </Link>
      <Link href="/product">
        <a>
          {" "}
          <img
            alt="kabl"
            src={"/images/products/lamp1.jpg"}
            className={classes["product-img"]}
          />
        </a>
      </Link>
      <p className={classes["price"]}>3.280 RSD</p>
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

export default ProductBoxSimpleBig;
