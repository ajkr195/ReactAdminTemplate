import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import AppListItemIcon from "./sections/AppListItemIcon";
import AppListItemAvatar from "./sections/AppListItemAvatar";

const AppListItems = (props) => {
  const { data, type, divider, button } = props;

  return (
    <>
      {data.map((item) => (
        <ListItem divider={divider} button={button} key={item.id}>
          <React.Fragment>
            {type === "ListItemIcon" && <AppListItemIcon item={item} />}

            {type === "ListItemAvatar" && <AppListItemAvatar item={item} />}

            {type === "ListItemText" && (
              <ListItemText
                primary={item.title}
                secondary={item.subTitle ? item.subTitle : ""}
              />
            )}
          </React.Fragment>
        </ListItem>
      ))}
    </>
  );
};

export default AppListItems;
