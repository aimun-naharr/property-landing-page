import React from "react";

export default function Eyebrow({ title = "" }) {
  return (
    <p className="font-bold uppercase tracking-widest text-sm text-gray-600 pl-1">
      {title}
    </p>
  );
}
