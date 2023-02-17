import { useLocation } from "react-router";
import { NavBarContainer, NavBarItems, NavBarLinks } from "../../styles/NavBar";

function NavBar() {
  const location = useLocation();

  const dot = "●";
  return (
    <NavBarContainer>
      <NavBarLinks href="/">
        {location.pathname === "/" ? (
          <NavBarItems>{dot}</NavBarItems>
        ) : (
          <NavBarItems>Home</NavBarItems>
        )}
      </NavBarLinks>

      <NavBarLinks href="/about">
        {location.pathname === "/about" ? (
          <NavBarItems>{dot}</NavBarItems>
        ) : (
          <NavBarItems>About</NavBarItems>
        )}
      </NavBarLinks>

      <NavBarLinks href="/cv">
        {location.pathname === "/cv" ? (
          <NavBarItems>{dot}</NavBarItems>
        ) : (
          <NavBarItems>CV</NavBarItems>
        )}
      </NavBarLinks>

      <NavBarLinks href="/projects">
        {location.pathname === "/projects" ? (
          <NavBarItems>{dot}</NavBarItems>
        ) : (
          <NavBarItems>Projects</NavBarItems>
        )}
      </NavBarLinks>

      <NavBarLinks href="/contact">
        {location.pathname === "/contact" ? (
          <NavBarItems>{dot}</NavBarItems>
        ) : (
          <NavBarItems>Contact</NavBarItems>
        )}
      </NavBarLinks>
    </NavBarContainer>
  );
}

export default NavBar;
