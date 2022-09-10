import React from "react";
import styled from "styled-components";
import { fadeIn, blinkingColor, fadeAndSlide1 } from "../animation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const History = () => {
  return (
    <>
      <Container>
        <Topbox variants={fadeAndSlide1} initial="hidden" animate="show">
          <h2>Welcome to Night City</h2>
        </Topbox>
      </Container>
    </>
  );
};
const Container = styled(motion.div)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Topbox = styled(motion.div)`
  background-color: #fedb39;
  width: 50%;
  position: relative;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default History;
