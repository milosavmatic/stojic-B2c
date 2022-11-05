import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState(0)
  const mutateCart = () => {
    let x = Math.random() * 10
    do {
      x = Math.random() * 10
    } while (x === cart)
    setCart(x)
  }

  const [wishList, setWishlist] = useState(0)
  const mutateWishList = () => {
    let x = Math.random() * 10
    do {
      x = Math.random() * 10
    } while (x === cart)
    setWishlist(x)
  }

  return (
    <CartContext.Provider value={[cart, mutateCart, wishList, mutateWishList]}>
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext() {
  return useContext(CartContext)
}
