import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      /* CART ITEMS */

      cartItems: [],

      isCartOpen: false,

      /* CHECKOUT */

      isCheckoutOpen: false,
      removedCheckoutItems: [],

      openCart: () => set({ isCartOpen: true }),
      
      closeCart: () => set({ isCartOpen: false }),

      openCheckout: () => set({
        isCheckoutOpen: true,
        isCartOpen: false,
        removedCheckoutItems: [],
      }),

      closeCheckout: () => set({
        isCheckoutOpen: false,
        isCartOpen: true,
      }),

      addProduct: (product, size) => set((state) => {
        const safeSize = size || "S";
        const targetId = String(product._id || product.id);

        const existingProduct = state.cartItems.find(
          (item) => String(item.product_id) === targetId && (item.size || "S") === safeSize
        );

        if (existingProduct) {
          return {
            cartItems: state.cartItems.map((item) =>
              String(item.product_id) === targetId && (item.size || "S") === safeSize
                ? { ...item, count: item.count + 1 }
                : item
            ),
          };
        }

        return {
          cartItems: [
            ...state.cartItems,
            {
              product_id: targetId,
              name: product.name,
              thumbnail: product.thumbnail || (product.images && product.images[0]),
              price: product.price,
              size: safeSize,
              count: 1,
            },
          ],
        };
      }),

      removeProduct: (product_id, size) => set((state) => {
        const safeSize = size || "S";
        const targetId = String(product_id);
        return {
          cartItems: state.cartItems.filter(
            (item) => !(String(item.product_id) === targetId && (item.size || "S") === safeSize)
          ),
        };
      }),

      incrementCount: (product_id, size) => set((state) => {
        const safeSize = size || "S";
        const targetId = String(product_id);
        return {
          cartItems: state.cartItems.map((item) =>
            String(item.product_id) === targetId && (item.size || "S") === safeSize
              ? { ...item, count: item.count + 1 }
              : item
          ),
        };
      }),

      decrementCount: (product_id, size) => set((state) => {
        const safeSize = size || "S";
        const targetId = String(product_id);
        return {
          cartItems: state.cartItems.map((item) =>
            String(item.product_id) === targetId && (item.size || "S") === safeSize
              ? { ...item, count: Math.max(1, item.count - 1) }
              : item
          ),
        };
      }),

      removeCheckoutItem: (product_id, size) => set((state) => {
        const safeSize = size || "S";
        const targetId = String(product_id);
        
        const alreadyRemoved = state.removedCheckoutItems.some(
          (item) => String(item.product_id) === targetId && item.size === safeSize
        );
        
        if (alreadyRemoved) return state;

        return {
          removedCheckoutItems: [
            ...state.removedCheckoutItems,
            { product_id: targetId, size: safeSize }
          ]
        };
      }),
    }),
    { name: "marion-cart" }
  )
);

export default useCartStore;
