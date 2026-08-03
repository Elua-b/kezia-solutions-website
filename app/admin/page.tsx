import { redirect } from "next/navigation";
import { isAdminSessionAuthenticated } from "../../lib/adminAuth";
import AdminDashboard from "./AdminDashboard";

export default async function AdminPage() {
  const authenticated = await isAdminSessionAuthenticated();
  if (!authenticated) {
    redirect("/admin/login");
  }

  return <AdminDashboard />;
}
