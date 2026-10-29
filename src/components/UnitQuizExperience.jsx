import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Calendar,
  CheckCircle,
  ChevronDown,
  FileBadge2,
  FileQuestion,
  Filter,
  HelpCircle,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import {
  getIotUnitAvailableYears,
  getIotUnitQuestions,
  getIotUnitStats,
} from '../content/iotQuestionLoader.js';
import QuizPlayer from './QuizPlayer.jsx';
import { Button, Card, EmptyState } from './ui';

/**
 * UnitQuizExperience
 * Provides a unified, attractive, single PYQ MCQ Quiz experience inside each IoT Unit page.
 *
 * Requirements (Step 4):
 * - Practice Mode with immediate feedback, options, explanation, navigation.
 * - Exam Mode without answers revealed until final score submission.
 * - Filter: Verified PYQs default, actual available exam years, additional syllabus practice.
 * - Clear labeling of practice vs PYQ.
 * - Separate progress saving per subject, unit, mode, and filter pool.
 * - Results with total, attempted, correct, incorrect, unanswered, percentage.
 * - Actions: Review Answers, Retry Incorrect, Restart Quiz, Back to Unit.
 */
function UnitQuizExperience({ unit, subjectId = 'iot', onBackToOverview }) {
  const unitId = Number(unit?.id || 1);
  const stats = useMemo(() => getIotUnitStats(unitId), [unitId]);
  const availableYears = useMemo(() => getIotUnitAvailableYears(unitId), [unitId]);

  // Initial filter: default to 'pyq' if the unit has PYQs; otherwise 'all'
  const defaultFilter = stats.pyqs > 0 ? 'pyq' : 'all';
  const [filterType, setFilterType] = useState(defaultFilter); // 'pyq' | 'all' | 'practice'
  const [selectedYear, setSelectedYear] = useState('all');
  const [quizMode, setQuizMode] = useState('practice'); // 'practice' | 'exam'
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  // Check if filters differ from default
  const isFiltered = filterType !== defaultFilter || selectedYear !== 'all';

  // Resolve questions for the selected filter
  const activeQuestions = useMemo(() => {
    return getIotUnitQuestions(unitId, { filter: filterType, year: selectedYear });
  }, [unitId, filterType, selectedYear]);

  // Session key uniquely partitioned by subject, unit, filter type, year, and mode
  const sessionKey = `edutech_unit_quiz_${subjectId}_u${unitId}_${filterType}_${selectedYear}_${quizMode}`;

  const handleResetFilters = () => {
    setFilterType(defaultFilter);
    setSelectedYear('all');
  };

  return (
    <div className="space-y-6">
      {/* Top Filter and Quiz Customization Bar (Clean & Compact) */}
      <Card hover={false} className="p-4 sm:p-5 border-brand-border shadow-card">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-brand-primary/30 bg-brand-primary/10 px-2.5 py-1 text-xs font-bold text-brand-primary">
                <FileQuestion size={13} /> Unit {unitId} Assessment
              </span>
              <span className="text-xs font-semibold text-brand-heading">
                {filterType === 'pyq'
                  ? 'Verified Past-Paper PYQs'
                  : filterType === 'practice'
                  ? 'Syllabus Practice Questions'
                  : 'All Unit Questions'} ({activeQuestions.length})
              </span>
              {selectedYear !== 'all' && (
                <span className="rounded-md border border-brand-coral/40 bg-brand-coral/10 px-2 py-0.5 text-[11px] font-bold text-brand-coral">
                  {selectedYear} Session
                </span>
              )}
            </div>
            <p className="mt-1 text-[11px] text-brand-muted">
              {stats.pyqs > 0
                ? `${stats.pyqs} verified board questions • ${stats.practice} syllabus practice MCQs`
                : `${stats.practice} syllabus practice questions`}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {isFiltered && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1 text-xs font-medium text-brand-muted hover:text-brand-heading transition mr-1"
                title="Reset filters to default"
              >
                <RotateCcw size={12} />
                <span>Reset</span>
              </button>
            )}

            {/* Collapsible Filter Dropdown Toggle Button */}
            <button
              type="button"
              onClick={() => setShowFilterDropdown((prev) => !prev)}
              className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold transition cursor-pointer ${
                isFiltered || showFilterDropdown
                  ? 'border-brand-primary/50 bg-brand-primary/15 text-brand-primary'
                  : 'border-brand-border bg-brand-elevated text-brand-body hover:text-brand-heading hover:border-brand-border-hover'
              }`}
              aria-expanded={showFilterDropdown}
            >
              <Filter size={13} />
              <span>Filters</span>
              {isFiltered && (
                <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
              )}
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${showFilterDropdown ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
        </div>

        {/* Collapsible Filter Dropdown Controls (Progressive Disclosure) */}
        <AnimatePresence>
          {showFilterDropdown && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-brand-border/60 mt-3.5 pt-3.5 space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2 items-start">
                {/* Question Pool Filter */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-brand-muted mb-1.5">
                    Question Pool Filter
                  </label>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {stats.pyqs > 0 && (
                      <button
                        type="button"
                        onClick={() => {
                          setFilterType('pyq');
                          setSelectedYear('all');
                        }}
                        className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition ${
                          filterType === 'pyq'
                            ? 'border border-brand-coral/50 bg-brand-coral/15 text-brand-coral'
                            : 'border border-brand-border bg-brand-surface text-brand-body hover:border-brand-border-hover'
                        }`}
                      >
                        Verified PYQs Only ({stats.pyqs})
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => setFilterType('all')}
                      className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition ${
                        filterType === 'all'
                          ? 'border border-brand-primary/50 bg-brand-primary/15 text-brand-primary'
                          : 'border border-brand-border bg-brand-surface text-brand-body hover:border-brand-border-hover'
                      }`}
                    >
                      All Questions ({stats.total})
                    </button>

                    {stats.practice > 0 && (
                      <button
                        type="button"
                        onClick={() => {
                          setFilterType('practice');
                          setSelectedYear('all');
                        }}
                        className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition ${
                          filterType === 'practice'
                            ? 'border border-brand-secondary/50 bg-brand-secondary/15 text-brand-secondary'
                            : 'border border-brand-border bg-brand-surface text-brand-body hover:border-brand-border-hover'
                        }`}
                      >
                        Practice Only ({stats.practice})
                      </button>
                    )}
                  </div>
                </div>

                {/* Exam Year Filter (Dropdown) */}
                <div>
                  <label
                    htmlFor={`unit-${unitId}-year-select`}
                    className="block text-[11px] font-bold uppercase tracking-wider text-brand-muted mb-1.5"
                  >
                    Filter by Exam Session
                  </label>
                  {availableYears.length > 0 ? (
                    <select
                      id={`unit-${unitId}-year-select`}
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                      className="w-full rounded-xl border border-brand-border bg-brand-elevated px-3 py-1.5 text-xs text-brand-heading outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition"
                    >
                      <option value="all">
                        All Exam Sessions ({availableYears.join(', ')})
                      </option>
                      {availableYears.map((yr) => (
                        <option key={yr} value={yr}>
                          {yr} Examination Session
                        </option>
                      ))}
                    </select>
                  ) : (
                    <div className="rounded-xl border border-brand-border/60 bg-brand-elevated/40 px-3 py-1.5 text-xs text-brand-muted">
                      No verified past-paper sessions recorded for this unit
                    </div>
                  )}
                </div>
              </div>

              {/* Informational Guidance Banner */}
              <div className="pt-2 border-t border-brand-border/40 flex flex-wrap items-center justify-between text-xs text-brand-body">
                <span className="inline-flex items-center gap-1.5 text-[11px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>
                    {filterType === 'pyq'
                      ? 'Official Verified Previous-Year Questions (WBSCTE Diploma)'
                      : filterType === 'practice'
                      ? 'Additional Syllabus Practice Questions'
                      : 'Complete Question Bank (Verified PYQs + Practice)'}
                  </span>
                </span>

                {unitId === 3 && (
                  <span className="text-[11px] text-amber-400 font-medium">
                    Note: Unit 3 has practice questions (no standalone PYQ MCQs in board papers).
                  </span>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>

      {/* Main Single Quiz Player */}
      {activeQuestions.length > 0 ? (
        <Card hover={false} className="p-6 sm:p-8 border-brand-primary/30 shadow-card">
          <QuizPlayer
            key={sessionKey}
            title={`${unit?.title} - PYQ MCQ Quiz`}
            subtitle={`${activeQuestions.length} Questions • ${
              filterType === 'pyq'
                ? 'Verified Previous-Year Exam Questions'
                : filterType === 'practice'
                ? 'Syllabus Practice Questions'
                : 'Complete Unit Question Bank'
            }`}
            questions={activeQuestions}
            sessionKey={sessionKey}
            initialMode={quizMode}
            allowModeToggle={true}
            defaultTimerMinutes={15}
            subjectId={subjectId}
            unitId={String(unitId)}
            onBackToUnit={onBackToOverview}
          />
        </Card>
      ) : (
        <EmptyState
          icon={HelpCircle}
          title="No Questions Match This Filter"
          description={`No questions were found for Unit ${unitId} with filter "${filterType}" and session "${selectedYear}".`}
          action={
            <Button variant="primary" size="sm" onClick={handleResetFilters}>
              Reset to All Questions
            </Button>
          }
        />
      )}
    </div>
  );
}

export default UnitQuizExperience;
