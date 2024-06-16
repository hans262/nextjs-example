import { Suspense } from "react";

/**
 * 分批次加载内容
 */

export default async function Page() {
  return (
    <div>
      <div className="text-2xl mb-2">Streaming Render</div>
      <div>第一部分</div>
      <Suspense fallback={<p>Loading Two...</p>}>
        <Two />
      </Suspense>
      <Suspense fallback={<p>Loading Three...</p>}>
        <Three />
      </Suspense>
    </div>
  );
}

async function Two() {
  await new Promise((r) => setTimeout(r, 1000));
  return <div>第二部分</div>;
}

async function Three() {
  await new Promise((r) => setTimeout(r, 2000));
  return <div>第三部分</div>;
}
