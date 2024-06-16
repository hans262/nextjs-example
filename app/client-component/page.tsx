"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    console.log('mounted')
  },[])
  return (
    <div>
      <div className="text-2xl mb-2">Client Component</div>
      <button className="p-2" onClick={() => setCount((c) => c + 1)}>
        count: {count}
      </button>
    </div>
  );
}
