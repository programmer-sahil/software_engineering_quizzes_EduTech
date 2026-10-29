import { useMemo, useState } from 'react';
import PageTransition from '../components/PageTransition';
import SubjectCard from '../components/SubjectCard';
import { Card, SectionHeading, SearchFilter, EmptyState } from '../components/ui';
import { getAllSubjects } from '../content';

function SubjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const allSubjects = useMemo(() => getAllSubjects(), []);

  const filterOptions = [
    { id: 'all', label: 'All Subjects', count: allSubjects.length },
    {
      id: 'active',
      label: 'Active Only',
      count: allSubjects.filter((s) => !s.disabled).length,
    },
    {
      id: '5th-sem',
      label: 'Diploma 5th Sem',
      count: allSubjects.filter((s) => s.semester?.includes('5th')).length,
    },
    {
      id: '4th-sem',
      label: 'Diploma 4th Sem',
      count: allSubjects.filter((s) => s.semester?.includes('4th')).length,
    },
  ];

  const filteredSubjects = useMemo(() => {
    return allSubjects.filter((subject) => {
      // Filter by category
      if (activeFilter === 'active' && subject.disabled) return false;
      if (activeFilter === '5th-sem' && !subject.semester?.includes('5th')) return false;
      if (activeFilter === '4th-sem' && !subject.semester?.includes('4th')) return false;

      // Filter by search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const titleMatch = (subject.name || subject.title || '').toLowerCase().includes(query);
        const descMatch = (subject.description || '').toLowerCase().includes(query);
        const semMatch = (subject.semester || '').toLowerCase().includes(query);
        return titleMatch || descMatch || semMatch;
      }

      return true;
    });
  }, [allSubjects, activeFilter, searchQuery]);

  return (
    <PageTransition>
      {/* Page Header */}
      <section className="section-shell pt-10 sm:pt-14">
        <Card hover={false} className="p-6 sm:p-10">
          <SectionHeading
            eyebrow="Curriculum Directory"
            title="Diploma CST Subject Catalog"
            description="Access your semester curriculum with full syllabus coverage, verified PYQs, and revision cheat sheets. Active subjects are open for immediate practice."
          />

          {/* Search & Filter Controls */}
          <div className="mt-8 border-t border-brand-border pt-6">
            <SearchFilter
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              filterOptions={filterOptions}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              placeholder="Search subjects by name, semester, or topics..."
            />
          </div>
        </Card>
      </section>

      {/* Subject Cards Grid */}
      <section className="section-shell mt-10 mb-16">
        {filteredSubjects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {filteredSubjects.map((subject, index) => (
              <SubjectCard key={subject.id} subject={subject} delay={index * 0.08} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No subjects match your search"
            description={`We couldn't find any diploma subject matching "${searchQuery}". Please check your spelling or clear the filter.`}
            action={
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveFilter('all');
                }}
                className="text-xs font-bold text-brand-primary hover:underline"
              >
                Reset Search Filters
              </button>
            }
          />
        )}
      </section>
    </PageTransition>
  );
}

export default SubjectsPage;
