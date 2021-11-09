import React, { useEffect, useState, useCallback } from "react";

import { debounce } from '../utils/helpers';

const eventName = "scroll";
let lastScrollPosition = 0;
let currentPage = 0;

const usePageChangeHandler = (sectionRefs) => {
  
  const [currentPageIndex, setPage] = useState(0);
  const [forceUpdate, setForceUpdate] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const setPageIndex = (index, forceUpdate = true) => {
    setForceUpdate(forceUpdate);
    setPage(() => {
      currentPage = index;
      return index;
    });
  };

  const eventHandler = (_event) => {
    const st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollPosition) {
      const sectionsPosition = getIndexOfNextSectionByDirection("toBottom");
      setPageIndex(sectionsPosition, false);
    } else {
      const closerSectionIndex = getIndexOfNextSectionByDirection("toTop");
      setPageIndex(closerSectionIndex, false);
    }
    lastScrollPosition = st <= 0 ? 0 : st;
    setScrollPosition(lastScrollPosition);
  };

  const getIndexOfNextSectionByDirection = (direction) => {
    const arrTmp = Object.values(sectionRefs);
    
    return arrTmp.reduce(
      (currentCloser, section, index) => {
        const { top, height } = section.current.getBoundingClientRect();
        const currentPosition = arrTmp[currentCloser].current.getBoundingClientRect();
        const nextSectionCandidate = top + ( height * 0.5 );
        const isToTopCandidate = nextSectionCandidate < currentPosition.top 
          && nextSectionCandidate > 0;

        const isLastSection = (((window.innerHeight + window.scrollY) + (currentPosition.height * 0.5)) >= document.body.offsetHeight);
        const isToBottomCandidate = ((currentPosition.bottom - ( currentPosition.height * 0.5 )) < 0) || isLastSection;

        if(direction === "toBottom" && isToBottomCandidate) return index;
        if(direction === "toTop" && isToTopCandidate) return index;
        return currentCloser;
      }, currentPage);
  }

  const debouncedChangeHandler = useCallback(debounce(eventHandler, 10), []);

  useEffect(() => {
    if (!sectionRefs.hero.current) return;
    document.addEventListener(eventName, debouncedChangeHandler);
    return () => {
      document.removeEventListener(eventName, debouncedChangeHandler);
      lastScrollPosition = 0;
    };
  }, []);

  useEffect(() => {
    if (!forceUpdate) return;
    if (!sectionRefs) return;

    const currentSection = Object.values(sectionRefs)[currentPageIndex];
    if (!currentSection) return;
    if (currentPageIndex === 0) {
      window.scrollTo({ top: currentPageIndex });
      return;
    }
    currentSection.current.scrollIntoView();
  }, [currentPageIndex, forceUpdate]);

  return { currentPageIndex, setPageIndex, setForceUpdate, scrollPosition};
};

export default usePageChangeHandler;
