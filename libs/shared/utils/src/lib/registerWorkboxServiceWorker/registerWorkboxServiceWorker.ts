import { Workbox } from 'workbox-window';

/**
 * Register Service Worker
 * @param {string} swPath - path to the Service Worker
 * @returns {void}
 */
export const registerWorkboxServiceWorker = async (swPath: string) => {
  if (process.env.NODE_ENV !== 'production') {
    return console.warn(
      `[SW ${swPath}]: can't be registered in development mode`
    );
  }

  if ('serviceWorker' in navigator) {
    const wb = new Workbox(swPath);

    try {
      await wb.register();
    } catch (error) {
      console.error(`[SW ${swPath}]: failed to register -> ${error}`);
    }
  }
};
