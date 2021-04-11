import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import { TwitchIcon, YoutubeIcon } from "../../General/CustomIcons";
import React from "react";
import { Link } from "@material-ui/core";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <Link href="https://www.twitch.tv/lukeylad">
      <ListItem button>
        <ListItemIcon>
          <TwitchIcon />
        </ListItemIcon>
        <ListItemText primary="Twitch" />
      </ListItem>
    </Link>
    <Link href="https://www.youtube.com/channel/UCxsoqxS23DY5C0-51PGYRQg">
      <ListItem button>
        <ListItemIcon>
          <YoutubeIcon />
        </ListItemIcon>
        <ListItemText primary="Youtube" />
      </ListItem>
    </Link>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Merch" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LocalMoviesIcon />
      </ListItemIcon>
      <ListItemText primary="Clips" />
    </ListItem>
  </div>
);
