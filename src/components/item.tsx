import { Grid, Typography } from "@mui/material";

const Item: React.FC<{ text: string }> = (props) => {
  return (
    <Grid item>
      <Typography>{props.text}</Typography>
    </Grid>
  );
};

export default Item;
