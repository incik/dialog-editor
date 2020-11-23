import React from "react";
import { useHistory } from "react-router-dom";
import { CommandBar } from "office-ui-fabric-react";
import { initializeIcons } from "@uifabric/icons";
initializeIcons();

const Navbar = () => {
  const history = useHistory();
  const __items = [
    {
      key: "home",
      text: "Home",
      onClick: () => history.push("/"),
      iconProps: { iconName: "Home" }
    },
    {
      key: "editor",
      text: "Editor",
      onClick: () => history.push("/editor"),
      iconProps: { iconName: "Edit" }
    }
  ];
  return <CommandBar items={__items} />;
};

export default Navbar;
