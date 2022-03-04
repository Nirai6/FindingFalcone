import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import bg from "../img/icon.png";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Box className="header">
      <img
        src={bg}
        className="logo"
        alt=""
        onClick={() => {
          navigate("/");
        }}
      />

      <Typography
        variant="text"
        className="heading"
        sx={{ color: "black" }}
        onClick={() => {
          navigate("/");
        }}
      >
        <h1>Finding Falcon !</h1>
      </Typography>

      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
        className="items"
      >
        <Button
          variant="text"
          sx={{ color: "black" }}
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </Button>
        <Button
          variant="text"
          sx={{ color: "black" }}
          onClick={() => {
            navigate("/info");
          }}
        >
          Info
        </Button>
      </Stack>
    </Box>
  );
};

export default Header;
