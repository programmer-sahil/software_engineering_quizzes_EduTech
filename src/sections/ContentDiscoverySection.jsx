import { ArrowRight, BookOpen, Clock, FileCheck, FileQuestion, Instagram, PlaySquare, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, SectionHeading, Badge, Button } from '../components/ui';
import { getPublishedReels } from '../content/reelsRegistry';

function ContentDiscoverySection() {
  const publishedReels = getPublishedReels();
  const hasPublishedReels = publishedReels.length > 0;
  const featuredReel = hasPublishedReels ? publishedReels[0] : null;
  return (
    <section className="section-shell mt-16 sm:mt-24">
      <SectionHeading
        eyebrow="Study Library"
        title="Featured Study Materials &amp; PYQs"
        description="Authentic previous year question papers, structured notes, and visual revision flows."
      />

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* Featured 1: Unit 1 PYQ Practice */}
        <Card className="p-6 flex flex-col justify-between border-brand-primary/30 shadow-card">
          <div>
            <div className="flex items-center justify-between">
              <Badge variant="coral" icon={<FileQuestion size={13} />}>
                17 Authentic PYQs
              </Badge>
              <span className="text-[11px] font-semibold text-brand-muted">Unit 1: IoT</span>
            </div>

            <h3 className="mt-4 font-display text-xl font-bold text-brand-heading">
              IoT Unit 1 PYQ MCQ Quiz
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-brand-body">
              Solve verified diploma previous-year questions from Jan 2026, Dec 2024, and Mar 2023 with step-by-step
              answers and explanations.
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5 text-[11px]">
              <span className="rounded-md border border-brand-border bg-brand-elevated px-2 py-1 text-brand-muted">
                Jan 2026 (6 Qs)
              </span>
              <span className="rounded-md border border-brand-border bg-brand-elevated px-2 py-1 text-brand-muted">
                Dec 2024 (4 Qs)
              </span>
              <span className="rounded-md border border-brand-border bg-brand-elevated px-2 py-1 text-brand-muted">
                Mar 2023 (7 Qs)
              </span>
            </div>
          </div>

          <div className="mt-6 border-t border-brand-border pt-4">
            <Link to="/iot/unit/1">
              <Button variant="primary" size="sm" icon={<ArrowRight size={15} />} className="w-full">
                Practice Unit 1 PYQs
              </Button>
            </Link>
          </div>
        </Card>

        {/* Featured 2: Unit 1 Structured Long Answers */}
        <Card className="p-6 flex flex-col justify-between border-brand-border">
          <div>
            <div className="flex items-center justify-between">
              <Badge variant="success" icon={<BookOpen size={13} />}>
                8 Long Answers
              </Badge>
              <span className="text-[11px] font-semibold text-brand-muted">Step Visual Flows</span>
            </div>

            <h3 className="mt-4 font-display text-xl font-bold text-brand-heading">
              🌐 Unit 1 Teaching Notes &amp; Long QA
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-brand-body">
              Exam-friendly answers for IoT ecosystem components, technology &amp; business drivers, privacy, security,
              sensing, and actuation.
            </p>

            <div className="mt-4 rounded-xl border border-brand-border bg-brand-elevated/40 p-2.5 text-xs text-brand-body">
              <span className="font-semibold text-brand-primary">Visual Flow Model:</span> Thing → Sensor → Network →
              Cloud → Action
            </div>
          </div>

          <div className="mt-6 border-t border-brand-border pt-4">
            <Link to="/iot/unit/1/long-questions">
              <Button variant="secondary" size="sm" icon={<ArrowRight size={15} />} className="w-full">
                Read Long Answers
              </Button>
            </Link>
          </div>
        </Card>

        {/* Featured 3: Instagram Reels Library */}
        <div id="reels">
          <Card hover={false} className="p-6 h-full flex flex-col justify-between border-brand-border bg-brand-surface/60">
            <div>
              <div className="flex items-center justify-between">
                <Badge variant="coral" icon={<Instagram size={13} />}>
                  Study Reels
                </Badge>
                <span className="rounded bg-brand-elevated px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-muted">
                  {hasPublishedReels ? 'Verified Lesson' : 'New lessons coming soon'}
                </span>
              </div>

              <h3 className="mt-4 font-display text-xl font-bold text-brand-heading">
                {featuredReel ? featuredReel.title : 'Topic Instagram Reels'}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-brand-body">
                {featuredReel
                  ? featuredReel.description || 'Watch 60-second visual revision reel on official Instagram.'
                  : 'Curated 60-second visual reels covering Arduino pinouts, protocol comparisons (Zigbee, Modbus, MQTT), and exam memory hooks.'}
              </p>

              <div className="mt-4 rounded-xl border border-brand-border bg-brand-elevated/40 p-3 text-xs text-brand-muted">
                {hasPublishedReels ? (
                  <span className="text-brand-heading font-medium">
                    Topic: {featuredReel.topics?.join(', ')}
                  </span>
                ) : (
                  <span>
                    Filmed by instructor Sahil • Zero fake video buttons
                  </span>
                )}
              </div>
            </div>

            <div className="mt-6 border-t border-brand-border pt-4">
              {featuredReel ? (
                <a
                  href={featuredReel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="secondary" size="sm" icon={<ArrowRight size={15} />} className="w-full">
                    Watch on Instagram
                  </Button>
                </a>
              ) : (
                <Link to="/reels">
                  <Button variant="secondary" size="sm" icon={<ArrowRight size={15} />} className="w-full">
                    Explore Study Reels
                  </Button>
                </Link>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default ContentDiscoverySection;

