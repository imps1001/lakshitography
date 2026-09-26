"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { LogOut, Inbox, Check, Clock, Trash2, Phone, Mail, MapPin, Calendar, Users, RefreshCw, ImagePlus, X } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";
import { api, formatApiErrorDetail } from "@/lib/api";
import { SERVICES } from "@/data/content";
import { CATEGORIES } from "@/data/content";

const STATUS_OPTIONS = [
  { value: "new",       label: "New",        color: "bg-[#FFCBA4] text-[#0a0a0a]" },
  { value: "contacted", label: "Contacted",  color: "bg-[#E8DCCB] text-[#0a0a0a]" },
  { value: "confirmed", label: "Confirmed",  color: "bg-[#D4AF37] text-[#0a0a0a]" },
  { value: "completed", label: "Completed",  color: "bg-[#1f3a25] text-[#9ed3a5]" },
  { value: "cancelled", label: "Cancelled",  color: "bg-[#3a1f1f] text-[#d39e9e]" },
];

const serviceName = (slug) => SERVICES.find((s) => s.slug === slug)?.name || slug;

export default function AdminDashboard() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const [bookings, setBookings] = useState([]);
  const [stats, setStats] = useState({ total: 0, new: 0, confirmed: 0, completed: 0 });
  const [filter, setFilter] = useState("all");
  const [refreshing, setRefreshing] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);

  useEffect(() => {
    if (!loading && (!user || user.role !== "admin")) router.replace("/admin/login");
  }, [user, loading, router]);

  const load = async () => {
    setRefreshing(true);
    try {
      const [bRes, sRes] = await Promise.all([api.get("/bookings"), api.get("/admin/stats")]);
      setBookings(bRes.data);
      setStats(sRes.data);
    } catch (err) {
      toast.error(formatApiErrorDetail(err.response?.data?.detail) || "Failed to load");
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    if (user && user.role === "admin") load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const updateStatus = async (id, status) => {
    try {
      await api.patch(`/bookings/${id}`, { status });
      toast.success(`Marked as ${status}`);
      load();
    } catch (err) {
      toast.error(formatApiErrorDetail(err.response?.data?.detail));
    }
  };

  const removeBooking = async (id) => {
    if (!window.confirm("Delete this booking permanently?")) return;
    try {
      await api.delete(`/bookings/${id}`);
      toast.success("Deleted");
      load();
    } catch (err) {
      toast.error(formatApiErrorDetail(err.response?.data?.detail));
    }
  };

  const filtered = filter === "all" ? bookings : bookings.filter((b) => b.status === filter);

  if (loading || !user) {
    return <div className="min-h-screen bg-bg flex items-center justify-center text-text-secondary">Loading…</div>;
  }

  return (
    <div data-testid="page-admin-dashboard" className="min-h-screen bg-bg">
      {/* Top bar */}
      <header className="border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="font-serif-display text-2xl text-text-primary">Lakshit<span className="italic text-gold">ography</span></Link>
            <span className="hidden sm:inline text-xs tracking-eyebrow uppercase text-text-secondary border-l border-white/10 pl-4">Studio</span>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={load} data-testid="refresh-btn" className="text-text-secondary hover:text-gold transition-colors" aria-label="Refresh">
              <RefreshCw size={16} className={refreshing ? "animate-spin" : ""} />
            </button>
            <button onClick={() => setShowPhotoModal(true)} data-testid="add-gallery-photo" className="btn-primary py-2 px-4 text-xs">
              <ImagePlus size={14} /> Add photo
            </button>
            <span className="hidden sm:block text-sm text-text-secondary">{user.email}</span>
            <button onClick={() => { logout(); router.push("/admin/login"); }} data-testid="logout-btn" className="btn-ghost py-2 px-4 text-xs">
              <LogOut size={14}/> Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div>
          <p className="eyebrow mb-4">Dashboard</p>
          <h1 className="font-serif-display text-4xl sm:text-5xl font-light text-text-primary">Welcome back.</h1>
          <p className="mt-3 text-text-secondary">Every booking that comes through the site lands here.</p>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Stat label="Total"     value={stats.total}     icon={Inbox} />
          <Stat label="New"       value={stats.new}       icon={Clock} accent />
          <Stat label="Confirmed" value={stats.confirmed} icon={Check} />
          <Stat label="Completed" value={stats.completed} icon={Check} />
        </div>

        {/* Filters */}
        <div className="mt-12 flex flex-wrap gap-3" data-testid="status-filters">
          {["all", ...STATUS_OPTIONS.map((s) => s.value)].map((s) => (
            <button
              key={s}
              data-testid={`filter-status-${s}`}
              onClick={() => setFilter(s)}
              className={`px-4 py-2 text-xs tracking-eyebrow uppercase border transition-all ${
                filter === s ? "bg-gold border-gold text-[#0a0a0a]" : "border-white/10 text-text-secondary hover:border-gold hover:text-gold"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Bookings list */}
        <div className="mt-8 space-y-4">
          {filtered.length === 0 && (
            <div data-testid="bookings-empty" className="border border-faint bg-surface p-16 text-center">
              <Inbox size={32} className="mx-auto text-gold/60" />
              <p className="mt-5 font-serif-display text-2xl text-text-primary">Nothing here yet.</p>
              <p className="mt-2 text-text-secondary text-sm">New booking requests will appear in real time.</p>
            </div>
          )}

          {filtered.map((b, idx) => {
            const opt = STATUS_OPTIONS.find((o) => o.value === b.status);
            return (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.03 }}
                data-testid={`booking-card-${b.id}`}
                className="bg-surface border border-faint p-6 lg:p-7"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-serif-display text-2xl text-text-primary">{b.name}</h3>
                      <span className={`px-2.5 py-1 text-[10px] tracking-eyebrow uppercase ${opt?.color || "bg-white/10 text-white"}`}>{b.status}</span>
                    </div>
                    <p className="mt-1 text-gold italic font-serif-display text-lg">{serviceName(b.service)}</p>
                  </div>
                  <p className="text-xs tracking-wider uppercase text-text-secondary">
                    {new Date(b.created_at).toLocaleString()}
                  </p>
                </div>

                <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <Info icon={Mail}    label="Email"    value={b.email} />
                  <Info icon={Phone}   label="Phone"    value={b.phone} />
                  <Info icon={Calendar} label="Date"    value={b.preferred_date || "Flexible"} />
                  <Info icon={Users}   label="People"   value={b.people_count || "—"} />
                </div>

                {b.location && <Info icon={MapPin} label="Location" value={b.location} className="mt-4" />}
                {b.message && (
                  <div className="mt-5 border-l-2 border-gold/40 pl-4">
                    <p className="text-xs tracking-eyebrow uppercase text-text-secondary">Note</p>
                    <p className="text-text-primary text-sm leading-relaxed mt-1">{b.message}</p>
                  </div>
                )}

                <div className="mt-6 flex flex-wrap items-center gap-2 pt-5 border-t border-faint">
                  <span className="text-xs tracking-eyebrow uppercase text-text-secondary mr-2">Mark as</span>
                  {STATUS_OPTIONS.map((o) => (
                    <button
                      key={o.value}
                      data-testid={`set-status-${o.value}-${b.id}`}
                      onClick={() => updateStatus(b.id, o.value)}
                      disabled={b.status === o.value}
                      className={`px-3 py-1.5 text-[10px] tracking-eyebrow uppercase border transition-all ${
                        b.status === o.value
                          ? "border-gold text-gold opacity-50 cursor-not-allowed"
                          : "border-white/10 text-text-secondary hover:border-gold hover:text-gold"
                      }`}
                    >
                      {o.label}
                    </button>
                  ))}
                  <button
                    data-testid={`delete-${b.id}`}
                    onClick={() => removeBooking(b.id)}
                    className="ml-auto text-text-secondary hover:text-red-400 transition-colors p-2"
                    aria-label="Delete"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>
      {showPhotoModal && <GalleryUploadModal onClose={() => setShowPhotoModal(false)} />}
    </div>
  );
}

function GalleryUploadModal({ onClose }) {
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("Couples");
  const [uploading, setUploading] = useState(false);
  const categories = CATEGORIES.filter((item) => item !== "All");

  const submit = async (event) => {
    event.preventDefault();
    if (!image) {
      toast.error("Choose an image to upload.");
      return;
    }
    const formData = new FormData();
    formData.append("image", image);
    formData.append("category", category);
    setUploading(true);
    try {
      await api.post("/gallery", formData, { headers: { "Content-Type": "multipart/form-data" } });
      toast.success("Photo added to the gallery.");
      onClose();
    } catch (error) {
      toast.error(formatApiErrorDetail(error.response?.data?.detail));
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[70] bg-black/75 p-6 flex items-center justify-center" role="dialog" aria-modal="true" aria-labelledby="upload-photo-title">
      <form onSubmit={submit} className="w-full max-w-md bg-surface border border-faint p-7 shadow-2xl">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="eyebrow mb-3">Gallery</p>
            <h2 id="upload-photo-title" className="font-serif-display text-3xl text-text-primary">Add a photo</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Close upload form" className="text-text-secondary hover:text-gold"><X size={20} /></button>
        </div>
        <label className="block mt-8 text-xs tracking-eyebrow uppercase text-text-secondary">
          Image
          <input
            data-testid="gallery-image-input"
            type="file"
            accept="image/*"
            required
            onChange={(event) => setImage(event.target.files?.[0] || null)}
            className="mt-3 block w-full text-sm text-text-secondary file:mr-4 file:border-0 file:bg-gold file:px-4 file:py-2 file:text-xs file:tracking-eyebrow file:uppercase file:text-[#0a0a0a] hover:file:bg-[#e5bf50]"
          />
          <span className="mt-2 block normal-case tracking-normal text-xs">JPG, PNG, WebP, or GIF — maximum 10 MB.</span>
        </label>
        <label className="block mt-6 text-xs tracking-eyebrow uppercase text-text-secondary">
          Category
          <select data-testid="gallery-category-select" value={category} onChange={(event) => setCategory(event.target.value)} className="input mt-3">
            {categories.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
        <div className="mt-8 flex justify-end gap-3">
          <button type="button" onClick={onClose} className="btn-ghost py-2 px-4 text-xs">Cancel</button>
          <button data-testid="gallery-upload-submit" disabled={uploading} className="btn-primary py-2 px-4 text-xs disabled:opacity-60">
            <ImagePlus size={14} /> {uploading ? "Uploading…" : "Upload photo"}
          </button>
        </div>
      </form>
    </div>
  );
}

function Stat({ label, value, icon: Icon, accent }) {
  return (
    <div data-testid={`stat-${label.toLowerCase()}`} className={`border ${accent ? "border-gold/40" : "border-faint"} bg-surface p-6`}>
      <div className="flex items-center justify-between">
        <p className="text-xs tracking-eyebrow uppercase text-text-secondary">{label}</p>
        <Icon size={16} className={accent ? "text-gold" : "text-text-secondary"} />
      </div>
      <p className="mt-4 font-serif-display text-4xl text-text-primary">{value}</p>
    </div>
  );
}

function Info({ icon: Icon, label, value, className = "" }) {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <Icon size={14} className="text-gold mt-1 shrink-0" />
      <div>
        <p className="text-[10px] tracking-eyebrow uppercase text-text-secondary">{label}</p>
        <p className="text-text-primary mt-0.5 break-all">{value}</p>
      </div>
    </div>
  );
}
