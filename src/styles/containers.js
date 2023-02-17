import styled from "styled-components";

// Section containers
export const StyledApp = styled.div`
  height: 90vh;
  width: 90%;
  margin: 2rem;
  display: flex;
  transition: all 1.9s ease;  
  border: ${props => props.theme.borderColor};
  background-color: ${props => props.theme.body};
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center bottom;

  @media (max-width: 650px ) {
    margin: 0.5rem;
    display:flex;
    flex-direction: column;
    height: 100%; 
  }
`;

export const MainPageContainer = styled.div`
  width: 50%;
  @media (max-width: 650px){
    width:100%
  }
`;

export const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1rem;
  /* background-color: green; */
  width: 100%;

  @media (max-width: 1000px ) {
    display: flex;
    flex-direction: column;
  }

   @media (max-width: 650px ) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
  }
`;

export const TypewriterContainer = styled.div`
  color: ${props => props.theme.subtitle};
  font-family: "Quicksand";
  text-align: "left";
   
  @media (max-width: 650px ) {
    display: flex;
    flex-direction: column;
    align-self: center;
    font-size: 0.8rem;
  }
`;

export const ProjectContainer = styled.div`
  margin: 0 auto;
  padding: 5%;
 
  @media (max-width: 650px ) {
     /* width: 154% */ 
  }
`;

export const PageContainer = styled.div`
  width:70%;
  max-height: 100%;
  overflow-y: scroll;
  
  @media (max-width: 650px ) {
    display: flex;
    flex-direction: column;
    align-self: center;
    overflow-y: visible;
    width: 100%;
  }
`;


// Icons
export const TechIconContainer = styled.div`
  position: relative;
  width: 10%;
  min-width: 3rem;
  margin: 0.5rem;
  
  &:hover {
    opacity: 1;
  }
`;

