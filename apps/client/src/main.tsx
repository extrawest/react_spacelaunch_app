import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { registerServiceWorker } from '@vladyslav.haiduk_react/client-app';

import App from './app/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

registerServiceWorker();
