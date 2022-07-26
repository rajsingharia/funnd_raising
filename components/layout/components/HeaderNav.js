
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";


const HeaderNav = () => {
    const Router = useRouter();
    return(
        <HeaderNavWrapper>
            <Link href={"/"}>
            <HeaderNavLinks active={Router.pathname == "/" ? true: false}>
                Campaigns
            </HeaderNavLinks>
            </Link>
            <Link href={"/createcampaign"}>
            <HeaderNavLinks active={Router.pathname == "/createcampaign" ? true : false}>
                Create Campaigns
            </HeaderNavLinks>
            </Link>
            <Link href={"/dashboard"}>
            <HeaderNavLinks active={Router.pathname == "/dashboard" ? true : false}>
                Dashboard
            </HeaderNavLinks>
            </Link>
        </HeaderNavWrapper>
    )
}

const HeaderNavWrapper = styled.div`
    display: flex;
    align-item: center;
    justify-content: space-between;
    background-color: ${(props) => props.theme.bgDiv};
    paddings: 6px;
    height: 50%;
    border-radius: 10px;
`

const HeaderNavLinks = styled.div`
    display: flex;
    align-item: center;
    justify-content: space-between;
    background-color: ${(props) => props.active ? props.theme.bgSubDiv : props.theme.bgDiv};
    height: 60%;
    font-family: 'Roboto';
    margin: 7px;
    border-radius: 10px;
    padding: 0 4px 0 4px;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    font-size: small;
`

export default HeaderNav;