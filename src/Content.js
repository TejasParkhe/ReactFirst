import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./footer.scss";
import CardCourse from "./CardCourse";

function Content() {
  return (
    <div className="home-main">
      <div className="con-top">
        <span>Better Education For A Better World</span>
        <button>Read More</button>
      </div>

      <div className="content">
        <CardCourse
          icon="fa-brands fa-web-awesome"
          title="Tejas"
          description="HI"
          btntext="Abiman"
          // images="https://www.techpowerup.com/img/nvxMKLMTLWeZA0Yo.jpg"
        />
        <CardCourse
          icon="fa-brands fa-web-awesome"
          title="Linearning Courses Online"
          description="Think of variables as a way to store information that you want to
            reuse throughout your stylesheet."
          btntext="Read Me"
        />

        <div className="con-first">
          <NavLink>
            <FontAwesomeIcon icon="fa-brands fa-web-awesome" />
          </NavLink>
          <h4>Linearning Courses Online </h4>
          <p>
            Think of variables as a way to store information that you want to
            reuse throughout your stylesheet.{" "}
          </p>
          <button>Read Me</button>
        </div>
      </div>
    </div>
  );
}
export default Content;
