/**
 * 拦截路由
 * 点过去显示拦截者路由页面，
 * 刷新后显示被拦截的路由页面
 *
 * 可用于模态窗模式
 * 点击展示模态窗，刷新后进入详情页
 */

export default function Page({ params }: any) {
  return (
    <div>
      <div className="text-2xl mb-2">Dynamic Routes [拦截路由]</div>
      <div>id: {params.id}</div>
      <div className="text-sm">刷新后可进入被拦截的页面</div>
    </div>
  );
}
