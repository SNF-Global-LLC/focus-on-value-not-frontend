import { ArrowRight, Code, Cpu, Layers, MessageSquare, BarChart3 } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";


const Hero = () => {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return <motion.div ref={ref} className="relative w-full" initial="hidden" animate="visible" variants={containerVariants}>
      <div className="banner-container bg-black relative overflow-hidden h-[50vh] sm:h-[60vh] md:h-[500px] lg:h-[550px] xl:h-[600px] w-full">
        <motion.div style={{ y }} className="absolute inset-0 w-full h-full bg-black">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="metadata"
            className={`w-full h-full object-cover opacity-70 grayscale ${isMobile ? 'object-right' : 'object-center'}`}
            poster="/lovable-uploads/4bfa0d71-3ed2-4693-90b6-35142468907f.png"
          >
            <source src="/lovable-uploads/video_1751292840840_1751292842546.mp4" type="video/mp4" />
            {/* Fallback image if video fails to load */}
            <img 
              src="/lovable-uploads/4bfa0d71-3ed2-4693-90b6-35142468907f.png" 
              alt="carbonfactor.io Carbon Tracking" 
              className={`w-full h-full object-cover opacity-70 grayscale ${isMobile ? 'object-right' : 'object-center'}`} 
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-white"></div>
        </motion.div>
        
        <motion.div style={{ opacity }} className="banner-overlay bg-transparent pt-20 sm:pt-24 md:pt-32 w-full">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
            <motion.div className="w-full max-w-4xl text-center" variants={itemVariants}>
              <motion.h1 className="banner-title text-white" variants={itemVariants}>Carbon Tracking Platform</motion.h1>
              <motion.p className="banner-subtitle text-gray-300 mt-4 sm:mt-6" variants={itemVariants}>
                Revolutionizing carbon footprint management with real-time tracking, analytics, and actionable sustainability insights.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center items-center" variants={itemVariants}>
                {/* Styled as a button but using an anchor tag for project navigation */}
                <button 
                  className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-accent text-white rounded-xl hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 flex items-center justify-center group text-sm sm:text-base font-medium"
                  onClick={e => {
                    e.preventDefault();
                    const projectsSection = document.getElementById('projects');
                    if (projectsSection) {
                      projectsSection.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  View Solutions
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                {/* Using the Button component from shadcn but with custom styling to match the explore button */}
                <button 
                  className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 flex items-center justify-center group text-sm sm:text-base font-medium"
                  onClick={scrollToContact}
                >
                  Get Started
                  <MessageSquare className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                </button>

                <Button asChild className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-secondary text-secondary-foreground rounded-xl hover:bg-secondary/80 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm sm:text-base font-medium">
                  <Link to="/dashboard">View Dashboard</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4" variants={containerVariants} initial="hidden" animate="visible" transition={{
        delay: 0.6
      }}>
          <motion.div 
            className="bg-white p-4 md:p-5 rounded-2xl shadow-lg border border-gray-100/50 backdrop-blur-sm transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group cursor-pointer" 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-success/10 flex items-center justify-center rounded-xl text-success mb-2 md:mb-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
              <Cpu className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-primary">Carbon Monitoring</h3>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">Advanced tracking systems providing instant visibility into your carbon footprint across operations.</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-4 md:p-5 rounded-2xl shadow-lg border border-gray-100/50 backdrop-blur-sm transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group cursor-pointer" 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 flex items-center justify-center rounded-xl text-accent mb-2 md:mb-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
              <Code className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-primary">Sustainability Analytics</h3>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">AI-powered insights that predict emissions trends, optimize processes, and reduce environmental impact.</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-4 md:p-5 rounded-2xl shadow-lg border border-gray-100/50 backdrop-blur-sm transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group cursor-pointer" 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 flex items-center justify-center rounded-xl text-primary mb-2 md:mb-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
              <Layers className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-primary">Comprehensive Reporting</h3>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">Seamless integration with ESG reporting frameworks and sustainability management systems.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>;
};

export default Hero;
