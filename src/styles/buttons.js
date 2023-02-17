import styled from "styled-components";

export const ProjectButtons = styled.button`
    color:${(props) => props.theme.buttonBorder};
    background-color: ${(props) => props.theme.body} ;
    border: 1px solid ${(props) => props.theme.buttonBorder};
    border-radius: 15px;
    padding: 15px;
    font-size: 0.7rem;  
    margin: 5%;
    font-family: 'Quicksand', sans-serif;

    @media(max-width: 650px) {
        font-size: 0.7rem;
        text-align: center;
        padding: 15px;
  }
`;

export const ProjectButtonsContainer = styled.div`
      display: flex;        
      justify-content: center;
`;