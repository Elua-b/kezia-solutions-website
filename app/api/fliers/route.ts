import { NextResponse } from "next/server";
import { sql, ensureFliersTable } from "../../../lib/db";
import { isAdminRequestAuthenticated } from "../../../lib/adminAuth";
import { uploadImageToCloudinary } from "../../../lib/cloudinary";

const MAX_SIZE = 8 * 1024 * 1024; // 8MB

export async function GET() {
  await ensureFliersTable();
  const fliers = await sql`
    SELECT id, title, image_url, created_at
    FROM fliers
    WHERE image_url IS NOT NULL
    ORDER BY created_at DESC
  `;
  return NextResponse.json({ success: true, fliers });
}

export async function POST(request: Request) {
  if (!isAdminRequestAuthenticated(request)) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  await ensureFliersTable();

  const form = await request.formData();
  const file = form.get("image");
  const title = form.get("title");

  if (!(file instanceof File)) {
    return NextResponse.json({ success: false, error: "No image provided" }, { status: 400 });
  }
  if (!file.type.startsWith("image/")) {
    return NextResponse.json({ success: false, error: "File must be an image" }, { status: 400 });
  }
  if (file.size > MAX_SIZE) {
    return NextResponse.json({ success: false, error: "Image must be under 8MB" }, { status: 400 });
  }

  let imageUrl: string;
  try {
    imageUrl = await uploadImageToCloudinary(file);
  } catch (err) {
    console.error("Cloudinary upload error:", err);
    return NextResponse.json({ success: false, error: "Image upload failed" }, { status: 502 });
  }

  const rows = await sql`
    INSERT INTO fliers (title, image_url)
    VALUES (${typeof title === "string" && title.trim() ? title.trim() : null}, ${imageUrl})
    RETURNING id, title, image_url, created_at
  `;

  return NextResponse.json({ success: true, flier: rows[0] });
}
