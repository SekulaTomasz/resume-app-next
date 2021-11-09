import React, { useContext } from "react";
import { PageContext } from "../../contexts/PageContext";

import { StyledPageCircle, StyledWrapper, StyledLine } from "./styled";

const Pagination = ({ allSectionsCount = 4 }) => {
  const { currentPageIndex, setPageIndex } =
    useContext(PageContext);

  const renderPagination = () => {
    const newArr = new Array(allSectionsCount).fill(0);
    return newArr.map((section, index) => {
      const shouldRenderLine = index !== newArr.length - 1;

      return (
        <React.Fragment key={`wrapper-${index}`}>
          <StyledPageCircle
            isActive={currentPageIndex === index}
            key={`circle-${index}`}
            onClick={() => setPageIndex(index)}
          />
          {shouldRenderLine ? <StyledLine key={`line-${index}`} /> : null}
        </React.Fragment>
      );
    });
  };

  return <StyledWrapper>{renderPagination()}</StyledWrapper>;
};

export default Pagination;
