import { Workbox } from 'workbox-window';

export const registerServiceWorker = async () => {
  const swPath = 'service-worker.js';

  if (process.env.NODE_ENV !== 'production') {
    return console.warn(
      `[SW ${swPath}]: can't be registered in development mode`
    );
  }

  if ('serviceWorker' in navigator) {
    const wb = new Workbox('service-worker.js');

    try {
      await wb.register();
    } catch (error) {
      console.error(`[SW ${swPath}]: failed to register -> ${error}`);
    }
  }
};
