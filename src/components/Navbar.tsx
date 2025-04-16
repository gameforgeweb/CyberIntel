import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

interface NavSubSection {
  title: string;
  items: string[];
}

interface NavItem {
  title: string;
  sections?: NavSubSection[];
  items?: string[];
}

const navItems: NavItem[] = [
  {
    title: "VAPT Services",
    items: [
      "Web Application Security Testing",
      "Mobile Application Security Testing",
      "Network Penetration Testing",
      "Cloud Penetration Testing",
      "IoT Security Testing",
      "OT Security",
      "Secure Code Review",
      "Medical Device Security Testing",
      "Threat Modeling",
      "Root Cause Analysis",
      "Red Teaming",
      "Software Composition Analysis"
    ]
  },
  {
    title: "Compliance",
    sections: [
      {
        title: "Standard Compliance",
        items: [
          "ISO/IEC 27001 Compliance",
          "ISO/IEC 27701 Certification",
          "ISO 27017 Certification",
          "ISO 27018 Certification",
          "SOC 2 Compliance",
          "GDPR Compliance",
          "HIPAA Compliance",
          "PCI DSS Compliance",
          "NIST CSF 2.0",
          "Cloud Security Audit"
        ]
      },
      {
        title: "Risk & Crisis Management",
        items: [
          "Vendor Risk Assessment",
          "Cyber Crisis Management Plan",
          "Cyber Resilience & BCP Audit",
          "SDLC Gap Analysis",
          "IT General Controls"
        ]
      },
      {
        title: "Regulatory Compliance",
        items: [
          "IS Audit (RBI)",
          "IRDAI Compliance Audit",
          "SEBI Compliance Audit",
          "CERT-In Security Audit",
          "SAR Compliance Audit",
          "DPDP Act 2023",
          "CICRA",
          "DLA Audit"
        ]
      }
    ]
  },
  {
    title: "Product"
  },
  {
    title: "About Us",
    items: [
      "Our Team",
      "Clients",
      "Media Coverage",
      "Partners"
    ]
  },
  {
    title: "Resources",
    items: [
      "Blogs",
      "Whitepapers",
      "Case Studies",
      "Threat Reports",
      "E-Books",
      "Newsletters"
    ]
  },
  {
    title: "Contact Us"
  }
];

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const getPageUrl = (section: string, item: string) => {
    const sectionSlug = section.toLowerCase().replace(/\s+/g, '-');
    
    // Special handling for ISO/IEC standards
    let itemSlug = item.toLowerCase();
    if (itemSlug.startsWith('iso/iec')) {
      itemSlug = itemSlug.replace('iso/iec', 'iso-iec');
    }
    
    // Then apply general transformations
    itemSlug = itemSlug
      .replace(/[\/&]/g, '-')    // Replace remaining slashes and ampersands with hyphens
      .replace(/\s+/g, '-')      // Replace spaces with hyphens
      .replace(/--+/g, '-')      // Replace multiple hyphens with single hyphen
      .trim()                    // Remove leading/trailing spaces
      .replace(/[^a-z0-9-]/g, ''); // Remove any other special characters
    
    // Handle different sections
    if (section === "Compliance") {
      return `/compliance/${itemSlug}`;
    } else if (section === "VAPT Services") {
      return `/services/${itemSlug}`;
    }
    return `/${sectionSlug}/${itemSlug}`;
  };

  const renderDropdownContent = (item: NavItem) => {
    if (item.sections) {
      return (
        <div className="grid grid-cols-3 gap-6 p-8 min-w-[800px]">
          {item.sections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-white/70 text-sm font-semibold uppercase tracking-wider mb-3">
                {section.title}
              </h3>
              {section.items.map((subItem, subIndex) => (
                <motion.div
                  key={subItem}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * subIndex }}
                  className="relative group"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-200">
                    <div className="h-full w-full bg-gradient-to-b from-[#5451FF] to-[#FF7878]" />
                  </div>
                  <Link
                    to={getPageUrl(item.title, subItem)}
                    className="block pl-4 py-2 text-white hover:text-white transition-colors text-sm"
                  >
                    {subItem}
                  </Link>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      );
    }

    if (item.items) {
      return (
        <div className="grid grid-cols-2 gap-6 p-6">
          <div className="space-y-2 col-span-2">
            {item.items.map((subItem, subIndex) => (
              <motion.div
                key={subItem}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * subIndex }}
                className="relative group"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-200">
                  <div className="h-full w-full bg-gradient-to-b from-[#5451FF] to-[#FF7878]" />
                </div>
                <Link
                  to={getPageUrl(item.title, subItem)}
                  className="block pl-4 py-2 text-white hover:text-white transition-colors"
                >
                  {subItem}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 top-0 transition-transform duration-300 ${!isVisible ? '-translate-y-full' : ''}`}
    >
      {/* Glassmorphic background */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/50" />

      {/* Navigation content */}
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-3"
        >
          <Link 
            to="/" 
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Logo size={32} />
            <span className="font-logo text-2xl text-white">CYBERINTEL</span>
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-6"
        >
          {navItems.map((item, index) => (
            <div 
              key={item.title}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.title)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              >
                {item.title === "VAPT Services" || item.title === "Compliance" || 
                 item.title === "About Us" || item.title === "Resources" ? (
                  <div
                    className="text-white font-barlow font-semibold flex items-center gap-1 hover:text-white hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    {item.title}
                    {(item.items || item.sections) && (
                      <svg 
                        className="w-4 h-4 mt-0.5" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M19 9l-7 7-7-7" 
                        />
                      </svg>
                    )}
                  </div>
                ) : (
                  <Link
                    to={`/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-white font-barlow font-semibold flex items-center gap-1 hover:text-white hover:opacity-80 transition-opacity"
                  >
                    {item.title}
                    {(item.items || item.sections) && (
                      <svg 
                        className="w-4 h-4 mt-0.5" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M19 9l-7 7-7-7" 
                        />
                      </svg>
                    )}
                  </Link>
                )}
              </motion.div>

              {(item.items || item.sections) && (
                <AnimatePresence>
                  {activeDropdown === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 min-w-[600px] rounded-lg backdrop-blur-lg bg-black/40 border border-white/10 shadow-xl"
                    >
                      {renderDropdownContent(item)}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 