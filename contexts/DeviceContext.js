import React, { useEffect, useState } from "react";

import { variables } from "../const";
import useDeviceScreenSizeHandler from "../hooks/useDeviceScreenSizeHandler";

const DeviceContext = React.createContext(null);

const DeviceProvider = ({ children }) => {
  const { height, width } = useDeviceScreenSizeHandler();

  const isMobile = () => width <= variables.deviceWidthSizes.mobile && width >= 0;
    
  const isTablet = () => width <= variables.deviceWidthSizes.tablet &&
  width > variables.deviceWidthSizes.mobile;

  const isSmallScreen = () => width <= variables.deviceWidthSizes.smallScreen &&
  width > variables.deviceWidthSizes.tablet;
    
  const isDesktop = () => width <= variables.deviceWidthSizes.desktop &&
  width > variables.deviceWidthSizes.smallScreen;

  const isTvOrLargeScreen = () => width > variables.deviceWidthSizes.desktop;

  const [deviceType, setDeviceType] = useState({
    isJustMobile: isMobile(),
    isMobile: isMobile() || isTablet() || isSmallScreen(),
    isDesktop: isDesktop(),
    isLargeScreen: isTvOrLargeScreen(),
  });

  useEffect(() => {
    setDeviceType({
      isJustMobile: isMobile(),
      isMobile: isMobile() || isTablet() || isSmallScreen(),
      isDesktop: isDesktop(),
      isLargeScreen: isTvOrLargeScreen(),
    });
  },[width]);

  return (
    <DeviceContext.Provider value={{ deviceType }}>
      {children}
    </DeviceContext.Provider>
  );
};

export { DeviceContext, DeviceProvider };
