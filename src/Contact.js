import { Link, NavLink } from "react-router";
import ContactCon from "./Contactcon";
import "./Contact.scss"; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  return (
    <>
      <div className="contact-top">
        <image
          src="D:\t-projects\react-first\awesome-project\src\about.jpg"
          alt="about"
        />
        <h2>Contact Us</h2>
        <p>
          Home/Pages/<span>CONTACT</span>
        </p>
      </div>

      <div className="cardcontact">
        <ContactCon
          NavLink={Link}
          icon="fa-solid fa-bars"
          head="Address"
          description="makhmalabad, Nashik, India"
        />
        <ContactCon
          NavLink={Link}
          icon="fa-solid fa-phone"
          head="Phone"
          description="+91 9022092046"
        />
        <ContactCon
          NavLink={Link}
          icon="fa-solid fa-envelope"
          head="Email"
          description="tejasparakhe3212gmail.com"
        />
      </div>

      <div className="constactus">
        <h5>Contact us</h5>
        <h2>Have Any Query? Please Contact Us!</h2>
        <p>
          The contact form is currently inactive. Get a functional and working
          contact form with Ajax & PHP in a few minutes. Just copy and paste the
          files, add a little code and you're done. <span>Download Now</span>.
        </p>
        <div className="colname">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
        </div>
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Message"></textarea>
        <button>Send Message</button>
      </div>
    </>
  );
}

export default Contact;
