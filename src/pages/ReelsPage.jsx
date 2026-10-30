import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ExternalLink,
  Film,
  Filter,
  Instagram,
  RotateCcw,
  Search,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ReelCard from '../components/ReelCard';
import ReelModal from '../components/ReelModal';
import { Button, Card, EmptyState } from '../components/ui';
import {
  ALL_MARKDOWN_REELS,
  OFFICIAL_INSTAGRAM_PROFILE,
  REEL_CATEGORIES,
  getPublishedMarkdownReels,
} from '../content/reelsLoader';
import { openInstagramProfile } from '../utils/instagramDeepLink';

function ReelsPage() {
  const shouldReduceMotion = useReducedMotion();

  // Filters State
  const [selectedCategory, setSelectedCategory] = useState('All Topics');
  const [searchQuery, setSearchQuery] = useState('');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Active modal reel (single active video player)
  const [activeModalReel, setActiveModalReel] = useState(null);

  // Query published reels dynamically from Markdown
  const filteredReels = useMemo(() => {
    return getPublishedMarkdownReels({
      category: selectedCategory,
      search: searchQuery,
    });
  }, [selectedCategory, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCategory('All Topics');
    setSearchQuery('');
  };

  return (
    <main className="min-h-screen py-10 sm:py-16">
      <div className="section-shell">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6 flex items-center gap-2 text-xs text-brand-muted" aria-label="Breadcrumbs">
          <Link to="/" className="hover:text-brand-heading transition">
            Home
          </Link>
          <span>/</span>
          <span className="text-brand-primary font-semibold">Learning Reels</span>
        </nav>

        {/* Page Header Ribbon & Profile Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-brand-border bg-brand-surface p-6 sm:p-10 shadow-card">
          {/* Atmospheric HD Tech Background */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <img
              src="/assets/teaching/teaching8.jpg"
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover object-center opacity-[0.05] dark:opacity-[0.12] filter blur-[1px] scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-surface via-brand-surface/90 to-brand-surface/70" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-500/10 via-brand-primary/5 to-transparent" />
          </div>

          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-pink-400">
                <Instagram size={13} />
                <span>Micro-Learning Series</span>
              </div>

              {/* Requested Exact Heading */}
              <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-brand-heading">
                Learn Something New Every Day
              </h1>

              {/* Requested Exact Supporting Text */}
              <p className="text-sm sm:text-base leading-relaxed text-brand-body">
                Short lessons in AI, programming and emerging technologies.
              </p>
            </div>

            {/* Profile Follow Card */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={OFFICIAL_INSTAGRAM_PROFILE.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => openInstagramProfile('code_scholar_ai', OFFICIAL_INSTAGRAM_PROFILE.url, e)}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-glow hover:opacity-95 transition cursor-pointer"
              >
                <Instagram size={17} />
                <span>Follow {OFFICIAL_INSTAGRAM_PROFILE.handle} on Instagram</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Search & Dynamic Category Filters Bar */}
        <div className="mt-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search reels by title, AI, coding, or topic..."
                className="w-full rounded-2xl border border-brand-border bg-brand-surface py-2.5 pl-10 pr-4 text-xs sm:text-sm text-brand-heading placeholder-brand-muted focus:border-brand-primary focus:outline-none"
              />
            </div>

            {/* Mobile Filter Toggle Button */}
            <div className="flex items-center justify-between sm:justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowMobileFilters((prev) => !prev)}
                className="sm:hidden inline-flex items-center gap-1.5 rounded-xl border border-brand-border bg-brand-surface px-3 py-2 text-xs font-semibold text-brand-heading"
              >
                <Filter size={13} />
                <span>Categories</span>
              </button>

              <span className="text-xs font-semibold text-brand-muted">
                Showing {filteredReels.length} of {ALL_MARKDOWN_REELS.length} Reels
              </span>
            </div>
          </div>

          {/* Category Filter Chips (Desktop: Horizontal row; Mobile: Collapsible) */}
          <div
            className={`flex flex-wrap items-center gap-2 ${
              showMobileFilters ? 'block' : 'hidden sm:flex'
            }`}
          >
            {REEL_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-xl border px-3.5 py-1.5 text-xs font-semibold transition cursor-pointer ${
                    isSelected
                      ? 'border-brand-primary bg-brand-primary text-brand-surface shadow-sm'
                      : 'border-brand-border bg-brand-surface text-brand-body hover:border-brand-primary/40 hover:text-brand-heading'
                  }`}
                >
                  {category}
                </button>
              );
            })}

            {(selectedCategory !== 'All Topics' || searchQuery) && (
              <Button
                variant="ghost"
                size="sm"
                icon={<RotateCcw size={12} />}
                onClick={handleResetFilters}
                className="text-xs text-brand-muted hover:text-brand-heading"
              >
                Reset
              </Button>
            )}
          </div>
        </div>

        {/* Video Gallery Responsive Grid */}
        <div className="mt-8">
          {filteredReels.length > 0 ? (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredReels.map((reel) => (
                <ReelCard
                  key={reel.id}
                  reel={reel}
                  onPlayModal={(r) => setActiveModalReel(r)}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              icon={Film}
              title="No Reels Found"
              description="No video lessons matched your current filter criteria."
              action={
                <Button variant="primary" size="sm" onClick={handleResetFilters}>
                  Clear Filters
                </Button>
              }
            />
          )}
        </div>
      </div>

      {/* Single Active Video Playback Modal */}
      <ReelModal
        reel={activeModalReel}
        isOpen={Boolean(activeModalReel)}
        onClose={() => setActiveModalReel(null)}
      />
    </main>
  );
}

export default ReelsPage;
