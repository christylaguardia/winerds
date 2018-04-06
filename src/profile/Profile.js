import React, { PureComponent } from 'react';

export default class Profile extends PureComponent {

  state = {
    profile: null
  }

  handleChange = (event) => this.setState({
    profile: {
      [event.target.name]: event.target.value 
    }
  })

  handleSave = () => {
    // save to firebase
  }

  render() {
    return (
      <section className="section">
        <form onSubmit={event => {
          event.preventDefault();
          this.handleSave();
        }}>

          {/* <div className="field">
            <div className="control">
              <label className="label">Profile Name</label>
              <input className="input" name="name" type="text" placeholder="Profile Name" />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="label">Category Name</label>
              <input className="input" name="category" type="text" placeholder="Profile Name" />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button className="button is-primary">Submit</button>
            </div>
          </div> */}

        </form>
      </section>
    );
  }
}