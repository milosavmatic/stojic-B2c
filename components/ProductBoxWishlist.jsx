import heartImg from "../components/assets/images/elements/heart.png";
import classes from "../components/products/productBoxComplexSmall/ProductBoxComplexSmall.module.scss";
import cart from "../components/assets/images/elements//cart-white.png";
import Link from "next/link";
import Image from "next/image";
import { currencyFormat } from "../components/assets/helpers/functions";
import {
  useGlobalAddToCart,
  useGlobalRemoveFromWishlist,
} from "../pages/api/globals";

const ProductBoxWishlist = ({ product }) => {
  const addToCart = useGlobalAddToCart();
  const removeFromWishList = useGlobalRemoveFromWishlist();
  return (
    <div className={classes["container"]}>
      <Link href={`/proizvod/${product?.id_product}`}>
        <a className={classes["product-img"]}>
          <Image
            alt={product?.basic_data?.slug}
            src={
              (product?.image ? product?.image[0] : product?.path) ??
              "/products/missing.png"
            }
            layout="fill"
            objectFit="contain"
          />
        </a>
      </Link>
      {product?.categories && (
        <Link href={`/kategorije/${product?.categories[0].id_product}`}>
          <a className={classes["category-name"]}>
            {product?.categories[0]?.name ?? ""}
          </a>
        </Link>
      )}
      <Link href={`/proizvod/${product?.id_product}`}>
        <a className={classes["product-name"]}>{product?.name ?? ""}</a>
      </Link>
      <div className={classes["price"]}>
        <p className={classes["new-price"]}>
          {currencyFormat(product?.price.basic, product?.price.currency)}
        </p>
      </div>
      {product?.price.discount && (
        <div className={classes["discount"]}>
          <span>{product?.price.discount}</span>
        </div>
      )}
      {(product?.stickers ?? []).map((sticker) => (
        <div className={classes["top-deal"]} key={sticker.slug}>
          <span>{sticker.name}</span>
        </div>
      ))}
      <div
        className={classes["fav-heart"]}
        onClick={() => removeFromWishList(product?.id_product)}
      >
        <Image alt="fav-heart" src={heartImg} />
      </div>
      <div className={classes["add-to-cart"]}>
        <div
          className={classes["add-to-cart-image"]}
          onClick={() => addToCart(product?.id_product, 1)}
        >
          <Image src={cart} alt="React" />
        </div>
      </div>
    </div>
  );
};

export default ProductBoxWishlist;
