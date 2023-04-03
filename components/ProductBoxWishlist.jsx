import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import classes from './ProductBoxComplexSmall.module.scss';
import { currencyFormat } from '../helpers/functions';
import { useGlobalAddToCart, useGlobalRemoveFromWishlist } from '../helpers/globals';
import { openAlertBox } from '../helpers/tostify';

const ProductBoxWishlist = ({ product, wishlistId }) => {
	const [addToCart] = useGlobalAddToCart();
	const removeFromWishList = useGlobalRemoveFromWishlist();
	return (
		<div className={classes.container}>
			<Link href={`/proizvod/${product?.basic_data?.id_product}`} legacyBehavior>
				<a className={classes['product-img']}>
					<Image
						alt={product?.basic_data?.slug}
						src={(product?.image ? product?.image[0] : product?.path) ?? '/products/missing.png'}
						layout="fill"
						objectFit="contain"
					/>
				</a>
			</Link>
			{product?.categories && (
				<Link href={`/kategorije/${product?.categories[0]?.id}`} legacyBehavior>
					<a className={classes['category-name']}>{product?.categories[0]?.name ?? ''}</a>
				</Link>
			)}
			<Link href={`/proizvod/${product?.basic_data?.id_product}`} legacyBehavior>
				<a className={classes['product-name']}>{product?.basic_data?.name ?? ''}</a>
			</Link>
			<div className={classes.price}>
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
			<div
				className={classes['fav-heart']}
				onClick={() => {
					removeFromWishList(wishlistId);
					openAlertBox('Uspešno obrisan proizvod.', 'success');
				}}
			>
				<Image alt="fav-heart" src="/images/heart.webp" width={35} height={35} />
			</div>
			{Number(product?.inventory?.amount) > 0 && (
				<div className={classes['add-to-cart']}>
					<div
						className={classes['add-to-cart-image']}
						onClick={() => addToCart(product?.basic_data?.id_product, 1)}
					>
						<FontAwesomeIcon icon={faBagShopping} color="white" />
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductBoxWishlist;
