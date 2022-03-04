import React from "react";

import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid";

import Vehicle from "./Vehicle";
import Planet from "./Planet";

const Destination = ({
  inputs,
  inp,
  handleChange,
  planets,
  vehicle,
  vehicles,
  setTime,
  time,
  setVeicle,
  setVehicles,
  id,
  selectedPlanets,
}) => {
  console.log(vehicle);
  const rocketChange = (event) => {
    let x = vehicles.map((e) => {
      if (vehicle === e.name) {
        return { ...e, total_no: e.total_no + 1 };
      }
      let t = 0;
      if (e.name === event.target.value) {
        t = inp.distance / e.speed;
        setTime({ ...time, ["t" + id]: t });
        return { ...e, total_no: e.total_no - 1 };
      } else {
        return e;
      }
    });
    setVeicle(event.target.value);

    setVehicles(x);
  };
  const selected = Object.values(inputs);
  for (let i of selected) {
    selectedPlanets.push(i.name);
  }
  const planetOneOption = planets.filter(
    (p) => !selectedPlanets.find((sP) => sP === p.name) || p.name === inp.name
  );

  return (
    <Grid item xs={12} md={2.5} lg={2.5}>
      <Stack
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        spacing={4}
      >
        <Planet
          id={id}
          handleChange={handleChange}
          inp={inp}
          planetOption={planetOneOption}
        />

        {inp.name.length > 0 && (
          <Vehicle
            vehicle={vehicle}
            vehicles={vehicles}
            inp={inp}
            rocketChange={rocketChange}
          />
        )}
      </Stack>
    </Grid>
  );
};

export default Destination;
