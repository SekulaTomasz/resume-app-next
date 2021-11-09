import React, { useState } from 'react';


const useDeviceScreenSizeHandler = () => {

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    

    const setOnLoad = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }


    React.useEffect(() => {
        const handleWindowResize = () => {
          setWidth(window.innerWidth);
          // Set the height in state as well as the width
          setHeight(window.innerHeight);
        }
        setOnLoad();
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
      }, []);

    
      // Return both the height and width
      return { width, height };
}

export default useDeviceScreenSizeHandler;