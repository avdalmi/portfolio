import styled from "styled-components";

export const TimelineTitle = styled.h3`
    margin: 0;
    font-size: 1.5rem;
    font-family: 'Quicksand', sans-serif;
    color: "#333";
`;

export const TimelineCompany = styled.h6`
    font-family: 'Quicksand', sans-serif;
    color: "#333";
    font-size: 0.9rem;
    margin: 0.5rem 0;
`;

export const TimelineLocation = styled.h6`
    margin: 0.5rem 0;
    font-family: 'Quicksand', sans-serif;
    font-size: 0.8rem;
    color: "#333";
    `;

export const TimelineDescription = styled.li`
    font-family: 'Quicksand', sans-serif;
    font-size: 0.9rem;
    color: "#333";
`;

export const TimelineButton = styled.a`
    padding: 0.5em 1.5em;
    width: 7rem;
    color: white;
    font-size: 0.7rem;
    font-family: 'Quicksand', sans-serif;
    text-decoration: none;
    text-align: center;
    border-radius: 5px;
    background-color: #1c1c1c;
    
    &:hover {
        background-color: #f3bc3c;
        text-decoration: none;
        color: #1c1c1c;
    }
`;