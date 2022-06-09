import React, { useEffect } from "react";

export default function useCatchEvent<T extends HTMLElement>(eventName, func) {
  const ref = React.useRef<T>(null);

  function handleEvent(event: CustomEvent) {
    event.stopPropagation();
    func(event.detail);
  }

  useEffect(() => {
    ref.current.addEventListener(eventName, handleEvent);
    return () => {
      ref.current.removeEventListener(eventName, handleEvent);
    };
  }, []);

  return ref;
}
