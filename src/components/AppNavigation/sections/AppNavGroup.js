import React from "react";

import AppNavCollapse from "./AppNavCollapse";
import AppNavItem from "./AppNavItem";
import AppNavLink from "./AppNavLink";
import { ListSubheader } from "@material-ui/core";

const AppNavGroup = (props) => {
  const { item } = props;

  return (
    <>
      <ListSubheader>{item.title}</ListSubheader>

      {item.children && (
        <React.Fragment>
          {item.children.map((item) => (
            <React.Fragment key={item.id}>
              {item.type === "group" && <NavGroup item={item} />}

              {item.type === "collapse" && <AppNavCollapse item={item} />}

              {item.type === "item" && <AppNavItem item={item} />}

              {item.type === "link" && <AppNavLink item={item} />}
            </React.Fragment>
          ))}
        </React.Fragment>
      )}
    </>
  );
};

const NavGroup = React.memo(AppNavGroup);

export default NavGroup;
