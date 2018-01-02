import React, { Component } from 'react';
import firebase, { auth, provider, tastingNotes } from './firebase';
import Auth from './Auth';
import TodoList from './TodoList';
import WineForm from './WineForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: '',
      notes: [],
      user: null
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    const credential = JSON.parse(localStorage.getItem('credential'));
    if (!credential) return console.log('no credential');
    let token = provider.credential(credential.idToken);

    auth.signInWithCredential(token)
      .then(user => this.setState({ user }))
      .catch(error => console.log('Error:', error));
  }

  componentDidMount() {
    tastingNotes.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          completed: items[item].completed,
          displayName: items[item].displayName,
          email: items[item].email
        });
      }
      this.setState({ items: newState });
    });
  }

  login() {
    auth.signInWithPopup(provider)
      .then((result) => {
        localStorage.setItem('credential', JSON.stringify(result.credential));
        const user = result.user;
        this.setState({ user });
      })
      .catch(error => console.log(error));
  }

  logout() {
    auth.signOut()
      .then(() => {
        this.setState({ user: null });
        localStorage.clear();
      })
      .catch(error => console.log(error));
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const item = {
      title: this.state.currentItem,
      completed: false,
      displayName: this.state.user.displayName,
      email: this.state.user.email,
    }
    console.log('new item', item);
    tastingNotes.push(item);
    this.setState({ currentItem: null });
  }

  handleToggle(item) {
    const itemRef = firebase.database().ref(`/items/${item.id}`);
    itemRef.update({ completed: !item.completed })
  }

  handleRemove(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }

  render() {
    return (
      <div>
        <Auth user={this.state.user} login={this.login} logout={this.logout} />
        <section className="section">
          {this.state.user
            ? (<div>
                <WineForm user={this.state.user} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                {/* <TodoList user={this.state.user} items={this.state.items} handleToggle={this.handleToggle} handleRemove={this.handleRemove} /> */}
              </div>)
            : null
          }
        </section>
      </div>
    );
  }
}

export default App;
