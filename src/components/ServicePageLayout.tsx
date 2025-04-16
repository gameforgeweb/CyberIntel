import { motion } from 'framer-motion';
import { ReactNode, useEffect } from 'react';

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  sections: {
    whatItIs: ReactNode;
    whyItsImportant: ReactNode;
    whatWeProvide: ReactNode;
    whoItsFor: ReactNode;
    complianceContext?: ReactNode;
    callToAction?: {
      buttonText?: string;
      customContent?: ReactNode;
    };
  };
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const ServicePageLayout = ({ title, subtitle, sections }: ServicePageLayoutProps) => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      className="relative min-h-screen bg-black"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{
            background: '#FF7878',
            filter: 'blur(100px)',
            top: '-200px',
            right: '-100px',
          }}
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{
            background: '#5451FF',
            filter: 'blur(100px)',
            top: '-400px',
            left: '-200px',
          }}
        />

        <div className="absolute inset-0 backdrop-blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section 
          variants={staggerContainer}
          className="min-h-[60vh] flex items-center pt-32"
        >
          <div className="w-full">
            <div className="max-w-7xl mx-auto px-6">
              <div className="max-w-4xl">
                <motion.h1 
                  variants={fadeInUp}
                  className="text-5xl sm:text-6xl md:text-7xl font-barlow font-bold text-white mb-6"
                >
                  {title}
                </motion.h1>
                <motion.p 
                  variants={fadeInUp}
                  className="text-xl md:text-2xl text-white/90 max-w-3xl"
                >
                  {subtitle}
                </motion.p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Main Content Sections */}
        <motion.div 
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6 py-20 space-y-32"
        >
          {/* What It Is */}
          <motion.section
            variants={fadeInUp}
            className="grid md:grid-cols-[300px,1fr] gap-12"
          >
            <div>
              <h2 className="text-2xl font-barlow font-bold text-white mb-4">What It Is</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#5451FF] to-[#FF7878]" />
            </div>
            <div className="text-white/90 space-y-6 text-lg">
              {sections.whatItIs}
            </div>
          </motion.section>

          {/* Why It's Important */}
          <motion.section
            variants={fadeInUp}
            className="grid md:grid-cols-[300px,1fr] gap-12"
          >
            <div>
              <h2 className="text-2xl font-barlow font-bold text-white mb-4">Why It's Important</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#5451FF] to-[#FF7878]" />
            </div>
            <div className="text-white/90 space-y-6 text-lg">
              {sections.whyItsImportant}
            </div>
          </motion.section>

          {/* What We Provide */}
          <motion.section
            variants={fadeInUp}
            className="grid md:grid-cols-[300px,1fr] gap-12"
          >
            <div>
              <h2 className="text-2xl font-barlow font-bold text-white mb-4">What We Provide</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#5451FF] to-[#FF7878]" />
            </div>
            <div className="text-white/90 space-y-6 text-lg">
              {sections.whatWeProvide}
            </div>
          </motion.section>

          {/* Who It's For */}
          <motion.section
            variants={fadeInUp}
            className="grid md:grid-cols-[300px,1fr] gap-12"
          >
            <div>
              <h2 className="text-2xl font-barlow font-bold text-white mb-4">Who It's For</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#5451FF] to-[#FF7878]" />
            </div>
            <div className="text-white/90 space-y-6 text-lg">
              {sections.whoItsFor}
            </div>
          </motion.section>

          {/* Compliance Context (Optional) */}
          {sections.complianceContext && (
            <motion.section
              variants={fadeInUp}
              className="grid md:grid-cols-[300px,1fr] gap-12"
            >
              <div>
                <h2 className="text-2xl font-barlow font-bold text-white mb-4">Compliance Context</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-[#5451FF] to-[#FF7878]" />
              </div>
              <div className="text-white/90 space-y-6 text-lg">
                {sections.complianceContext}
              </div>
            </motion.section>
          )}

          {/* Call to Action */}
          <motion.section
            variants={fadeInUp}
            className="text-center py-20"
          >
            {sections.callToAction?.customContent || (
              <>
                <h2 className="text-3xl font-barlow font-bold text-white mb-8">
                  Ready to Secure Your Business?
                </h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-8 py-4 rounded-lg font-barlow font-semibold hover:bg-opacity-90 transition-colors"
                >
                  {sections.callToAction?.buttonText || "Get a Free Assessment"}
                </motion.button>
              </>
            )}
          </motion.section>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServicePageLayout; 