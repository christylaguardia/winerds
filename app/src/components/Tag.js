import React from 'react';
import { DragSource } from 'react-dnd';

const types = { ITEM: 'tag' };

const itemSource = {
  beginDrag(props) {
    /* code here */
    console.log('start drag');
    return {};
  },
  endDrag(props) {
    /* code here */
    console.log('stop drag');
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Tag extends React.Component {
  render() {
    const { name, isDragging, connectDragSource, src } = this.props;

    return connectDragSource(
      <span className="tag">{name}</span>
    );
  }
}

export default DragSource(types.ITEM, itemSource, collect)(Tag);