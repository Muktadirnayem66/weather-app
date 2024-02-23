import { useEffect, useState } from "react";

const useLocalStorage = (storeageKey, defaultValue) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(storeageKey)) ?? defaultValue
  );

  useEffect(() => {
    localStorage.setItem(storeageKey, JSON.stringify(value));
  }, [value, storeageKey]);
  return [value, setValue]
};

export default useLocalStorage;
