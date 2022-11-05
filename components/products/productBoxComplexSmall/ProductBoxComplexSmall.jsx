import heartImg from "../../assets/images/elements/heart.png";
import classes from "./ProductBoxComplexSmall.module.scss";
import cart from "../../assets/images/elements/cart-white.png";
import Link from "next/link";
import Image from "next/image";
import { currencyFormat } from "../../assets/helpers/functions";
import {
  useGlobalAddToCart,
  useGlobalAddToWishList,
} from "../../../pages/api/globals";

const ProductBoxComplexSmall = ({ product }) => {
  const addToCart = useGlobalAddToCart();
  const addToWishList = useGlobalAddToWishList();
  return (
    <div className={classes["container"]}>
      <Link href={`/proizvod/${product?.id}`}>
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
        <Link href={`/kategorije/${product?.categories[0].id}`}>
          <a className={classes["category-name"]}>
            {product?.categories[0]?.name ?? ""}
          </a>
        </Link>
      )}
      <Link href={`/proizvod/${product?.id}`}>
        <a className={classes["product-name"]}>
          {product?.basic_data?.name ?? ""}
        </a>
      </Link>
      <div className={classes["price"]}>
        {!product?.price.second && (
          <p className={classes["no-old-price"]}>&nbsp;</p>
        )}
        {product?.price.second && (
          <p className={classes["old-price"]}>
            {product?.price.second ??
              currencyFormat(product?.price.second, product?.price.currency)}
          </p>
        )}
        <p className={classes["new-price"]}>
          {currencyFormat(product?.price.first, product?.price.currency)}
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
        onClick={() => addToWishList(product?.id)}
      >
        <Image alt="fav-heart" src={heartImg} />
      </div>
      <div className={classes["add-to-cart"]}>
        <div
          className={classes["add-to-cart-image"]}
          onClick={() => addToCart(product?.id, 1)}
        >
          <Image src={cart} alt="React" />
        </div>
      </div>
    </div>
  );
};

export default ProductBoxComplexSmall;
