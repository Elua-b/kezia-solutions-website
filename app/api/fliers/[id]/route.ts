import { NextResponse } from "next/server";
import { sql, ensureFliersTable } from "../../../../lib/db";
import { isAdminRequestAuthenticated } from "../../../../lib/adminAuth";

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!isAdminRequestAuthenticated(request)) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  await ensureFliersTable();
  const { id } = await params;
  const numericId = Number(id);
  if (!Number.isInteger(numericId)) {
    return NextResponse.json({ success: false, error: "Invalid id" }, { status: 400 });
  }

  await sql`DELETE FROM fliers WHERE id = ${numericId}`;
  return NextResponse.json({ success: true });
}
