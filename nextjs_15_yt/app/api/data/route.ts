// app/api/data/route.ts
import { NextRequest, NextResponse } from "next/server";

let count = 0;
let name = "";
export async function GET(_request: NextRequest) {
  // Read
  count += 1;
  return NextResponse.json({ message: "loaded data", count: count, name: name});
}

export async function POST(request: NextRequest) {
  // Create
  const data = await request.json();
  count += 1;
  let body = data;
  name = body.name;

  return NextResponse.json({ message: "Name set" });
}

export async function PUT(request: NextRequest) {
  // Update
  const body = await request.json();
  return NextResponse.json({ message: "Updated", data: body });
}

export async function DELETE(_request: NextRequest) {
  // Delete
  return NextResponse.json({ message: "Deleted" });
}
