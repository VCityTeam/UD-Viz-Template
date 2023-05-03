import { SharedClass } from '@my_app_name/shared';

import '../style.css';

// CREATE DOM ELEMENT

const domElement = document.body;

if (DEBUG) {
  console.info('Your app is in DEBUG mode');
  const scriptReload = document.createElement('script');
  scriptReload.src = '/reload/reload.js';
  domElement.appendChild(scriptReload);
}

const mainDiv = document.createElement('div');
mainDiv.id = 'main_div';

// TITLE

const mainTitle = document.createElement('h1');
mainTitle.textContent = 'WELCOME IN YOUR UD-VIZ APP';
mainTitle.id = 'main_title';
mainDiv.appendChild(mainTitle);

// GITHUB LINKS

const divGHLinks = document.createElement('div');
divGHLinks.id = 'github_links_div';

const linkUDVGHTemplate = document.createElement('a');
linkUDVGHTemplate.target = '_blank';
linkUDVGHTemplate.href = 'https://github.com/VCityTeam/UD-Viz-Template';
const labelLinkUDVGHTemplate = document.createElement('label');
labelLinkUDVGHTemplate.textContent = 'Github UD-Viz-Template';

const linkUDVGH = document.createElement('a');
linkUDVGH.target = '_blank';
linkUDVGH.href = 'https://github.com/VCityTeam/UD-Viz';
const labelLinkUDVGH = document.createElement('label');
labelLinkUDVGH.textContent = 'Github UD-Viz';

const imgGitHubLogo = document.createElement('img');
imgGitHubLogo.alt = 'GitHub Mark, GitHub, Public domain, via Wikimedia Commons';
imgGitHubLogo.src =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/GitHub_Mark.png/512px-GitHub_Mark.png';

mainDiv.appendChild(divGHLinks);

divGHLinks.appendChild(linkUDVGH);
linkUDVGH.appendChild(imgGitHubLogo.cloneNode(true));
linkUDVGH.appendChild(labelLinkUDVGH);

divGHLinks.appendChild(linkUDVGHTemplate);
linkUDVGHTemplate.appendChild(imgGitHubLogo.cloneNode(true));
linkUDVGHTemplate.appendChild(labelLinkUDVGHTemplate);

// LEARN TEXT
const linkLearnUDViz = document.createElement('p');
linkLearnUDViz.textContent =
  'Modify ./packages/browser/bootstrap.jss' +
  (DEBUG ? ' and save to reload' : ' then rebuild and reload');
mainDiv.appendChild(linkLearnUDViz);

domElement.appendChild(mainDiv);

// USE CLASS FROM `shared` PACKAGE

const shared = new SharedClass('BROWSER');
shared.print();
