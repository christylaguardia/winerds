import React, { PureComponent } from 'react';

export default class Card extends PureComponent {

  state = {
    active: false
  }

  toggle = () => this.setState({ active: !this.state.active })

  render() {
    const { title, content } = this.props;
    const { active } = this.state;

    return (
      <div className="card">
        <header className="card-header" onClick={this.toggle}>
          <p className="card-header-title">{title}</p>

          <span className="card-header-icon">
            <span>{active ? 'hide' : 'show'}</span>
            <span className="icon">
              <i className={`fa fa-angle-${active ? 'up' : 'down'}`} aria-hidden="true"></i>
            </span>
          </span>

        </header>

        {active && <div className="card-content">{content}</div>}

      </div>
    )
  }
}