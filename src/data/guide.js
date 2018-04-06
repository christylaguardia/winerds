import categories from './categories.json';
// console.log('categories', Object.keys(categories));

export const config = {
  'Classic': {
    'Sight': ['Clarity', 'Concentration', 'Color'],
    'Nose': ['Fruit', 'Fruit-Character', 'Non-Fruit', 'Earth', 'Mineral', 'Wood'],
    'Palate': ['Sweetness', 'Fruit', 'Fruit-Character', 'Non-Fruit', 'Earth', 'Mineral', 'Wood'],
  },
  'Easy': {
    'Sight': ['Clarity'],
    'Palate': ['Sweetness'],
  },
  'Advanced': {
    'Sight': ['Clarity', 'Concentration', 'Color'],
    'Nose': ['Fruit', 'Fruit-Character', 'Non-Fruit', 'Earth', 'Mineral', 'Wood'],
    'Palate': ['Acidity', 'Sweetness', 'Fruit', 'Fruit-Character', 'Non-Fruit', 'Earth', 'Mineral', 'Wood'],
  }
};


/*

Example Tree Structure:

- profile
  |- section
    |- category
      |- tag
      |- tag
      |- tag
    |- category
      |- tag
      |- tag
      |- tag
  |- section
    |- category
      |- tag
      |- tag
      |- tag
    |- category
      |- tag
      |- tag
      |- tag

*/

function makeTags(category) {
  return categories[category].map((tag, index) => {
    if (typeof tag === 'string') return tag;
    else return makeSubCategory(category, index);
  })
}

function makeSubCategory(category, index) {
  return Object.keys(categories[category][index]).map(subcategory => {
    return {
      name: subcategory,
      tags: categories[category][index][subcategory]
    }
  })
}

function makeCategories(profileName, section) {
  return config[profileName][section].map(category => {
    return {
      name: category,
      tags: makeTags(category)
    }
  });
}

export function makeProfile(profileName) {
  const sections = Object.keys(config[profileName]).map(section => {
    return {
      name: section,
      categories: makeCategories(profileName, section)
    }
  });

  console.log('makeProfile', sections);

  return {
    name: profileName,
    sections: sections
  }
}