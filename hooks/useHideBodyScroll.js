import { useEffect } from 'react';

const useHideBodyScroll = (disable = false) => {
    
    useEffect(() => {
        if(disable) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
    },[disable]);
}

export default useHideBodyScroll;