import styled from "styled-components";
import Rocket from "/public/assets/svg/rocket_with_dust_with_ids.svg";

const StyledSVGWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
`

const StyledLoaderWrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledRocket = styled(Rocket)`
    height: 100%;
`

export {
    StyledSVGWrapper,
    StyledLoaderWrapper,
    StyledRocket
}