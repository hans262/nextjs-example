import { NextResponse, type NextRequest } from "next/server";

interface ResponseData {
  code: number;
  result: any;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url!);
  // console.log(searchParams);
  return NextResponse.json<ResponseData>({
    code: 200,
    result: "get: /api/test",
  });
}

export async function POST(req: NextRequest) {
  return NextResponse.json<ResponseData>({
    code: 200,
    result: "post: /api/test",
  });
}
