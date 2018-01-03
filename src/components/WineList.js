import React from 'react';
import propTypes from 'prop-types';
import firebase, { tastingNotes } from '../services/firebase';

class WineList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      notes: []
    }

    this.handleToggle = this.handleToggle.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
 
  componentDidMount() {
    tastingNotes.on('value', (snapshot) => {
      let notes = snapshot.val();
      let newState = [];
      
      notes.forEach(item => {
        newState.push({
          id: item,
          wine: notes[item].wine
        });
      });

      this.setState({ items: newState });
    });
  }

  handleToggle(item) {
    const itemRef = firebase.database().ref(`/tastingNotes/${item.id}`);
    itemRef.update({ completed: !item.completed })
  }

  handleRemove(itemId) {
    const itemRef = firebase.database().ref(`/tastingNotes/${itemId}`);
    itemRef.remove();
  }

  render() {
    return (
      <ul>


        {/* {this.items.map((item) => {
          return (
            <li key={item.id}>
              <div className="box" >
                <article className="media">
                  <div className="media-left">
                    <i className={item.completed ? "fa fa-check-square-o fa-2x" : "fa fa-square-o fa-2x"} aria-hidden="true" onClick={() => this.handleToggle(item)}></i>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <p className="title is-4">{item.title}</p>
                      <p className="subtitle is-6">{item.email === this.state.user.email ? "you" : item.displayName}</p>
                    </div>
                  </div>
                  <div className="media-right">
                    <i className="fa fa-times fa-2x" aria-hidden="true" onClick={() => this.handleRemove(item.id)}></i>
                  </div>
                </article>
              </div>
            </li>
          )
        })} */}
      </ul>
    );
  }
}

WineList.propTypes = {
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

export default WineList;