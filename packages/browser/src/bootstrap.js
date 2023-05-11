/** @file It's the main file of your application. This code will be interprate by your browser. It's here we can create your base of your DOM*/

import { MyApplication } from './MyApplication';
import { landingPage } from './landingPage';

// CREATE DOM ELEMENT
const domBody = document.body;
domBody.appendChild(landingPage);

if (DEBUG) {
  console.info('Your app is in DEBUG mode');
  const scriptReload = document.createElement('script');
  scriptReload.src = '/reload/reload.js';
  domBody.appendChild(scriptReload);
}

// const app = new MyApplication();
// app.start();
