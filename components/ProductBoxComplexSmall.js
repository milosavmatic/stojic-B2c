/* eslint-disable no-nested-ternary */

import Image from 'next/legacy/image';
import { useState } from 'react';
import { faBagShopping, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './ProductBoxComplexSmall.module.scss';
import { currencyFormat } from '../helpers/functions';
import { useGlobalAddToCart, useGlobalAddToWishList } from '../helpers/globals';

const ProductBoxComplexSmall = ({ product, noBorder = '', className = '', biggerImg = '', isSpecialOffer = false }) => {
	const [addToCart, loading] = useGlobalAddToCart();
	const [isLoadingDetails, setIsLoadingDetails] = useState(false);

	const handleClick = () => {
		setIsLoadingDetails(true);
	};

	return (
		<div className={`${classes.container} ${classes[className]}`}>
			<div className={`${classes.wrapp}`}>
				{!isSpecialOffer && product?.categories ? (
					<a href={`/kategorije/${product?.categories[0]?.id}`} className={classes['category-name']}>
						{product?.categories[0]?.name ?? ''}
					</a>
				) : (
					<h5>Specijalna ponuda</h5>
				)}
				<a href={`/proizvod/${product?.slug}`} className={classes['product-name']}>
					{product?.basic_data?.name ?? ''}
				</a>
			</div>

			<a
				href={`/proizvod/${product?.slug}`}
				className={
					product?.image.length <= 0
						? `${classes.noImg} ${classes['product-img']} ${classes[noBorder]} ${classes[biggerImg]}`
						: `${classes['product-img']} ${classes[noBorder]} ${classes[biggerImg]}`
				}
				onClick={handleClick}
			>
				<Image
					style={{ objectFit: 'contain' }}
					alt={product?.basic_data?.slug}
					src={product?.image[0] || '/images/logo.webp'}
					priority
					layout="fill"
					sizes="100vw, 100%"
				/>
			</a>

			<div className={classes.price}>
				{!product?.price?.discount?.active && <p className={classes['no-old-price']} />}
				{product?.price?.discount?.active && (
					<p className={classes['old-price']}>
						{currencyFormat(product?.price?.price?.original, product?.price?.currency)}
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
				<div className={classes.discount}>
					<span>{product?.price?.discount?.amount}</span>
				</div>
			)}

			{(product?.stickers ?? []).map((sticker) => (
				<div className={classes['top-deal']} key={sticker.slug}>
					<span>{sticker.name}</span>
				</div>
			))}

			{!isSpecialOffer ? null : product?.price?.discount?.amount ? ( // </div> //   <Image alt="fav-heart" src={heartImg} /> // > //   onClick={() => addToWishList(product?.id)} //   className={classes['fav-heart']} // <div
				<div className={classes.percentSale}>{product?.price?.discount?.amount}</div>
			) : null}

			{(product?.stickers ?? []).map((sticker) => (
				<div className={classes['top-deal']} key={sticker.slug}>
					<span>{sticker.name}</span>
				</div>
			))}

			{Number(product?.inventory?.amount) > 0 && product?.price?.price?.original ? (
				<div className={classes['add-to-cart']}>
					<div className={classes['add-to-cart-image']} onClick={() => addToCart(product?.id, 1)}>
						<FontAwesomeIcon icon={faBagShopping} color="white" />
					</div>
				</div>
			) : (
				<div className={classes.checkAvailability}>
					<a href={`/kontakt?id=${product?.id}&&name=${product?.basic_data?.name}`}>Proverite dostupnost</a>
				</div>
			)}
		</div>
	);
};

export default ProductBoxComplexSmall;
