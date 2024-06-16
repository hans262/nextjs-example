"use client";
import { useState } from "react";

/**
 * 功能与layout相同
 * 区别是，每次切换导航，都会刷新状态
 */

export default function Template({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState(0);
  return (
    <div>
      {children}
      {/* <button onClick={() => setState(state + 1)}>{state}++</button> */}
    </div>
  );
}
