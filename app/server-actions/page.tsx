import ClientComponent from "./ClientComponent";

/**
 * 还支持绑定客户端组件中的参数
 * 传递到服务器action函数中
 * 可查看官方文档
 */

export default function Page() {
  //仅能在服务端组件中定义
  async function create(formData: FormData) {
    "use server";
    console.log(formData);
  }

  return (
    <div>
      <div className="text-2xl mb-2">Server Actions</div>
      <form action={create} className="mb-2">
        <input type="text" name="name" />
        <button type="submit" className="ml-2">
          server component
        </button>
      </form>
      <ClientComponent />
    </div>
  );
}
