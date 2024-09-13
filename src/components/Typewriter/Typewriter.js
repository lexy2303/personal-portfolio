import React from "react";
import { Typewriter } from 'react-simple-typewriter';

const Type = () => {
  return (
    <Typewriter
      options={{
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
      words={[
        "Software Developer",
        "Freelancer",
      ]}
    />
  );
}

export default Type;