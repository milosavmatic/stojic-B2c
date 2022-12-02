import heartImg from '../assets/images/elements/heart.png';
import classes from './ProductBoxComplexSmall.module.scss';
import cart from '../assets/images/elements/cart-white.png';
import Link from 'next/link';
import Image from 'next/image';
import { currencyFormat } from '../helpers/functions';
import {
  useGlobalAddToCart,
  useGlobalAddToWishList,
} from '../pages/api/globals';
import { BsHandbag } from 'react-icons/bs';

const ProductBoxComplexSmall = ({
  product,
  noBorder = '',
  className = '',
  biggerImg = '',
  isSpecialOffer = false,
}) => {
  const addToCart = useGlobalAddToCart();
  const addToWishList = useGlobalAddToWishList();
  return (
    <div className={`${classes['container']} ${classes[className]}`}>
      <div className={`${classes['wrapp']}`}>
        {!isSpecialOffer && product?.categories ? (
          <Link href={`/kategorije/${product?.categories[0].id}`}>
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

      <Link href={`/proizvod/${product?.id}`}>
        <a
          className={`${classes['product-img']} ${classes[noBorder]} ${classes[biggerImg]}`}
        >
          <Image
            alt={product?.basic_data?.slug}
            src={
              (product?.image ? product?.image[0] : product?.path) ??
              '/products/missing.png'
            }
            layout="fill"
            objectFit="contain"
          />
        </a>
      </Link>

      <div className={classes['price']}>
        {!product?.price?.discount?.active && (
          <p className={classes['no-old-price']}>&nbsp;</p>
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
      {!isSpecialOffer ? (
        <div
          className={classes['fav-heart']}
          onClick={() => addToWishList(product?.id)}
        >
          <Image alt="fav-heart" src={heartImg} />
        </div>
      ) : (
        <div className={classes['percentSale']}>{product?.price?.discount?.amount || '30%'}</div>
      )}

      {Number(product?.inventory?.amount) > 0 && (
        <div className={classes['add-to-cart']}>
          <div
            className={classes['add-to-cart-image']}
            onClick={() => addToCart(product?.id, 1)}
          >
            {/* <Image src={cart} alt="React" /> */}
            <BsHandbag />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductBoxComplexSmall;
