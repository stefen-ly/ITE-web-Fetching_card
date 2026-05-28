// export interface Category {
//   id: number;
//   name: string;
//   slug: string;
//   image: string;
//   creationAt: string;
//   updatedAt: string;
// }

// export interface ProductTypeResponse {
//   id: number;
//   title: string;
//   slug: string;
//   price: number;
//   description: string;
//   category: Category;
//   images: string[];
//   creationAt: string;
//   updatedAt: string;
// }


export type ProductTypeResponse = {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string;
};