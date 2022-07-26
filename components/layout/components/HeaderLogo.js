
import styled from "styled-components";

const HeaderLogo = () => {
    return (
        <LogoWrapper>
            Fund Raiser
        </LogoWrapper>
    )
}

const LogoWrapper = styled.h1`
    font-weight: bold;
    font-size: 30px;
    margin-left: 10px;
    font-family: 'Poppins';
`

export default HeaderLogo;