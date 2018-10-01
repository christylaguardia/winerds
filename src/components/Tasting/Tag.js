import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';

class Tag extends React.PureComponent {
  state = {
    color: 'default'
  }

  getNextColor = () => {
    const { color } = this.state;
    const newColor = color === 'default' ? 'secondary' : 'default';
    this.setState({ color: newColor });
    this.props.handleClick();
  }

  render() {
    return <span onClick={this.getNextColor}>
      <Chip color={this.state.color} label={this.props.label} />
    </span>;
  }
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Tag;
