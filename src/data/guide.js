import categories from './categories.json';
import config from './config.json';

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