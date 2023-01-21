import { useState, useEffect } from "react";

export function usePersistedState(defaultValue, key) {
  const [value, setValue] = useState(() => {
    const value = localStorage.getItem(key);

    return value ? JSON.parse(value) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
