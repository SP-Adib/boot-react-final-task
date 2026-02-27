import { useEffect, useState } from "react";

export default function useLocalStorageState(key, initialState) {
  const [value, setValue] = useState(() => {
    // const storedValue = localStorage.getItem(key) || null;
    // return storedValue ? JSON.parse(storedValue) : initialState;
    try {
      const storedValue = localStorage.getItem(key);
      if (storedValue === null) return initialState;

      if (storedValue === "undefined" || storedValue === "null") {
        localStorage.removeItem(key);
        return initialState;
      }
      return JSON.parse(storedValue);
    } catch (err) {
      console.error("Error reading from localStorage:", err);
      return initialState;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error("Error writing to localStorage:", err);
    }
  }, [value, key]);

  return [value, setValue];
}
