import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ResourcePageLayoutProps {
  children: ReactNode;
}

const ResourcePageLayout = ({ children }: ResourcePageLayoutProps) => {
  return (
    <div className="relative min-h-screen">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 backdrop-blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 mt-20">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ResourcePageLayout; 