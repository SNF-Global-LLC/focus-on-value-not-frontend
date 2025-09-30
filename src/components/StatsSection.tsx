import { motion } from 'framer-motion';
import { TrendingUp, Users, Zap, Award } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const stats = [
  {
    icon: TrendingUp,
    value: 22,
    suffix: '%',
    label: 'Carbon Reduction',
    description: 'Average emission reduction',
    color: 'success'
  },
  {
    icon: Users,
    value: 50,
    suffix: '+',
    label: 'Enterprise Clients',
    description: 'Manufacturing partners',
    color: 'primary'
  },
  {
    icon: Zap,
    value: 85,
    suffix: '%',
    label: 'Efficiency Gain',
    description: 'Process optimization',
    color: 'accent'
  },
  {
    icon: Award,
    value: 100,
    suffix: '%',
    label: 'CBAM Compliant',
    description: 'Regulatory ready',
    color: 'success'
  }
];

const StatsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'success':
        return 'bg-success/10 text-success';
      case 'accent':
        return 'bg-accent/10 text-accent';
      case 'primary':
      default:
        return 'bg-primary/10 text-primary';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-success/5 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.div variants={itemVariants} className="inline-block mb-3 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Impact By Numbers
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            Measurable Results
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 max-w-2xl mx-auto">
            Our manufacturing intelligence platforms deliver quantifiable improvements across operations
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -12, transition: { duration: 0.4, ease: "easeOut" } }}
              className="group relative bg-gradient-to-br from-white to-gray-50/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 backdrop-blur-sm overflow-hidden"
            >
              {/* Animated gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-success/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-x-0 -top-40 h-40 bg-gradient-to-b from-accent/20 to-transparent blur-2xl"></div>
              </div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl ${getColorClasses(stat.color)} flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-xl`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                
                <div className="text-5xl font-bold mb-3 bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                  <AnimatedCounter 
                    end={stat.value} 
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors duration-300">{stat.label}</h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{stat.description}</p>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-bl-[3rem]"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-tr-[2.5rem]"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
