import { useState, useEffect } from "react";
import axios from "axios";

import Container from "@mui/material/Container";
import { Stack, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";

import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import Destination from "./Destination";

const Destinations = ({ setFinal, setAuth }) => {
  //Router-dom to navigate to result page
  const navigate = useNavigate();
  //Fetch token from api
  const [token, setToken] = useState("");
  //Loading state
  const [loading, setLoading] = useState(true);

  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  //User inputs for planets
  const [inputs, setInputs] = useState({
    d1: { name: "", distance: "" },
    d2: { name: "", distance: "" },
    d3: { name: "", distance: "" },
    d4: { name: "", distance: "" },
  });

  //Vehicle selection
  const [vehicle1, setVeicle1] = useState("");
  const [vehicle2, setVeicle2] = useState("");
  const [vehicle3, setVeicle3] = useState("");
  const [vehicle4, setVeicle4] = useState("");

  //Time for Each destination
  const [time, setTime] = useState({
    t1: 0,
    t2: 0,
    t3: 0,
    t4: 0,
  });

  useEffect(() => {
    const fetchToken = async () => {
      const headers = {
        Accept: "application/json",
      };
      try {
        const data = await axios.post(
          "https://findfalcone.herokuapp.com/token",
          {},
          {
            headers,
          }
        );

        setToken(data.data.token);
      } catch (err) {
     ;
      }
      setLoading();
    };
    fetchToken();
    const fetchPlanets = async () => {
      try {
        const data = await axios("https://findfalcone.herokuapp.com/planets");
        setPlanets(data.data);
      } catch (err) {
      
      }
    };
    fetchPlanets();

    const fetchVehicles = async () => {
      try {
        const data = await axios("https://findfalcone.herokuapp.com/vehicles");
        setVehicles(data.data);
      } catch (err) {
       
      }
    };

    fetchVehicles();
  }, []);

  const handleChange = (e) => {
    let dis = planets.find((p) => p.name === e.target.value);

    let a = {
      ...inputs,
      [e.target.name]: {
        ...inputs.b,
        name: e.target.value,
        distance: dis.distance,
      },
    };
    setInputs(a);
  };

  const selectedPlanets = [];

  //Final Submit
  const handleSubmit = () => {
    let planet_names = [];
    let planet_details = Object.values(inputs);
    for (let i of planet_details) {
      planet_names.push(i.name);
    }
    let vehicle_names = [vehicle1, vehicle2, vehicle3, vehicle4];

    let destinationDetails = {
      planet_names,
      vehicle_names,
    };

    const finalBody = {
      body: { ...destinationDetails, token: token },
      time: time.t1 + time.t2 + time.t3 + time.t4,
    };
    setFinal(finalBody);
    setAuth(true);
    navigate("/result");
  };

  return (
    <>
      <Header />
      <Container sx={{ mb: 7 }}>
        <Grid item xs={12} md={12} lg={12}>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ mb: 5 }}
          >
            <h2>Select Planets you want to Search in :</h2>
          </Stack>
        </Grid>
        {loading ? (
          <Stack direction="column" justifyContent="center" alignItems="center">
            <CircularProgress color="secondary" />
          </Stack>
        ) : (
          <Grid container spacing={2}>
            <Destination
              inputs={inputs}
              planets={planets}
              inp={inputs.d1}
              handleChange={handleChange}
              vehicle={vehicle1}
              setVeicle={setVeicle1}
              vehicles={vehicles}
              setVehicles={setVehicles}
              time={time}
              setTime={setTime}
              id={1}
              selectedPlanets={selectedPlanets}
            />
            <Destination
              inputs={inputs}
              planets={planets}
              inp={inputs.d2}
              handleChange={handleChange}
              vehicle={vehicle2}
              vehicles={vehicles}
              setVehicles={setVehicles}
              time={time}
              setVeicle={setVeicle2}
              setTime={setTime}
              id={2}
              selectedPlanets={selectedPlanets}
            />
            <Destination
              inputs={inputs}
              planets={planets}
              inp={inputs.d3}
              handleChange={handleChange}
              vehicle={vehicle3}
              vehicles={vehicles}
              setVehicles={setVehicles}
              time={time}
              setTime={setTime}
              setVeicle={setVeicle3}
              id={3}
              selectedPlanets={selectedPlanets}
            />
            <Destination
              inputs={inputs}
              planets={planets}
              inp={inputs.d4}
              handleChange={handleChange}
              vehicle={vehicle4}
              setVeicle={setVeicle4}
              vehicles={vehicles}
              setVehicles={setVehicles}
              time={time}
              setTime={setTime}
              id={4}
              selectedPlanets={selectedPlanets}
            />

            <Grid item xs={12} md={2} lg={2}>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                sx={{ height: "50vh" }}
              >
                <h2>TimeTaken:{time.t1 + time.t2 + time.t3 + time.t4}</h2>
              </Stack>
            </Grid>
          </Grid>
        )}
        {selectedPlanets.includes("") ||
        vehicle1.length <= 0 ||
        vehicle2.length <= 0 ||
        vehicle3.length <= 0 ||
        vehicle4.length <= 0 ? (
          <></>
        ) : (
          <Grid item xs={12} md={12}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <Button variant="outlined" onClick={handleSubmit}>
                Submit
              </Button>
            </Stack>
          </Grid>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Destinations;
