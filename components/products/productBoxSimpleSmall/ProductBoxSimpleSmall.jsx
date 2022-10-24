import Link from "next/link";
import classes from "./ProductBoxSimpleSmall.module.scss";

const ProductBoxSimpleSmall = () => {
  return (
    <div className={classes["container"]}>
      <span className={classes["category-name"]}>Nagradni led paneli</span>
      <Link href="/product">
        <a className={classes["product-name"]}>Nagradni led panel 30x40cm</a>
      </Link>
      <Link href="/product">
        <a>
          <img
            alt="kabl"
            src={"/images/products/cable.jpg"}
            className={classes["product-img"]}
          />
        </a>
      </Link>
      <p className={classes["price"]}>3.280 RSD</p>
    </div>
  );
};

export default ProductBoxSimpleSmall;
