import crypto from "crypto";
import { cookies } from "next/headers";

const ADMIN_PASSWORD = "9NlYykNZhF20TE";
const SESSION_SECRET = "49bc15a95d62966aad266c55785b04571893dc13882a451c4050901898ce8bd3";

export const ADMIN_COOKIE_NAME = "keziaa_admin_session";
const SESSION_TTL_MS = 1000 * 60 * 60 * 12; // 12 hours
export const ADMIN_COOKIE_MAX_AGE = SESSION_TTL_MS / 1000;

function sign(value: string) {
  return crypto.createHmac("sha256", SESSION_SECRET).update(value).digest("hex");
}

export function verifyPassword(password: string) {
  return password === ADMIN_PASSWORD;
}

export function createSessionToken() {
  const payload = `${Date.now() + SESSION_TTL_MS}`;
  return `${payload}.${sign(payload)}`;
}

export function isSessionTokenValid(token: string | undefined | null) {
  if (!token) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  const expected = sign(payload);
  if (signature.length !== expected.length) return false;
  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return false;

  const expires = Number(payload);
  return Number.isFinite(expires) && Date.now() < expires;
}

function readCookieFromHeader(request: Request) {
  const cookieHeader = request.headers.get("cookie") || "";
  const match = cookieHeader.match(new RegExp(`${ADMIN_COOKIE_NAME}=([^;]+)`));
  return match?.[1];
}

export function isAdminRequestAuthenticated(request: Request) {
  return isSessionTokenValid(readCookieFromHeader(request));
}

export async function isAdminSessionAuthenticated() {
  const store = await cookies();
  return isSessionTokenValid(store.get(ADMIN_COOKIE_NAME)?.value);
}
