import React from "react";
import TypeWriter from "../../components/Typewriter/TypeWriter";
import "./MainPage.css";
import { Name } from "../../styles/text";
import {
  IntroductionContainer,
  MainPageContainer,
} from "../../styles/containers";
import { ProfileImage } from "../../styles/Images";
import NavBar from "../../components/NavBar/NavBar";

function MainPage() {
  return (
    <MainPageContainer>
      <IntroductionContainer>
        <ProfileImage
          src={require(`../../media/Akiko.jpeg`)}
          alt="drawing of Akiko"
        />
        <Name>
          Akiko <br />
          van Dal
        </Name>
        <TypeWriter />
      </IntroductionContainer>
      <NavBar />
    </MainPageContainer>
  );
}

export default MainPage;
