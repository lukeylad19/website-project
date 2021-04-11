import React from "react";
import clsx from "clsx";
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core";
import useStyles from "../DashboardStyles";

interface TopBarProps {
  open: boolean;
}
const TopBar: React.FC<TopBarProps> = ({ open }) => {
  const classes = useStyles();

  return (
    <AppBar
      position="absolute"
      className={clsx(classes.appBar, open && classes.appBarShift)}
    >
      <Toolbar className={classes.toolbar}>
        <Grid
          container
          direction="row"
          justify="center"
          alignContent="center"
          alignItems="flex-end"
        >
          <Grid item lg={2}>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              className={classes.title}
            >
              Lukeylad Media
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
