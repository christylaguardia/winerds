import React from 'react';
import { DragSource } from 'react-dnd';

const types = { ITEM: 'tag' };

const itemSource = {
  beginDrag(props) {
    return { name: props.name };
  },
  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    console.log('dropResult', props.name);
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
    // name: 
  }
}

class Tag extends React.Component {
  render() {
    const { name, isDragging, connectDragSource, src } = this.props;

    return connectDragSource(
      <span className={`tag ${isDragging ? 'is-primary' : ''}`}>{name}</span>
    );
  }
}

export default DragSource(types.ITEM, itemSource, collect)(Tag);