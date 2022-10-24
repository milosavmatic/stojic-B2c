import classes from "./WishListPage.module.scss";
import ProductBoxComplexSmall from "../../components/products/productBoxComplexSmall/ProductBoxComplexSmall";

const WishListPage = () => {
  return (
    <div className={classes["container"]}>
      <h1 className={classes["wishlist-heading"]}>Vaša lista želja</h1>
      <div className={classes["content"] + " row"}>
        <div
          className={classes["product-col"] + " col-xxl-3 col-lg-4 col-sm-6"}
        >
          <ProductBoxComplexSmall img={Math.floor(Math.random() * 5)} />
        </div>
        <div
          className={classes["product-col"] + " col-xxl-3 col-lg-4 col-sm-6"}
        >
          <ProductBoxComplexSmall img={Math.floor(Math.random() * 5)} />
        </div>
        <div
          className={classes["product-col"] + " col-xxl-3 col-lg-4 col-sm-6"}
        >
          <ProductBoxComplexSmall img={Math.floor(Math.random() * 5)} />
        </div>
        <div
          className={classes["product-col"] + " col-xxl-3 col-lg-4 col-sm-6"}
        >
          <ProductBoxComplexSmall img={Math.floor(Math.random() * 5)} />
        </div>
        <div
          className={classes["product-col"] + " col-xxl-3 col-lg-4 col-sm-6"}
        >
          <ProductBoxComplexSmall img={Math.floor(Math.random() * 5)} />
        </div>
        <div
          className={classes["product-col"] + " col-xxl-3 col-lg-4 col-sm-6"}
        >
          <ProductBoxComplexSmall img={Math.floor(Math.random() * 5)} />
        </div>
        <div
          className={classes["product-col"] + " col-xxl-3 col-lg-4 col-sm-6"}
        >
          <ProductBoxComplexSmall img={Math.floor(Math.random() * 5)} />
        </div>
        <div
          className={classes["product-col"] + " col-xxl-3 col-lg-4 col-sm-6"}
        >
          <ProductBoxComplexSmall img={Math.floor(Math.random() * 5)} />
        </div>
        <div
          className={classes["product-col"] + " col-xxl-3 col-lg-4 col-sm-6"}
        >
          <ProductBoxComplexSmall img={Math.floor(Math.random() * 5)} />
        </div>
      </div>
    </div>
  );
};

export default WishListPage;
