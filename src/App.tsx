import "./App.css";
import Header from "./components/header";
import { GlobalStyles, Grid, ThemeProvider, createTheme } from "@mui/material";
import Body from "./components/body";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container direction={"column"} className="App">
        <Grid item className="App-header">
          <Header />
        </Grid>
        <Grid item className="App-body">
          <Body />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
