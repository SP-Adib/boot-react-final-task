import { useState } from "react";
import AddCategory from "../Category/AddCategory";

function AddProduct({ products, setProducts, category, setCategory }) {
  const [openAddCategory, setOpenAddCategory] = useState(false);
  const [formData, setFormData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(), // id منحصربه‌فرد برای key در لیست
      title: formData.title,
      quantity: formData.quantity,
      category: formData.category,
      createdAt: new Date().toISOString(),
    };
    setProducts([...products, newProduct]);
    setFormData({});
  };

  return (
    <div className="w-full mb-8 space-y-8">
      {openAddCategory ? (
        <AddCategory
          category={category}
          setCategory={setCategory}
          onClose={setOpenAddCategory}
        />
      ) : (
        <button
          onClick={() => setOpenAddCategory(!openAddCategory)}
          className="text-secondary-400 text-lg mb-4 font-medium"
        >
          Add new Category?
        </button>
      )}
      <div>
        <h2 className="text-xl text-secondary-800 font-bold mb-2">
          Add New Product
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-secondary-100 p-4 rounded-xl flex flex-col gap-y-4"
        >
          <div>
            <label
              htmlFor="product-title"
              className="block mb-1 text-secondary-500"
            >
              title
            </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              value={formData.title || ""}
              type="text"
              name="title"
              id="product-title"
              className="bg-transparent rounded-xl border border-secondary-300 text-secondary-500 w-full md:w-auto h-9 px-2"
            />
          </div>
          <div>
            <label
              htmlFor="product-quantity"
              className="block mb-1 text-secondary-500"
            >
              quantity
            </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, quantity: e.target.value })
              }
              value={formData.quantity || ""}
              placeholder="0"
              type="number"
              name="quantity"
              id="product-quantity"
              className="bg-transparent rounded-xl border border-secondary-300 text-secondary-500 w-full md:w-auto h-9 px-2"
            />
          </div>
          <div>
            <label
              htmlFor="product-category"
              className="block mb-1 text-secondary-500"
            >
              category
            </label>
            <select
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              value={formData.category || ""}
              name="category"
              id="product-category"
              className="bg-transparent rounded-xl border border-secondary-300 text-secondary-500 w-full md:w-auto h-9 px-2"
            >
              <option>Select Category</option>
              {category.map((cat) => (
                <option key={cat.id} value={cat.title}>
                  {cat.title}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="btn btn--secondary w-full mt-4 md:w-auto"
          >
            Add New Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
