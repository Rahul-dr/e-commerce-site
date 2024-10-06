import d1 from '../Assets/d1.jpeg';

const all_product = [
  {
    id: 1,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "Men",
    image: d1,
    new_price: 85.0,
    old_price: 120.5
  },
  {
    id: 2,
    name: "Boys Blue Striped Hooded Sweatshirt",
    category: "Men",
    image: d1,
    new_price: 90.0,
    old_price: 130.0
  },
  {
    id: 3,
    name: "Girls Pink Floral Printed Dress",
    category: "Men",
    image: d1,
    new_price: 95.0,
    old_price: 140.0
  },
  {
    id: 4,
    name: "Boys Green Graphic Hoodie",
    category: "Men",
    image: d1,
    new_price: 80.0,
    old_price: 110.0
  },
  {
    id: 5,
    name: "Girls Yellow Ruffled Dress",
    category: "Men",
    image: d1,
    new_price: 100.0,
    old_price: 150.0
  },
  {
    id: 6,
    name: "Boys Red Plaid Shirt",
    category: "Men",
    image: d1,
    new_price: 60.0,
    old_price: 90.0
  },
  {
    id: 7,
    name: "Girls Blue Denim Jacket",
    category: "Men",
    image: d1,
    new_price: 110.0,
    old_price: 160.0
  },
  {
    id: 8,
    name: "Boys Black Pullover Hoodie",
    category: "Men",
    image: d1,
    new_price: 95.0,
    old_price: 140.0
  },
  {
    id: 9,
    name: "Girls White Summer Dress",
    category: "Men",
    image: d1,
    new_price: 85.0,
    old_price: 120.0
  },
  {
    id: 10,
    name: "Boys Navy Blue Track Pants",
    category: "Men",
    image: d1,
    new_price: 55.0,
    old_price: 85.0
  },
  {
    id: 11,
    name: "Girls Red Polka Dot Dress",
    category: "Men",
    image: d1,
    new_price: 75.0,
    old_price: 105.0
  },
  {
    id: 12,
    name: "Boys Grey Sweatpants",
    category: "Men",
    image: d1,
    new_price: 65.0,
    old_price: 95.0
  },
  {
    id: 13,
    name: "Girls Green Tunic Dress",
    category: "Women",
    image: d1,
    new_price: 80.0,
    old_price: 120.0
  },
  {
    id: 14,
    name: "Boys Yellow Polo Shirt",
    category: "Women",
    image: d1,
    new_price: 50.0,
    old_price: 75.0
  },
  {
    id: 15,
    name: "Girls Orange Summer Shorts",
    category: "Women",
    image: d1,
    new_price: 40.0,
    old_price: 65.0
  },
  {
    id: 16,
    name: "Boys Brown Leather Jacket",
    category: "Women",
    image: d1,
    new_price: 150.0,
    old_price: 200.0
  },
  {
    id: 17,
    name: "Girls Purple Cardigan",
    category: "Women",
    image: d1,
    new_price: 65.0,
    old_price: 95.0
  },
  {
    id: 18,
    name: "Boys Black Skinny Jeans",
    category: "Women",
    image: d1,
    new_price: 70.0,
    old_price: 105.0
  },
  {
    id: 19,
    name: "Girls Yellow Floral Skirt",
    category: "Women",
    image: d1,
    new_price: 55.0,
    old_price: 80.0
  },
  {
    id: 20,
    name: "Boys White T-shirt",
    category: "Women",
    image: d1,
    new_price: 30.0,
    old_price: 50.0
  },
  {
    id: 21,
    name: "Girls Black Leggings",
    category: "Women",
    image: d1,
    new_price: 45.0,
    old_price: 70.0
  },
  {
    id: 22,
    name: "Boys Orange Fleece Jacket",
    category: "Women",
    image: d1,
    new_price: 90.0,
    old_price: 120.0
  },
  {
    id: 23,
    name: "Girls Blue Knit Sweater",
    category: "Women",
    image: d1,
    new_price: 85.0,
    old_price: 115.0
  },
  {
    id: 24,
    name: "Boys Green Rain Jacket",
    category: "Women",
    image: d1,
    new_price: 100.0,
    old_price: 140.0
  },
  {
    id: 25,
    name: "Girls Pink Puffy Coat",
    category: "Kid",
    image: d1,
    new_price: 120.0,
    old_price: 160.0
  },
  {
    id: 26,
    name: "Boys Grey Winter Jacket",
    category: "Kid",
    image: d1,
    new_price: 135.0,
    old_price: 180.0
  },
  {
    id: 27,
    name: "Girls Red Wool Sweater",
    category: "Kid",
    image: d1,
    new_price: 95.0,
    old_price: 135.0
  },
  {
    id: 28,
    name: "Boys White Shirt with Tie",
    category: "Kid",
    image: d1,
    new_price: 60.0,
    old_price: 85.0
  },
  {
    id: 29,
    name: "Girls Black Denim Shorts",
    category: "Kid",
    image: d1,
    new_price: 40.0,
    old_price: 60.0
  },
  {
    id: 30,
    name: "Boys Navy Blue Suit",
    category: "Kid",
    image: d1,
    new_price: 180.0,
    old_price: 220.0
  },
  {
    id: 31,
    name: "Girls Yellow Hooded Jacket",
    category: "Kid",
    image: d1,
    new_price: 110.0,
    old_price: 150.0
  },
  {
    id: 32,
    name: "Boys Green Cargo Pants",
    category: "Kid",
    image: d1,
    new_price: 55.0,
    old_price: 85.0
  },
  {
    id: 33,
    name: "Girls Purple Raincoat",
    category: "Kid",
    image: d1,
    new_price: 85.0,
    old_price: 115.0
  },
  {
    id: 34,
    name: "Boys Brown Knit Sweater",
    category: "Kid",
    image: d1,
    new_price: 75.0,
    old_price: 100.0
  },
  {
    id: 35,
    name: "Girls White Puffy Vest",
    category: "Kid",
    image: d1,
    new_price: 60.0,
    old_price: 85.0
  },
  {
    id: 36,
    name: "Boys Red Zippered Hoodie",
    category: "Kid",
    image: d1,
    new_price: 85.0,
    old_price: 120.0
  }
];

export default all_product;
