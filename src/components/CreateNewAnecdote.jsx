// import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useField } from "../hooks";

export const CreateNewAnecdote = ({ addNew }) => {

  const BtnStyle = {
    margin: '5px 10px',
  };

  const content = useField("content");
  const author = useField("author");
  const info = useField("info");
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
    // setContent("");
    // setAuthor("");
    // setInfo("");
    navigate("/"); // Redirect to the anecdote list 
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input
            type={content.type}
            value={content.value}
            onChange={content.onChange}
          />
        </div>
        <div>
          author
          <input
            type={author.type}
            value={author.value}
            onChange={author.onChange}
          />
        </div>
        <div>
          url for more info
          <input
            type={info.type}
            value={info.value}
            onChange={info.onChange}
          />
        </div>
        <button type="submit" style={BtnStyle}>create</button>
        <button type="" style={BtnStyle}>reset</button>
      </form>
    </div>
  );
};

CreateNewAnecdote.propTypes = {
  addNew: PropTypes.func.isRequired,
};
