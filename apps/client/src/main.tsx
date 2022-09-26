import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import {
  registerServiceWorker,
  initI18n,
} from '@vladyslav.haiduk_react/client-app';

import App from './app/App';

initI18n();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

registerServiceWorker();
