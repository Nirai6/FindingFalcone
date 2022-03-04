import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container, Stack } from "@mui/material";
import bg from "../img/background.png";
const Info = () => {
  return (
    <>
      <Header />

      <Container>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ mb: 15 }}
        >
          <img
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            src={bg}
            alt=""
          />
        </Stack>
      </Container>
      <Footer />
    </>
  );
};

export default Info;
