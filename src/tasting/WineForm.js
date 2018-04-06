
import React, { Component } from 'react';
import { WineTypes, WineYears, WineText } from './WineFormFields';
import Card from './Card';

export default class WineForm extends Component {

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