"use client";

import { useState } from "react";

type InputType = {
  label?: string;
  name: string;
  type: "text" | "email" | "password" | "textarea";
  initialized_value?: string;
};

export default function Input({
  label,
  name,
  type,
  initialized_value,
}: InputType) {
  const [value, setValue] = useState<string>(initialized_value || "");
  return type === "textarea" ? (
    <div className="text-sm flex flex-col gap-2 ">
      {label && (
        <label htmlFor={name} className="text-gray-700">
          {label}
        </label>
      )}
      <textarea
        className="p-2 border text-gray-500 min-h-96"
        id={name}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
    </div>
  ) : (
    <div className="text-sm flex flex-col gap-2 ">
      {label && (
        <label htmlFor={name} className="text-gray-700">
          {label}
        </label>
      )}
      <input
        className="p-2 border text-gray-500"
        id={name}
        name={name}
        value={value}
        type={type}
        onChange={(e) => setValue(e.target.value)}
        required
      />
    </div>
  );
}
