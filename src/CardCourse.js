import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardCourse = ({ link, icon, title, description, btntext, images }) => {
  return (
    <div className="con-first ">
      {icon && (
        <NavLink to={link}>
          <FontAwesomeIcon icon={icon} />
        </NavLink>
      )}
      <h4>{title}</h4>
      <p>{description}</p>
      <button>{btntext}</button>
      {images && <img src={images} alt="" />}
    </div>
  );
};

export default CardCourse;
