import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactCon = ({ link, icon, head, description }) => {
  return (
    <div className="conemail">
      <NavLink>
        <FontAwesomeIcon link={link} icon={icon} />
      </NavLink>
      <p>{head}</p>
      <h5>{description}</h5>
    </div>
  );
};

export default ContactCon;
