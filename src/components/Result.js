import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";

import Header from "./Header";
import Footer from "./Footer";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

import { useNavigate } from "react-router-dom";

const Result = ({ final }) => {
  const navigate = useNavigate();
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, SetError] = useState(false);
  const fetchResult = async () => {
    try {
      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const res = await axios.post(
        "https://findfalcone.herokuapp.com/find",
        final.body,
        {
          headers,
        }
      );

      setResult(res.data);
    } catch (e) {

      SetError(true);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchResult();
     
    return;
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const Success = () => {
    return (
      <>
        <h2>
          Success! Congratulations on Finding Falcone King Shan is mighty
          Pleased.
        </h2>
        <h3>Time Taken: {final.time}</h3>
        <h3>Planet Found: {result.planet_name}</h3>
      </>
    );
  };
  const Fail = () => {
    return (
      <>
        <h2>Oops! Not able to locate Queen of Falicornia.</h2>
      </>
    );
  };

  const Error = () => {
    return (
      <>
        <h2>Oops! Signal Lost.</h2>
      </>
    );
  };
  return (
    <>
      <Header />
      <Container>
        {loading ? (
          <Stack direction="column" justifyContent="center" alignItems="center">
            <CircularProgress color="secondary" />
          </Stack>
        ) : (
          <Stack
            sx={{ mt: 17 }}
            direction="column"
            justifyContent="space-around"
            alignItems="center"
            spacing={7}
          >
            {" "}
            {error ? (
              <Error />
            ) : result.status === "success" ? (
              <Success />
            ) : (
              <Fail />
            )}
            <Button
              variant="outlined"
              className="result-button"
              onClick={() => {
                navigate("/");
              }}
            >
              Try Again
            </Button>
          </Stack>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Result;
