import React from "react";

export default function Container({ children }) {
  return (
    <div className="max-w-7xl mx-auto border-2 border-green-500">
      {children}
    </div>
  );
}
