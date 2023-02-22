export interface IProductState {
  product: null | IProduct;
  isLoading: boolean;
}

export interface IProduct {
  products: IProductObj[];
}
export interface IProductObj {
  brand: string;
  description: string;
  price: number;
  id: number;
  images: string[];
  title: string;
}
