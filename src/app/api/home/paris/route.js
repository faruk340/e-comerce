import paris from './paris.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(paris)
}