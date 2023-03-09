import { useCallback, useEffect } from 'react'
import { useState } from 'react'
import classes from '../../assets/css/WishListPage.module.scss'
import { ApiHandler } from '../api/api'
import { useCartContext } from '../api/cartContext'
import ProductBoxWishlist from '../../components/ProductBoxWishlist'
import Link from 'next/link'
import Image from 'next/image'
import pic from '../../assets/images/loading-buffering.gif';
import Seo from '../../components/Seo/Seo'

const WishListPage = () => {
  const [wishListData, setWishListData] = useState(null)
  const [, , wishlist] = useCartContext()

  const [isLoading, setIsLoading] = useState(true);


  const getWishList = useCallback(() => {
    const api = ApiHandler()
    api
      .list('/wishlist')
      .then((response) => {
        setWishListData(response?.payload);
      })
      .catch((error) => {
        console.warn(error);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, []);

  console.log("wishListData", wishListData)

  useEffect(() => {
    getWishList();
  }, [wishlist])

  const wishListProducts = wishListData?.items ?? []

  return (
    <>
      <Seo title="Lista želja" description="Lista želja" ogtitle="Lista želja" ogdescription="Lista želja" ogurl={`${process.env.BASE_URL}lista-zelja`} />
      <div className={classes['container']}>
        <h5 className={classes['wishlist-heading']}>Vaša lista želja</h5>
        {isLoading ?
          (<div className="gif">
            <Image src={pic} alt="Loading" objectFit={'contain'} />
          </div>) : (
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
              {wishListProducts.length === 0 && <div>
                <p className="mb-3">Vaša lista želja je prazna!</p>
                <Link href="/" >
                  <a className="button-back-to-home">
                    Vratite se na početnu stranicu
                  </a>
                </Link>
              </div>}
            </div>)
        }

      </div>
    </>
  )
}

export default WishListPage
