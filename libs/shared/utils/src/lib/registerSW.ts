/**
 * Register Service Worker
 * @param path
 */
export const registerSW = (path: string) => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      try {
        const reg = await navigator.serviceWorker.register(path);
        console.log(`[SW ${path}]: was registered for ${reg.scope}`);
      } catch (error) {
        console.error(`[SW ${path}]: wasn't registered -> ${error}`);
      }
    });
  }
};
