"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Trash2, Upload, LogOut, ImageOff } from "lucide-react";
import Logo from "../components/Logo";

type Flier = { id: number; title: string | null; image_url: string; created_at: string };

export default function AdminDashboard() {
  const router = useRouter();
  const [fliers, setFliers] = useState<Flier[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [error, setError] = useState("");

  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const loadFliers = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/fliers");
      const data = await res.json();
      if (data.success) setFliers(data.fliers);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadFliers();
  }, [loadFliers]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError("Please choose an image.");
      return;
    }

    setError("");
    setUploading(true);
    try {
      const form = new FormData();
      form.append("image", file);
      form.append("title", title);
      const res = await fetch("/api/fliers", { method: "POST", body: form });
      const data = await res.json();
      if (!data.success) {
        setError(data.error || "Upload failed");
        return;
      }
      setTitle("");
      setFile(null);
      await loadFliers();
    } catch {
      setError("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: number) => {
    setDeletingId(id);
    try {
      const res = await fetch(`/api/fliers/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setFliers((prev) => prev.filter((f) => f.id !== id));
      }
    } finally {
      setDeletingId(null);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-[#F2F2F0]">
      <header className="bg-white border-b border-[#141414]/8">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo size="sm" />
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wide text-[#141414]/60 hover:text-[#141414] transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Log Out
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="text-2xl font-black text-[#141414] mb-1">Flyers</h1>
          <p className="text-sm text-[#5C5C5C]">
            Upload an event flyer and its image will appear as a card below the homepage hero.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl border border-[#141414]/8 p-6 sm:p-8 mb-10 grid grid-cols-1 sm:grid-cols-[1fr_auto_auto] gap-4 items-end"
        >
          <div>
            <label className="block text-[11px] font-semibold text-[#5C5C5C] mb-1.5">Event Name</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Korea–Africa Investment Forum 2026"
              className="w-full px-4 py-3 border border-[#141414]/12 rounded-md text-sm text-[#171717] focus:outline-none focus:border-[#141414]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-[#5C5C5C] mb-1.5">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="text-sm text-[#5C5C5C] file:mr-3 file:px-4 file:py-2 file:rounded-md file:border-0 file:bg-[#F2F2F0] file:text-[#141414] file:font-semibold file:text-xs"
            />
          </div>

          <button
            type="submit"
            disabled={uploading}
            className="inline-flex items-center justify-center gap-2 text-[12px] font-bold uppercase tracking-wide bg-[#F5B700] text-[#141414] px-6 py-3.5 rounded-md hover:bg-[#141414] hover:text-white transition-colors disabled:opacity-60"
          >
            {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
            {uploading ? "Uploading…" : "Upload Flyer"}
          </button>
        </form>

        {error && (
          <p className="text-red-500 text-sm mb-6 bg-red-50 border border-red-100 rounded-md px-4 py-3">{error}</p>
        )}

        {loading ? (
          <div className="flex items-center justify-center py-24 text-[#5C5C5C]">
            <Loader2 className="w-5 h-5 animate-spin mr-2" /> Loading flyers…
          </div>
        ) : fliers.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-[#5C5C5C] border border-dashed border-[#141414]/15 rounded-2xl">
            <ImageOff className="w-8 h-8 mb-3 text-[#141414]/25" />
            <p className="text-sm">No flyers uploaded yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {fliers.map((flier) => (
              <div key={flier.id} className="group relative rounded-xl overflow-hidden border border-[#141414]/8 bg-white">
                <div className="relative aspect-[3/4]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={flier.image_url}
                    alt={flier.title || "Flyer"}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                {flier.title && (
                  <p className="px-3 py-2 text-[12px] font-semibold text-[#141414] truncate">{flier.title}</p>
                )}
                <button
                  onClick={() => handleDelete(flier.id)}
                  disabled={deletingId === flier.id}
                  className="absolute top-2 right-2 w-9 h-9 rounded-full bg-[#0A0A0A]/70 hover:bg-red-600 flex items-center justify-center text-white transition-colors disabled:opacity-60"
                  aria-label="Delete flyer"
                >
                  {deletingId === flier.id ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Trash2 className="w-4 h-4" />
                  )}
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
