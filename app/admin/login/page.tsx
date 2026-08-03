"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Lock } from "lucide-react";
import Logo from "../../components/Logo";

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!data.success) {
        setError(data.error || "Invalid password");
        setLoading(false);
        return;
      }
      router.push("/admin");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F1F3D] flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-8">
          <Logo light />
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <div className="w-12 h-12 rounded-lg bg-[#0F1F3D] flex items-center justify-center mb-6 mx-auto">
            <Lock className="w-5 h-5 text-[#F5B700]" />
          </div>
          <h1 className="text-xl font-black text-[#0F1F3D] text-center mb-6">Admin Login</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[11px] font-semibold text-[#5B6B85] mb-1.5">Password</label>
              <input
                type="password"
                required
                autoFocus
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-[#0F1F3D]/12 rounded-md text-sm text-[#101828] focus:outline-none focus:border-[#0F1F3D]"
                placeholder="Enter admin password"
              />
            </div>
            {error && <p className="text-red-500 text-xs">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full text-[12px] font-bold uppercase tracking-wide bg-[#F5B700] text-[#0F1F3D] py-3.5 rounded-md hover:bg-[#0F1F3D] hover:text-white transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Log In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
