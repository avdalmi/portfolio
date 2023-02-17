import styled from "styled-components";

export const Name = styled.h1`
  color: ${(props) => props.theme.title};
  font-size: 3rem;
  /* margin: 5%; */
  /* width: 100%; */
  /* background-color: yellow; */
  text-align: left;
  font-family: 'Quicksand', sans-serif;
  font-weight: 300; 

  @media(max-width: 650px) {
    text-align: center;
    width:100%;
    font-size: 5rem;   
  }

  @media(max-width: 365px) {
    text-align: center;
    width:100%;
    font-size: 3rem;
  }
`;

export const Info = styled.p`
  margin: 1rem;
  color: ${(props) => props.theme.subtitle};
`;

export const PageTitle = styled.h1`
  font-size: 3rem;
  text-align: right;
  font-family: 'Quicksand', sans-serif;
  font-weight: 300;
  color: ${(props) => props.theme.title};
  margin: 1rem;

  @media(max-width: 650px) {
    font-size: 3rem;
    text-align: center;
  }
`;

export const ProjectTitle = styled.h1`
  font-size: 4rem;
  text-align: right;
  font-family: 'Quicksand', sans-serif;
  color: ${(props) => props.theme.title};
  font-weight: 400;
  
  @media(max-width: 650px) {
    font-size: 2.5rem;
    text-align: center;
  }
 
  `;

export const ProjectSubtitle = styled.h4`
  font-size: 1.2rem;
  text-align: right;
  font-family: 'Quicksand', sans-serif;
  color: ${(props) => props.theme.title};
  /* margin: 5%; */
  @media(max-width: 650px) {
    font-size: 1rem;
    text-align: center;
  }
  `;

export const ProjectLocation = styled.h5`
  font-size: 0.9rem;
  text-align: right;
  font-family: 'Quicksand', sans-serif;
  color: ${(props) => props.theme.title};
  
  @media(max-width: 650px) {
    font-size: 0.8rem;
    text-align: center;
  }
`;

export const ProjectDate = styled.h6`
  font-size: 0.9rem;
  text-align: right;
  font-family: 'Quicksand', sans-serif;
  color: ${(props) => props.theme.title};
  
  @media(max-width: 650px) {
    font-size: 0.8rem;
    text-align: center;
  }
  `;

export const ProjectDescription = styled.p`
  font-size: 0.8rem;
  text-align: justify;
  font-family: 'Quicksand', sans-serif;
  color: ${(props) => props.theme.title};
  width: 90%;
  margin: 0 auto;
  padding: 5%;

  @media(max-width: 650px) {
    font-size: 0.7rem;
    width: 100%;
  }
`;

export const AboutMeText = styled.p`
  font-size: 1rem;
  text-align: justify;
  color: ${props => props.theme.title};
  margin: 1rem 1rem 1rem 10rem;
  font-family: 'Quicksand', sans-serif;
    @media(max-width: 650px) {
    margin: 1rem;
  }
`;