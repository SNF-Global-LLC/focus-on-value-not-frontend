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
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
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
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/50 backdrop-blur-sm overflow-hidden"
            >
              {/* Animated gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl ${getColorClasses(stat.color)} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <stat.icon className="w-7 h-7" />
                </div>
                
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  <AnimatedCounter 
                    end={stat.value} 
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                </div>
                
                <h3 className="text-lg font-semibold mb-1 text-gray-900">{stat.label}</h3>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-full"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
