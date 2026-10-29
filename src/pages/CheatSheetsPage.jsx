import { motion } from 'framer-motion';
import {
  BookOpen,
  CheckCircle,
  FileText,
  Filter,
  Printer,
  RotateCcw,
  Search,
  Sparkles,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import CheatSheetCard from '../components/CheatSheetCard';
import CheatSheetReaderModal from '../components/CheatSheetReaderModal';
import { Button, Card, EmptyState } from '../components/ui';
import { normalizeCheatSheets } from '../content/cheatSheetNormalizer';
import { getAllCheatSheets, getAllSubjects } from '../content/registry';

function CheatSheetsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Registry data
  const rawCheatSheets = useMemo(() => getAllCheatSheets(), []);
  const normalizedSheets = useMemo(() => normalizeCheatSheets(rawCheatSheets), [rawCheatSheets]);
  const subjects = useMemo(() => getAllSubjects(), []);

  // Filter State
  const initialSubject = searchParams.get('subject') || 'all';
  const initialUnit = searchParams.get('unit') || 'all';
  const initialSearch = searchParams.get('q') || '';
  const initialSheetId = searchParams.get('id') || null;

  const [selectedSubject, setSelectedSubject] = useState(initialSubject);
  const [selectedUnit, setSelectedUnit] = useState(initialUnit);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [activeSheetId, setActiveSheetId] = useState(initialSheetId);

  // Sync state with URL params
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedSubject !== 'all') params.set('subject', selectedSubject);
    if (selectedUnit !== 'all') params.set('unit', selectedUnit);
    if (searchQuery.trim()) params.set('q', searchQuery.trim());
    if (activeSheetId) params.set('id', activeSheetId);
    setSearchParams(params, { replace: true });
  }, [selectedSubject, selectedUnit, searchQuery, activeSheetId, setSearchParams]);

  // Filtered sheets
  const filteredSheets = useMemo(() => {
    return normalizedSheets.filter((sheet) => {
      // Subject filter
      if (selectedSubject !== 'all' && sheet.subjectId !== selectedSubject) {
        return false;
      }

      // Unit filter
      if (selectedUnit !== 'all' && String(sheet.unitId) !== String(selectedUnit)) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = (sheet.title || '').toLowerCase().includes(query);
        const matchesSummary = (sheet.summary || '').toLowerCase().includes(query);
        const matchesTerms = (sheet.keyTerms || []).some((term) =>
          term.toLowerCase().includes(query)
        );
        const matchesPoints = (sheet.points || []).some((p) => p.toLowerCase().includes(query));

        if (!matchesTitle && !matchesSummary && !matchesTerms && !matchesPoints) {
          return false;
        }
      }

      return true;
    });
  }, [normalizedSheets, selectedSubject, selectedUnit, searchQuery]);

  // Active sheet for reader view
  const activeSheetIndex = useMemo(() => {
    if (!activeSheetId) return -1;
    return filteredSheets.findIndex((s) => s.id === activeSheetId);
  }, [activeSheetId, filteredSheets]);

  const activeSheet = activeSheetIndex >= 0 ? filteredSheets[activeSheetIndex] : null;

  const handleOpenSheet = (sheet) => {
    setActiveSheetId(sheet.id);
  };

  const handleCloseSheet = () => {
    setActiveSheetId(null);
  };

  const handlePrevSheet = () => {
    if (activeSheetIndex > 0) {
      setActiveSheetId(filteredSheets[activeSheetIndex - 1].id);
    }
  };

  const handleNextSheet = () => {
    if (activeSheetIndex < filteredSheets.length - 1) {
      setActiveSheetId(filteredSheets[activeSheetIndex + 1].id);
    }
  };

  const handleResetFilters = () => {
    setSelectedSubject('all');
    setSelectedUnit('all');
    setSearchQuery('');
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
          <span className="text-brand-primary font-semibold">Cheat Sheets</span>
        </nav>

        {/* Page Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-primary">
              <Sparkles size={13} />
              <span>Rapid Revision Library</span>
            </div>
            <h1 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-heading">
              Exam Cheat Sheets
            </h1>
            <p className="mt-2 max-w-2xl text-sm sm:text-base leading-relaxed text-brand-body">
              Concise summary sheets designed for rapid last-minute revision before diploma exams.
              Review core definitions, layered frameworks, and memory hooks in 1–2 minutes.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-end">
            <span className="rounded-xl border border-brand-border bg-brand-surface px-3 py-1.5 text-xs font-semibold text-brand-heading">
              {filteredSheets.length} of {normalizedSheets.length} Sheets Available
            </span>
          </div>
        </div>

        {/* Filters & Search Bar */}
        <Card hover={false} className="mt-8 p-5 sm:p-6 border-brand-border shadow-card">
          <div className="grid gap-4 sm:grid-cols-12 items-center">
            {/* Search Input */}
            <div className="sm:col-span-5 relative">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-muted pointer-events-none"
              />
              <input
                type="text"
                placeholder="Search definitions, terms, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-brand-border bg-brand-elevated pl-10 pr-4 py-2 text-sm text-brand-heading placeholder:text-brand-muted outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition"
              />
            </div>

            {/* Subject Selector */}
            <div className="sm:col-span-3">
              <select
                aria-label="Filter by subject"
                value={selectedSubject}
                onChange={(e) => {
                  setSelectedSubject(e.target.value);
                  setSelectedUnit('all');
                }}
                className="w-full rounded-xl border border-brand-border bg-brand-elevated px-3 py-2 text-sm text-brand-heading outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition"
              >
                <option value="all">All Subjects</option>
                {subjects.map((sub) => (
                  <option key={sub.id} value={sub.id}>
                    {sub.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Unit Selector */}
            <div className="sm:col-span-2">
              <select
                aria-label="Filter by unit"
                value={selectedUnit}
                onChange={(e) => setSelectedUnit(e.target.value)}
                className="w-full rounded-xl border border-brand-border bg-brand-elevated px-3 py-2 text-sm text-brand-heading outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition"
              >
                <option value="all">All Units</option>
                {[1, 2, 3, 4, 5, 6].map((u) => (
                  <option key={u} value={String(u)}>
                    Unit {u}
                  </option>
                ))}
              </select>
            </div>

            {/* Reset Button */}
            <div className="sm:col-span-2 flex justify-end">
              <Button
                variant="ghost"
                size="sm"
                icon={<RotateCcw size={13} />}
                onClick={handleResetFilters}
                className="w-full sm:w-auto text-xs"
              >
                Reset
              </Button>
            </div>
          </div>
        </Card>

        {/* Cheat Sheets Grid */}
        <div className="mt-8">
          {filteredSheets.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredSheets.map((sheet) => (
                <CheatSheetCard
                  key={sheet.id}
                  sheet={sheet}
                  onSelectSheet={handleOpenSheet}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              icon={FileText}
              title="No Cheat Sheets Found"
              description="No revision sheets matched your search or filter selection. IoT Unit cheat sheets are currently in production according to syllabus."
              action={
                <Button variant="primary" size="sm" onClick={handleResetFilters}>
                  Show All 37 Available Sheets
                </Button>
              }
            />
          )}
        </div>
      </div>

      {/* Reader Modal View */}
      {activeSheet && (
        <CheatSheetReaderModal
          sheet={activeSheet}
          onClose={handleCloseSheet}
          onPrev={handlePrevSheet}
          onNext={handleNextSheet}
          hasPrev={activeSheetIndex > 0}
          hasNext={activeSheetIndex < filteredSheets.length - 1}
        />
      )}
    </main>
  );
}

export default CheatSheetsPage;

