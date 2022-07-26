import Header from "./Header";
import themes from "./themes";
import styled,{ ThemeProvider,createGlobalStyle } from "styled-components";
import { useState,createContext } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.css'

const App = createContext();


const Layout = ({children}) => {

    //default theme->light (state)
    const [theme,setTheme] = useState('light');

    const changeTheme = () => {
        setTheme(theme == "light" ? "dark" : "light");
    }

    return(
        <App.Provider value={{changeTheme, theme}}>
            <ThemeProvider theme={themes[theme]}>
                <ToastContainer/>
                <LayoutWrapper>
                    <GlobalStyle/>
                    <Header/>
                    {children}
                </LayoutWrapper>
            </ThemeProvider>
        </App.Provider>
    )
}


//we can declare css in js file using styled-components
const LayoutWrapper = styled.div`
    min-height: 100vh;
    background-colour: ${(props) => props.theme.bgColour};
    background-image: ${(props) => props.theme.bgImage};
    color: ${(props) => props.theme.color};
`

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        overflow-x :hidden;
    }
`

export default Layout
export {App};