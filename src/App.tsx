import "./App.css";
import Header from "./components/header";
import {
  GlobalStyles,
  Grid,
  IconButton,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Body from "./components/body";
import { blue } from "@mui/material/colors";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

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
  return (
    <ThemeProvider theme={theme}>
      <Grid container direction={"column"} className="App">
        <Grid
          container
          direction={"row"}
          sx={{ backgroundColor: "blue", justifyContent: "center" }}
        >
          <Grid item sx={{ backgroundColor: "cyan" }}>
            <Header />
            <Body />
          </Grid>
          <Grid item>
            <IconButton onClick={() => alert("blah")}>
              <PlaylistAddIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
