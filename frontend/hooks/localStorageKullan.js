import { useState, useEffect } from "react";

function localStorageKullan(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    let item = localStorage.getItem(key);
    let parsedItem = null;
    if (item !== null) {
      parsedItem = JSON.parse(item);
    }
    return parsedItem !== null ? parsedItem : initialValue;
  });

  useEffect(() => {
    let stringifiedValue = JSON.stringify(storedValue);
    localStorage.setItem(key, stringifiedValue);
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default localStorageKullan;
