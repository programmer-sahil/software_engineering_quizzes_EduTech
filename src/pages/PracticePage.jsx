import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Award,
  BookOpen,
  Bookmark,
  Calendar,
  CheckCircle,
  Clock,
  Filter,
  HelpCircle,
  Play,
  RotateCcw,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import QuestionNavigator from '../components/QuestionNavigator';
import QuizPlayer from '../components/QuizPlayer';
import { Button, Card, EmptyState, SectionHeading } from '../components/ui';
import { shuffleQuestions } from '../content/questionNormalizer';
import { getAllSubjects, getSubject } from '../content/registry';
import { getBookmarks } from '../utils/quizStorage';

const VERIFIED_YEARS = ['Jan 2026', 'Dec 2024', 'Mar 2023'];

function PracticePage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Registry subjects
  const subjects = useMemo(() => getAllSubjects(), []);
  const activeSubjects = useMemo(() => subjects.filter((s) => !s.disabled), [subjects]);

  // URL parameters or sensible defaults
  const initialSubject = searchParams.get('subject') || 'iot';
  const initialUnit = searchParams.get('unit') || '1';
  const initialType = searchParams.get('type') || 'all'; // 'all' | 'pyq' | 'practice'
  const initialYear = searchParams.get('year') || 'all';

  // Filters State
  const [selectedSubjectId, setSelectedSubjectId] = useState(initialSubject);
  const [selectedUnitId, setSelectedUnitId] = useState(initialUnit);
  const [selectedType, setSelectedType] = useState(initialType);
  const [selectedYear, setSelectedYear] = useState(initialYear);
  const [bookmarkedOnly, setBookmarkedOnly] = useState(false);

  // Pre-quiz Configuration State
  const [quizMode, setQuizMode] = useState('practice'); // 'practice' | 'exam'
  const [timerMinutes, setTimerMinutes] = useState(15);
  const [shouldShuffle, setShouldShuffle] = useState(false);
  const [isQuizActive, setIsQuizActive] = useState(false);

  // Sync state with URL params
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedSubjectId) params.set('subject', selectedSubjectId);
    if (selectedUnitId && selectedUnitId !== 'all') params.set('unit', selectedUnitId);
    if (selectedType && selectedType !== 'all') params.set('type', selectedType);
    if (selectedYear && selectedYear !== 'all') params.set('year', selectedYear);
    setSearchParams(params, { replace: true });
  }, [selectedSubjectId, selectedUnitId, selectedType, selectedYear, setSearchParams]);

  // Active Subject Object
  const currentSubject = useMemo(() => {
    return getSubject(selectedSubjectId) || activeSubjects[0];
  }, [selectedSubjectId, activeSubjects]);

  // Collect raw questions from subject & units without duplication
  const candidateQuestions = useMemo(() => {
    if (!currentSubject || currentSubject.disabled) return [];

    const list = [];
    const seenIds = new Set();
    const unitsToScan =
      selectedUnitId === 'all'
        ? currentSubject.units || []
        : (currentSubject.units || []).filter((u) => String(u.id) === String(selectedUnitId));

    unitsToScan.forEach((unit) => {
      // Prioritize full questions pool for each unit, deduplicating by ID
      const unitPool = unit.questions || unit.completeQuiz || unit.pyqQuiz || [];
      unitPool.forEach((q) => {
        if (!seenIds.has(q.id)) {
          seenIds.add(q.id);
          list.push({
            ...q,
            subjectId: currentSubject.id,
            unitId: unit.id,
            unitBadge: `${currentSubject.shortTitle || 'IoT'} Unit ${unit.id}`,
            sourceType: q.sourceType || (q.pyq || q.year ? 'pyq' : 'practice'),
          });
        }
      });
    });

    return list;
  }, [currentSubject, selectedUnitId]);

  // Apply filters: SourceType, Year, Bookmarks
  const filteredQuestions = useMemo(() => {
    const bookmarks = new Set(getBookmarks());

    return candidateQuestions.filter((q) => {
      // Type filter
      if (selectedType !== 'all') {
        const isPyq = q.sourceType === 'pyq' || Boolean(q.pyq || q.year);
        if (selectedType === 'pyq' && !isPyq) return false;
        if (selectedType === 'practice' && isPyq) return false;
      }

      // Year filter
      if (selectedYear !== 'all') {
        const matchesYear = (q.year && q.year.includes(selectedYear)) || (q.pyq && q.pyq.includes(selectedYear));
        if (!matchesYear) return false;
      }

      // Bookmark filter
      if (bookmarkedOnly && !bookmarks.has(String(q.id))) {
        return false;
      }

      return true;
    });
  }, [candidateQuestions, selectedType, selectedYear, bookmarkedOnly]);

  // Prepared questions for QuizPlayer (shuffled if requested)
  const finalQuestions = useMemo(() => {
    if (shouldShuffle) {
      return shuffleQuestions(filteredQuestions);
    }
    return filteredQuestions;
  }, [filteredQuestions, shouldShuffle]);

  const handleStartQuiz = () => {
    if (finalQuestions.length > 0) {
      setIsQuizActive(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleResetFilters = () => {
    setSelectedSubjectId('iot');
    setSelectedUnitId('1');
    setSelectedType('all');
    setSelectedYear('all');
    setBookmarkedOnly(false);
  };

  return (
    <main className="min-h-screen py-10 sm:py-14">
      <div className="section-shell">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6 flex items-center gap-2 text-xs text-brand-muted" aria-label="Breadcrumbs">
          <Link to="/" className="hover:text-brand-heading transition">
            Home
          </Link>
          <span>/</span>
          <Link to="/subjects" className="hover:text-brand-heading transition">
            Subjects
          </Link>
          <span>/</span>
          <span className="text-brand-primary font-semibold">Practice Hub</span>
        </nav>

        {!isQuizActive ? (
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-primary">
                <Sparkles size={13} />
                <span>Interactive Exam Prep</span>
              </div>
              <h1 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-heading">
                Objective Practice &amp; PYQ Hub
              </h1>
              <p className="mt-2 max-w-3xl text-sm sm:text-base leading-relaxed text-brand-body">
                Practice verified WBSCTE diploma previous year questions with detailed explanations,
                or test yourself in realistic timed Exam Mode with zero distractions.
              </p>
            </div>

            {/* Filter Configuration Grid */}
            <Card hover={false} className="p-6 sm:p-7 border-brand-border shadow-card">
              <div className="flex items-center justify-between border-b border-brand-border pb-4">
                <div className="flex items-center gap-2 font-display text-base font-bold text-brand-heading">
                  <Filter size={18} className="text-brand-primary" />
                  <span>Customize Practice Session</span>
                </div>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1.5 text-xs text-brand-muted hover:text-brand-primary transition"
                >
                  <RotateCcw size={13} />
                  <span>Reset Filters</span>
                </button>
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {/* Subject Selector */}
                <div>
                  <label htmlFor="filter-subject" className="block text-xs font-semibold uppercase tracking-wider text-brand-muted">
                    Subject
                  </label>
                  <select
                    id="filter-subject"
                    value={selectedSubjectId}
                    onChange={(e) => {
                      setSelectedSubjectId(e.target.value);
                      setSelectedUnitId('1');
                    }}
                    className="mt-2 w-full rounded-xl border border-brand-border bg-brand-elevated px-3 py-2 text-sm text-brand-heading outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition"
                  >
                    {subjects.map((sub) => (
                      <option key={sub.id} value={sub.id} disabled={sub.disabled}>
                        {sub.title} {sub.disabled ? '(Locked - Next Sem)' : ''}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Unit Selector */}
                <div>
                  <label htmlFor="filter-unit" className="block text-xs font-semibold uppercase tracking-wider text-brand-muted">
                    Unit
                  </label>
                  <select
                    id="filter-unit"
                    value={selectedUnitId}
                    onChange={(e) => setSelectedUnitId(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-brand-border bg-brand-elevated px-3 py-2 text-sm text-brand-heading outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition"
                  >
                    <option value="all">All Units ({candidateQuestions.length} Questions)</option>
                    {(currentSubject?.units || []).map((u) => {
                      const count = (u.pyqQuiz?.length || 0) + (u.completeQuiz?.length || 0);
                      return (
                        <option key={u.id} value={u.id}>
                          Unit {u.id}: {u.shortTitle || u.title} ({count} Qs)
                        </option>
                      );
                    })}
                  </select>
                </div>

                {/* Source Type Filter */}
                <div>
                  <label htmlFor="filter-type" className="block text-xs font-semibold uppercase tracking-wider text-brand-muted">
                    Question Type
                  </label>
                  <select
                    id="filter-type"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-brand-border bg-brand-elevated px-3 py-2 text-sm text-brand-heading outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition"
                  >
                    <option value="all">All Available Types</option>
                    <option value="pyq">Official Past Papers (PYQ Only)</option>
                    <option value="practice">Unit Practice MCQs Only</option>
                  </select>
                </div>

                {/* Exam Year Filter */}
                <div>
                  <label htmlFor="filter-year" className="block text-xs font-semibold uppercase tracking-wider text-brand-muted">
                    Verified Exam Year
                  </label>
                  <select
                    id="filter-year"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-brand-border bg-brand-elevated px-3 py-2 text-sm text-brand-heading outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition"
                  >
                    <option value="all">All Verified Years</option>
                    {VERIFIED_YEARS.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Bookmarked Filter Pill */}
              <div className="mt-5 flex flex-wrap items-center gap-3 pt-4 border-t border-brand-border/60">
                <button
                  type="button"
                  onClick={() => setBookmarkedOnly((prev) => !prev)}
                  className={`inline-flex items-center gap-2 rounded-xl border px-3.5 py-1.5 text-xs font-semibold transition ${
                    bookmarkedOnly
                      ? 'border-amber-400 bg-amber-400/15 text-amber-300'
                      : 'border-brand-border bg-brand-surface text-brand-muted hover:border-brand-border-hover'
                  }`}
                >
                  <Bookmark size={14} className={bookmarkedOnly ? 'fill-amber-400' : ''} />
                  <span>Bookmarked Questions Only</span>
                </button>
              </div>
            </Card>

            {/* Pre-Quiz Launch Card */}
            {filteredQuestions.length > 0 ? (
              <Card hover={false} className="p-6 sm:p-8 border-brand-primary/30 bg-brand-surface/70 shadow-glow-sm">
                <div className="grid gap-8 lg:grid-cols-12 items-center">
                  <div className="space-y-4 lg:col-span-7">
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-primary">
                      <Sparkles size={14} /> Ready to Practice
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-heading">
                      {filteredQuestions.length} Verified Questions Found
                    </h2>
                    <p className="text-sm leading-relaxed text-brand-body">
                      {currentSubject?.title} • {selectedUnitId === 'all' ? 'All Units' : `Unit ${selectedUnitId}`}
                      {selectedYear !== 'all' ? ` • ${selectedYear}` : ''}
                    </p>

                    {/* Mode Selection Cards */}
                    <div className="grid gap-3 sm:grid-cols-2 pt-2">
                      <button
                        type="button"
                        onClick={() => setQuizMode('practice')}
                        className={`rounded-2xl border p-4 text-left transition ${
                          quizMode === 'practice'
                            ? 'border-brand-primary bg-brand-primary/10 shadow-glow-sm ring-1 ring-brand-primary'
                            : 'border-brand-border bg-brand-elevated/40 hover:border-brand-border-hover'
                        }`}
                      >
                        <span className="font-display font-bold text-brand-heading block text-sm sm:text-base">
                          Practice Mode
                        </span>
                        <span className="mt-1 block text-xs text-brand-body leading-relaxed">
                          Instant answer verification with full explanations and citations.
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setQuizMode('exam')}
                        className={`rounded-2xl border p-4 text-left transition ${
                          quizMode === 'exam'
                            ? 'border-brand-coral bg-brand-coral/10 shadow-glow-sm ring-1 ring-brand-coral'
                            : 'border-brand-border bg-brand-elevated/40 hover:border-brand-border-hover'
                        }`}
                      >
                        <span className="font-display font-bold text-brand-heading block text-sm sm:text-base">
                          Exam Mode
                        </span>
                        <span className="mt-1 block text-xs text-brand-body leading-relaxed">
                          Timed simulation with no answers shown until complete submission.
                        </span>
                      </button>
                    </div>

                    {/* Exam Options if exam mode */}
                    {quizMode === 'exam' && (
                      <div className="flex flex-wrap items-center gap-4 rounded-xl border border-brand-coral/20 bg-brand-coral/5 p-3 text-xs">
                        <span className="inline-flex items-center gap-1.5 font-semibold text-brand-coral">
                          <Clock size={14} /> Time Limit:
                        </span>
                        <div className="flex items-center gap-2">
                          {[10, 15, 20, 30].map((mins) => (
                            <button
                              key={mins}
                              type="button"
                              onClick={() => setTimerMinutes(mins)}
                              className={`rounded-lg px-2.5 py-1 font-semibold transition ${
                                timerMinutes === mins
                                  ? 'bg-brand-coral text-white'
                                  : 'border border-brand-border bg-brand-surface text-brand-body'
                              }`}
                            >
                              {mins}m
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Shuffle Toggle */}
                    <div className="flex items-center gap-2 pt-1">
                      <label className="inline-flex cursor-pointer items-center gap-2 text-xs text-brand-body">
                        <input
                          type="checkbox"
                          checked={shouldShuffle}
                          onChange={(e) => setShouldShuffle(e.target.checked)}
                          className="rounded border-brand-border text-brand-primary focus:ring-brand-primary"
                        />
                        <span>Shuffle question order (non-destructive)</span>
                      </label>
                    </div>
                  </div>

                  {/* Launch CTA Column */}
                  <div className="flex flex-col items-center justify-center rounded-3xl border border-brand-border bg-brand-elevated/60 p-6 text-center lg:col-span-5">
                    <p className="font-display text-4xl font-extrabold text-brand-heading">
                      {filteredQuestions.length}
                    </p>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted mt-1">
                      Target Questions
                    </p>
                    <p className="mt-3 text-xs text-brand-body max-w-xs leading-relaxed">
                      Estimated duration: ~{Math.ceil(filteredQuestions.length * 1.2)} minutes for full attempt &amp; review.
                    </p>

                    <Button
                      variant="primary"
                      size="lg"
                      icon={<Play size={18} />}
                      onClick={handleStartQuiz}
                      className="mt-6 w-full shadow-glow"
                    >
                      Start {quizMode === 'exam' ? 'Exam Simulation' : 'Practice Session'}
                    </Button>
                  </div>
                </div>
              </Card>
            ) : (
              <EmptyState
                icon={HelpCircle}
                title="Questions Coming Soon"
                description={
                  candidateQuestions.length === 0
                    ? `Official previous-year questions and practice MCQs for ${currentSubject?.title || 'this subject'} (Unit ${selectedUnitId}) are currently being verified and uploaded. EduTech never generates synthetic or unverified questions.`
                    : `No questions match the current combination of filters (${currentSubject?.title}, Unit ${selectedUnitId}, Type: ${selectedType}, Year: ${selectedYear}). Questions are being added systematically.`
                }
                action={
                  <Button variant="primary" size="sm" onClick={handleResetFilters}>
                    Switch to Unit 1 Verified PYQs (17 Questions)
                  </Button>
                }
              />
            )}
          </div>
        ) : (
          /* Active Quiz View */
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-brand-border pb-3">
              <button
                type="button"
                onClick={() => setIsQuizActive(false)}
                className="inline-flex items-center gap-2 text-xs font-semibold text-brand-muted hover:text-brand-heading transition"
              >
                <ArrowLeft size={14} />
                <span>Exit to Practice Hub Filters</span>
              </button>
            </div>

            <QuizPlayer
              title={`${currentSubject?.title || 'IoT'} - ${
                selectedUnitId === 'all' ? 'All Units Practice' : `Unit ${selectedUnitId}`
              }`}
              subtitle={`${finalQuestions.length} Questions • ${
                quizMode === 'exam' ? `Timed Exam (${timerMinutes}m)` : 'Interactive Practice'
              }`}
              questions={finalQuestions}
              initialMode={quizMode}
              allowModeToggle={true}
              defaultTimerMinutes={timerMinutes}
              sessionKey={`practice_${selectedSubjectId}_${selectedUnitId}_${selectedType}_${selectedYear}`}
              subjectId={selectedSubjectId}
              unitId={selectedUnitId}
            />
          </div>
        )}
      </div>
    </main>
  );
}

export default PracticePage;

