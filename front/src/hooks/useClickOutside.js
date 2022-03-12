// https://www.youtube.com/watch?v=eWO1b6EoCnQ

import { useRef, useEffect } from "react";

const EXCLUDED_NODENAMES = ["TEXTAREA", "INPUT", "BUTTON"];

const useClickOutside = handler => {
  let domNode = useRef();

  useEffect(() => {
    let handleClick = event => {
      if (
        domNode &&
        domNode.current &&
        !EXCLUDED_NODENAMES.includes(event.target.nodeName) &&
        !domNode.current.contains(event.target)
      ) {
        // console.log("event.target", event.target);
        // console.log(
        //   "event.target.getAttribute('name')",
        //   event.target.getAttribute("name")
        // );
        // console.log("event.target.nodeName", event.target.nodeName);
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
