import React from 'react';

export default class Modal extends React.PureComponent {

  state = {
    active: false
  }

  toggle = () => this.setState({ active: !this.state.active })

  handleSave = () => {
    this.props.save();
    this.toggle();
  }

  render() {
    const { modalTitle, buttonTitle, content } = this.props;

    return (
      <section className="section">
        <button className="button is-large is-info"
          onClick={this.toggle}>{buttonTitle}</button>
        <ModalCard
          active={this.state.active}
          title={modalTitle}
          content={content}
          toggle={this.toggle}
          handleSave={this.handleSave} />
      </section>
    )
  }
}


const ModalCard = ({ active, title, content, toggle, handleSave }) => (
  <div className={`modal ${active ? 'is-active' : ''}`}>
    <div className="modal-background" onClick={toggle}></div>
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">{title}</p>
        <button className="delete" aria-label="close" onClick={toggle}></button>
      </header>
      <section className="modal-card-body">
        {content}
      </section>
      <footer className="modal-card-foot">
        <button className="button is-success" onClick={handleSave}>Save</button>
        <button className="button" onClick={toggle}>Cancel</button>
      </footer>
    </div>
  </div>
);