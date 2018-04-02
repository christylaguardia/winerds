import categories from './categories.json';
console.log('categories', Object.keys(categories));

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

// const categories = {
//   'Clarity': ['Clear', 'Hazy', 'Turbid'],
//   'Color': ['Water White', 'Straw', 'Yellow', 'Gold', 'Purple', 'Ruby', 'Red', 'Garnet'],
//   'Concentration': ['Pale', 'Medium', 'Deep'],
//   'Earth': ['Forest Floor', 'Compost', 'Mushrooms', 'Potting Soil'],
//   'Fruit': ['Citrus', 'Apple/Pear', 'Stone/Pit', 'Tropical', 'Melon', 'Red', 'Black', 'Blue'],
//   'Fruit-Character': ['Ripe', 'Fresh', 'Tart', 'Baked', 'Stewed', 'Dried', 'Desiccated', 'Bruised', 'Jammy'],
//   'Mineral': ['Mineral', 'Wet Stone', 'Limestone', 'Chalk', 'Slate', 'Flint'],
//   'Non-Fruit': ['Floral', 'Vegetal', 'Herbal', 'Spice', 'Animal', 'Barn', 'Petrol', 'Fermentation'],
//   'Sweetness': ['Bone Dry', 'Dry', 'Off-Dry', 'Medium Sweet', 'Sweet', 'Lusciously Sweet'],
//   'Wood': ['None', 'Old vs New', 'Large vs Small', 'French vs American']
// };



// const categories = [
//   'Acidity',
//   'Body',
//   'Clarity',
//   'Color',
//   'Concentration',
//   'Earth',
//   'Fruit',
//   'Fruit-Character',
//   'Inorganic',
//   'Non-Fruit',
//   'Oak',
//   'Spice',
//   'Sweetness',
//   'Tannin',
//   'Yeast'
// ];

// export const guide = Object.keys(config).map(c => {
//   let newC = {};
//   newC.title = c;
//   newC.profiles = config[c].map(p => {
//     let newP = {};
//     newP.name = p;
//     newP.tags = profiles[p];
//     return newP;
//   });
//   return newC;
// });


/*
- Profile
  |- Section
    |- Category
      |- Tag
*/



// export function makeProfile(profileName) {

//   const sections = Object.keys(config[profileName]).map(section => {
//     return {
//       [section]: config[profileName][section].map(category => {
//         return {
//           [category]: categories[category]
//         }
//       })
//     };
//   });

//   console.log('makeProfile', sections);
  
//   return {
//     name: profileName,
//     sections: sections
//   };
// }


export function makeProfile(profileName) {

  const sections = Object.keys(config[profileName]).map(section => {
    return {
      name: section,
      categories: config[profileName][section].map(category => {
        // console.log('category', category)
        return {
          name: category,
          tags: categories[category].map((tag, index) => {
            // console.log('tag', categories[category][index], 'is-string', typeof categories[category][index]);
            // console.log('tag', tag, 'is-string', typeof tag);
            // console.log('tag', tag, typeof tag === 'string')
            // console.log('Object.keys(tag)', Object.keys(tag));

            
            if (typeof tag === 'string') return tag;

            else {
              // console.log(Object.keys(categories[category][index]));

              return Object.keys(categories[category][index]).map(subcategory => {
                console.log('subcategory', subcategory);
                console.log('subcategory tags', categories[category][index][subcategory]);
                return {
                  name: subcategory,
                  tags: categories[category][index][subcategory]
                }

              })
            }

            })
            
        }
      })
    };
  });

  console.log('makeProfile', sections);

  return {
    name: profileName,
    sections: sections
  };
}