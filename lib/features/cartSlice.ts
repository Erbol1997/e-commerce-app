import { CartProductInterface } from '@/types/types';
import { createSlice } from '@reduxjs/toolkit';

interface AppState {
  cart: CartProductInterface[];
}

export const getInitialState = (): CartProductInterface[] => {
  if (typeof window !== 'undefined') {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      return JSON.parse(cartData);
    } else {
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }
  return [];
};

const cartState: CartProductInterface[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: cartState,
  },
  reducers: {
    addItemToCart: (state, { payload }: { payload: CartProductInterface }) => {
      let newCart: CartProductInterface[] = [...state.cart];
      const found: CartProductInterface | undefined = state.cart.find(
        ({ article }: { article: number }) => article === payload.article,
      );
      if (found) {
        newCart = newCart.map((item) => {
          return item.article === payload.article
            ? { ...item, count: payload.count || item.count + 1 }
            : item;
        });
      } else newCart.push({ ...payload, count: 1 });
      localStorage.setItem('cart', JSON.stringify(newCart));
      state.cart = newCart;
    },
    removeItemFromCart: (state, { payload }: { payload: number }) => {
      state.cart = state.cart.filter(({ article }: { article: number }) => article !== payload);
      let cart = JSON.parse(localStorage.cart);
      cart = state.cart.filter(({ article }: { article: number }) => article !== payload);
      localStorage.setItem('cart', JSON.stringify(cart));
    },
    removeFullItemsFromCart: (state) => {
      state.cart = [];
      localStorage.setItem('cart', JSON.stringify([]));
    },
    updateItemCountInCart: (state, { payload }: { payload: CartProductInterface }) => {
      let newCart = [...state.cart];
      const found = newCart.find(({ article }) => article === payload.article);

      if (found) {
        newCart = newCart.map((item) => {
          return item.article === payload.article ? { ...item, count: payload.count } : item;
        });
      }

      localStorage.setItem('cart', JSON.stringify(newCart));
      state.cart = newCart;
    },
  },
});

export const { addItemToCart, removeItemFromCart, updateItemCountInCart, removeFullItemsFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
