import { createContext, useContext } from "react";

export const CountertopContext = createContext(null);
export const ElementRefContext = createContext(null);

export function useCountertopContext() {
  const countertopContext = useContext(CountertopContext);

  if (countertopContext === undefined)
    throw new Error(
      "useCountertopContext must be used within a CountertopContextProvider"
    );

  return countertopContext;
}

export function useElementRefContext() {
  const elementRefContext = useContext(ElementRefContext);

  if (elementRefContext === undefined)
    throw new Error(
      "useCountertopContext must be used within a CountertopContextProvider"
    );

  return elementRefContext;
}
