import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Home = ({ isAuthenticated }) => {
  if (isAuthenticated) return <Redirect to="/tasting" />;
  
  return (
    <div className="hero is-fullheight" style={{ marginTop: '-3.25rem' }}>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="is-size-1 logo">
            <strong>WINERDS</strong>
          </h1>
          <p className="subtitle">
            your guide for wine tasting notes
          </p>
          <Link className="button is-large is-primary" to="/login">join the nerds</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

// {/* <section className="section">
//   <nav className="level is-mobile">
//     <div className="level-item has-text-centered">
//       <div>
//         <p className="heading">Tasting Notes</p>
//         <p className="title">3,456</p>
//       </div>
//     </div>
//     <div className="level-item has-text-centered">
//       <div>
//         <p className="heading">Wines</p>
//         <p className="title">1,230</p>
//       </div>
//     </div>
//     <div className="level-item has-text-centered">
//       <div>
//         <p className="heading">Tasters</p>
//         <p className="title">456K</p>
//       </div>
//     </div>
//   </nav>
// </section> */}