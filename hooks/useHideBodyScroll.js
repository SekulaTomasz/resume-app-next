import { useEffect } from "react/cjs/react.development";

const useHideBodyScroll = (disable) => {
    
    useEffect(() => {
        if(disable) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
    },[disable]);
}

export default useHideBodyScroll;