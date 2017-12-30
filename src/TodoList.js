import React from 'react';
import propTypes from 'prop-types';

function TodoList({ user, items, handleToggle, handleRemove }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <div className="box" >
              <article className="media">
                <div className="media-left">
                  <i className={item.completed ? "fa fa-check-square-o fa-2x" : "fa fa-square-o fa-2x"} aria-hidden="true" onClick={() => handleToggle(item)}></i>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p className="title is-4">{item.title}</p>
                    <p className="subtitle is-6">{item.email === user.email ? "you" : item.displayName}</p>
                  </div>
                </div>
                <div className="media-right">
                  <i className="fa fa-times fa-2x" aria-hidden="true" onClick={() => handleRemove(item.id)}></i>
                </div>
              </article>
            </div>
          </li>
        )
      })}
    </ul>
  );
}

TodoList.propTypes = {
  user: propTypes.shape({
    displayName: propTypes.string.isRequired,
    email: propTypes.string.isRequired
  }).isRequired,
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      title: propTypes.string.isRequired,
      completed: propTypes.bool.isRequired,
      email: propTypes.string.isRequired,
      displayName: propTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  handleRemove: propTypes.func.isRequired,
};

export default TodoList;