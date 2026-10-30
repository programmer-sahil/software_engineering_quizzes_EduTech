import { useState } from 'react';
import {
  Bot,
  Brain,
  Code2,
  ExternalLink,
  Eye,
  Globe,
  GraduationCap,
  Instagram,
  Layers,
  LineChart,
  Play,
  Radio,
  Sparkles,
} from 'lucide-react';
import Card from './ui/Card';
import Button from './ui/Button';
import { openInstagramReel, getInstagramReelAppUrl } from '../utils/instagramDeepLink';

// Category icon selector for individual, rich topic visuals
function TopicIcon({ category }) {
  switch (category) {
    case 'Artificial Intelligence':
      return <Brain size={26} className="text-cyan-300" />;
    case 'Programming':
      return <Code2 size={26} className="text-emerald-300" />;
    case 'Web Development':
      return <Globe size={26} className="text-purple-300" />;
    case 'Data Science':
      return <LineChart size={26} className="text-amber-300" />;
    case 'Automation':
      return <Bot size={26} className="text-rose-300" />;
    case 'Career Learning':
      return <GraduationCap size={26} className="text-blue-300" />;
    default:
      return <Radio size={26} className="text-violet-300" />;
  }
}

function ReelCard({ reel, onPlayModal }) {
  const [imageError, setImageError] = useState(false);
  const [showEmbed, setShowEmbed] = useState(false);

  if (!reel) return null;

  const style = reel.visualStyle || {
    badgeColor: 'text-brand-primary border-brand-primary/30 bg-brand-primary/10',
    gradient: 'from-slate-950 via-brand-surface to-slate-900',
    accent: '#38bdf8',
  };

  const handleCardClick = () => {
    if (onPlayModal) {
      onPlayModal(reel);
    } else {
      setShowEmbed((prev) => !prev);
    }
  };

  return (
    <Card hover={false} className="group flex flex-col justify-between overflow-hidden p-0 border-brand-border bg-brand-surface shadow-card hover:border-brand-primary/50 hover:shadow-glow-sm transition-all duration-300">
      {/* 9:16 Vertical Video Visual Shell */}
      <div className="relative aspect-[9/15] w-full overflow-hidden bg-slate-950 border-b border-brand-border">
        {showEmbed ? (
          <div className="h-full w-full bg-black">
            <iframe
              src={reel.embedUrl}
              className="h-full w-full border-0"
              title={reel.title}
              allowTransparency="true"
              allow="encrypted-media"
              loading="lazy"
            />
          </div>
        ) : reel.thumbnail && !imageError ? (
          <img
            src={reel.thumbnail}
            alt={reel.title}
            onError={() => setImageError(true)}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          /* Distinctive Topic Visual Poster */
          <div
            className={`relative flex h-full w-full flex-col justify-between p-5 bg-gradient-to-b ${style.gradient} select-none cursor-pointer`}
            onClick={handleCardClick}
          >
            {/* Ambient Background Accent */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />

            {/* Top Header Tags */}
            <div className="relative z-10 flex items-center justify-between">
              <span className={`inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-bold ${style.badgeColor}`}>
                <Instagram size={10} />
                <span>{reel.category}</span>
              </span>

              {reel.featured && (
                <span className="inline-flex items-center gap-1 rounded-md border border-amber-500/40 bg-amber-500/15 px-2 py-0.5 text-[10px] font-bold text-amber-300">
                  <Sparkles size={10} /> Featured
                </span>
              )}
            </div>

            {/* Center: Topic Icon & Large Play Trigger */}
            <div className="relative z-10 my-auto text-center space-y-3">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                <TopicIcon category={reel.category} />
              </div>

              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-pink-500/40 bg-pink-500/20 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-pink-600 group-hover:scale-110 shadow-glow-sm">
                <Play size={20} className="ml-0.5 text-pink-300 group-hover:text-white" />
              </div>

              <h3 className="font-display text-base font-bold text-brand-heading leading-tight px-1">
                {reel.title}
              </h3>

              <p className="text-[11px] text-brand-muted line-clamp-2 px-2">
                {reel.description}
              </p>
            </div>

            {/* Bottom Card Footer */}
            <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-3 text-[11px] text-brand-muted">
              <span>Code Scholar AI</span>
              <span className="font-semibold text-brand-body">60s Reel</span>
            </div>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="p-4 space-y-2.5 bg-brand-surface">
        <a
          href={reel.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => openInstagramReel(reel.instagramId || reel.id, reel.url, e)}
          className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 px-3 py-2 text-xs font-bold text-white shadow-sm hover:opacity-95 transition cursor-pointer"
        >
          <Instagram size={14} />
          <span>Watch on Instagram</span>
          <ExternalLink size={12} />
        </a>

        <div className="flex items-center justify-between text-[11px] text-brand-muted px-1">
          <button
            type="button"
            onClick={handleCardClick}
            className="text-brand-primary hover:underline font-semibold cursor-pointer inline-flex items-center gap-1"
          >
            <Eye size={12} />
            <span>{showEmbed ? 'Close Player' : 'Interactive Preview'}</span>
          </button>
          <span>@code_scholar_ai</span>
        </div>
      </div>
    </Card>
  );
}

export default ReelCard;
