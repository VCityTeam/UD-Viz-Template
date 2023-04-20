import { SharedClass } from '@my_app_name/shared';

const shared = new SharedClass();
shared.print();

// eslint-disable-next-line no-undef
if (DEBUG) {
  console.info('Your app is in DEBUG mode');
}
const h1 = document.createElement('h1');
h1.textContent = 'WELCOME IN YOUR UD-VIZ APP';
document.body.appendChild(h1);
