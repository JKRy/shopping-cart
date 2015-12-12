import config from './js/config'
require('./static/assets');

(() => {
    document.write(`Hello ${config.name}`);
})();


