import { DarkModeProvider } from "./Context/DarkModeContext";
import useLocalStorageState from "./hooks/useLocalStorageState";
import AppHeader from "./ui/AppHeader";
import MainBody from "./ui/MainBody";
import "./App.css";

function App() {
  const [products, setProducts] = useLocalStorageState("PRODUCTS", []);
  return (
    <DarkModeProvider>
      <div className="bg-secondary-0 min-h-screen">
        <AppHeader products={products} />
        <MainBody products={products} setProducts={setProducts} />
      </div>
    </DarkModeProvider>
  );
}

export default App;
