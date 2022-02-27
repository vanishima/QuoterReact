// https://www.youtube.com/watch?v=eWO1b6EoCnQ

import { useRef, useEffect } from "react";

const useClickOutside = handler => {
  let domNode = useRef();

  useEffect(() => {
    let handleClick = event => {
      if (
        domNode &&
        domNode.current &&
        !domNode.current.contains(event.target)
      ) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });

  return domNode;
};

export default useClickOutside;
