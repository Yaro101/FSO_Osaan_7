import { Link } from "react-router-dom";

export const Menu = () => {
    const padding = {
      paddingRight: 20,
    };
    const menuStyle = {
        backgroundColor: 'whitesmoke',
        padding: '16px',
    }
    return (
      <div style={menuStyle}>
        <Link to="/" style={padding}>
          anecdotes
        </Link>
        <Link to="/create" style={padding}>
          create new
        </Link>
        <Link to="/about" style={padding}>
          about
        </Link>
      </div>
    );
  };