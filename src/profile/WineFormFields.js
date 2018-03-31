import React from 'react';

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
  const thisYear = parseInt(new Date().getFullYear());
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
      <input className="input" type="text" placeholder={title} />
    </div>
  </div>
);

export const WineReview = () => (
  <div className="field">
    <label className="label">Message</label>
    <div className="control">
      <textarea className="textarea" placeholder="Textarea"></textarea>
    </div>
  </div>
);