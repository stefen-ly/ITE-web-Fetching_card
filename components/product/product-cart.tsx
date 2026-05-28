import Link from "next/link";
import { ProductTypeResponse } from "@/lib/types/productType";

export default function ProductCardComponent({
  id,
  title,
  description,
  price,
  images,
}: ProductTypeResponse) {
  return (
    <Link href={`/product/${id}`}>
      <div className="cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        {/* Product Image */}
        <div className="h-56 overflow-hidden bg-gray-100">
          <img
            src={images}
            alt={title}
            className="h-full w-full object-cover transition duration-300 hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
            Product #{id}
          </span>

          <h2 className="mt-3 text-xl font-bold text-gray-800 line-clamp-1">
            {title}
          </h2>

          <p className="mt-2 text-sm text-gray-600 line-clamp-3">
            {description}
          </p>

          <div className="mt-5 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-green-600">
              ${price}
            </h3>

            <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}