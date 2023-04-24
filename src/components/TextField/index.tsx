import React, { useState, InputHTMLAttributes } from "react";

interface P extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
}

const TextField: React.FC<P> = ({ label, type = "text", ...props }) => {
  const [focus, setFocus] = useState(false);

  return (
    <div className="relative flex items-center">
      <input
        {...props}
        type={type}
        className={`h-11 block w-full px-3 py-2 
        placeholder-gray-500 rounded-2xl focus:outline-none focus:ring-1
        focus:ring-primary focus:border-primary ${focus ? "" : "bg-blue-50"}`}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <label
        htmlFor={props.id}
        className={`absolute left-3 text-grey-700 ${
          focus || props.value
            ? "text-micro top-m-1 bg-white px-1 rounded-sm"
            : "text-small top-1/4"
        } ${focus ? "text-primary" : ""}  transition-all duration-200`}
      >
        {label}
      </label>
    </div>
  );
};

export default TextField;
