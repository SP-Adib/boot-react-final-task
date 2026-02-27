function ProductList({ filteredProducts }) {
  const handleDelete = (id) => {
    const newProducts = filteredProducts.filter((p) => p.id !== id);
    localStorage.setItem("PRODUCTS", JSON.stringify(newProducts));
  };

  return (
    <div>
      <h2 className="text-2xl text-secondary-500 font-bold border-b-secondary-400 border-b mb-4 ">
        Product List
      </h2>
      <div className="w-full overflow-x-auto space-y-4">
        {filteredProducts.map((prod) => {
          const { id, title, quantity, category, createdAt } = prod;
          return (
            <div
              key={id}
              className="flex items-center justify-between mb-2 w-full min-w-[400px]"
            >
              <span className="text-secondary-500">{title}</span>
              <div className="flex items-center gap-x-3">
                <span className="text-secondary-400">
                  {new Date(createdAt).toLocaleDateString("fa-IR")}
                </span>
                <span className="block px-3 py-0.5 text-secondary-400 border border-secondary-600 text-sm rounded-2xl">
                  {category}
                </span>
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-secondary-500 border-2 border-secondary-300 text-secondary-300 font-bold">
                  {quantity}
                </span>
                <button
                  onClick={() => handleDelete(id)}
                  className="border px-2 py-0.5 rounded-2xl border-red-500 text-red-500 delete-product"
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
