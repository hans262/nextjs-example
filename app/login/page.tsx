"use client";
import { useState } from "react";
import { login } from "../_lib/actions";

export default function Page() {
  const [message, setMessage] = useState<string | null>(null);
  const formAction = (formData: FormData) => {
    login(formData).then((msg) => {
      setMessage(msg);
    });
  };
  return (
    <form action={formAction}>
      <div className="flex-1 rounded-lg bg-gray-50 p-3">
        <div>
          <label className="mb-3 mt-5 block text-xs font-medium text-gray-900">
            Name
          </label>
          <input
            className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            name="name"
            placeholder="name"
          />
        </div>
        <div className="mt-4">
          <label className="mb-3 mt-5 block text-xs font-medium text-gray-900">
            Password
          </label>
          <input
            className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            name="password"
            placeholder="password"
          />
        </div>
        <button type="submit" className="mt-5">
          登录
        </button>
        <p className="text-sm text-red-600 mt-3">{message}</p>
      </div>
    </form>
  );
}
