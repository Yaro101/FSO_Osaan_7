import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const CreateNewAnecdote = ({ addNew }) => {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [info, setInfo] = useState("");
  const navigate = useNavigate(); // Initializing useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    addNew({
      content,
      author,
      info,
      votes: 0,
    });
    // clearing form fields after submission
    setContent("");
    setAuthor("");
    setInfo("");
    navigate("/"); // Redirect to the anecdote list 
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          author
          <input
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          url for more info
          <input
            name="info"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

CreateNewAnecdote.propTypes = {
  addNew: PropTypes.func.isRequired,
};
