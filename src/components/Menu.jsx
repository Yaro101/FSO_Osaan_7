import { NavLink } from "react-router-dom";

export const Menu = () => {
  const menuStyle = {
    backgroundColor: "whitesmoke",
    padding: "16px",
  };
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
      fontSize: '1.2em',
      paddingRight: 20,
    };
  };
  return (
    <div style={menuStyle}>
      <NavLink to="/" style={navLinkStyle}>
        anecdotes
      </NavLink>
      <NavLink to="/create" style={navLinkStyle}>
        create new
      </NavLink>
      <NavLink to="/about" style={navLinkStyle}>
        about
      </NavLink>
    </div>
  );
};
