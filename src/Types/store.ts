export interface ColorPlatte {
  colorId: number;
  primary: string;
  secondary: string;
}
export interface ProductItem {
  id: string;
  imageUrl: string[];
  title: string;
  description: string;
  colors: ColorPlatte[];
  price: number;
}
export const DEFAULT_PRODUCT_ITEM: ProductItem = {
  id: "",
  imageUrl: [],
  title: "",
  description: "",
  colors: [],
  price: 0,
};

export interface ProductsSliceState {
  products: ProductItem[];
}
// CART-SLICE TYPES.
export interface CartItem extends Omit<ProductItem, "colors" | "imageUrl"> {
  quantity: number;
  cartItemId: string; // e.g `${id}-${color}`
  colors: ColorPlatte;
  imageUrl: string;
}

export interface CartSliceState {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
}
