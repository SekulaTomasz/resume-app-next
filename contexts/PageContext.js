import * as React from "react";

import usePageChangeHandler from "../hooks/usePageChangeHandler";


const PageContext = React.createContext(null);

const getSectionsIdentity = (cmsData) => [cmsData.resume_field.main_section_translation.title,
    cmsData.skill_section.sectionName,
    cmsData.experience_section.sectionName,
    cmsData.contact_section.sectionName,
  ];

const PageProvider = ({ children, refs, cmsData }) => {
  
  const { currentPageIndex, setPageIndex, scrollPosition } = usePageChangeHandler(refs);
  
  const sectionsIdentity = getSectionsIdentity(cmsData);

  return <PageContext.Provider value={{currentPageIndex, sectionsIdentity , setPageIndex, scrollPosition }}>
    {children}
    </PageContext.Provider>;
};

export { PageContext, PageProvider };
