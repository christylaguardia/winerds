import React from 'react';

// TODO: add on click methods

export const WineProfiles = ({ value, handleChange }) => (
  <div className="field">
    <label className="label">Tasting Note Profile</label>
    <div className="control">
      <div className="select">
        <select value={value} onChange={handleChange}>
          <option value="Classic">Classic</option>
          <option value="Easy">Easy</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>
    </div>
  </div>
);

export const WineTypes = () => (
  <div className="field">
    <label className="label">Wine Type</label>
    <div className="control">
      <div className="select">
        <select>
          <option value="">Select Wine Type</option>
          <option value="Red">Red</option>
          <option value="White">White</option>
          <option value="Rosé">Rosé</option>
          <option value="Sparkling">Sparkling</option>
          <option value="Desert">Desert</option>
        </select>
      </div>
    </div>
  </div>
);

export const WineYears = () => {
  const thisYear = parseInt(new Date().getFullYear(), 10);
  const years = Array(100).fill().map((y, i) => thisYear - i);
  
  return (
    <div className="field">
      <label className="label">Vintage</label>
      <div className="control">
        <div className="select">
          <select>
            <option value="">Select Vintage</option>
            {years.map((y, i) => <option key={i} value={y}>{y}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
}

export const WineText = ({ title }) => (
  <div className="field">
    <label className="label">{title}</label>
    <div className="control">
      <input className="input is-expanded" type="text" placeholder={title} />
    </div>
  </div>
);

export const WineTextArea = ({ title }) => (
  <div className="field">
    <label className="label">{title}</label>
    <div className="control">
      <textarea className="textarea is-expanded" placeholder={title}></textarea>
    </div>
  </div>
);

const Star = ({ active }) => (
  <span className={`icon rating-star ${active ? 'is-warning' : ''}`}>
    <i className="fa fa-star"></i>
  </span>
);

export const WineRating = ({ value }) => (
  <div className="field">
    <label className="label">Rating</label>
    <Star active={value < 2} />
    <Star active={value < 3} />
    <Star active={value < 4} />
    <Star active={value < 5} />
    <Star active={value < 6} />
  </div>
);