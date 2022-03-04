import React from "react";
import { v4 } from "uuid";
import { Stack } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Vehicle = ({ vehicle, rocketChange, vehicles, inp }) => {
  return (
    <>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <FormControl color="secondary">
          <FormLabel>Rockets</FormLabel>
          <RadioGroup
            name="row-radio-buttons-group"
            value={vehicle}
            onChange={(e) => {
              rocketChange(e);
            }}
          >
            {vehicles.map((val) => {
              return (
                <div key={v4()}>
                  {val.max_distance >= inp.distance && (
                    <>
                      <FormControlLabel
                        color="secondary"
                        value={val.name}
                        disabled={val.total_no > 0 ? false : true}
                        control={<Radio color="secondary" />}
                        label={val.name + " -   " + val.total_no}
                      />
                    </>
                  )}
                </div>
              );
            })}
          </RadioGroup>
        </FormControl>
      </Stack>
    </>
  );
};

export default Vehicle;
