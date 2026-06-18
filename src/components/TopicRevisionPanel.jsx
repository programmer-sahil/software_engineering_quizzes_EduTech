import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Layers3, RotateCcw } from 'lucide-react';
import QuizPlayer from './QuizPlayer';

function Flashcard({ card, index }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.button
      type="button"
      onClick={() => setFlipped((prev) => !prev)}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
      className={`min-h-40 rounded-2xl border p-5 text-left transition ${
        flipped ? 'border-emerald-300/45 bg-emerald-400/12' : 'border-white/10 bg-white/5 hover:border-accent/35'
      }`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Flashcard {index + 1}</p>
      <p className="mt-3 text-sm font-semibold leading-6 text-white">{flipped ? card.back : card.front}</p>
      <p className="mt-4 text-xs text-slate-400">{flipped ? 'Tap to view question' : 'Tap to reveal answer'}</p>
    </motion.button>
  );
}

function TopicRevisionPanel({ topics = [], title = 'Topic-wise Revision' }) {
  const [selectedTopicId, setSelectedTopicId] = useState(topics[0]?.id);

  const selectedTopic = useMemo(
    () => topics.find((topic) => topic.id === selectedTopicId) || topics[0],
    [selectedTopicId, topics]
  );

  if (!topics.length || !selectedTopic) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-accent">Learning Focus</p>
        <h2 className="mt-2 font-display text-2xl text-white">{title}</h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
          Click any IoT syllabus topic to revise with flashcards and practice topic-wise MCQs.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic, index) => {
          const isActive = selectedTopic.id === topic.id;

          return (
            <button
              key={topic.id}
              type="button"
              onClick={() => setSelectedTopicId(topic.id)}
              className={`rounded-xl border px-4 py-3 text-left text-sm leading-6 transition ${
                isActive
                  ? 'border-accent bg-accent/15 text-accent shadow-glow'
                  : 'border-white/10 bg-white/5 text-slate-200 hover:border-accent/35'
              }`}
            >
              <span className="mr-2 font-semibold">{String(index + 1).padStart(2, '0')}</span>
              {topic.title}
            </button>
          );
        })}
      </div>

      <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-4 sm:p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
              <Layers3 size={14} /> Selected Topic
            </p>
            <h3 className="mt-2 font-display text-xl text-white">{selectedTopic.title}</h3>
          </div>
          <button
            type="button"
            onClick={() => setSelectedTopicId(topics[0].id)}
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:border-accent/40 hover:text-accent"
          >
            <RotateCcw size={14} /> First Topic
          </button>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {selectedTopic.flashcards.map((card, index) => (
            <Flashcard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-accent/25 bg-accent/10 p-4 sm:p-5">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/35 bg-slate-950/30 px-3 py-1 text-xs font-semibold text-accent">
          <BrainCircuit size={14} /> Topic-wise MCQ Practice
        </div>
        <QuizPlayer
          key={selectedTopic.id}
          title={`${selectedTopic.title} - Topic MCQ Practice`}
          questions={selectedTopic.questions}
          showUpskillingBanner={false}
        />
      </div>
    </div>
  );
}

export default TopicRevisionPanel;
