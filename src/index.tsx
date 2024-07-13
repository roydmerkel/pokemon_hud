require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('es6-promise');
require('fetch-ie8');
import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import { createRoot } from 'react-dom/client';

//import App from './App';
let App = null;
if (window.fetch) {
  // Check whether ES6 is supported in Modern Browsers
  const module = await import("./App");
  App = module.default;
} else {
  // For legacy or old browsers
  await import("./polyfills");
  const module = await import("./App");
  App = module.default;
}

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(<App />);
