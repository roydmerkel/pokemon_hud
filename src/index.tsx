require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('es6-promise');
require('fetch-ie8');
import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

require('extensions');

import { createRoot, Root } from 'react-dom/client';
import { FunctionComponent } from 'react';

//import App from './App';
let App: FunctionComponent | null = null;
if (typeof window.fetch != "undefined" && window.fetch != null) {
    // Check whether ES6 is supported in Modern Browsers
    const module = await import("./App");
    App = module.default;
} else {
    // For legacy or old browsers
    await import("./polyfills");
    const module = await import("./App");
    App = module.default;
}

const container: HTMLElement | null = document.getElementById('root');
//const root = createRoot(container!);
if (container != null && App != null) {
    const root: Root = createRoot(container);

    root.render(<App />);
}
