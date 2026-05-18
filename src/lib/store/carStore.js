

import { create } from "zustand"
import { persist } from "zustand/middleware"

const useCartStore = create(
  persist(
    (set) => ({

  /* CART ITEMS */

  cartItems: [],

  /* DRAWER */

  isCartOpen: false,

  /* OPEN */

  openCart: () =>

    set({
      isCartOpen: true
    }),

  /* CLOSE */

  closeCart: () =>

    set({
      isCartOpen: false
    }),

  /* ADD PRODUCT */

  addProduct: (product, size) =>

    set((state) => {

      const existingProduct = state.cartItems.find(

        (item) =>

          item.product_id === (product._id || product.id) &&
          item.size === size

      )

      /* IF EXISTS */

      if (existingProduct) {

        return {

          cartItems: state.cartItems.map((item) =>

            item.product_id === (product._id || product.id) &&
            item.size === size

              ? {
                  ...item,
                  count: item.count + 1
                }

              : item

          )

        }

      }

      /* ADD NEW */

      return {

        cartItems: [

          ...state.cartItems,

          {
            product_id: product._id || product.id,

            name: product.name,

            thumbnail: product.thumbnail || (product.images && product.images[0]),

            price: product.price,

            size,

            count: 1
          }

        ]

      }

    }),

  /* REMOVE */

  removeProduct: (product_id, size) =>

    set((state) => ({

      cartItems: state.cartItems.filter(

        (item) =>

          !(
            item.product_id === product_id &&
            item.size === size
          )

      )

    })),

  /* INCREMENT */

  incrementCount: (product_id, size) =>

    set((state) => ({

      cartItems: state.cartItems.map((item) =>

        item.product_id === product_id &&
        item.size === size

          ? {
              ...item,
              count: item.count + 1
            }

          : item

      )

    })),

  /* DECREMENT */

  decrementCount: (product_id, size) =>

    set((state) => ({

      cartItems: state.cartItems.map((item) =>

        item.product_id === product_id &&
        item.size === size

          ? {
              ...item,
              count: Math.max(
                1,
                item.count - 1
              )
            }

          : item

      )

    })),

}), { name: "marion-cart" })
)

export default useCartStore