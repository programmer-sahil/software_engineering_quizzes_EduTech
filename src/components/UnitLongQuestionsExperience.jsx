import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  Code,
  Copy,
  Eye,
  EyeOff,
  FileBadge2,
  FileQuestion,
  Filter,
  HelpCircle,
  Layers,
  Lightbulb,
  Presentation,
  RotateCcw,
  Search,
  Sparkles,
  Tag,
  X,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import {
  getIotUnitLongQuestions,
  getIotUnitLongQuestionStats,
  getAvailableLongQuestionYears,
  getRevisedQuestions,
  toggleQuestionRevision,
  setQuestionRevision,
} from '../content/iotLongQuestionLoader.js';
import { Button, Card, EmptyState, ProgressBar } from './ui';

/**
 * UnitLongQuestionsExperience
 * Premium 3D-inspired interactive Long Questions revision hub for IoT units.
 * Supports:
 * - Browse Mode with progressive disclosure (1 answer expanded at a time by default)
 * - Self-Practice Mode (step-by-step revision with hidden answer)
 * - Dynamic Search & Filter by pool, verified exam year, and revision status
 * - Copy Answer & Mark as Revised saved in localStorage
 */
function UnitLongQuestionsExperience({
  unit,
  subjectId = 'iot',
  onBackToOverview,
  onSwitchToQuiz,
}) {
  const unitId = Number(unit?.id || 1);

  // Load stats and available years
  const stats = useMemo(() => getIotUnitLongQuestionStats(unitId), [unitId]);
  const availableYears = useMemo(() => getAvailableLongQuestionYears(unitId), [unitId]);

  // Mode: 'browse' | 'practice'
  const [viewMode, setViewMode] = useState('browse');

  // Search and Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [poolFilter, setPoolFilter] = useState('all'); // 'all' | 'pyq' | 'practice'
  const [yearFilter, setYearFilter] = useState('all');
  const [revisedFilter, setRevisedFilter] = useState('all'); // 'all' | 'revised' | 'unrevised'
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  // Revision state tracking from localStorage
  const [revisedIds, setRevisedIds] = useState(() => getRevisedQuestions(subjectId, unitId));

  // Copy feedback state { [questionId]: boolean }
  const [copiedId, setCopiedId] = useState(null);

  // Single expanded question ID in browse mode (null = all collapsed)
  const [expandedId, setExpandedId] = useState(null);

  // Self-Practice Mode state: active index
  const [practiceIndex, setPracticeIndex] = useState(0);
  const [practiceRevealed, setPracticeRevealed] = useState(false);

  // Synchronize revision state when unit changes
  useEffect(() => {
    setRevisedIds(getRevisedQuestions(subjectId, unitId));
    setExpandedId(null);
    setPracticeIndex(0);
    setPracticeRevealed(false);
  }, [subjectId, unitId]);

  // Handle toggling revision status
  const handleToggleRevision = (questionId) => {
    toggleQuestionRevision(subjectId, unitId, questionId);
    setRevisedIds(getRevisedQuestions(subjectId, unitId));
  };

  // Handle explicit revision in practice mode
  const handleSetRevisionInPractice = (questionId, isRevised) => {
    setQuestionRevision(subjectId, unitId, questionId, isRevised);
    setRevisedIds(getRevisedQuestions(subjectId, unitId));
  };

  // Copy plain text answer to clipboard
  const handleCopyAnswer = async (q) => {
    try {
      const formattedText = [
        `Q: ${q.title}`,
        q.years?.length ? `Verified PYQ: ${q.years.join(', ')} (${q.marks || 5} Marks)` : '',
        '',
        `Definition:\n${q.definition}`,
        '',
        `Key Points:\n${q.keyPoints.map((pt, i) => `${i + 1}. ${pt}`).join('\n')}`,
        q.example ? `\nExample:\n${q.example}` : '',
        q.conclusion ? `\nConclusion:\n${q.conclusion}` : '',
      ]
        .filter(Boolean)
        .join('\n');

      if (navigator?.clipboard) {
        await navigator.clipboard.writeText(formattedText);
        setCopiedId(q.id);
        setTimeout(() => setCopiedId(null), 2000);
      }
    } catch {}
  };

  // Resolve filtered questions list
  const filteredQuestions = useMemo(() => {
    return getIotUnitLongQuestions(unitId, {
      filter: poolFilter,
      year: yearFilter,
      search: searchTerm,
      revisedIds,
      revisedFilter,
    });
  }, [unitId, poolFilter, yearFilter, searchTerm, revisedIds, revisedFilter]);

  const isFiltered =
    poolFilter !== 'all' || yearFilter !== 'all' || revisedFilter !== 'all' || Boolean(searchTerm);

  const handleResetFilters = () => {
    setPoolFilter('all');
    setYearFilter('all');
    setRevisedFilter('all');
    setSearchTerm('');
  };

  // Accordion toggle: only one answer open at a time by default
  const handleToggleCard = (qId) => {
    setExpandedId((prev) => (prev === qId ? null : qId));
  };

  const allAreExpanded =
    filteredQuestions.length > 0 &&
    expandedId === 'ALL';

  const handleToggleAll = () => {
    if (allAreExpanded) {
      setExpandedId(null);
    } else {
      setExpandedId('ALL');
    }
  };

  // Practice mode navigation
  const currentPracticeQuestion = filteredQuestions[practiceIndex] || filteredQuestions[0];
  const isCurrentPracticeRevised = currentPracticeQuestion
    ? revisedIds.has(currentPracticeQuestion.id)
    : false;

  const handleNextPractice = () => {
    if (practiceIndex < filteredQuestions.length - 1) {
      setPracticeIndex((prev) => prev + 1);
      setPracticeRevealed(false);
    }
  };

  const handlePrevPractice = () => {
    if (practiceIndex > 0) {
      setPracticeIndex((prev) => prev - 1);
      setPracticeRevealed(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* =========================================================================
          TOP CONTROL BAR & FILTERS
          ========================================================================= */}
      <Card hover={false} className="p-4 sm:p-5 border-brand-border shadow-card">
        {/* Header Ribbon: Title, Counts, and Mode Switcher */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between border-b border-brand-border/60 pb-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-brand-primary/30 bg-brand-primary/10 px-2.5 py-1 text-xs font-bold text-brand-primary">
                <HelpCircle size={13} /> Unit {unitId} Long Questions
              </span>
              <span className="text-xs font-semibold text-brand-heading">
                {stats.total} Questions Available
              </span>
              <span className="rounded-md border border-brand-coral/40 bg-brand-coral/10 px-2 py-0.5 text-[11px] font-bold text-brand-coral">
                {stats.pyqs} Verified PYQs
              </span>
              {stats.practice > 0 && (
                <span className="rounded-md border border-brand-border bg-brand-elevated px-2 py-0.5 text-[11px] font-semibold text-brand-muted">
                  {stats.practice} Practice
                </span>
              )}
            </div>
            <p className="mt-1 text-xs text-brand-muted">
              Previous-year questions with concise model answers (Definition, Key Points, Examples, Diagrams).
            </p>
          </div>

          {/* Mode Switcher: Browse Mode vs Self-Practice Mode */}
          <div className="flex items-center gap-1.5 self-start lg:self-center bg-brand-elevated/70 p-1 rounded-xl border border-brand-border">
            <button
              type="button"
              onClick={() => {
                setViewMode('browse');
                setPracticeRevealed(false);
              }}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                viewMode === 'browse'
                  ? 'bg-brand-surface text-brand-primary shadow-sm border border-brand-primary/30 font-bold'
                  : 'text-brand-muted hover:text-brand-heading'
              }`}
            >
              <BookOpen size={13} />
              <span>Browse All ({filteredQuestions.length})</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setViewMode('practice');
                setPracticeIndex(0);
                setPracticeRevealed(false);
              }}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                viewMode === 'practice'
                  ? 'bg-brand-primary text-slate-950 shadow-sm font-bold'
                  : 'text-brand-muted hover:text-brand-heading'
              }`}
            >
              <Sparkles size={13} />
              <span>Self-Practice Mode</span>
            </button>
          </div>
        </div>

        {/* Search Bar & Dropdown Filter Trigger */}
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Keyword Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted"
            />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by keyword, topic, or question..."
              className="w-full rounded-xl border border-brand-border bg-brand-elevated pl-9 pr-8 py-2 text-xs text-brand-heading placeholder:text-brand-muted outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-brand-muted hover:text-brand-heading"
                aria-label="Clear search"
              >
                <X size={13} />
              </button>
            )}
          </div>

          {/* Action Buttons: Expand All + Filter Dropdown Toggle */}
          <div className="flex items-center gap-2">
            {viewMode === 'browse' && filteredQuestions.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleToggleAll}
                className="text-xs text-brand-muted hover:text-brand-heading"
              >
                {allAreExpanded ? 'Collapse All' : 'Expand All'}
              </Button>
            )}

            {isFiltered && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1 text-xs font-medium text-brand-muted hover:text-brand-heading transition mr-1"
                title="Reset filters"
              >
                <RotateCcw size={12} />
                <span>Reset</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => setShowFilterDropdown((prev) => !prev)}
              className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition cursor-pointer ${
                isFiltered || showFilterDropdown
                  ? 'border-brand-primary/50 bg-brand-primary/15 text-brand-primary'
                  : 'border-brand-border bg-brand-elevated text-brand-body hover:text-brand-heading hover:border-brand-border-hover'
              }`}
              aria-expanded={showFilterDropdown}
            >
              <Filter size={13} />
              <span>Filters</span>
              {isFiltered && <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />}
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${
                  showFilterDropdown ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Collapsible Filter Dropdown Controls */}
        <AnimatePresence>
          {showFilterDropdown && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-brand-border/60 mt-3.5 pt-3.5 space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-3">
                {/* Question Pool Filter */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-brand-muted mb-1.5">
                    Question Pool
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    <button
                      type="button"
                      onClick={() => setPoolFilter('all')}
                      className={`rounded-lg px-2.5 py-1 text-xs font-medium transition ${
                        poolFilter === 'all'
                          ? 'border border-brand-primary/50 bg-brand-primary/15 text-brand-primary font-bold'
                          : 'border border-brand-border bg-brand-surface text-brand-body hover:border-brand-border-hover'
                      }`}
                    >
                      All ({stats.total})
                    </button>
                    <button
                      type="button"
                      onClick={() => setPoolFilter('pyq')}
                      className={`rounded-lg px-2.5 py-1 text-xs font-medium transition ${
                        poolFilter === 'pyq'
                          ? 'border border-brand-coral/50 bg-brand-coral/15 text-brand-coral font-bold'
                          : 'border border-brand-border bg-brand-surface text-brand-body hover:border-brand-border-hover'
                      }`}
                    >
                      PYQs Only ({stats.pyqs})
                    </button>
                    {stats.practice > 0 && (
                      <button
                        type="button"
                        onClick={() => setPoolFilter('practice')}
                        className={`rounded-lg px-2.5 py-1 text-xs font-medium transition ${
                          poolFilter === 'practice'
                            ? 'border border-brand-secondary/50 bg-brand-secondary/15 text-brand-secondary font-bold'
                            : 'border border-brand-border bg-brand-surface text-brand-body hover:border-brand-border-hover'
                        }`}
                      >
                        Practice ({stats.practice})
                      </button>
                    )}
                  </div>
                </div>

                {/* Exam Session Filter */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-brand-muted mb-1.5">
                    Exam Session Year
                  </label>
                  <select
                    value={yearFilter}
                    onChange={(e) => setYearFilter(e.target.value)}
                    className="w-full rounded-xl border border-brand-border bg-brand-elevated px-3 py-1.5 text-xs text-brand-heading outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition"
                  >
                    <option value="all">All Exam Sessions</option>
                    {availableYears.map((yr) => (
                      <option key={yr} value={yr}>
                        {yr} Examination Session
                      </option>
                    ))}
                  </select>
                </div>

                {/* Revision Status Filter */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-brand-muted mb-1.5">
                    Revision Progress
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    <button
                      type="button"
                      onClick={() => setRevisedFilter('all')}
                      className={`rounded-lg px-2.5 py-1 text-xs font-medium transition ${
                        revisedFilter === 'all'
                          ? 'border border-brand-primary/50 bg-brand-primary/15 text-brand-primary font-bold'
                          : 'border border-brand-border bg-brand-surface text-brand-body hover:border-brand-border-hover'
                      }`}
                    >
                      All
                    </button>
                    <button
                      type="button"
                      onClick={() => setRevisedFilter('revised')}
                      className={`rounded-lg px-2.5 py-1 text-xs font-medium transition ${
                        revisedFilter === 'revised'
                          ? 'border border-emerald-500/50 bg-emerald-500/15 text-emerald-400 font-bold'
                          : 'border border-brand-border bg-brand-surface text-brand-body hover:border-brand-border-hover'
                      }`}
                    >
                      Revised ({revisedIds.size})
                    </button>
                    <button
                      type="button"
                      onClick={() => setRevisedFilter('unrevised')}
                      className={`rounded-lg px-2.5 py-1 text-xs font-medium transition ${
                        revisedFilter === 'unrevised'
                          ? 'border border-amber-500/50 bg-amber-500/15 text-amber-400 font-bold'
                          : 'border border-brand-border bg-brand-surface text-brand-body hover:border-brand-border-hover'
                      }`}
                    >
                      Needs Revision ({Math.max(0, stats.total - revisedIds.size)})
                    </button>
                  </div>
                </div>
              </div>

              {/* Progress Summary Ribbon */}
              <div className="pt-2 border-t border-brand-border/40 flex items-center justify-between text-[11px] text-brand-muted">
                <span>
                  Showing {filteredQuestions.length} of {stats.total} unit long questions
                </span>
                <span>
                  Unit Revision Progress: <strong>{revisedIds.size}</strong> / {stats.total} (
                  {Math.round((revisedIds.size / (stats.total || 1)) * 100)}%)
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>

      {/* =========================================================================
          VIEW MODE 1: BROWSE ALL QUESTIONS (3D Cards + Progressive Disclosure)
          ========================================================================= */}
      {viewMode === 'browse' && (
        <div className="space-y-4">
          {filteredQuestions.length === 0 ? (
            <EmptyState
              icon={HelpCircle}
              title="No Long Questions Found"
              description="No descriptive questions match your active filters or search keyword."
              action={
                <Button variant="primary" size="sm" onClick={handleResetFilters}>
                  Reset All Filters
                </Button>
              }
            />
          ) : (
            filteredQuestions.map((q, idx) => {
              const isExpanded = allAreExpanded || expandedId === q.id;
              const isRevised = revisedIds.has(q.id);
              const isCopied = copiedId === q.id;

              return (
                <motion.article
                  key={q.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: idx * 0.03 }}
                  className={`rounded-2xl border transition-all duration-200 bg-brand-surface p-5 sm:p-6 ${
                    isExpanded
                      ? 'border-brand-primary/50 shadow-card ring-1 ring-brand-primary/30'
                      : 'border-brand-border hover:border-brand-border-hover shadow-sm hover:shadow-card hover:-translate-y-0.5'
                  }`}
                >
                  {/* Top Metadata Row: Q Number, Category, PYQ Year Badges, Marks */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-brand-border/60 pb-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-lg border border-brand-border bg-brand-elevated px-2.5 py-0.5 text-xs font-bold text-brand-heading">
                        Q{idx + 1}
                      </span>

                      {q.category && (
                        <span className="rounded-lg border border-brand-border/70 bg-brand-elevated/50 px-2 py-0.5 text-[11px] font-medium text-brand-muted">
                          {q.category}
                        </span>
                      )}

                      {q.type === 'PYQ' ? (
                        <span className="inline-flex items-center gap-1 rounded-md border border-brand-coral/40 bg-brand-coral/10 px-2.5 py-0.5 text-xs font-semibold text-brand-coral">
                          <FileBadge2 size={12} />
                          <span>PYQ: {q.years.join(' · ')}</span>
                        </span>
                      ) : (
                        <span className="rounded-md border border-brand-border bg-brand-surface px-2 py-0.5 text-xs font-medium text-brand-muted">
                          Important Practice Question
                        </span>
                      )}

                      {q.marks && (
                        <span className="rounded-md border border-brand-primary/30 bg-brand-primary/10 px-2 py-0.5 text-xs font-bold text-brand-primary">
                          {q.marks} Marks
                        </span>
                      )}
                    </div>

                    {/* Quick Revision Toggle */}
                    <button
                      type="button"
                      onClick={() => handleToggleRevision(q.id)}
                      className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
                        isRevised
                          ? 'border border-emerald-500/40 bg-emerald-500/15 text-emerald-400'
                          : 'border border-brand-border bg-brand-elevated text-brand-muted hover:text-brand-heading'
                      }`}
                      aria-pressed={isRevised}
                      title={isRevised ? 'Marked as revised' : 'Mark as revised'}
                    >
                      <CheckCircle2 size={13} className={isRevised ? 'text-emerald-400' : ''} />
                      <span>{isRevised ? 'Revised' : 'Mark Revised'}</span>
                    </button>
                  </div>

                  {/* Question Title & Prompt */}
                  <h3 className="mt-3.5 font-display text-base sm:text-lg font-bold leading-relaxed text-brand-heading">
                    {q.title}
                  </h3>

                  {/* Initial Compact View Action Bar */}
                  <div className="mt-4 pt-3 border-t border-brand-border/40 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs text-brand-muted">
                      {isExpanded ? 'Full model answer revealed' : 'Model answer hidden (Click to study)'}
                    </span>

                    <button
                      type="button"
                      onClick={() => handleToggleCard(q.id)}
                      className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-1.5 text-xs font-semibold transition cursor-pointer ${
                        isExpanded
                          ? 'border-brand-primary bg-brand-primary/15 text-brand-primary'
                          : 'border-brand-border bg-brand-elevated text-brand-heading hover:border-brand-primary hover:text-brand-primary'
                      }`}
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? <EyeOff size={13} /> : <Eye size={13} />}
                      <span>{isExpanded ? 'Hide Answer' : 'View Answer'}</span>
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {/* Progressive Disclosure Model Answer */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden border-t border-brand-border/60 mt-4 pt-4 space-y-4"
                      >
                        {/* 1. Concise Definition */}
                        <div className="rounded-xl border border-brand-primary/30 bg-brand-primary/5 p-3.5 text-xs sm:text-sm text-brand-body leading-relaxed">
                          <span className="block font-bold uppercase tracking-wider text-[11px] text-brand-primary mb-1">
                            Exam Definition
                          </span>
                          <p className="font-medium text-brand-heading">{q.definition}</p>
                        </div>

                        {/* 2. Structured Key Points */}
                        {q.keyPoints?.length > 0 && (
                          <div className="space-y-2">
                            <span className="block text-xs font-bold uppercase tracking-wider text-brand-muted">
                              Key Exam Points
                            </span>
                            <ul className="space-y-2 text-xs sm:text-sm text-brand-body leading-relaxed">
                              {q.keyPoints.map((pt, pIdx) => (
                                <li key={pIdx} className="flex items-start gap-2.5">
                                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                                  <span>{pt}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* 3. Real-World Example */}
                        {q.example && (
                          <div className="rounded-xl border border-brand-border bg-brand-elevated/40 p-3.5 text-xs sm:text-sm">
                            <span className="font-bold text-brand-heading">Example: </span>
                            <span className="text-brand-body">{q.example}</span>
                          </div>
                        )}

                        {/* 4. Visual Flow Diagram or Code Snippet */}
                        {q.visualFlow?.steps?.length > 0 && (
                          <div className="rounded-xl border border-brand-border bg-brand-elevated/30 p-3.5">
                            <p className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-brand-primary mb-2.5">
                              <Presentation size={13} /> {q.visualFlow.title || 'Step Flow Diagram'}
                            </p>
                            <div className="flex flex-wrap items-center gap-2">
                              {q.visualFlow.steps.map((step, sIdx) => (
                                <div key={step} className="flex items-center gap-2">
                                  <span className="rounded-lg border border-brand-border bg-brand-surface px-2.5 py-1 text-xs font-semibold text-brand-heading shadow-sm">
                                    {sIdx + 1}. {step}
                                  </span>
                                  {sIdx < q.visualFlow.steps.length - 1 && (
                                    <span className="text-brand-muted font-bold text-xs">→</span>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Code Snippet (e.g. Unit 5 Arduino sketch) */}
                        {q.codeSnippet && (
                          <div className="rounded-xl border border-brand-border bg-slate-950 p-3.5 text-slate-100 font-mono text-xs overflow-x-auto">
                            <div className="flex items-center gap-1.5 text-[10px] text-cyan-400 font-bold uppercase tracking-wider mb-2">
                              <Code size={12} /> C++ Source Illustration
                            </div>
                            <pre className="whitespace-pre-wrap leading-relaxed">
                              {q.codeSnippet}
                            </pre>
                          </div>
                        )}

                        {/* 5. Exam Takeaway / Conclusion */}
                        {q.conclusion && (
                          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs text-brand-body">
                            <span className="font-bold text-emerald-400">Exam Takeaway: </span>
                            <span>{q.conclusion}</span>
                          </div>
                        )}

                        {/* Bottom Action Footer: Copy Answer & Toggle Revision */}
                        <div className="pt-3 border-t border-brand-border/40 flex flex-wrap items-center justify-between gap-3 text-xs">
                          <button
                            type="button"
                            onClick={() => handleCopyAnswer(q)}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-brand-border bg-brand-elevated px-2.5 py-1 text-xs font-semibold text-brand-body hover:text-brand-heading hover:border-brand-border-hover transition"
                          >
                            {isCopied ? (
                              <>
                                <Check size={13} className="text-emerald-400" />
                                <span className="text-emerald-400">Copied to Clipboard!</span>
                              </>
                            ) : (
                              <>
                                <Copy size={13} />
                                <span>Copy Answer</span>
                              </>
                            )}
                          </button>

                          <button
                            type="button"
                            onClick={() => handleToggleRevision(q.id)}
                            className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1 text-xs font-semibold transition ${
                              isRevised
                                ? 'border-emerald-500/50 bg-emerald-500/20 text-emerald-400'
                                : 'border-brand-primary/40 bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20'
                            }`}
                          >
                            <CheckCircle2 size={13} />
                            <span>{isRevised ? 'Revised (Click to reset)' : 'Mark as Revised'}</span>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })
          )}
        </div>
      )}

      {/* =========================================================================
          VIEW MODE 2: SELF-PRACTICE MODE (Step-by-Step Self Revision)
          ========================================================================= */}
      {viewMode === 'practice' && (
        <div className="space-y-6">
          {filteredQuestions.length === 0 ? (
            <EmptyState
              icon={HelpCircle}
              title="No Questions in Practice Pool"
              description="No questions match the current filter selection to practice."
              action={
                <Button variant="primary" size="sm" onClick={handleResetFilters}>
                  Reset Filters
                </Button>
              }
            />
          ) : (
            <Card hover={false} className="p-6 sm:p-8 border-brand-primary/30 shadow-card">
              {/* Practice Progress Ribbon */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-brand-border/60 pb-4">
                <div className="flex items-center gap-2">
                  <span className="rounded-lg border border-brand-primary/40 bg-brand-primary/10 px-2.5 py-1 text-xs font-bold text-brand-primary">
                    Question {practiceIndex + 1} of {filteredQuestions.length}
                  </span>
                  <span className="text-xs text-brand-muted">
                    Unit {unitId} Descriptive Practice
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-brand-muted">
                    {revisedIds.size} of {stats.total} Revised
                  </span>
                  <button
                    type="button"
                    onClick={() => setViewMode('browse')}
                    className="text-xs text-brand-primary hover:underline"
                  >
                    Back to All Questions
                  </button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-3">
                <ProgressBar
                  current={practiceIndex + 1}
                  total={filteredQuestions.length}
                  label={`Practice Progress (${practiceIndex + 1}/${filteredQuestions.length})`}
                />
              </div>

              {/* Current Question Display */}
              <div className="mt-6 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  {currentPracticeQuestion.type === 'PYQ' ? (
                    <span className="inline-flex items-center gap-1 rounded-md border border-brand-coral/40 bg-brand-coral/10 px-2.5 py-0.5 text-xs font-semibold text-brand-coral">
                      <FileBadge2 size={12} />
                      <span>PYQ: {currentPracticeQuestion.years?.join(' · ')}</span>
                    </span>
                  ) : (
                    <span className="rounded-md border border-brand-border bg-brand-surface px-2 py-0.5 text-xs font-medium text-brand-muted">
                      Important Practice Question
                    </span>
                  )}

                  {currentPracticeQuestion.marks && (
                    <span className="rounded-md border border-brand-primary/30 bg-brand-primary/10 px-2 py-0.5 text-xs font-bold text-brand-primary">
                      {currentPracticeQuestion.marks} Marks
                    </span>
                  )}

                  {currentPracticeQuestion.category && (
                    <span className="rounded-md border border-brand-border bg-brand-elevated px-2 py-0.5 text-[11px] text-brand-muted">
                      {currentPracticeQuestion.category}
                    </span>
                  )}
                </div>

                {/* Prompt */}
                <h3 className="font-display text-xl sm:text-2xl font-bold leading-relaxed text-brand-heading">
                  {currentPracticeQuestion.title}
                </h3>

                {/* Notebook prompt */}
                <div className="rounded-xl border border-brand-border bg-brand-elevated/40 p-4 text-xs text-brand-muted">
                  <p className="font-medium text-brand-body inline-flex items-center gap-1.5">
                    <Lightbulb size={14} className="text-brand-primary" /> Self-Revision Tip:
                  </p>
                  <p className="mt-1 leading-relaxed">
                    Formulate your answer or write down 3–4 key points in your notebook. When you are ready, click below to reveal the official model answer and grade yourself.
                  </p>
                </div>

                {/* Reveal Answer Button */}
                {!practiceRevealed ? (
                  <div className="pt-4 text-center">
                    <Button
                      variant="primary"
                      size="md"
                      icon={<Eye size={16} />}
                      onClick={() => setPracticeRevealed(true)}
                    >
                      Reveal Model Answer
                    </Button>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="pt-2 space-y-4"
                  >
                    {/* Definition */}
                    <div className="rounded-xl border border-brand-primary/30 bg-brand-primary/5 p-4 text-xs sm:text-sm text-brand-body leading-relaxed">
                      <span className="block font-bold uppercase tracking-wider text-[11px] text-brand-primary mb-1">
                        Exam Definition
                      </span>
                      <p className="font-medium text-brand-heading">
                        {currentPracticeQuestion.definition}
                      </p>
                    </div>

                    {/* Key Points */}
                    <div className="rounded-xl border border-brand-border bg-brand-elevated/40 p-4 space-y-2">
                      <span className="block text-xs font-bold uppercase tracking-wider text-brand-muted">
                        Key Exam Points
                      </span>
                      <ul className="space-y-2 text-xs sm:text-sm text-brand-body leading-relaxed">
                        {currentPracticeQuestion.keyPoints?.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Example */}
                    {currentPracticeQuestion.example && (
                      <div className="rounded-xl border border-brand-border bg-brand-surface p-3.5 text-xs sm:text-sm">
                        <span className="font-bold text-brand-heading">Example: </span>
                        <span className="text-brand-body">{currentPracticeQuestion.example}</span>
                      </div>
                    )}

                    {/* Visual Flow */}
                    {currentPracticeQuestion.visualFlow?.steps?.length > 0 && (
                      <div className="rounded-xl border border-brand-border bg-brand-elevated/30 p-3.5">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-brand-primary mb-2">
                          Step Flow
                        </p>
                        <div className="flex flex-wrap items-center gap-2">
                          {currentPracticeQuestion.visualFlow.steps.map((step, sIdx) => (
                            <div key={step} className="flex items-center gap-1.5">
                              <span className="rounded-md border border-brand-border bg-brand-surface px-2 py-0.5 text-xs font-semibold text-brand-heading">
                                {sIdx + 1}. {step}
                              </span>
                              {sIdx < currentPracticeQuestion.visualFlow.steps.length - 1 && (
                                <span className="text-brand-muted text-xs">→</span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Self-Evaluation Decision Buttons */}
                    <div className="pt-4 border-t border-brand-border/60 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <Button
                          variant={isCurrentPracticeRevised ? 'primary' : 'secondary'}
                          size="sm"
                          icon={<CheckCircle2 size={14} />}
                          onClick={() =>
                            handleSetRevisionInPractice(
                              currentPracticeQuestion.id,
                              !isCurrentPracticeRevised
                            )
                          }
                        >
                          {isCurrentPracticeRevised ? 'Marked as Revised ✓' : 'Mark as Revised'}
                        </Button>

                        <button
                          type="button"
                          onClick={() =>
                            handleSetRevisionInPractice(currentPracticeQuestion.id, false)
                          }
                          className="rounded-xl border border-brand-border bg-brand-elevated px-3 py-1.5 text-xs font-medium text-brand-muted hover:text-brand-heading"
                        >
                          Needs Practice
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleCopyAnswer(currentPracticeQuestion)}
                        className="inline-flex items-center gap-1 text-xs text-brand-muted hover:text-brand-primary transition"
                      >
                        <Copy size={12} />
                        <span>{copiedId === currentPracticeQuestion.id ? 'Copied!' : 'Copy Answer'}</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Navigation Footer (Previous / Next) */}
              <div className="mt-8 pt-4 border-t border-brand-border/60 flex items-center justify-between">
                <Button
                  variant="secondary"
                  size="sm"
                  icon={<ArrowLeft size={14} />}
                  onClick={handlePrevPractice}
                  disabled={practiceIndex === 0}
                >
                  Previous Question
                </Button>

                {practiceIndex < filteredQuestions.length - 1 ? (
                  <Button
                    variant="primary"
                    size="sm"
                    icon={<ArrowRight size={14} />}
                    onClick={handleNextPractice}
                  >
                    Next Question
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    size="sm"
                    icon={<Check size={14} />}
                    onClick={() => setViewMode('browse')}
                  >
                    Finish Revision
                  </Button>
                )}
              </div>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}

export default UnitLongQuestionsExperience;
