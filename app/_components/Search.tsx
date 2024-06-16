"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export function Search() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <input
      placeholder="Search"
      onChange={(e) => {
        const term = e.target.value;
        const params = new URLSearchParams(searchParams!);
        //这里没有设置去抖动
        //多次触发造成，使用该状态的组件多次渲染
        if (term) {
          params.set("search", term);
        } else {
          params.delete("search");
        }
        router.replace(`${pathname}?${params.toString()}`);
      }}
    />
  );
}
