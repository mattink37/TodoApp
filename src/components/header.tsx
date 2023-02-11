import { TextField, makeStyles } from "@mui/material";

const Header = (setHeaderText: Function) => {
  return (
    <TextField label="Header" variant="outlined" onChange={setHeaderText()} />
  );
};

export default Header;
