() => {
  return new Promise((resolve) => {
    /**
     * @type {typeof import("../../src/index") }
     */
    const api = window.myAppNameBrowser;

    for (const key in api) {
      console.log(key);
    }

    resolve();
  });
};
