import React from "react";
import Typewriter from "typewriter-effect";
import { TypewriterContainer } from "../../styles/containers";

function TypeWriter() {
  return (
    <TypewriterContainer>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("< hotello")
            .pauseFor(1000)
            .start()
            .typeString(" turned ")
            .pauseFor(1000)
            .start()
            .typeString("full stack developer />")
            .pauseFor(1000)
            .start();
        }}
      />
    </TypewriterContainer>
  );
}
export default TypeWriter;
