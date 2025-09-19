
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import WhyWrlds from '@/components/WhyWrlds';
import BlogPreview from '@/components/BlogPreview';
import SEO from '@/components/SEO';
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
    <PageLayout>
      <SEO 
        title="WRLDS - Smart Supply Chain Integration Platform" 
        description="WRLDS Technologies: Revolutionizing supply chain visibility with IoT sensors, real-time tracking, predictive analytics, and end-to-end integration solutions."
        imageUrl="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
        keywords={['supply chain integration', 'IoT sensors', 'real-time tracking', 'predictive analytics', 'logistics optimization', 'warehouse management', 'supply chain visibility']}
      />
      <Hero />
      <Features />
      <WhyWrlds />
      <Projects />
      <BlogPreview />
    </PageLayout>
  );
};

export default Index;
