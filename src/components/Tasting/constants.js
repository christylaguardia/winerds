// TODO: label tasting source wine folly

// https://winefolly.com/review/everything-you-need-to-know-about-wine-in-9-bottles/
// TODO: secondary and tertiary flavors

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
  citrus: "citrus",
  fruit_tree_mellon: "tree fruit/mellon",
  fruit_red: "red fruit",
  fruit_dried: "dried fruit",
  fruit_tropical: "tropical fruit",
  earth_other: "earth/other",
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
    name: "orange blossom",
    categories: [CATEGORIES.herbal_floral],
    varieties: {
      primary: [VARIETIES.white_light],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "honeysuckle",
    categories: [CATEGORIES.herbal_floral],
    varieties: {
      primary: [VARIETIES.sparkling, VARIETIES.white_light],
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
    name: "acacia",
    categories: [CATEGORIES.herbal_floral],
    varieties: {
      primary: [VARIETIES.white_light],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "mace",
    categories: [CATEGORIES.herbal_floral],
    varieties: {
      primary: [VARIETIES.white_light],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "clove",
    categories: [CATEGORIES.herbal_floral],
    varieties: {
      primary: [VARIETIES.white_light],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "pepper",
    categories: [CATEGORIES.herbal_floral],
    varieties: {
      primary: [VARIETIES.white_light],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "ginger",
    categories: [CATEGORIES.herbal_floral],
    varieties: {
      primary: [VARIETIES.white_light],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "lime",
    categories: [CATEGORIES.citrus],
    varieties: {
      primary: [VARIETIES.sparkling, VARIETIES.white_light],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "lemon",
    categories: [CATEGORIES.citrus],
    varieties: {
      primary: [VARIETIES.white_light],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "citrus zest",
    categories: [CATEGORIES.citrus],
    varieties: {
      primary: [VARIETIES.sparkling, VARIETIES.white_light],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "tangerine",
    categories: [CATEGORIES.citrus],
    varieties: {
      primary: [VARIETIES.white_light],
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
    categories: [CATEGORIES.fruit_tree_mellon],
    varieties: {
      primary: [VARIETIES.sparkling, VARIETIES.white_light],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "green apple",
    categories: [CATEGORIES.fruit_tree_mellon],
    varieties: {
      primary: [VARIETIES.sparkling],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "yellow apple",
    categories: [CATEGORIES.fruit_tree_mellon],
    varieties: {
      primary: [VARIETIES.sparkling, VARIETIES.white_light],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "bruised apple",
    categories: [CATEGORIES.fruit_tree_mellon],
    varieties: {
      primary: [VARIETIES.sparkling],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "mellon",
    categories: [CATEGORIES.fruit_tree_mellon],
    varieties: {
      primary: [VARIETIES.white_light],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "asian pair",
    categories: [CATEGORIES.fruit_tree_mellon],
    varieties: {
      primary: [VARIETIES.white_light],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "nectarine",
    categories: [CATEGORIES.fruit_tree_mellon],
    varieties: {
      primary: [VARIETIES.white_light],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "unripe pair",
    categories: [CATEGORIES.fruit_tree_mellon],
    varieties: {
      primary: [VARIETIES.sparkling],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "apricot",
    categories: [CATEGORIES.fruit_tree_mellon],
    varieties: {
      primary: [VARIETIES.sparkling, VARIETIES.white_light],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "peach",
    categories: [CATEGORIES.fruit_tree_mellon],
    varieties: {
      primary: [VARIETIES.white_light],
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
    name: "kiwi",
    categories: [CATEGORIES.fruit_tropical],
    varieties: {
      primary: [VARIETIES.white_light],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "guava",
    categories: [CATEGORIES.fruit_tropical],
    varieties: {
      primary: [VARIETIES.white_light],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "green papaya",
    categories: [CATEGORIES.fruit_tropical],
    varieties: {
      primary: [VARIETIES.white_light],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "pineapple",
    categories: [CATEGORIES.fruit_tropical],
    varieties: {
      primary: [VARIETIES.white_light],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "banana",
    categories: [CATEGORIES.fruit_tropical],
    varieties: {
      primary: [],
      secondary: [VARIETIES.white_light],
      tertiary: [],
    }
  },
  {
    name: "chalk",
    categories: [CATEGORIES.earth_other],
    varieties: {
      primary: [VARIETIES.sparkling],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "sea shell",
    categories: [CATEGORIES.earth_other],
    varieties: {
      primary: [VARIETIES.sparkling],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "honey",
    categories: [CATEGORIES.earth_other],
    varieties: {
      primary: [VARIETIES.white_light],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "quinine",
    categories: [CATEGORIES.earth_other],
    varieties: {
      primary: [VARIETIES.white_light],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "gravel",
    categories: [CATEGORIES.earth_other],
    varieties: {
      primary: [VARIETIES.white_light],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "wet concrete",
    categories: [CATEGORIES.earth_other],
    varieties: {
      primary: [VARIETIES.white_light],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "graphite",
    categories: [CATEGORIES.earth_other],
    varieties: {
      primary: [VARIETIES.white_light],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "cream",
    categories: [CATEGORIES.earth_other],
    varieties: {
      primary: [],
      secondary: [VARIETIES.white_light],
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
    name: "toast",
    categories: [CATEGORIES.yeast],
    varieties: {
      primary: [],
      secondary: [],
      tertiary: [VARIETIES.sparkling],
    }
  },
  {
    name: "brioche",
    categories: [CATEGORIES.yeast],
    varieties: {
      primary: [],
      secondary: [],
      tertiary: [VARIETIES.sparkling],
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
  {
    name: "almond",
    categories: [CATEGORIES.oak],
    varieties: {
      primary: [VARIETIES.white_light],
      secondary: [],
      tertiary: [VARIETIES.sparkling],
    }
  },
  {
    name: "fresh coconut",
    categories: [CATEGORIES.oak],
    varieties: {
      primary: [VARIETIES.white_light],
      secondary: [],
      tertiary: [],
    }
  },
  {
    name: "vanilla",
    categories: [CATEGORIES.oak],
    varieties: {
      primary: [VARIETIES.white_light],
      secondary: [],
      tertiary: [],
    }
  },
];
