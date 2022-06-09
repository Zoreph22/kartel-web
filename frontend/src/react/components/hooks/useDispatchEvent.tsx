import React from "react";

const useDispatchEvent = (eventName: string) => {
  const ref = React.useRef(null);

  function handleEvent(data: any) {
    const e = new CustomEvent(eventName, {
      detail: data,
      bubbles: true,
    });

    ref.current.dispatchEvent(e);
  }

  return { ref: ref, dispatchEvent: handleEvent };
};

export default useDispatchEvent;
