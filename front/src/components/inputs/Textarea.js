import React, { useEffect, useRef } from "react";

const Textarea = ({
  className = "",
  name,
  placeholder,
  onChange,
  value,
  required,
  dependency,
}) => {
  const ref = useRef();
  // auto resize based on scroll height
  useEffect(() => {
    if (dependency && ref && ref.current) {
      ref.current.style.height = "0px";
      const height = ref.current.scrollHeight;
      ref.current.style.height = height + "px";
    }
  }, [dependency, ref]);

  return (
    <textarea
      ref={ref}
      name={name}
      className={`${className}`}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

export default Textarea;
