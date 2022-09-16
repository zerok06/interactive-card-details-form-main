import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  background-image: url(${(props) => `./assets/${props.name}`});
  transform: translateX(${(props) => `${props.translate}px`});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  width: 440px;
  border-radius: 15px;
  box-shadow: 1rem 1rem 2.5rem 10px rgba(var(--Dark-grayish-violet), 0.3);
`;
const CardExampleComponent = (props) => {
  return <Container {...props}></Container>;
};

export default CardExampleComponent;
