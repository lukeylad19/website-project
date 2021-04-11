import React from "react";
import clsx from "clsx";
import { Divider, Drawer, IconButton, List } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "../DashboardStyles";
import { mainListItems } from "../ListItems/ListItems";

interface SideBarProps {
  toggleDrawerOpen: () => void;
  open: boolean;
}
const SideBar: React.FC<SideBarProps> = ({ toggleDrawerOpen, open }) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={toggleDrawerOpen}>
          <MenuIcon />
        </IconButton>
      </div>
      <Divider />
      <List>{mainListItems}</List>
    </Drawer>
  );
};

export default SideBar;
