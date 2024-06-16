"use server";
import { cookies } from "next/headers";
import * as jose from "jose";
import { redirect } from "next/navigation";
import { users } from "./db";

export async function login(formData: FormData) {
  //判断账户是否存在
  const user = users.find((v) => v.name === formData.get("name"));
  if (!user) {
    return "账号不存在";
  }
  if (user.password !== formData.get("password")) {
    return "密码错误";
  }

  const secretKey = new TextEncoder().encode(process.env.AUTH_SECRET);
  const token = await new jose.SignJWT(user)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt() //签发时间
    .setExpirationTime("2h") //过期时间
    .sign(secretKey);

  cookies().set("jwt-token", token);
  //跳转页面
  redirect(`/auth-page`);
}

export async function logout() {
  cookies().delete("jwt-token");
  redirect(`/login`);
}

export async function verifyToken(): Promise<any | null> {
  const secretKey = new TextEncoder().encode(process.env.AUTH_SECRET);
  let token = cookies().get("jwt-token");
  if (!token) return null;
  return jose
    .jwtVerify(token.value, secretKey)
    .then((ret) => {
      return ret.payload;
    })
    .catch(() => {
      return null;
    });
}
