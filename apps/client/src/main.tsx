import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { registerSW } from '@vladyslav.haiduk_react/shared/utils';

import App from './app/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

registerSW('service-worker.js');
