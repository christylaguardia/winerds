import React from 'react';
import { Link } from 'react-router-dom';
import { formatPath } from '../helpers';

const ProfileSections = ({ sections }) => (
  <div className="tabs">
    <ul>
      {sections.map((section, index) =>
        <li>
          <Link className="is-text-4" key={index} to={`/tasting/${formatPath(section.name)}`}>
          {section.name}
          </Link>
        </li>
      )}
    </ul>
  </div>
);

export default ProfileSections;