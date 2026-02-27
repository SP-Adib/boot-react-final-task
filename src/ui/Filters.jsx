import { useEffect, useMemo, useState } from "react";

function Filters({ setFilteredProducts, category, products }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("asc");

  const fieldStyles = {
    blocks: "flex justify-between gap-x-8 items-center",
    labels: "block mb-1 text-secondary-500",
    inputs:
      "bg-transparent rounded-xl border border-secondary-300 text-secondary-500 w-full md:w-auto h-9 px-2",
  };

  const filteredAndSortedProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch = (product.title || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase().trim());

      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    result = [...result].sort((a, b) => {
      switch (sortOption) {
        case "latest":
          return a.title.localeCompare(b.title);
        case "earliest":
          return b.title.localeCompare(a.title);
        default:
          return "all";
      }
    });

    return result;
  }, [searchTerm, selectedCategory, sortOption]);

  useEffect(() => {
    setFilteredProducts(filteredAndSortedProducts);
  }, [filteredAndSortedProducts]);
  // setFilteredProducts(filteredAndSortedProducts);

  return (
    <div>
      <h2 className="text-secondary-400 font-bold border-b-secondary-400 border-b">
        Filters
      </h2>
      <form className="p-4 flex flex-col gap-y-4">
        <div className={fieldStyles.blocks}>
          <label htmlFor="searchBox" className={fieldStyles.labels}>
            search
          </label>
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            type="text"
            id="searchBox"
            className={fieldStyles.inputs}
          />
        </div>
        <div className={fieldStyles.blocks}>
          <label htmlFor="sortBox" className={fieldStyles.labels}>
            sort
          </label>
          <select
            onChange={(e) => setSortOption(e.target.value)}
            name="sort"
            id="sortBox"
            className={fieldStyles.inputs}
          >
            <option value="all">All</option>
            <option value="latest">latest</option>
            <option value="earliest">earliest</option>
          </select>
        </div>
        <div className={fieldStyles.blocks}>
          <label htmlFor="category" className={fieldStyles.labels}>
            category
          </label>
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory}
            name="category"
            id="category"
            className={fieldStyles.inputs}
          >
            <option value="all">All</option>
            {category.map((cat) => (
              <option key={cat.id} value={cat.title}>
                {cat.title}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}

export default Filters;
