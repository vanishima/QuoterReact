import { useRef, useCallback } from "react";

// https://medium.com/swlh/a-comprehensive-guide-to-load-more-button-and-infinite-scrolling-in-react-js-bd88edf74d5a

const useInfiniteScroll = (callback, isFetching) => {
  // console.log("callback", callback);

  // use useRef to store a DOM node and the returned
  // object will persist regardless of re-renders
  const observer = useRef();

  // useCallback takes a callback argument and an array
  // dependency list and returns a memoized callback
  // which is guaranteed to have the same reference
  const lastElementRef = useCallback(
    node => {
      if (isFetching) return;

      // stop watching targets, you can think of it as a reset
      if (observer.current) observer.current.disconnect();

      // create a new intersection observer and execute the
      // callback in case of an intersecting event
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          console.log("callback", callback);
          callback();
        }
      });

      // if there is a node, let the intersection observer
      // watch that node
      if (node) observer.current.observe(node);
    },
    [callback, isFetching]
  );

  // return reference to the last element
  return [lastElementRef];
};

export default useInfiniteScroll;
