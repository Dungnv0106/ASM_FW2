export interface IProduct {
  _id?: string;
  productName: string;
  price: number;
  originalPrice: number;
  description: string;
  image: imageProduct[];
  categoryId: string;
}
interface imageProduct {
  url: string;
  publicId: string;
  _id?: string;
}
