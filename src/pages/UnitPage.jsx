import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheatSheetView from '../components/CheatSheetView';
import PageTransition from '../components/PageTransition';
import QuizPlayer from '../components/QuizPlayer';
import StudyModeCards from '../components/StudyModeCards';
import UnitHeader from '../components/UnitHeader';
import GlassCard from '../components/ui/GlassCard';
import { units } from '../data/units';

function UnitPage() {
  const { unitId } = useParams();
  const [activeMode, setActiveMode] = useState('complete-quiz');

  const unit = useMemo(
    () => units.find((item) => item.id === unitId || `unit-${item.id}` === unitId),
    [unitId]
  );
  const modeDescription = useMemo(() => {
    if (activeMode === 'complete-quiz') {
      return 'Master this unit with a curated full-syllabus challenge designed for accuracy, speed, and exam confidence.';
    }
    if (activeMode === 'pyq-quiz') {
      return 'Train with previous-year style questions to sharpen pattern recognition and maximize scoring strategy.';
    }
    return 'Revise high-impact concepts, formulas, and answer frameworks crafted for quick retention before tests.';
  }, [activeMode]);

  if (!unit) {
    return (
      <PageTransition className="section-shell py-16">
        <GlassCard className="p-8 text-center">
          <h1 className="font-display text-3xl text-white">Unit Not Found</h1>
          <p className="mt-3 text-slate-300">Please go back and select one of the five configured units.</p>
        </GlassCard>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <UnitHeader title={unit.title} />
      <StudyModeCards activeMode={activeMode} onChange={setActiveMode} />

      <section className="section-shell mt-6">
        <GlassCard className="p-5 sm:p-7">
          <h2 className="font-display text-2xl text-white">
            {activeMode === 'complete-quiz' && 'Complete Unit Quiz'}
            {activeMode === 'pyq-quiz' && 'PYQ Quiz'}
            {activeMode === 'cheat-sheet' && 'Cheat Sheet'}
          </h2>
          <p className="mt-2 text-sm text-slate-300">{modeDescription}</p>

          <div className="mt-6">
            {activeMode === 'complete-quiz' && (
              <QuizPlayer key={`${unit.id}-complete`} title={`${unit.title} - Complete Quiz`} questions={unit.completeQuiz} />
            )}
            {activeMode === 'pyq-quiz' && (
              <QuizPlayer key={`${unit.id}-pyq`} title={`${unit.title} - PYQ Quiz`} questions={unit.pyqQuiz} />
            )}
            {activeMode === 'cheat-sheet' && <CheatSheetView sections={unit.cheatSheet} />}
          </div>
        </GlassCard>
      </section>
    </PageTransition>
  );
}

export default UnitPage;
