import styled from "styled-components";

//Icons
export const TechIcon = styled.img`
display: block;
  width: 100%;
  height: auto;
`;

export const TechIconOverlay = styled.div`
position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: #1c1c1c;

  &:hover {
    opacity: 1;

  }
`;

export const TechIconText = styled.div`
  color: #fff;
  font-size: 0.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
`;

//Profile Image
export const ProfileImage = styled.img`
  width: 70%;
  border-radius: 50%;
  transition: all 1s ease;
  /* min-width: 150px; */

  &:hover {
    width: 100%;
    transition: all 1s ease;
  }

  @media(max-width: 650px) {
   width: 80%;
   margin: 1rem auto;
  }

  /* @media(min-width: 750px) {
   width: 90%;
   margin: 1rem auto;

   &:hover {
    width: 110%;
    transition: all 1s ease;
  }
  } */
`;