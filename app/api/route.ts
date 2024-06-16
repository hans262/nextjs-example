import { NextResponse, type NextRequest } from "next/server";

interface ResponseData {
  code: number;
  result: any;
}

export function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url!);
  // console.log(searchParams);
  return NextResponse.json<ResponseData>({
    code: 200,
    result: "get: /api",
  });
}

export function POST(req: NextRequest) {
  return NextResponse.json<ResponseData>({
    code: 200,
    result: "post: /api",
  });
}
