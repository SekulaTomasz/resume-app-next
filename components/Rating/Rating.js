import React from 'react';
import FlexContainer from '../FlexContainer';

import { flexcontainerPositionEnum } from '../../const';
import { StyledCircle } from './styled';

const Rating = ({filled}) => {

    const arr = () => {
        const maxSize = 5;
        var newArr =  new Array(maxSize);
        newArr.fill(true, 0, filled);
        newArr.fill(false, filled , newArr.length);
        return newArr;
    }

    return (
        <FlexContainer position={flexcontainerPositionEnum.right}>
            {arr().map((isFilled,index) => <StyledCircle isFilled={isFilled} key={index}/>)}
        </FlexContainer>
    )
}

export default Rating
