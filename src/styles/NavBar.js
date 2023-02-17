import styled from "styled-components";

export const NavBarContainer = styled.ul`
    /* background-color: beige; */
    /* width: 100%; */
    list-style-type: none;
    text-align: left;
    padding: 0;
    margin: 1rem;

    @media (max-width: 650px ) {
        text-align: center;
        /* width: 150% */
    }
`;

export const NavBarItems = styled.li`
    color: ${props => props.theme.title};
    font-family: "Quicksand", sans-serif;
    font-size: 0.7rem;
    transition: all 0.5s ease;

    &:hover {
        font-size: 0.9rem;
        transition: all 0.5s ease;
        font-weight: 600;
  
}
`;

export const NavBarLinks = styled.a`
    &:hover {
        text-decoration: none;
    }
`;

//project navbar
export const ProjectNavBarContainer = styled.div`
    width: 100%;
    text-align: right;
    padding: 0;
`;

export const ProjectNavBarItemContainer = styled.div`
    margin: 1rem;
`;

export const ProjectNavBarLinks = styled.a`
    &:hover {
        text-decoration: none;
  /* font-size: 2rem; */
    }
`;

export const ProjectNavBarTitle = styled.h1`
    color: ${props => props.theme.title};
    font-family: "Quicksand", sans-serif;
    font-size: 2rem;
    transition: all 0.5s ease;
    font-weight: 400;

    &:hover {
        font-size: 2.5rem;
        transition: all 0.5s ease;
        font-weight: 600;
    }
`;

export const ProjectNavBarStack = styled.h4`
    font-family: "Quicksand", sans-serif;
    font-size: 1rem;
    color: ${props => props.theme.subtitle};
`;

export const ProjectNavBarLocation = styled.h6`
    font-family: "Quicksand", sans-serif;
    font-size: 0.7rem;
    color: ${props => props.theme.subtitle};
`;