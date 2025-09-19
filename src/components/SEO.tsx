import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  name?: string;
  imageUrl?: string;
  publishDate?: string;
  modifiedDate?: string;
  author?: string;
  category?: string;
  keywords?: string[];
  isBlogPost?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = 'carbonfactor.io',
  description = 'carbonfactor.io: Pioneering carbon tracking and sustainability solutions for businesses across all industries.',
  type = 'website',
  name = 'carbonfactor.io',
  imageUrl = '/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png',
  publishDate,
  modifiedDate,
  author,
  category,
  keywords = ['carbon tracking', 'sustainability solutions', 'environmental monitoring', 'carbon footprint', 'ESG reporting', 'carbon management'],
  isBlogPost = false
}) => {
  const location = useLocation();
  const currentUrl = `https://carbonfactor.io${location.pathname}`;
  const absoluteImageUrl = imageUrl.startsWith('http') ? imageUrl : `https://carbonfactor.io${imageUrl}`;

  // Enhanced keywords for specific posts
  const enhancedKeywords = location.pathname.includes('carbon-tracking-revolution') 
    ? [
        ...keywords,
        'carbon emissions tracking',
        'sustainability reporting',
        'carbon management systems',
        'environmental compliance',
        'ESG monitoring',
        'greenhouse gas tracking',
        'sustainability metrics',
        'carbon footprint analysis',
        'environmental data',
        'carbon reduction strategies'
      ]
    : location.pathname.includes('sustainability-roi-business-impact')
    ? [
        ...keywords,
        'sustainability ROI',
        'carbon cost savings',
        'environmental investment returns',
        'green business metrics',
        'sustainability cost reduction',
        'carbon tracking ROI',
        'environmental economics',
        'sustainable business practices',
        'carbon management benefits',
        'sustainability partnerships',
        'green technology adoption',
        'environmental cost analysis',
        'carbon reduction benefits'
      ]
    : keywords;

  // Create base Organization JSON-LD structured data
  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'carbonfactor.io',
    url: 'https://carbonfactor.io',
    logo: 'https://carbonfactor.io/lovable-uploads/14ea3fe0-19d6-425c-b95b-4117bc41f3ca.png',
    description: 'Pioneering carbon tracking and sustainability solutions for businesses',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'tony@snfactor.com'
    }
  };

  // Enhanced BlogPosting JSON-LD structured data
  const blogPostStructuredData = isBlogPost && publishDate ? {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': currentUrl
    },
    headline: title,
    image: {
      '@type': 'ImageObject',
      url: absoluteImageUrl,
      width: 1200,
      height: 630
    },
    datePublished: publishDate,
    dateModified: modifiedDate || publishDate,
    author: {
      '@type': 'Organization',
      name: author || 'carbonfactor.io',
      url: 'https://carbonfactor.io'
    },
    publisher: {
      '@type': 'Organization',
      name: 'carbonfactor.io',
      logo: {
        '@type': 'ImageObject',
        url: 'https://carbonfactor.io/lovable-uploads/14ea3fe0-19d6-425c-b95b-4117bc41f3ca.png',
        width: 512,
        height: 512
      },
      url: 'https://carbonfactor.io'
    },
    description: description,
    keywords: enhancedKeywords.join(', '),
    articleSection: category,
    inLanguage: 'en-US',
    isAccessibleForFree: true
  } : null;

  // Add FAQ structured data for Carbon Tracking post
  const carbonTrackingFAQData = location.pathname.includes('carbon-tracking-revolution') ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is carbon tracking?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Carbon tracking refers to monitoring and measuring greenhouse gas emissions across business operations. It provides real-time visibility into carbon footprint, helping organizations understand their environmental impact and identify reduction opportunities.'
        }
      },
      {
        '@type': 'Question',
        name: 'How does carbon tracking improve sustainability?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Carbon tracking improves sustainability by providing data-driven insights into emissions sources, enabling targeted reduction strategies, supporting compliance with environmental regulations, and helping organizations meet their sustainability goals.'
        }
      },
      {
        '@type': 'Question',
        name: 'What industries benefit from carbon tracking?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Carbon tracking benefits multiple industries including manufacturing, logistics, retail, healthcare, technology, and any business committed to reducing their environmental impact and achieving sustainability targets.'
        }
      }
    ]
  } : null;

  // Add FAQ structured data for Sustainability ROI post
  const sustainabilityROIFAQData = location.pathname.includes('sustainability-roi-business-impact') ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What ROI can carbon tracking deliver?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Carbon tracking delivers ROI through cost savings from energy efficiency, reduced waste, regulatory compliance benefits, improved brand reputation, and access to green financing. Studies show companies can reduce operational costs by 15-30% through effective carbon management.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much do carbon emissions cost businesses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Carbon costs vary by industry and location but include carbon taxes, compliance fees, energy costs, and reputation risks. With carbon pricing expanding globally, businesses face increasing financial pressure to track and reduce emissions.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do investors value carbon tracking initiatives?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, ESG-focused investors increasingly require carbon tracking and sustainability reporting. Companies with strong environmental metrics often see improved valuations, easier access to capital, and reduced investment risk premiums.'
        }
      }
    ]
  } : null;

  // Combine keywords with any additional category terms
  const keywordString = category 
    ? [...enhancedKeywords, category.toLowerCase()].join(', ') 
    : enhancedKeywords.join(', ');

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      <meta name="keywords" content={keywordString} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={isBlogPost ? 'article' : type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="carbonfactor.io" />
      <meta property="og:locale" content="en_US" />
      {isBlogPost && category && <meta property="article:section" content={category} />}
      {isBlogPost && publishDate && <meta property="article:published_time" content={publishDate} />}
      {isBlogPost && modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
      {isBlogPost && <meta property="article:publisher" content="https://carbonfactor.io" />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      
      {/* LinkedIn specific */}
      <meta property="og:image:secure_url" content={absoluteImageUrl} />
      <meta name="author" content={author || name} />
      
      {/* Pinterest specific */}
      <meta name="pinterest:description" content={description} />
      <meta name="pinterest:image" content={absoluteImageUrl} />
      
      {/* Additional SEO meta tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      
      {/* JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationStructuredData)}
      </script>
      
      {blogPostStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(blogPostStructuredData)}
        </script>
      )}
      
      {carbonTrackingFAQData && (
        <script type="application/ld+json">
          {JSON.stringify(carbonTrackingFAQData)}
        </script>
      )}
      
      {sustainabilityROIFAQData && (
        <script type="application/ld+json">
          {JSON.stringify(sustainabilityROIFAQData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
