import ProductDetailComponent from "@/components/product/product-detail";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL;

export default async function ProductDetailPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const response = await fetch(
    `${BASE_URL}/api/v1/products/${id}`,
    {
      cache: "no-store",
    }
  );

  const product = await response.json();

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <ProductDetailComponent
          product={product}
        />
      </div>
    </div>
  );
}