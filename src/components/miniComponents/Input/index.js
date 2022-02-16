import React from "react";

export default function Input({ ...props }) {
  return (
    <input
      className="border-2 flex-1 rounded-lg px-3 py-2 shadow mr-2 outline-none focus:border-gray-600 transition-all"
      type="text"
      {...props}
    />
  );
}
