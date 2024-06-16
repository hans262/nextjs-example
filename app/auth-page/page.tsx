// "use client";
import { logout, verifyToken } from "../_lib/actions";

export default async function Page() {
  const user = await verifyToken();
  console.log(user)
  return (
    <div>
      <div className="text-2xl mb-2">Auth Page</div>
      <div>这个页面需要登录才能进来</div>
      <form action={logout}>
        <div>
          uid:{user.uid}，name:{user.name}
        </div>
        <button type="submit">logout</button>
      </form>
    </div>
  );
}
