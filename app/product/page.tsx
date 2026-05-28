"use client";
import ProductCardComponent from "@/components/product/product-cart";
import { ProductTypeResponse } from "@/lib/types/productType";
import { useEffect, useState } from "react";

type productData = ProductTypeResponse[];
// base url
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export default function ProductPage() {
  const [products, setProduct] = useState<productData>();
  // useEffect
  useEffect(() => {
    async function getData() {
      const response = await fetch(`${BASE_URL}/api/v1/products`);
      const data = await response.json();
      setProduct(data);
    }
    getData();
  }, []);
  console.log("data : ", products);

  return (
    <div className="grid grid-cols-5 gap-5">
      {products?.map((product) => (
        <ProductCardComponent
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          images={product.images}
        />
      ))}
    </div>
  );
}
