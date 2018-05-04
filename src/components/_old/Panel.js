import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const PanelTabs = ({ sections }) => (
  <p className="panel-tabs">
    {sections.map((section, index) => <Link key={index}>{section.name}</Link> )}
  </p>
);

const PanelBlock = ({ name, icon }) => (
  <Link to={`/${name}`}className="panel-block">
    <span className="panel-icon">
      <i className={`fa fa-${icon}`} aria-hidden="true"></i>
    </span>
    {name}
  </Link>
);

const Section = ({ section }) => (
  <div>
    <Link className="is-text-4" to={`/tasting/${section.name.toLowerCase()}`}>{section.name}</Link>

  </div>
)

export default class Panel extends React.Component {

  render() {
    const { sections } = this.props;

    return (
      <nav className="panel">
        <p className="panel-heading">
          Wine Name
        </p>

        <p className="panel-tabs">
          {sections.map((section, index) =>
            <Link className="is-text-4" key={index} to={`/tasting/${section.name.replace(' ','-').toLowerCase()}`}>{section.name}</Link>
          )}
        </p>

        <Router>
          <Switch>
            {/* {sections.map((section, index) =>
              <Route path={`/tasting/${section.name.toLowerCase()}`} render={} />
            )} */}
          </Switch>
        </Router>

        
        <a className="panel-block is-active">
          <span className="panel-icon">
            <i className="fa fa-book" aria-hidden="true"></i>
          </span>
          bulma
  </a>
        {/* <a className="panel-block">
          <span className="panel-icon">
            <i className="fa fa-book" aria-hidden="true"></i>
          </span>
          marksheet
  </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fa fa-book" aria-hidden="true"></i>
          </span>
          minireset.css
  </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fa fa-book" aria-hidden="true"></i>
          </span>
          jgthms.github.io
  </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fa fa-code-fork" aria-hidden="true"></i>
          </span>
          daniellowtw/infboard
  </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fa fa-code-fork" aria-hidden="true"></i>
          </span>
          mojs
  </a> */}

        <label className="panel-block">
          <input type="checkbox" />
          Keep Private
        </label>

        <div className="panel-block">
          <button className="button is-link is-fullwidth">
            Save
          </button>
        </div>
      </nav>
    );
  }
}
