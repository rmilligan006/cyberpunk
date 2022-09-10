import React from "react";
import styled from "styled-components";
import { fadeIn, blinkingColor, fadeAndSlide } from "../animation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../imgs/cyberpunk.png";

const Home = () => {
  return (
    <StyledHome>
      <StyledContainer>
        <StyledImg variants={fadeIn} initial="hidden" animate="show">
          <img src={logo} alt="" />
        </StyledImg>

        <Link to="/history">
          <Styledbutton variants={fadeAndSlide} initial="hidden" animate="show">
            JACK IN
          </Styledbutton>
        </Link>
        <p>
          Cyberpunk and Cyberpunk 2077 is a registered trademark of CD Projekt
          Red all rights reserved
        </p>
      </StyledContainer>
    </StyledHome>
  );
};
const StyledHome = styled(motion.div)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const StyledContainer = styled(motion.div)`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
  p {
    margin-top: 5rem;
  }
`;
const StyledImg = styled(motion.div)`
  align-self: center;

  img {
    object-fit: cover;
    height: 75%;
    width: 100%;
  }
  @media screen and (max-width: 1240px) {
  }
`;
const Styledbutton = styled(motion.div)`
  width: 15vh;
  background-color: #f7ec09;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  height: 10vh;
  font-size: 2rem;
  color: #000;
  margin-top: 5vh;
  border-radius: 5px;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: #ff4a4a;
    box-shadow: 0 0 10px 0 #ff4a4a inset, 0 0 10px 4px #ff4a4a;
    transition: 0.3s;
    color: #fff;
  }
`;
export default Home;
