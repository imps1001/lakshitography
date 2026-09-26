import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { CATEGORIES } from "@/data/content";
import { getAdminFromRequest } from "@/lib/server/auth";
import { uploadGalleryImage } from "@/lib/server/cloudinary";
import { getDatabase } from "@/lib/server/database";
import { apiError } from "@/lib/server/http";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const allowedCategories = new Set(CATEGORIES.filter((category) => category !== "All"));
const MAX_FILE_SIZE = 10 * 1024 * 1024;

export async function GET() {
  const photos = await (await getDatabase()).collection("gallery")
    .find({}, { projection: { _id: 0 } }).sort({ created_at: -1 }).toArray();
  return NextResponse.json(photos, {
    headers: { "Cache-Control": "no-store" },
  });
}

export async function POST(request) {
  const admin = await getAdminFromRequest(request);
  if (admin.error) return apiError(admin.error, admin.status);

  const formData = await request.formData();
  const image = formData.get("image");
  const category = formData.get("category");
  if (!(image instanceof File) || image.size === 0) return apiError("Choose an image to upload.");
  if (!image.type.startsWith("image/")) return apiError("Only image files can be uploaded.");
  if (image.size > MAX_FILE_SIZE) return apiError("Image must be 10 MB or smaller.");
  if (typeof category !== "string" || !allowedCategories.has(category)) {
    return apiError("Choose a valid gallery category.");
  }

  const result = await uploadGalleryImage(Buffer.from(await image.arrayBuffer()));
  const photo = {
    id: randomUUID(),
    category,
    url: result.secure_url,
    public_id: result.public_id,
    created_at: new Date().toISOString(),
  };
  await (await getDatabase()).collection("gallery").insertOne(photo);
  return NextResponse.json(photo, { status: 201 });
}
