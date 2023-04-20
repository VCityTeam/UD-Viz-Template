/** @file Running the build-debug script */
const exec = require('child-process-promise').exec;

/**
 * It prints the stdout and stderr of a result object
 *
 * @param {{stdout:string,stderr:string}} result - The result of the command execution.
 */
const printExec = function (result) {
  console.log('stdout: \n', result.stdout);
  console.log('stderr: \n', result.stderr);
};

// run a build debug bundle browser
exec('npm run build-debug --prefix ./packages/browser').then(printExec);

// run a build debug bundle node
exec('npm run build-debug --prefix ./packages/node')
  .then(printExec)
  // start a server
  .then(() => {
    const {
      MyAppNameServer,
    } = require('../packages/node/dist/development/bundle.js');
    const app = new MyAppNameServer();
    app.start({
      folder: './packages/browser',
      port: 8000,
    });
  });
