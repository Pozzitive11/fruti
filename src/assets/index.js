import about1 from './about-1.png';
import about2 from './about-2.png';
import about3 from './about-3.png';
import beet from './veg/beet.jpg';
import carrot from './veg/carrot.jpg';

import leek from './veg/leek.jpg';

import onion from './veg/onion.jpg';
import potato from './veg/potato.jpg';
import radish from './veg/radish.jpg';
import squash from './veg/squash.jpg';
import tomato from './veg/tomato.jpg';
import addToBasket from './add-to-basket.svg';

import info1 from './info/info-1.png';
import info2 from './info/info-2.png';
import info3 from './info/info-3.png';

import pay from './footer/pay.png';

import minusButton from './minus-button.svg';
import plusButton from './plus-button.svg';
import deleteButton from './delete-button.svg';

export {
  about1,
  about2,
  about3,
  beet,
  carrot,
  leek,
  onion,
  potato,
  radish,
  squash,
  tomato,
  addToBasket,
  info1,
  info2,
  info3,
  pay,
  minusButton,
  plusButton,
  deleteButton,
};
export let myDictionary = {
  'beet.jpg': beet,
  'leek.jpg': leek,
  'carrot.jpg': carrot,
};

export function getImg(id) {
  return myDictionary[id];
}