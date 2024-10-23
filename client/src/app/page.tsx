"use client";
import { useEffect } from "react";

const fetchProducts = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  console.log("current url : " , baseUrl);
  try {
    const response = await fetch(`${baseUrl}/api/products`);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    console.log("Products:", data);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

const ProductsPage: React.FC = () => {
  useEffect(() => {
    fetchProducts();
  }, []);

  return <div>Check </div>;
};

export default ProductsPage;
