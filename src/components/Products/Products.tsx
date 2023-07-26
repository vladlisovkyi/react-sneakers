import React from "react";
import Card from "../../UI/Card";

import { useGetProductsQuery } from "../../app/features/product/productApi";

const Products = () => {
  const { data: products = [], isLoading, error } = useGetProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred while fetching data</div>;
  }
  return (
    <section className="my-12">
      <h3 className="text-2xl mb-4">Browse through all available Sneakers</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
