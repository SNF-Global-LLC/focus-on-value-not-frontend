
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Check } from "lucide-react";
import { motion, useInView } from 'framer-motion';

const processes = [{
  id: 1,
  title: "Manufacturing Assessment",
  description: "We begin by analyzing your current manufacturing processes, carbon footprint, and operational efficiency to identify optimization opportunities.",
  steps: ["Production line analysis", "Carbon emission baseline assessment", "Efficiency bottleneck identification", "ROI opportunity mapping"]
}, {
  id: 2,
  title: "Platform Integration",
  description: "Our team seamlessly integrates carbonfactor.io and forgediq.io platforms with your existing systems and AWS infrastructure.",
  steps: ["System integration planning", "AWS Bedrock GenAI setup", "Real-time data pipeline configuration", "Dashboard customization and testing"]
}, {
  id: 3,
  title: "AI & Analytics Implementation",
  description: "We deploy specialized AI models that transform manufacturing data into actionable insights for carbon reduction and process optimization.",
  steps: ["AI model training with your data", "Real-time analytics deployment", "CBAM compliance automation", "Predictive maintenance setup"]
}, {
  id: 4,
  title: "CBAM Compliance & Certification",
  description: "We ensure your operations meet EU CBAM requirements and other environmental regulations while maintaining production efficiency.",
  steps: ["CBAM compliance framework setup", "Emission reporting automation", "Regulatory documentation preparation", "Audit readiness verification"]
}, {
  id: 5,
  title: "Optimization & Support",
  description: "We provide ongoing optimization recommendations, performance monitoring, and support to ensure continuous improvement in efficiency and sustainability.",
  steps: ["Performance monitoring setup", "Optimization recommendations", "Team training and onboarding", "Continuous improvement iterations"]
}];

const Process = () => {
  const [activeProcess, setActiveProcess] = useState(1);
  const processRef = useRef<HTMLDivElement>(null);
  const processSectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    processSectionsRef.current = processes.map((_, i) => processSectionsRef.current[i] || null);
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        entries[0].target.classList.add('animate-fade-in');
        (entries[0].target as HTMLElement).style.opacity = '1';
        observer.unobserve(entries[0].target);
      }
    }, {
      threshold: 0.1
    });
    
    if (processRef.current) {
      observer.observe(processRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;
      
      let closestSection = null;
      let closestDistance = Infinity;
      
      processSectionsRef.current.forEach((section, index) => {
        if (!section) return;
        
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = index;
        }
      });
      
      if (closestSection !== null) {
        setActiveProcess(closestSection + 1);
      }
    };
    
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    
    setTimeout(handleScroll, 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <motion.section 
      ref={sectionRef}
      id="process" 
      className="bg-white py-16"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4" ref={processRef}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Implementation Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We follow a structured approach to implementing manufacturing intelligence solutions that ensures measurable results, compliance, and continuous improvement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Process Navigation */}
          <div className="md:col-span-4 lg:col-span-3">
            <motion.div 
              className="sticky top-24 space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {processes.map((process, index) => (
                <motion.button
                  key={process.id}
                  onClick={() => {
                    setActiveProcess(process.id);
                    const el = document.getElementById(`process-${process.id}`);
                    el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className={cn(
                    "w-full text-left p-4 rounded-xl transition-all duration-300 relative overflow-hidden group",
                    activeProcess === process.id
                      ? "bg-gradient-to-r from-gray-100 to-gray-50 shadow-md"
                      : "hover:bg-gray-50"
                  )}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  {/* Hover gradient effect */}
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    activeProcess === process.id && "opacity-100"
                  )}></div>
                  
                  <div className="flex items-center relative z-10">
                    <motion.div 
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center mr-3 transition-all duration-300",
                        activeProcess === process.id
                          ? "bg-gradient-to-br from-accent to-primary text-white shadow-lg"
                          : "bg-gray-100 text-gray-500"
                      )}
                      animate={activeProcess === process.id ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      {activeProcess > process.id ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        <span className="font-semibold">{process.id}</span>
                      )}
                    </motion.div>
                    <span className={cn(
                      "font-medium transition-colors duration-300",
                      activeProcess === process.id ? "text-gray-900" : "text-gray-600"
                    )}>
                      {process.title}
                    </span>
                  </div>
                  
                  {/* Active indicator line */}
                  {activeProcess === process.id && (
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-primary rounded-r"
                      layoutId="activeIndicator"
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </div>
          
          {/* Process Details */}
          <div className="md:col-span-8 lg:col-span-9">
            <div className="space-y-16">
              {processes.map((process, processIndex) => (
                <motion.div
                  id={`process-${process.id}`}
                  key={process.id}
                  className="scroll-mt-24 transition-all duration-500"
                  ref={el => processSectionsRef.current[process.id - 1] = el}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + processIndex * 0.1 }}
                >
                  <motion.h3 
                    className="text-2xl font-bold mb-4"
                    animate={activeProcess === process.id ? { scale: [1, 1.02, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {process.title}
                  </motion.h3>
                  <p className="text-gray-700 mb-6">{process.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {process.steps.map((step, idx) => (
                      <motion.div 
                        key={idx} 
                        className="bg-gradient-to-br from-white to-gray-50 p-4 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 group cursor-pointer"
                        whileHover={{ y: -4, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 text-primary flex items-center justify-center mr-3 text-sm font-semibold group-hover:scale-110 transition-transform duration-300">
                            {idx + 1}
                          </div>
                          <span className="text-gray-800">{step}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Process;
