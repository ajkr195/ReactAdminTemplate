import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import MessageListItems from "../AppListItems/AppListItems";

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
    title: "Remy Sharp",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    subTitle: "Hi I'm Remy Sharp",
  },
  {
    id: 2,
    title: "Travis Howard",
    avatar: "https://material-ui.com/static/images/avatar/2.jpg",
    subTitle: "Hi I'm Travis Howard",
  },
  {
    id: 3,
    title: "Cindy Baker",
    avatar: "https://material-ui.com/static/images/avatar/3.jpg",
    subTitle: "Do you know Cindy Baker?",
  },
];

const MessagesContainer = (props) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <MessageListItems type="ListItemAvatar" data={MsgList} />
    </List>
  );
};

export default MessagesContainer;
