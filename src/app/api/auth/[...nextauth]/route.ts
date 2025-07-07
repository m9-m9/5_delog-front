import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

const handler = NextAuth(authOptions);

export const GET = handler;
export const POST = handler;

// 캐싱 문제 방지용 옵션
export const dynamic = "force-dynamic";