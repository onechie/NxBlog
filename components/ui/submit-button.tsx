"use client";

import { useActionState } from "react";

type SubmitButtonType = {
  text: string;
  action: (
    prevState: unknown,
    formData: FormData
  ) => Promise<{ success: boolean; message: string }>;
};

export default function SubmitButton({ text, action }: SubmitButtonType) {
  const initialState = {
    success: false,
    message: "",
  };
  const [state, formAction, pending] = useActionState(action, initialState);

  return (
    <div className="flex flex-col gap-3">
      {state?.message && (
        <p
          aria-live="polite"
          className={`text-${state.success ? "green" : "red"}-500 text-sm`}
        >
          {state.message}
        </p>
      )}
      <button
        disabled={pending}
        formAction={formAction}
        type="submit"
        className="bg-gray-900 p-2 text-gray-200 text-sm disabled:bg-gray-800 disabled:text-gray-400"
      >
        {pending ? `...` : text}
      </button>
    </div>
  );
}
