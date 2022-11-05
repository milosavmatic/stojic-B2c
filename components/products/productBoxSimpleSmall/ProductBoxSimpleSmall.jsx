import Link from "next/link";
import classes from "./ProductBoxSimpleSmall.module.scss";
const ProductBoxSimpleSmall = ({ categoryName, productName, price }) => {
  return (
    <div className={classes["box-simple-cols"] + " col-xl-2 col-sm-4"}>
      <div className={classes["box-simple-cols"]}>
        <div className={classes["container"]}>
          <span className={classes["category-name"]}>{categoryName}</span>
          <Link href="/product">
            <a className={classes["product-name"]}>{productName}</a>
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
          <p className={classes["price"]}>RSD{price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductBoxSimpleSmall;
