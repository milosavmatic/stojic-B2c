import classes from "./ProductBoxComplexSmall.module.scss";
import Link from "next/link";

const ProductBoxComplexSmall = ({ img }) => {
  return (
    <div className={classes["container"]}>
      <Link href="/product">
        <a>
          <img
            alt="kabl"
            src={`${process.env.PUBLIC_URL}/images/${img}.png`}
            className={classes["product-img"]}
          />
        </a>
      </Link>
      <span className={classes["category-name"]}>Mašine za pranje sudova</span>
      <Link href="/product">
        <a className={classes["product-name"]}>
          Heinner Mašina za pranje sudova HDW-FS4505WE++
        </a>
      </Link>
      <div className={classes["price"]}>
        <p className={classes["old-price"]}>31.100 RSD</p>
        <p className={classes["new-price"]}>27.990 RSD</p>
      </div>
      <div className={classes["discount"]}>
        <span>-30%</span>
      </div>
      <div className={classes["top-deal"]}>
        <span>Top Ponuda</span>
      </div>
      <div className={classes["fav-heart"]}>
        <img alt="fav-heart" src={"/images/icons/heart.png"} />
      </div>
    </div>
  );
};

export default ProductBoxComplexSmall;
