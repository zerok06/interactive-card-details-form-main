import Head from "next/head";
import CardsExample from "../components/CardsExample";
import ContainerCardFrom from "../components/ContainerCardFrom";
import FormPayment from "../components/FormPayment";
import MainCardForm from "../components/MainCardForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Form Card</title>
        <link
          rel="icom"
          type="image/x-icon"
          href="./assets/favicon-32x32.png"
        />
      </Head>
      <ContainerCardFrom
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        }}
        exit={{ opacity: 0 }}
      >
        <MainCardForm>
          <CardsExample />
          <FormPayment />
        </MainCardForm>
      </ContainerCardFrom>
    </>
  );
}
