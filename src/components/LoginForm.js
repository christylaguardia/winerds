import React, { PureComponent } from 'react';

export default class LoginForm extends PureComponent {

  state = {
    email: null,
    password: null
  }

  handleChange = (event) => this.setState({ [event.target.name]: event.target.value })

  handleSubmit = () => {
    console.log('form handleSubmit', this.state);
    this.props.handleSubmit(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className="container has-text-centered box" style={{ maxWidth: '300px' }}>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.handleSubmit();
          }}>
          <div className="field">
            <label className="label" htmlFor="email">Email</label>
            <div className="control">
              <input className="input" name="email" type="email" placeholder="email" required onChange={this.handleChange} />
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="password">Password</label>
            <div className="control">
              <input className="input" name="password" type="password" placeholder="password" required onChange={this.handleChange} />
            </div>
          </div>

          <div className="field">
            <div className="control buttons is-centered">
              <input className="button is-medium is-primary is-fullwidth" type="submit" value="Sign In" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}