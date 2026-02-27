import { useState } from "react";

function AddCategory({ category, setCategory, onClose }) {
  const [formData, setFormData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategory([
      ...category,
      {
        id: new Date().getTime(),
        title: formData.title,
        description: formData.description,
      },
    ]);
    setFormData({});
  };

  return (
    <div className="w-full">
      <h2 className="text-xl text-secondary-800 font-bold mb-2">
        Add New Category
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-secondary-100 p-4 rounded-xl flex flex-col gap-y-4"
      >
        <div>
          <label
            htmlFor="category-title"
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
            id="category-title"
            className="bg-transparent rounded-xl border border-secondary-300 text-secondary-500 w-full md:w-auto h-9 px-2"
          />
        </div>
        <div>
          <label
            htmlFor="category-description"
            className="block mb-1 text-secondary-500"
          >
            description
          </label>
          <textarea
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            value={formData.description || ""}
            name="description"
            id="category-description"
            className="bg-transparent rounded-xl border border-secondary-300 text-secondary-500 w-full md:w-auto h-24 px-2"
          ></textarea>
        </div>
        <div className="flex justify-between gap-x-2 md:gap-x-4">
          <button
            onClick={() => onClose(false)}
            className="btn bg-transparent border-2 border-secondary-600 text-secondary-600 w-full mt-4 "
          >
            Cancel
          </button>
          <button type="submit" className="btn btn--secondary w-full mt-4">
            Add Category
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCategory;
