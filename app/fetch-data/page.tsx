export default async function Page() {
  const ret = await fetch("http://localhost:3002/api/test", {
    // cache: 'no-store',
    method: "POST",
    next: { revalidate: 10 },
  }).then((res) => res.json());
  console.log(ret);
  return (
    <div>
      <div className="text-2xl mb-2">Fetch Data</div>
      <div>{ret.result}</div>
    </div>
  );
}
