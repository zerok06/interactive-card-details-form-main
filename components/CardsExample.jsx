import React from "react";
import styled from "styled-components";
import CardExampleComponent from "./CardExampleComponent";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
const dataImgNames = [
  { name: "bg-card-front.png", translate: -20 },
  { name: "bg-card-back.png", translate: 20 },
];

const CardsExample = () => {
  return (
    <Container>
      {dataImgNames.map((item) => (
        <CardExampleComponent key={item.name} {...item} />
      ))}
    </Container>
  );
};

export default CardsExample;
