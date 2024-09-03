import PropTypes from "prop-types";

export const Notification = ({ message }) => {
  if (!message) {
    return null; // Do not render anything if there is no message
  }
  const notificationStyle = {
    border: "solid",
    padding: 10,
    borderWidth: 2,
    marginBottom: 10,
    color: "green",
  };
  return <div style={notificationStyle}>{message}</div>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
