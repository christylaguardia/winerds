import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';

class Tag extends React.PureComponent {
  state = {
    value: false, // TODO: this should come from state
  }

  toggle = () => {
    this.setState(prevState => ({
      value: !prevState.value
    }), () => this.props.handleClick(this.state.value));
  }

  render() {
    return <span onClick={this.toggle}>
      <Chip color={this.state.value ? 'secondary' : 'default'} label={this.props.label} />
    </span>;
  }
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Tag;
