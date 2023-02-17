import styled, { createGlobalStyle } from "styled-components";

// Theme colors and settings
export const darkTheme = {
    body: "#1c1c1c",
    title: "#fff",
    subtitle: "#b6b6b6",
    icon: "#b6b6b6",
    navbar: "light",
    navbarTitle: "#1c1c1c",
    buttonBorder: "#e6e6e6",
    buttonText: "#1c1c1c",
    borderColor: "2px solid #e6e6e6"
};


export const lightTheme = {
    body: "#e6e6e6",
    title: "#1c1c1c",
    subtitle: "#333",
    icon: "#333",
    navbar: "dark",
    navbarTitle: "#fff",
    buttonBorder: "#1c1c1c",
    buttonText: "#fff",
    borderColor: "2px solid #1c1c1c"
};

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.isDarkTheme ? "#1c1c1c" : "#e6e6e6"};
    /* transition: 2s ease;§ */
  }
`;
// Theme Toggle Switch
export const ThemeToggleContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 -3.2rem 1.5rem -1.5rem;
    /* background-color: yellow; */
    @media (max-width: 650px ) {
        display: flex;
        flex-direction: row;
        margin: 0;
        width: 100%;
        justify-content: space-around;
    }
`;

export const ThemeToggleItemContainer = styled.div`
    transform: rotate(-90deg);
    margin:  0 0 3rem 0;
    font-size: 0.9rem;
    font-weight: 400;
    font-family: "Quicksand", sans-serif;
    min-width: 4.5rem;
    color: ${props => props.theme.title};
    /* background-color: pink; */

    @media (max-width: 650px ) {
        display: flex;
        transform: none;
        justify-content: center;
        margin: 0;
        align-items: center;
    }
`;

export const ThemeInput = styled.input`
    box-sizing: border-box;
    appearance: none;
    background: ${props => props.theme.body};
    outline: 1px solid ${props => props.theme.title};
    border: 1px solid ${props => props.theme.body};
    width: 0.6rem;
    height: 0.6rem;
    
    &:checked {
        box-sizing: border-box;
        appearance: none;
        background: ${props => props.theme.title};
        outline: 1px solid ${props => props.theme.title};
        border: 1px solid ${props => props.theme.body};
        width: 0.6rem;
        height: 0.6rem;
    } 
`;

export const ThemeLabel = styled.label`
    margin: 5px;
`;



