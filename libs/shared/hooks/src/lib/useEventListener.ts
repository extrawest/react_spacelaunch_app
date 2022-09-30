import type { RefObject } from 'react';
import { useEffect, useRef } from 'react';

export const useEventListener = <
  WE extends keyof WindowEventMap,
  HE extends keyof HTMLElementEventMap,
  E extends HTMLElement | void = void
>(
  event: WE | HE,
  handler: (
    event: WindowEventMap[WE] | HTMLElementEventMap[HE] | Event
  ) => void,
  element?: RefObject<E>,
  options?: boolean | AddEventListenerOptions
) => {
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    const targetElement = element?.current ?? window;
    if (!(targetElement && targetElement.addEventListener)) {
      return;
    }

    const listener: typeof handler = (event) => handlerRef.current(event);

    targetElement.addEventListener(event, listener, options);

    return () => {
      targetElement.removeEventListener(event, listener);
    };
  }, [event, element, options]);
};
