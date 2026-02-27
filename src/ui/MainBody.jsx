import { useState } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";
import ProductList from "../feature/Product/ProductList";
import AddProduct from "../feature/Product/AddProduct";
import Filters from "./Filters";

function MainBody({ products, setProducts }) {
  const [category, setCategory] = useLocalStorageState("CATEGORY", []);
  const [filteredProducts, setFilteredProducts] = useState([]);
  return (
    <section
      className="container mx-auto p-4 flex-col md:flex-row flex md:justify-between lg:max-w-screen-lg
       md:gap-x-12"
    >
      <AddProduct
        category={category}
        setCategory={setCategory}
        products={products}
        setProducts={setProducts}
      />
      <div className="w-full space-y-8">
        <Filters
          category={category}
          products={products}
          setFilteredProducts={setFilteredProducts}
        />
        <ProductList filteredProducts={filteredProducts} />
      </div>
    </section>
  );
}

export default MainBody;
