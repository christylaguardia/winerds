
export const config = {
  sight: ['Clarity', 'Concentration', 'Color'],
  nose: ['Fruit', 'Fruit-Character', 'Non-Fruit', 'Earth', 'Mineral', 'Wood'],
  palate: ['Sweetness', 'Fruit', 'Fruit-Character', 'Non-Fruit', 'Earth', 'Mineral', 'Wood'],
};

export const profiles = {
  'Clarity': ['Clear', 'Hazy', 'Turbid'],
  'Color': ['Water White', 'Straw', 'Yellow', 'Gold', 'Purple', 'Ruby', 'Red', 'Garnet'],
  'Concentration': ['Pale', 'Medium', 'Deep'],
  'Earth': ['Forest Floor', 'Compost', 'Mushrooms', 'Potting Soil'],
  'Fruit': ['Citrus', 'Apple/Pear', 'Stone/Pit', 'Tropical', 'Melon', 'Red', 'Black', 'Blue'],
  'Fruit-Character': ['Ripe', 'Fresh', 'Tart', 'Baked', 'Stewed', 'Dried', 'Desiccated', 'Bruised', 'Jammy'],
  'Mineral': ['Mineral', 'Wet Stone', 'Limestone', 'Chalk', 'Slate', 'Flint'],
  'Non-Fruit': ['Floral', 'Vegetal', 'Herbal', 'Spice', 'Animal', 'Barn', 'Petrol', 'Fermentation'],
  'Sweetness': ['Bone Dry', 'Dry', 'Off-Dry', 'Medium Sweet', 'Sweet', 'Lusciously Sweet'],
  'Wood': ['None', 'Old vs New', 'Large vs Small', 'French vs American']
};

export const guide = Object.keys(config).map(c => {
  let newC = {};
  newC.title = c;
  newC.profiles = config[c].map(p => {
    let newP = {};
    newP.name = p;
    newP.tags = profiles[p];
    return newP;
  });
  return newC;
});