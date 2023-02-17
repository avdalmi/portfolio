import { ThemeProvider } from "styled-components";
import { StyledApp } from "./styles/containers";
import { darkTheme, lightTheme, GlobalStyle } from "./styles/theme";
import MainPage from "./pages/MainPage/MainPage";
import { Routes, Route } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import "./App.css";
import Switch from "./components/Switch/Switch";
import TimeLinePage from "./pages/TimelinePage/TimeLinePage";
import ProjectNavBar from "./components/ProjectNavBar/ProjectNavBar";
import useDarkTheme from "./hooks/useDarkTheme";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutPage from "./pages/AboutPage/AboutPage";

function App() {

  const [theme, themeToggler] = useDarkTheme();

  const selectedTheme = theme === "light" ? lightTheme : darkTheme;
  const isDarkTheme = theme === "dark";

  return (
    <ThemeProvider theme={ selectedTheme } >
      <GlobalStyle isDarkTheme={ isDarkTheme } />
      <div className="AppContainer" >
        <Switch
          toggleTheme={ themeToggler }
          theme={ theme }
        />

        <StyledApp isDarkTheme={ isDarkTheme }>
          <MainPage />

          <Routes>
            <Route path="#/cv" element={ <TimeLinePage /> } />
            <Route path="#/projects/:id" element={ <ProjectPage /> } />
            <Route path="#/projects" element={ <ProjectNavBar /> } />
            <Route path="#/contact" element={ <ContactPage /> } />
            <Route path="#/about" element={ <AboutPage /> } />
          </Routes>
        </StyledApp>
      </div>
    </ThemeProvider >

  );
}


export default App;;
