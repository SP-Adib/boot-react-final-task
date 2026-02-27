import DarkModeToggle from "./DarkModeToggle";

function AppHeader({ products }) {
  return (
    <div className="flex items-center justify-center gap-x-4 py-2 bg-secondary-100 mb-6 sticky top-0 h-12 z-10">
      <div>
        <DarkModeToggle />
      </div>
      <div className="flex items-center gap-x-2">
        <h1 className="md:text-xl text-sm font-bold text-secondary-600">
          Number Of All Products
        </h1>
        <span className="flex justify-center items-center border-2 border-secondary-300 bg-secondary-500 text-secondary-300 font-bold rounded-full w-7 h-7">
          {products.length}
        </span>
      </div>
    </div>
  );
}

export default AppHeader;
