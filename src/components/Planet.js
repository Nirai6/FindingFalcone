
import { v4 } from "uuid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";


const Planet = ({id,inp,handleChange,planetOption}) => {
  return (
    <FormControl color="secondary" sx={{ m: 1, minWidth: 150 }}>
    <InputLabel id={`d${id}`}>Destination {id}</InputLabel>
    <Select
      name={`d${id}`}
      label={`Destination ${id}`}
      labelId={`d${id}`}
      value={inp.name}
      onChange={(e) => {
        handleChange(e);
      }}
    >
      {planetOption.map((o) => (
        <MenuItem value={o.name} key={v4()}>
          {o.name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
  )
}

export default Planet