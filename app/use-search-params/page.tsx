import { Suspense } from "react";
import { Search } from "../_components/Search";

export default function Page({ searchParams }: any) {
  return (
    <div>
      <div className="text-2xl mb-2">useSearchParams [组件通信]</div>
      <Search />
      <Suspense key={searchParams.search} fallback={<div>loading...</div>}>
        <List query={searchParams.search} />
      </Suspense>
    </div>
  );
}

const List: React.FC<{ query?: string }> = async ({ query }) => {
  if (!query) return null;
  await new Promise((r) => setTimeout(r, 1000));

  return (
    <>
      {[1, 2, 3].map((v, k) => (
        <div key={k}>{query}</div>
      ))}
    </>
  );
};
