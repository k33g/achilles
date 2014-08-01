import Router from '../Router';

import q from '../selector';

import Human from './Human';
import Humans from './Humans';

window.humans = new Humans();

humans.fetch().then((data) => {
  console.log("All humans", humans)
});







