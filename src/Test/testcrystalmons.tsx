require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('es6-promise');
require('fetch-ie8');
import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

require('extensions');

import { Container, createRoot } from 'react-dom/client';

//import TestCrystalMonsApp from './TestCrystalMonsApp';
let TestCrystalMonsApp = null;
if (typeof window?.fetch != 'undefined' && window?.fetch != null) {
    // Check whether ES6 is supported in Modern Browsers
    const module = await import("./TestCrystalMonsApp");
    TestCrystalMonsApp = module.default;
} else {
    // For legacy or old browsers
    await import("../polyfills");
    const module = await import("./TestCrystalMonsApp");
    TestCrystalMonsApp = module.default;
}

const container: Container = document.getElementById('root') as Container;
//const root = createRoot(container!);
const root = createRoot(container);

root.render(<TestCrystalMonsApp />);
