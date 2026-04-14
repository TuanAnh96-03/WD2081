export interface IProduct {
  images?: string[];
  oldPrice?: number;
  colors?: string[];
  sizes?: string[];
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  categoryId: number;
}



export type TProduct = Omit<IProduct,"id">