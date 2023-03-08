import classes from './ProductBoxComplexSmall.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { currencyFormat } from '../helpers/functions';
import {
  useGlobalAddToCart,
  useGlobalAddToWishList,
} from '../pages/api/globals';
import { BsHandbag } from 'react-icons/bs';
import pic from '../assets/images/loading-buffering.gif';
import { useState } from 'react';

const ProductBoxComplexSmall = ({
  product,
  noBorder = '',
  className = '',
  biggerImg = '',
  isSpecialOffer = false,
}) => {
  const [addToCart, loading] = useGlobalAddToCart();
  const addToWishList = useGlobalAddToWishList();
  const imageUrl =
    product?.image.length > 0 && product?.image
      ? product?.image[0]
      : product?.path ?? '/static/images/logo.png';

  const [isLoadingDetails, setIsLoadingDetails] = useState(false);

  const handleClick = () => {
    setIsLoadingDetails(true);
  };

  return (
    <div className={`${classes['container']} ${classes[className]}`}>
      <div className={`${classes['wrapp']}`}>
        {!isSpecialOffer && product?.categories ? (
          <Link href={`/kategorije/${product?.categories[0]?.id}`}>
            <a className={classes['category-name']}>
              {product?.categories[0]?.name ?? ''}
            </a>
          </Link>
        ) : (
          <h5>Specijalna ponuda</h5>
        )}
        <Link href={`/proizvod/${product?.id}`}>
          <a className={classes['product-name']}>
            {product?.basic_data?.name ?? ''}
          </a>
        </Link>
      </div>

      {/* <div className={`${classes['ruza']}`} onClick={handleClick}> */}
      <Link href={`/proizvod/${product?.id}`}>
        <a
          className={
            product?.image.length <= 0
              ? `${classes['noImg']} ${classes['product-img']} ${classes[noBorder]} ${classes[biggerImg]}`
              : `${classes['product-img']} ${classes[noBorder]} ${classes[biggerImg]}`
          }
          onClick={handleClick}
        >
          {isLoadingDetails && (
            <div className={`${classes['box-small-gif']} gif`}>
              <Image src={pic} alt="Loading" objectFit={'contain'} />
            </div>
          )}
          <Image
            alt={product?.basic_data?.slug}
            src={imageUrl}
            layout="fill"
            objectFit="contain"
          />
        </a>
      </Link>


      <div className={classes['price']}>
        {!product?.price?.discount?.active && (
          <p className={classes['no-old-price']}></p>
        )}
        {product?.price?.discount?.active && (
          <p className={classes['old-price']}>
            {currencyFormat(
              product?.price?.price?.original,
              product?.price?.currency
            )}
          </p>
        )}
        <p className={classes['new-price']}>
          {currencyFormat(
            product?.price?.discount?.active
              ? product?.price?.price?.discount
              : product?.price?.price?.original,
            product?.price?.currency
          )}
        </p>
      </div>
      {product?.price?.discount?.active && (
        <div className={classes['discount']}>
          <span>{product?.price?.discount?.amount}</span>
        </div>
      )}

      {(product?.stickers ?? []).map((sticker) => (
        <div className={classes['top-deal']} key={sticker.slug}>
          <span>{sticker.name}</span>
        </div>
      ))}

      {!isSpecialOffer ? null : product?.price?.discount?.amount ? ( // </div> //   <Image alt="fav-heart" src={heartImg} /> // > //   onClick={() => addToWishList(product?.id)} //   className={classes['fav-heart']} // <div
        <div className={classes['percentSale']}>
          {product?.price?.discount?.amount}
        </div>
      ) : null}

      {(product?.stickers ?? []).map((sticker) => (
        <div className={classes['top-deal']} key={sticker.slug}>
          <span>{sticker.name}</span>
        </div>
      ))}

      {Number(product?.inventory?.amount) > 0 &&
      product?.price?.price?.original ? (
        <div className={classes['add-to-cart']}>
          <div
            className={classes['add-to-cart-image']}
            onClick={() => addToCart(product?.id, 1)}
          >
            {loading ? (
              <div className="gif">
                <Image src={pic} alt="Loading" objectFit={'contain'} />
              </div>
            ) : (
              <BsHandbag />
            )}
          </div>
        </div>
      ) : (
        <div className={classes['checkAvailability']}>
          <Link
            href={`/kontakt?id=${product?.id}&&name=${product?.basic_data?.name}`}
          >
            Proverite dostupnost
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductBoxComplexSmall;
