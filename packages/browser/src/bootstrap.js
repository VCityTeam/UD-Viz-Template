import { SharedClass } from '@my_app_name/shared';

const shared = new SharedClass();
shared.print();

// eslint-disable-next-line no-undef
if (DEBUG) {
  console.info('Your app is in DEBUG mode');
}

console.log('test');
