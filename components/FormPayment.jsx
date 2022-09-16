import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import InputForm from "./InputForm";

const FormCard = styled(motion.form)`
  width: calc(375px - 2rem);
`;

const FormPayment = () => {
  const [body, setBody] = useState({
    name: "",
    cardNumber: "",
    date: "",
    cvc: "",
    valid: false,
  });
  return (
    <FormCard>
      <InputForm
        name="username"
        title="User name"
        type="text"
        error="EL nombre de usuario solo puede contener texto"
      />
      <InputForm
        name="password"
        title="User name"
        type="password"
        error="EL nombre de usuario solo puede contener texto"
      />
    </FormCard>
  );
};

export default FormPayment;
