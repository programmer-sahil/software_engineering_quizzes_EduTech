import { useEffect, useState } from 'react';
import PageTransition from '../components/PageTransition';
import SiteLoader from '../components/SiteLoader';
import FeatureCards from '../sections/FeatureCards';
import HeroSection from '../sections/HeroSection';
import SignatureSection from '../sections/SignatureSection';
import UnitsGrid from '../sections/UnitsGrid';
import CareerUpskillingBanner from '../components/CareerUpskillingBanner';

function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 850);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SiteLoader show={loading} />
      <PageTransition>
        <HeroSection />
        <section className="section-shell mt-10">
          <CareerUpskillingBanner variant="landing" />
        </section>
        <FeatureCards />
        <UnitsGrid />
        <SignatureSection />
      </PageTransition>
    </>
  );
}

export default HomePage;
