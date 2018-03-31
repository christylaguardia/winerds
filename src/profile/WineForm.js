
import React, { Component } from 'react';
import { WineTypes, WineYears, WineText } from './WineFormFields';

class WineForm extends Component {

  render() {
    return (
        <form>
          <WineTypes />
          <WineYears />
          <WineText title="Winery" />
          <WineText title="Label" />
        </form>
    );
  }
}

export default WineForm;