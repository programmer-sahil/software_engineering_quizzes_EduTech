import { useEffect, useState } from 'react';
import PageTransition from '../components/PageTransition';
import SiteLoader from '../components/SiteLoader';
import HeroSection from '../sections/HeroSection';
import SubjectSpotlightSection from '../sections/SubjectSpotlightSection';
import ExamPrepPreviewSection from '../sections/ExamPrepPreviewSection';
import CodeScholarPromotionalSection from '../sections/CodeScholarPromotionalSection';
import StudentGuidanceSection from '../sections/StudentGuidanceSection';

function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Brief initial mount transition without blocking fast first load
    const timer = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SiteLoader show={loading} />
      <PageTransition>
        {/* 1. Hero with Featured Code Scholar AI Video */}
        <HeroSection />

        {/* 2. Explore Subjects (IoT Active, Software Engineering Locked) */}
        <SubjectSpotlightSection />

        {/* 3. PYQ MCQ and Exam Preparation Preview */}
        <ExamPrepPreviewSection />

        {/* 4. Code Scholar AI Promotional Section (Learn Beyond Your Syllabus) */}
        <CodeScholarPromotionalSection />

        {/* 5. Student Guidance & Direct Contact Links */}
        <StudentGuidanceSection />
      </PageTransition>
    </>
  );
}

export default HomePage;
