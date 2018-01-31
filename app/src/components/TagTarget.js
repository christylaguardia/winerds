import React from 'react';
import { DropTarget } from 'react-dnd';

const Types = {
  ITEM: 'tag'
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }
}

const tagTargetSpec = {
  // canDrop(props, monitor) {
  //   // You can disallow drop based on props or item
  //   const item = monitor.getItem();
  //   console.log('ready to drop', item.name);
  //   return item.name;
  // },

  // hover(props, monitor, component) {
  //   // This is fired very often and lets you perform side effects
  //   // in response to the hover. You can't handle enter and leave
  //   // here—if you need them, put monitor.isOver() into collect() so you
  //   // can just use componentWillReceiveProps() to handle enter/leave.

  //   // You can access the coordinates if you need them
  //   const clientOffset = monitor.getClientOffset();
  //   const componentRect = findDOMNode(component).getBoundingClientRect();

  //   // You can check whether we're over a nested drop target
  //   const isJustOverThisOne = monitor.isOver({ shallow: true });

  //   // You will receive hover() even for items for which canDrop() is false
  //   const canDrop = monitor.canDrop();
  // },

  drop(props, monitor, component) {
    if (monitor.didDrop()) {
      // If you want, you can check whether some nested
      // target already handled drop
      const item = monitor.getItem();
      alert(`you dropped ${item.name}`);
      return item.name;
    }

    // Obtain the dragged item
    // const item = monitor.getItem();

    // You can do something with it
    // ChessActions.movePiece(item.fromPosition, props.position);

    // You can also do nothing and return a drop result,
    // which will be available as monitor.getDropResult()
    // in the drag source's endDrag() method
    
    // return { moved: true };
  }
};

class TagTarget extends React.Component {
  
  state = {
    droppedTags: ['test']
  }

  handleDrop(tag) {
    this.setState({ droppedTags: [...this.state.droppedTags, tag] })
  }

  render() {
    const { connectDropTarget, isOver, canDrop } = this.props;
    const active = isOver && canDrop;

    return connectDropTarget(
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: active ? 'yellow' : 'white'
      }}>
        <p>drag tags here</p>
        {this.state.droppedTags.map(t => <span className="tag is-medium is-primary">{t}</span>)}
      </div>
    )
  }
}

export default DropTarget(Types.ITEM, tagTargetSpec, collect)(TagTarget);