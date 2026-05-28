import {
  Truck,
  ShieldCheck,
  RotateCcw,
  Star,
  ShoppingCart,
  CreditCard,
} from "lucide-react";

type ProductDetailProps = {
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    images: string[];
  };
};

export default function ProductDetailComponent({
  product,
}: ProductDetailProps) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-gray-100 p-6">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={product.images?.[0]}
              alt={product.title}
              className="h-[500px] w-full rounded-3xl object-cover transition duration-300 hover:scale-105"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center p-8 lg:p-12">
          <span className="mb-4 w-fit rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            Product #{product.id}
          </span>

          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            {product.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            {product.description}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <h2 className="text-5xl font-extrabold text-green-600">
              ${product.price}
            </h2>

            <span className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              <Star size={16} />
              In Stock
            </span>
          </div>

          <div className="mt-8 space-y-4 border-t pt-6 text-gray-700">
            <div className="flex items-center gap-3">
              <Truck
                className="text-indigo-600"
                size={20}
              />
              <p>Free Delivery in 2–5 days</p>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck
                className="text-green-600"
                size={20}
              />
              <p>Secure Payment</p>
            </div>

            <div className="flex items-center gap-3">
              <RotateCcw
                className="text-orange-500"
                size={20}
              />
              <p>7-Day Return Policy</p>
            </div>

            <div className="flex items-center gap-3">
              <Star
                className="text-yellow-500"
                size={20}
              />
              <p>Premium Product Quality</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-indigo-700">
              <CreditCard size={20} />
              Buy Now
            </button>

            <button className="flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-700 transition hover:bg-gray-100">
              <ShoppingCart size={20} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}