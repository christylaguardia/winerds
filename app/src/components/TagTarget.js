import React from 'react';
import { DropTarget } from 'react-dnd';

const Types = {
  ITEM: 'tag'
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

class TagTarget extends React.Component {
  render() {
    const { connectDropTarget } = this.props;

    return connectDropTarget(
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}>
        <p>drag tags here</p>
      </div>
    )
  }
}

export default DropTarget(Types.ITEM, {}, collect)(TagTarget)