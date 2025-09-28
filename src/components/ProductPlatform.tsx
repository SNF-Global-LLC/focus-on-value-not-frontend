
import { motion } from "framer-motion";
import { Database, Gauge, Cpu, Bluetooth, Battery, Server, ArrowRight, Smartphone, Code, Wifi, Cloud, MonitorSmartphone, FileText } from 'lucide-react';

const ProductPlatform = () => {
  return (
    <div className="w-full relative">
      {/* Product Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Product</h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl">
          AWS Premier Partner delivering manufacturing intelligence through carbonfactor.io and forgediq.io platforms. SNF Global helps factories achieve 
          measurable results: 10x improvements in cost, lead time, and efficiency while reducing carbon emissions by up to 22%.
        </p>
      </motion.div>

      {/* Platform Architecture - Three Column Layout for desktop, Vertical for mobile */}
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        {/* Physical Devices Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <div className="bg-gray-200 rounded-xl p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-center mb-1">Physical Devices</h3>
            <p className="text-xs sm:text-sm text-center mb-4">Data input</p>
            
            <div className="space-y-3">
              {[
                { icon: <Gauge className="text-black w-4 h-4 sm:w-5 sm:h-5" />, text: "Manufacturing Sensors" },
                { icon: <Cpu className="text-black w-4 h-4 sm:w-5 sm:h-5" />, text: "Production Monitoring" },
                { icon: <Bluetooth className="text-black w-4 h-4 sm:w-5 sm:h-5" />, text: "IoT Connectivity" },
                { icon: <Battery className="text-black w-4 h-4 sm:w-5 sm:h-5" />, text: "Energy Management" },
                { icon: <Database className="text-black w-4 h-4 sm:w-5 sm:h-5" />, text: "Data Collection" },
                { icon: <Wifi className="text-black w-4 h-4 sm:w-5 sm:h-5" />, text: "Real-time Transmission" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-3 sm:p-4 flex items-center">
                  <div className="mr-3 sm:mr-4 flex-shrink-0">{item.icon}</div>
                  <span className="text-gray-800 font-medium text-xs sm:text-sm">{item.text}</span>
                </div>
              ))}
            </div>
            
            <p className="text-xs sm:text-sm text-center mt-4 sm:mt-6">
              Smart manufacturing hardware that collects<br />production and carbon emissions data
            </p>
          </div>
        </motion.div>

        {/* Flow Arrows - Mobile and Desktop have different appearance */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:flex items-center justify-center"
        >
          <ArrowRight className="text-black w-8 h-8" />
        </motion.div>
        
        {/* Mobile Flow Indicator - Only visible on mobile/tablet */}
        <div className="flex lg:hidden items-center justify-center my-2">
          <ArrowRight className="text-black w-6 h-6 rotate-90" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex-[1.5]"
        >
          <div className="bg-gray-200 rounded-xl p-4 sm:p-6">
            <div className="flex flex-col items-center mb-3 sm:mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-0">SNF Global</h3>
              <p className="text-lg sm:text-xl font-medium text-center">Intelligent Factory Platform</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
              {[
                { icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Carbon Tracking" },
                { icon: <Gauge className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Manufacturing Intel" },
                { icon: <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />, name: "AWS Bedrock AI" },
                { icon: <Battery className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Energy Optimization" },
                { icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" />, name: "CBAM Compliance" },
                { icon: <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />, name: "forgediq.io Platform" },
                { icon: <Wifi className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Real-time Data" },
                { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "AWS Premier" },
                { icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" />, name: "GenAI APIs" },
                { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Cloud Infrastructure" },
                { icon: <Cloud className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Vertical Integration" },
                { icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" />, name: "carbonfactor.io" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-2 sm:p-3 text-center flex flex-col items-center justify-center">
                  <div className="mb-1 sm:mb-2">{item.icon}</div>
                  <div className="text-[10px] sm:text-xs">{item.name}</div>
                </div>
              ))}
            </div>
            
            <p className="text-xs sm:text-sm text-center mt-4 sm:mt-6">
              SNF Global's AWS Premier platform delivers<br />manufacturing intelligence and carbon optimization
            </p>
          </div>
        </motion.div>

        {/* Flow Arrows - Desktop Only */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="hidden lg:flex items-center justify-center"
        >
          <ArrowRight className="text-black w-8 h-8" />
        </motion.div>
        
        {/* Mobile Flow Indicator - Only visible on mobile/tablet */}
        <div className="flex lg:hidden items-center justify-center my-2">
          <ArrowRight className="text-black w-6 h-6 rotate-90" />
        </div>

        {/* User Applications Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex-1"
        >
          <div className="bg-gray-200 rounded-xl p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-center mb-1">User Applications</h3>
            <p className="text-xs sm:text-sm text-center mb-4">Data output</p>
            
            <div className="space-y-3">
              {[
                { icon: <MonitorSmartphone className="text-black w-4 h-4 sm:w-5 sm:h-5" />, text: "Manufacturing Dashboards" },
                { icon: <Smartphone className="text-black w-4 h-4 sm:w-5 sm:h-5" />, text: "carbonfactor.io Platform" },
                { icon: <FileText className="text-black w-4 h-4 sm:w-5 sm:h-5" />, text: "CBAM Compliance Reports" },
                { icon: <Code className="text-black w-4 h-4 sm:w-5 sm:h-5" />, text: "AWS Integration APIs" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-3 sm:p-4 flex items-center">
                  <div className="mr-3 sm:mr-4 flex-shrink-0">{item.icon}</div>
                  <span className="text-gray-800 font-medium text-xs sm:text-sm">{item.text}</span>
                </div>
              ))}
            </div>
            
            <p className="text-xs sm:text-sm text-center mt-4 sm:mt-6">
              How manufacturers access insights and<br />achieve carbon reduction goals
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductPlatform;
