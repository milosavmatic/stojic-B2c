import { ApiHandler } from './api';
import { useCartContext } from './cartContext';
import { openAlertBox } from '../../helpers/tostify';
/**
 * Hook wrapper for global add to cart so context can be used
 */
export const useGlobalAddToCart = (type = false) => {
  const [, mutateCart] = useCartContext();

  const api = ApiHandler();
  const addToCart = (productId, quantity, fromCart = false) => {
    api
      .post('/cart', {
        id_product: productId,
        quantity,
        id_product_parent: null,
        description: null,
        status: null,
        quantity_calc_type: type ? 'replace' : 'calc',
      })
      .then((response) => {
        if (!fromCart) {
          openAlertBox('Proizvod je dodat u korpu.', 'success');
        }
        if (quantity === 0) {
          openAlertBox('Proizvod je uspešno obrisan iz korpe.', 'success');
        }
        mutateCart();
      })
      .catch((error) => openAlertBox(error.message, 'error'));
  };

  return addToCart;
};

/**
 * Hook wrapper for global add to cart so context can be used
 */
export const useGlobalRemoveFromCart = () => {
  const [, mutateCart] = useCartContext();

  const api = ApiHandler();
  const removeFromCart = (productId) => {
    api
      .post('/cart', {
        id_product: productId,
        quantity: 0,
        id_product_parent: null,
        description: null,
        status: null,
      })
      .then((response) => {
        console.log(response);
        mutateCart();
      })
      .catch((error) => console.warn(error));
  };

  return removeFromCart;
};

/**
 * Hook wrapper for global add to wishlist so context can be used
 */
export const useGlobalAddToWishList = () => {
  const [, , , mutateWishList] = useCartContext();

  const api = ApiHandler();
  const addToWishList = (productId) => {
    api
      .post('/wishlist', {
        id: null,
        id_product: productId,
        quantity: 1,
        id_product_parent: null,
        description: null,
        status: null,
      })
      .then((response) => {
        openAlertBox('Proizvod je dodat u listu želja.', 'success');
        mutateWishList();
      })
      .catch((error) =>
        openAlertBox('Proizvod je već dodat listu želja.', 'error')
      );
  };

  return addToWishList;
};

/**
 * Hook wrapper for global remove from wishlist so context can be used
 */
export const useGlobalRemoveFromWishlist = () => {
  const [, , , mutateWishList] = useCartContext();

  const api = ApiHandler();
  const removeFromWishList = (id) => {
    api
      .delete(`/wishlist/${id}`)
      .then((response) => {
        console.log(response);
        mutateWishList();
      })
      .catch((error) => console.warn(error));
  };

  return removeFromWishList;
};
