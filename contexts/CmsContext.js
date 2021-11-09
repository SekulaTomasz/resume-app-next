import React from "react";
import { useFetchIntialData } from "../hooks";
import { cmsEndpoints } from '../const';

const CmsContext = React.createContext(null);

const CmsProvider = ({ children }) => {
  const { isLoaded, data, error, setForceRefresh } 
    = useFetchIntialData(cmsEndpoints.resumeById("1"));

  return <CmsContext.Provider value={{data, isLoaded: isLoaded}}>
    {children}
  </CmsContext.Provider>;
};

export { CmsContext, CmsProvider };
