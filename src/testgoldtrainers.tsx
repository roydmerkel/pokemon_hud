require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('es6-promise');
require('fetch-ie8');
import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

require('extensions');

import { createRoot } from 'react-dom/client';

//import TestGoldTrainersApp from './TestGoldTrainersApp';
let TestGoldTrainersApp = null;
if (window.fetch) {
    // Check whether ES6 is supported in Modern Browsers
    const module = await import("./TestGoldTrainersApp");
    TestGoldTrainersApp = module.default;
} else {
    // For legacy or old browsers
    await import("./polyfills");
    const module = await import("./TestGoldTrainersApp");
    TestGoldTrainersApp = module.default;
}

const container = document.getElementById('root');
//const root = createRoot(container!);
const root = createRoot(container);

root.render(<TestGoldTrainersApp />);
