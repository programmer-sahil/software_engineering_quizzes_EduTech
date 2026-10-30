import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  ExternalLink,
  Instagram,
  Pause,
  Play,
  Sparkles,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { getFeaturedMarkdownReel, OFFICIAL_INSTAGRAM_PROFILE } from '../content/reelsLoader';
import { openInstagramReel } from '../utils/instagramDeepLink';

function FeaturedReelHeroCard() {
  const reel = getFeaturedMarkdownReel();
  const shouldReduceMotion = useReducedMotion();
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showEmbed, setShowEmbed] = useState(false);

  // Handle local video playback if provided, with viewport intersection & tab visibility detection
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !reel.localVideo) return;

    // Viewport observer: Pause when outside viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            video.pause();
            setIsPlaying(false);
          } else if (!shouldReduceMotion) {
            video
              .play()
              .then(() => setIsPlaying(true))
              .catch(() => setIsPlaying(false));
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(video);

    // Tab visibility listener: Pause when tab is inactive
    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
        setIsPlaying(false);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [reel.localVideo, shouldReduceMotion]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  if (!reel) return null;

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative mx-auto w-full max-w-[340px] sm:max-w-[360px]"
    >
      {/* 3D Floating Video Shell (Vertical 9:16 Aspect Ratio) */}
      <div className="group relative aspect-[9/15.5] w-full overflow-hidden rounded-3xl border border-brand-border/80 bg-brand-surface shadow-card transition-all duration-300 hover:border-brand-primary/50 hover:shadow-glow-sm">
        {/* Background / Video Player / Interactive Embed */}
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
        ) : reel.localVideo ? (
          <div className="relative h-full w-full bg-black">
            <video
              ref={videoRef}
              src={reel.localVideo}
              poster={reel.thumbnail || undefined}
              autoPlay={!shouldReduceMotion}
              muted={isMuted}
              playsInline
              loop
              preload="metadata"
              className="h-full w-full object-cover"
            />

            {/* Video Controls Overlay */}
            <div className="absolute bottom-16 right-3 flex items-center gap-2 z-20">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
                className="grid h-8 w-8 place-items-center rounded-full bg-black/60 text-white backdrop-blur-md hover:bg-black/80 transition"
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
              </button>
              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                className="grid h-8 w-8 place-items-center rounded-full bg-black/60 text-white backdrop-blur-md hover:bg-black/80 transition"
              >
                {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              </button>
            </div>
          </div>
        ) : (
          /* High-Fidelity Branded Visual Poster for Code Scholar AI */
          <div className="relative flex h-full w-full flex-col justify-between p-6 overflow-hidden bg-gradient-to-br from-slate-950 via-brand-surface to-slate-900">
            {/* Ambient Lighting Gradient */}
            <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-pink-500/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-brand-primary/20 blur-3xl pointer-events-none" />

            {/* Top Ribbon */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-pink-400 backdrop-blur-md">
                <Instagram size={13} />
                <span>Featured Reel</span>
              </span>

              <span className="inline-flex items-center gap-1 rounded-full border border-brand-border bg-brand-elevated/80 px-2.5 py-0.5 text-[10px] font-bold text-brand-primary">
                <Sparkles size={11} /> 60s Lesson
              </span>
            </div>

            {/* Center Visual: Play Trigger & Code Scholar Brand */}
            <div className="relative z-10 my-auto text-center">
              <a
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => openInstagramReel(reel.instagramId || reel.id, reel.url, e)}
                aria-label={`Watch ${reel.title} on Instagram`}
                className="group/btn mx-auto grid h-20 w-20 place-items-center rounded-3xl border border-pink-500/40 bg-gradient-to-tr from-pink-600/30 via-purple-600/30 to-brand-primary/30 text-white shadow-glow transition-all duration-300 hover:scale-108 hover:border-pink-400 hover:bg-gradient-to-tr hover:from-pink-600 hover:to-purple-600 cursor-pointer"
              >
                <Play size={32} className="ml-1 text-pink-300 group-hover/btn:text-white transition-colors" />
              </a>

              <p className="mt-5 font-display text-lg font-bold text-brand-heading leading-snug">
                {reel.title}
              </p>

              <p className="mt-1.5 text-xs text-brand-muted line-clamp-2 px-2">
                {reel.description}
              </p>

              <div className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-brand-border/60 bg-brand-elevated/60 px-2.5 py-1 text-[11px] font-semibold text-brand-primary">
                <span>Code Scholar AI</span>
                <span className="text-brand-muted">•</span>
                <span className="text-brand-body">{reel.category}</span>
              </div>
            </div>

            {/* Bottom Primary CTA */}
            <div className="relative z-10 space-y-2 border-t border-brand-border/60 pt-4">
              <a
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => openInstagramReel(reel.instagramId || reel.id, reel.url, e)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow-glow transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Instagram size={15} />
                <span>Watch Featured Reel</span>
                <ExternalLink size={13} />
              </a>

              <div className="flex items-center justify-between text-[11px] text-brand-muted px-1">
                <span>Direct Instagram Link</span>
                <button
                  type="button"
                  onClick={() => setShowEmbed(true)}
                  className="text-brand-primary hover:underline font-medium"
                >
                  Preview Player
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Footer Link below card */}
      <div className="mt-3 text-center">
        <Link
          to="/reels"
          className="inline-flex items-center gap-1 text-xs font-semibold text-brand-primary hover:text-brand-heading transition"
        >
          <span>Explore All 8 Learning Reels</span>
          <ArrowRight size={13} />
        </Link>
      </div>
    </motion.div>
  );
}

export default FeaturedReelHeroCard;

