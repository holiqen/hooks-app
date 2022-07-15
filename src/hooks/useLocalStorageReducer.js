import { useReducer, useEffect } from "react";

function useLocalStorageReducer(key, initialValue, reducer) {
  const [state, dispatch] = useReducer(
    reducer,
    initialValue,
    () => JSON.parse(window.localStorage.getItem(key)) || initialValue
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, dispatch];
}
export default useLocalStorageReducer;
