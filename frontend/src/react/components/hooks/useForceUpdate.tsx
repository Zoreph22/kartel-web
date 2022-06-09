import { useState } from "react";

export default function useForceUpdate() {
  const [, forceUpdate] = useState({});

  return () => {
    forceUpdate({});
  };
}
