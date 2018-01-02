import React from 'react';

export default function Home({ props }) {
  return (
    <div className="buttons is-centered">
      <span className="button is-primary is-large">New</span>
      <span className="button is-primary is-large">My Tasting Notes</span>
      <span className="button is-primary is-large">Search</span>
    </div>
  );
}
    // <section>
    // {
    //   props.user
    //     ? (<div>
    //       <WineForm user={this.state.user} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
    //       {/* <WineList user={this.state.user} items={this.state.items} handleToggle={this.handleToggle} handleRemove={this.handleRemove} /> */}
    //     </div>)
    //     : null
    // }