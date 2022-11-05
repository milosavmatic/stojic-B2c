import React from "react";
import Link from "next/link";
import wishlist from "../components/assets/images/elements/heart.png";
import cart from "../components/assets/images/elements/cart-white.png";

import Owldemo2 from "../owl/Owldemo2";
import classes from "./RecomendedProducts.module.scss";
import Image from "next/image";
import { currencyFormat } from "../components/assets/helpers/functions";
import {
  useGlobalAddToCart,
  useGlobalAddToWishList,
} from "../pages/api/globals";

const RecomendedProducts = ({ recommendedProducts }) => {
  const addToCart = useGlobalAddToCart();
  const addToWishList = useGlobalAddToWishList();

  return (
    <div className={`${classes["recomended-product-list-holder"]}`}>
      <div className={`${classes["recomended-product-list-title"]}`}>
        <p>Možda će Vas zanimati</p>
        <h3>Preporučeni proizvodi</h3>
      </div>

      <div className={`${classes["custom-background"]}`}>
        <div className="container">
          <div className={`${classes["recomended-product-row"] + " row"}`}>
            <Owldemo2>
              {(recommendedProducts ?? []).map((item) => (
                <div
                  key={Math.random()}
                  className={`${classes["recomended-product-col"] + " col-12"}`}
                >
                  <div className={`${classes["recomended-product-holder"]}`}>
                    <Link
                      href={`/proizvod/${item?.id}`}
                      className={`${classes["link"]}`}
                    >
                      <div className={classes["image-holder"]}>
                        <Image
                          src={item?.image[0]}
                          className="d-inline-block align-top w-100 img-fluid"
                          alt=""
                          width={215}
                          height={260}
                        />
                      </div>
                    </Link>
                    <div className={`${classes["info-holder"]}`}>
                      <Link
                        href={`/proizvod/${item?.id}`}
                        className={`${classes["link"]}`}
                      >
                        <p>{item?.basic_data?.name}</p>
                      </Link>
                      <p className={`${classes["old-price"]}`}>
                        {currencyFormat(
                          item?.price?.second,
                          item?.price?.currency
                        )}
                      </p>
                      <p className={`${classes["price"]}`}>
                        {currencyFormat(
                          item?.price?.first,
                          item?.price?.currency
                        )}
                      </p>
                      <span
                        className={
                          item.recomended
                            ? `${classes["badge-recomended"]}`
                            : "d-none"
                        }
                      >
                        {item.raction}
                      </span>
                      <span
                        className={
                          item.recomended
                            ? `${classes["badge-recomended-percent"]}`
                            : "d-none"
                        }
                      >
                        {item.ractionpercent}
                      </span>
                      <div
                        className={`${classes["wishlist"]}`}
                        onClick={() => {
                          addToWishList(item?.id);
                        }}
                      >
                        <Image
                          src={wishlist}
                          className="d-inline-block w-100 img-fluid"
                          alt=""
                        />
                      </div>
                      <div
                        className={classes["add-to-cart"]}
                        onClick={() => {
                          addToCart(item?.id, 1);
                        }}
                      >
                        <Image
                          src={cart}
                          className="d-inline-block align-top img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Owldemo2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecomendedProducts;
