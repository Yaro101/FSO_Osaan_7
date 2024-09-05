// import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useField } from "../hooks";

export const CreateNewAnecdote = ({ addNew }) => {

  const BtnStyle = {
    margin: '5px 10px',
  };

  const content = useField("text");
  const author = useField("text");
  const info = useField("text");
  const navigate = useNavigate(); // Initializing useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    });

    navigate("/"); // Redirect to the anecdote list 
  };

  const handleReset = (e) =>{
    e.preventDefault()
    // using reset func from the custom hook
    content.reset()
    author.reset()
    info.reset()
  }

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
        <button onClick={handleReset} style={BtnStyle}>reset</button>
      </form>
    </div>
  );
};

CreateNewAnecdote.propTypes = {
  addNew: PropTypes.func.isRequired,
};
