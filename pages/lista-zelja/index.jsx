import { useEffect } from 'react'
import { useState } from 'react'
import classes from '../../assets/css/WishListPage.module.scss'
import { ApiHandler } from '../api/api'
import { useCartContext } from '../api/cartContext'
import ProductBoxWishlist from '../../components/ProductBoxWishlist'

const WishListPage = () => {
  const [wishListData, setWishListData] = useState()
  const [, , wishlist] = useCartContext()

  useEffect(() => {
    const api = ApiHandler()
    api
      .list('/wishlist')
      .then((response) => setWishListData(response?.payload))
      .catch((error) => console.warn(error))
  }, [wishlist])

  const wishListProducts = wishListData?.items ?? []
  return (
    <div className={classes['container']}>
      <h5 className={classes['wishlist-heading']}>Vaša lista želja</h5>
      <div className={classes['content'] + ' row'}>
        {wishListProducts.map((item) => (
          <div
            className={classes['product-col'] + ' col-xxl-3 col-lg-4 col-sm-6'}
            key={item?.wishlist?.id}
          >
            <ProductBoxWishlist
              product={item?.product}
              wishlistId={item?.wishlist?.id}
            />
          </div>
        ))}
        {wishListProducts.length === 0 && <p>Vaša lista želja je prazna!</p>}
      </div>
    </div>
  )
}

export default WishListPage
