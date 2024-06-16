"use client";
import { createPost } from "./actions";

/**
 * 在客户端组件中调用actions
 */

export default function Page() {
  return (
    <button
      onClick={() => {
        createPost("hans");
      }}
    >
      client component
    </button>
  );
}
