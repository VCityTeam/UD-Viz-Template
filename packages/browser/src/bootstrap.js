import { SharedClass } from '@my_app_name/shared';

import '../style.css';

const domElement = document.body;

if (DEBUG) {
  console.info('Your app is in DEBUG mode');
  const scriptReload = document.createElement('script');
  scriptReload.src = '/reload/reload.js';
  domElement.appendChild(scriptReload);
}

const mainDiv = document.createElement('div');
mainDiv.id = 'main_div';

const mainTitle = document.createElement('h1');
mainTitle.textContent = 'WELCOME IN YOUR UD-VIZ APP';
mainTitle.id = 'main_title';
mainDiv.appendChild(mainTitle);

const linkUDVGH = document.createElement('a');
linkUDVGH.target = '_blank';
linkUDVGH.href = 'https://github.com/VCityTeam/UD-Viz';

const imgGitHubLogo = document.createElement('img');
imgGitHubLogo.alt = 'GitHub Mark, GitHub, Public domain, via Wikimedia Commons';
imgGitHubLogo.src =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/GitHub_Mark.png/512px-GitHub_Mark.png';
linkUDVGH.appendChild(imgGitHubLogo);

const labelLinkUDVGH = document.createElement('label');
labelLinkUDVGH.textContent = 'Github UD-Viz';
linkUDVGH.appendChild(labelLinkUDVGH);
mainDiv.appendChild(linkUDVGH);

const linkLearnUDViz = document.createElement('p');
linkLearnUDViz.textContent =
  'Modify ./packages/browser/bootstrap.jss' +
  (DEBUG ? ' and save to reload' : ' then rebuild and reload');
mainDiv.appendChild(linkLearnUDViz);

domElement.appendChild(mainDiv);

const shared = new SharedClass();
shared.print();
