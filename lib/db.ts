import { neon } from "@neondatabase/serverless";

const DATABASE_URL =
  "postgresql://neondb_owner:npg_BcmnIXzLby48@ep-floral-pine-ay70sq4k-pooler.c-5.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require";

export const sql = neon(DATABASE_URL);

let ready: Promise<void> | null = null;

export function ensureFliersTable() {
  if (!ready) {
    ready = (async () => {
      await sql`
        CREATE TABLE IF NOT EXISTS fliers (
          id SERIAL PRIMARY KEY,
          created_at TIMESTAMPTZ NOT NULL DEFAULT now()
        )
      `;
      await sql`ALTER TABLE fliers ADD COLUMN IF NOT EXISTS title TEXT`;
      await sql`ALTER TABLE fliers ADD COLUMN IF NOT EXISTS image_url TEXT`;
      // Legacy columns from an earlier DB-stored-image design; drop their
      // NOT NULL constraint so new Cloudinary-backed rows can insert cleanly.
      await sql`ALTER TABLE fliers ALTER COLUMN image_data DROP NOT NULL`.catch(() => {});
      await sql`ALTER TABLE fliers ALTER COLUMN mime_type DROP NOT NULL`.catch(() => {});
    })();
  }
  return ready;
}
