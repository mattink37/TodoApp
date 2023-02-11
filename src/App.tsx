import "./App.css";
import {
  Grid,
  IconButton,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Body from "./components/body";
import { blue } from "@mui/material/colors";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { useState } from "react";
import { handleItemAdd } from "./business-logic/handleItemAdd";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: blue[400],
    },
    secondary: {
      main: blue[800],
    },
  },
});

const App = () => {
  const [headerText, setHeaderText] = useState<string>();
  const [itemList, setItemList] = useState<JSX.Element[]>([]);

  return (
    <ThemeProvider theme={theme}>
      <Grid container direction={"column"} className="App">
        <Grid container direction={"row"} sx={{ justifyContent: "center" }}>
          <Grid item>
            <TextField
              label="Header"
              variant="outlined"
              onChange={(e) => setHeaderText(e.target.value)}
            />
            <Body itemList={itemList} />
          </Grid>
          <Grid item>
            <IconButton
              onClick={() => handleItemAdd(itemList, setItemList, headerText)}
            >
              <PlaylistAddIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
