import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import AppListItems from "../AppListItems/AppListItems";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const MsgList = [
  {
    id: 1,
    title: "Play football",
    subTitle: "July 20, 2020, 1:03:13 pm",
  },
  {
    id: 2,
    title: "Learn new trends",
    subTitle: "July 16, 2020, 12:57:11 am",
  },
  {
    id: 3,
    title: "Create tools for people",
    subTitle: "July 20, 2020, 1:03:13 pm",
  },
];

const EventsContainer = (props) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <AppListItems type="ListItemText" data={MsgList} />
    </List>
  );
};

export default EventsContainer;
