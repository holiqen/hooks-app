import { useEffect, useState } from "react";

const useLocalStorageState = (key, initialValue) => {
  const [state, setState] = useState(JSON.parse(window.localStorage.getItem(key)) || initialValue);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};

export default useLocalStorageState;
