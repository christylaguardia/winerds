// TODO: label tasting source wine folly

// https://winefolly.com/review/everything-you-need-to-know-about-wine-in-9-bottles/

export const STYLE_OPTIONS = [
  { value: "sparkling", label: "Sparkling Wine" },
  { value: "white_light", label: "Light-Bodied White Wine" },
  { value: "white_full", label: "Full-Bodied White Wine" },
  { value: "white_sweet", label: "Aromatic (sweet) White Wine" },
  { value: "rose", label: "Rosé Wine" },
  { value: "red_light", label: "Light-Bodied Red Wine" },
  { value: "red_full", label: "Medium-Bodied Red Wine" },
  { value: "red_sweet", label: "Full-Bodied Red Wine" },
  { value: "dessert", label: "Dessert Wine" }
];

export const VARIETIES = {
  sparkling: "sparkling",
  white_light: "white_light",
  white_full: "white_full",
  white_sweet: "white_sweet",
  rose: "rose",
  red_light: "red_light",
  red_full: "red_full",
  red_sweet: "red_sweet",
  dessert: "dessert"
};

export const CATEGORIES = {
  herbal_floral: "herbal/floral",
  fruit_tree: "tree fruit",
  mellon: "mellon",
  citrus: "citrus",
  fruit_red: "red fruit",
  fruit_dried: "dried fruit",
  earth: "earth",
  other: "other",
  yeast: "yeast",
  oak: "oak",
}

export const TAGS = [
  {
    name: "apple blossom",
    categories: [CATEGORIES.herbal_floral],
    varieties: {
      primary: [VARIETIES.sparkling],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "honeysuckle",
    categories: [CATEGORIES.herbal_floral],
    varieties: {
      primary: [VARIETIES.sparkling],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "anise",
    categories: [CATEGORIES.herbal_floral],
    varieties: {
      primary: [VARIETIES.sparkling],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "cinnamon",
    categories: [CATEGORIES.herbal_floral],
    varieties: {
      primary: [VARIETIES.sparkling],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "lime",
    categories: [CATEGORIES.citrus],
    varieties: {
      primary: [VARIETIES.sparkling],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "citrus zest",
    categories: [CATEGORIES.citrus],
    varieties: {
      primary: [VARIETIES.sparkling],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "orange",
    categories: [CATEGORIES.citrus],
    varieties: {
      primary: [VARIETIES.sparkling],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "quince",
    categories: [CATEGORIES.fruit_tree],
    varieties: {
      primary: [VARIETIES.sparkling],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "green apple",
    categories: [CATEGORIES.fruit_tree],
    varieties: {
      primary: [VARIETIES.sparkling],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "yellow apple",
    categories: [CATEGORIES.fruit_tree],
    varieties: {
      primary: [VARIETIES.sparkling],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "bruised apple",
    categories: [CATEGORIES.fruit_tree],
    varieties: {
      primary: [VARIETIES.sparkling],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "unripe pair",
    categories: [CATEGORIES.fruit_tree],
    varieties: {
      primary: [VARIETIES.sparkling],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "apricot",
    categories: [CATEGORIES.fruit_tree],
    varieties: {
      primary: [VARIETIES.sparkling],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "morello cherry",
    categories: [CATEGORIES.fruit_red],
    varieties: {
      primary: [VARIETIES.sparkling],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "strawberry",
    categories: [CATEGORIES.fruit_red],
    varieties: {
      primary: [VARIETIES.sparkling],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "fig",
    categories: [CATEGORIES.fruit_dried],
    varieties: {
      primary: [VARIETIES.sparkling],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "chalk",
    categories: [CATEGORIES.other],
    varieties: {
      primary: [VARIETIES.sparkling],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "sea shell",
    categories: [CATEGORIES.earth],
    varieties: {
      primary: [VARIETIES.sparkling],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "bread",
    categories: [CATEGORIES.yeast],
    varieties: {
      primary: [VARIETIES.sparkling],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "sourdough yeast",
    categories: [CATEGORIES.yeast],
    varieties: {
      primary: [VARIETIES.sparkling],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "butter",
    categories: [CATEGORIES.oak],
    varieties: {
      primary: [VARIETIES.sparkling],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "smoke",
    categories: [CATEGORIES.oak],
    varieties: {
      primary: [VARIETIES.sparkling],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "nutmeg",
    categories: [CATEGORIES.oak],
    varieties: {
      primary: [VARIETIES.sparkling],
      secondary: [],
      tertiary: [],
    }
  },
  // TODO: tertiary flavors
  // {
  //   name: "",
  //   categories: [CATEGORIES.],
  //   varieties: {
  //     primary: [VARIETIES.sparkling],
  //     secondary: [],
  //     tertiary: [],
  //   }
  // },
];
