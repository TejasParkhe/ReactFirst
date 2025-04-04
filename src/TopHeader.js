import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopHeader = ({ link, icon, text }) => {
  return (
    <NavLink>
      <FontAwesomeIcon link={link} icon={icon} />
      {text}
    </NavLink>
  );
};

export default TopHeader;
