
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import WhyCarbonFactor from '@/components/WhyCarbonFactor';
import BlogPreview from '@/components/BlogPreview';
import DashboardSection from '@/components/DashboardSection';
import SEO from '@/components/SEO';
import ScrollProgress from '@/components/ScrollProgress';
import StatsSection from '@/components/StatsSection';
import InteractiveBackground from '@/components/InteractiveBackground';
import FloatingScrollTop from '@/components/FloatingScrollTop';
import { useEffect } from 'react';

const Index = () => {
  // Fix any ID conflicts when the page loads
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // If there are multiple elements with id="contact", rename one
      contactElements[1].id = 'contact-footer';
    }
  }, []);

  return (
    <>
      <ScrollProgress />
      <InteractiveBackground />
      <FloatingScrollTop />
      <PageLayout>
        <SEO 
          title="carbonfactor.io - Carbon Tracking Platform" 
          description="carbonfactor.io: Revolutionizing carbon footprint management with real-time tracking, analytics, and actionable sustainability insights for businesses worldwide."
          keywords={['carbon tracking', 'sustainability solutions', 'environmental monitoring', 'carbon footprint', 'ESG reporting', 'carbon management', 'sustainability analytics']}
        />
        <Hero />
        <StatsSection />
        <Features />
        <DashboardSection />
        <WhyCarbonFactor />
        <Projects />
        <BlogPreview />
      </PageLayout>
    </>
  );
};

export default Index;
