import React, { PureComponent } from 'react';
import Card from '../tasting/Card';

class Tag extends PureComponent {

  state = {
    vote: 0,
    prevVote: 3
  }

  // 0 1 2 3 2 1 0

  handleClick = () => {
    const { vote, prevVote } = this.state; // 1
    let newVote;

    if (vote === 3) newVote = 2;
    else if (vote === 2 && prevVote === 3) newVote = 1;
    // else if (vote === 2 && prevVote === 1) newVote = 3;
    else if (vote === 1 && prevVote === 2) newVote = 0;
    // else if (vote === 1 && prevVote === 0) newVote = 2;
    else newVote = vote + 1;

    // else if (vote > newVote) newVote = vote - 1;
    // else newVote = vote + 1; // 4
    
    this.setState({ vote: newVote, prevVote: vote });
  }
  
  render() {
    const { vote } = this.state;
    const sizeClass = vote === 0 ? '' : vote === 1 ? '' : vote === 2 ? ' is-medium' : ' is-large';
    const tagStyle = {
      backgroundColor: vote === 0 ? '' : vote === 1 ? '#e7f2fb' : vote === 2 ? '#8ac1ec' : '#1684D9',
      color: vote === 3 ? '#FFF' : '#000',
    };
    const containerStyle = {
      padding: vote < 2 ? '18px 6px' : vote === 2 ? '8px 6px' : '0 6px',
    };
    
    return (
      <div style={containerStyle}>
        <span className={`tag ${sizeClass}`}
          style={tagStyle}
          onClick={this.handleClick} >
          {this.props.name}
        </span>
      </div>
    )
  }
};

const SubCategory = ({ subcategory }) => (
  <div style={{ display: 'block', width: '100%' }}>
    <span className="is-text-2">{subcategory.name}</span>
    <div className="tags">
      {subcategory.tags.map((st, sti) => <Tag key={`tag-${sti}`} name={st} />)}
    </div>
  </div>
);

const Category = ({ category, even }) => (
  <div className="columns" style={{ borderBottom: even ? '2px solid whitesmoke' : '' }}>
    
    <div className="column is-one-quarter"><p className="label">{category.name}</p></div>
    
    <div className="column">
      <div className="tags">
        {category.tags.map((t, ti) => {
          if (typeof t === 'string') return <Tag key={`tag-${ti}`} name={t} />
          else return t.map((sc, sci) => <SubCategory key={`subcategory-${sci}`} subcategory={sc} />)
        })}
      </div>
    </div>

  </div>
);

const TagPicker = ({ sections }) => {
  console.log('tag picker sections', sections);

  return (
    <div>
      {sections.map((section, sectionIndex) => {
        return (
          <Card key={sectionIndex}
            title={section.name}
            content={section.categories.map((c, ci) => <Category key={`category-${ci}`} category={c} even={ci%2===0} />)}
          />
        )}
      )}
    </div>
  );
}

export default TagPicker;