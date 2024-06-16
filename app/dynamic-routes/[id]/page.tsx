/**
 * 客户端组件中 使用useParams获取
 */


export default function Page({ params }: any) {
  return (
    <div>
      <div className="text-2xl mb-2">Dynamic Routes</div>
      <div>id: {params.id}</div>
    </div>
  );
}
