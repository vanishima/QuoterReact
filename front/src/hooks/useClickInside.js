import { useRef, useEffect } from "react";

const useClickInside = handler => {
  let domNode = useRef();

  useEffect(() => {
    let handleClick = event => {
      if (
        domNode &&
        domNode.current &&
        domNode.current.contains(event.target)
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

export default useClickInside;
