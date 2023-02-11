import { Grid } from "@mui/material";

const Body: React.FC<{ itemList: JSX.Element[] }> = (props) => {
  return (
    <>
      {props.itemList.map((item) => (
        <Grid item>{item}</Grid>
      ))}
    </>
  );
};

export default Body;
