import { useEffect } from "react";
import { useState } from "react";
import classes from "../../components/assets/css/WishListPage.module.scss";
import { ApiHandler } from "../api/api";
import { useCartContext } from "../api/cartContext";
import ProductBoxWishlist from "../../components/ProductBoxWishlist";

const WishListPage = () => {
  const [wishList, setWishList] = useState();
  const [, , wishlist] = useCartContext();

  useEffect(() => {
    const api = ApiHandler();
    api
      .list("/wishlist")
      .then((response) => setWishList(response?.payload))
      .catch((error) => console.warn(error));
  }, [wishlist]);

  const wishListProducts = wishList?.items ?? [];
  return (
    <div className={classes["container"]}>
      <h5 className={classes["wishlist-heading"]}>Vaša lista želja</h5>
      <div className={classes["content"] + " row"}>
        {wishListProducts.map((product) => (
          <div
            className={classes["product-col"] + " col-xxl-3 col-lg-4 col-sm-6"}
            key={product?.id}
          >
            <ProductBoxWishlist product={product} />
          </div>
        ))}
        {wishListProducts.length === 0 && <p>Vaša lista želja je prazna!</p>}
      </div>
    </div>
  );
};

export default WishListPage;
