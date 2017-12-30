import React from 'react';
import propTypes from 'prop-types';

function TodoForm({ user, handleChange, handleSubmit }) {
  return (
    <form className="field" onSubmit={handleSubmit}>
      <div className="control">
        <input className="input"
          type="text"
          required
          name="currentItem"
          placeholder="new todo"
          onChange={(e) => handleChange(e)}
          // value={this.state.currentItem}
        />
        <button className="button is-primary" type="submit">Add Item</button>
      </div>
    </form>
  );
}

TodoForm.propTypes = {
  user: propTypes.shape({
    displayName: propTypes.string.isRequired,
    email: propTypes.string.isRequired
  }).isRequired,
  handleChange: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired
};

export default TodoForm;

// class TodoForm extends React.Component{
//   constructor() {
//     super();

//     this.state = {
//       currentItem: '',
//       user: this.props.user
//     }
//   }

//   handleChange(e) {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     const itemsRef = firebase.database().ref('items');
//     const item = {
//       user: this.state.user.email,
//       title: this.state.currentItem,
//       completed: false
//     }
//     itemsRef.push(item);
//     this.setState({ currentItem: null, ...this.state });
//   }

//   render() {
//     return (
//       <div>
//         <p>Welcome {this.state.user.displayName}</p>
//         <form className="field" onSubmit={this.handleSubmit}>
//           <div className="control">
//             <input className="input"
//               type="text"
//               required
//               name="currentItem"
//               placeholder="title"
//               onChange={this.handleChange}
//               value={this.state.currentItem} />
//             <button className="button is-primary" type="submit">Add Item</button>
//           </div>
//         </form>
        
//       </div>
//     );
//   }
// }