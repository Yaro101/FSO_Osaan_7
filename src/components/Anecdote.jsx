import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

export const Anecdote = ({ anecdotes }) => {
  const { id } = useParams();
  const anecdote = anecdotes.find((a) => a.id === Number(id));
  if (!anecdote) {
    return <p>Anecdote not found</p>;
  }
  return (
    <div>
      <h2>{anecdote.content}</h2>
      <p>by {anecdote.author}</p>
      <p>has {anecdote.votes} votes</p>
      <p>
        For more info see <a href={anecdote.info}> {anecdote.info}</a>
      </p>
    </div>
  );
};

Anecdote.propTypes = {
  anecdotes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string,
      info: PropTypes.string,
      votes: PropTypes.number,
    })
  ).isRequired,
};
