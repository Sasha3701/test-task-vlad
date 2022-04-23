import { useState, useEffect } from "react";
import { IDebounce } from "../interfaces";

export const useDebounce = ({ value, delay }: IDebounce): string => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
};
