import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const portalElement = document.getElementById("overlay-portal");

export default function Portal({ children }) {
  return ReactDOM.createPortal(children, portalElement);
}

Portal.propTypes = {
  children: PropTypes.element.isRequired,
};
