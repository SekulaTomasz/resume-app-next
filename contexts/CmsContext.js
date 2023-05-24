import React, { useState } from "react";

const CmsContext = React.createContext(null);

const CmsProvider = ({ children, initialData }) => {
  const [data] = useState(initialData);

  return <CmsContext.Provider value={{data, isLoaded: true}}>
    {children}
  </CmsContext.Provider>;
};

export { CmsContext, CmsProvider };
