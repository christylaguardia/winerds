
import React, { Component } from 'react';
import propTypes from 'prop-types';

class WineForm extends Component {

  render() {
    return (
      <section className="section">
        <form>
          <div className="field">
            <label className="label" htmlFor="wine-name">Wine Name</label>
            <div className="control">
              <input className="input" name="wine-name" type="text" placeholder="Winery, Style, Vintage" />
            </div>
          </div>
        </form>
      </section>
    );
  }
}

export default WineForm;