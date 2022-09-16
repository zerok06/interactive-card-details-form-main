import { motion } from "framer-motion";
import styled from "styled-components";

export default styled(motion.section)`
  height: 100vh;
  width: 100%;
  background: url("./assets/bg-main-desktop.png") left no-repeat;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 375px) {
    background: url("./assets/bg-main-mobile.png") top no-repeat;
    background-size: contain;
  }
`;
