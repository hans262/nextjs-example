"use server";

/**
 * 可以在客户端或者服务端组件同时调用
 */

export async function createPost(name: string) {
  console.log(name);
}

export async function deletePost(data: FormData) {
  console.log(data);
}
