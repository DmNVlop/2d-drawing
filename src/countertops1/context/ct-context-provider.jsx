import { useState } from "react";
import PropTypes from "prop-types";

import { CountertopContext, ElementRefContext } from "./ct-context";

export default function CountetopContextProvider({ children }) {
  const [countertops, setCountertops] = useState(null);
  const [elementRef, setElementRef] = useState(null);

  return (
    <CountertopContext.Provider value={{ countertops, setCountertops }}>
      <ElementRefContext.Provider value={{ elementRef, setElementRef }}>
        {children}
      </ElementRefContext.Provider>
    </CountertopContext.Provider>
  );
}

CountetopContextProvider.propTypes = {
  children: PropTypes.node,
};
