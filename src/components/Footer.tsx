import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black/20 backdrop-blur-sm mt-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <div>
            <Link 
              to="/" 
              className="font-logo text-2xl text-white hover:text-white transition-all duration-200"
            >
              CYBERINTEL
            </Link>
            <p className="text-white/50 text-sm mt-4">
              Advanced cybersecurity solutions for the modern enterprise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-barlow font-semibold text-sm mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/50 hover:text-white text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/50 hover:text-white text-sm transition-colors">
                  VAPT Services
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="text-white/50 hover:text-white text-sm transition-colors">
                  Compliance
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-white/50 hover:text-white text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/50 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-barlow font-semibold text-sm mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/security-testing" className="text-white/50 hover:text-white text-sm transition-colors">
                  Security Testing
                </Link>
              </li>
              <li>
                <Link to="/services/compliance" className="text-white/50 hover:text-white text-sm transition-colors">
                  Compliance
                </Link>
              </li>
              <li>
                <Link to="/services/red-teaming" className="text-white/50 hover:text-white text-sm transition-colors">
                  Red Teaming
                </Link>
              </li>
              <li>
                <Link to="/services/threat-modeling" className="text-white/50 hover:text-white text-sm transition-colors">
                  Threat Modeling
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-t border-white/10" />

        {/* Main Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 py-12">
          {/* VAPT Services */}
          <div>
            <h3 className="text-white font-barlow font-semibold text-sm mb-4">
              VAPT Services
            </h3>
            <ul className="space-y-2">
              <li><Link to="/services/web-app-security" className="text-white/50 hover:text-white text-sm transition-colors">Web App Security</Link></li>
              <li><Link to="/services/mobile-app-security" className="text-white/50 hover:text-white text-sm transition-colors">Mobile App Security</Link></li>
              <li><Link to="/services/network-testing" className="text-white/50 hover:text-white text-sm transition-colors">Network Testing</Link></li>
              <li><Link to="/services/cloud-testing" className="text-white/50 hover:text-white text-sm transition-colors">Cloud Testing</Link></li>
              <li><Link to="/services/iot-security" className="text-white/50 hover:text-white text-sm transition-colors">IoT Security</Link></li>
              <li><Link to="/services/ot-security" className="text-white/50 hover:text-white text-sm transition-colors">OT Security</Link></li>
            </ul>
          </div>

          {/* More Services */}
          <div>
            <h3 className="text-white font-barlow font-semibold text-sm mb-4">
              More Services
            </h3>
            <ul className="space-y-2">
              <li><Link to="/services/secure-code-review" className="text-white/50 hover:text-white text-sm transition-colors">Secure Code Review</Link></li>
              <li><Link to="/services/medical-device-security" className="text-white/50 hover:text-white text-sm transition-colors">Medical Device Security</Link></li>
              <li><Link to="/services/threat-modeling" className="text-white/50 hover:text-white text-sm transition-colors">Threat Modeling</Link></li>
              <li><Link to="/services/root-cause-analysis" className="text-white/50 hover:text-white text-sm transition-colors">Root Cause Analysis</Link></li>
              <li><Link to="/services/red-teaming" className="text-white/50 hover:text-white text-sm transition-colors">Red Teaming</Link></li>
              <li><Link to="/services/software-analysis" className="text-white/50 hover:text-white text-sm transition-colors">Software Analysis</Link></li>
            </ul>
          </div>

          {/* Standard Compliance */}
          <div>
            <h3 className="text-white font-barlow font-semibold text-sm mb-4">
              Standard Compliance
            </h3>
            <ul className="space-y-2">
              <li><Link to="/compliance/iso-27001" className="text-white/50 hover:text-white text-sm transition-colors">ISO 27001</Link></li>
              <li><Link to="/compliance/iso-27701" className="text-white/50 hover:text-white text-sm transition-colors">ISO 27701</Link></li>
              <li><Link to="/compliance/soc-2" className="text-white/50 hover:text-white text-sm transition-colors">SOC 2</Link></li>
              <li><Link to="/compliance/gdpr" className="text-white/50 hover:text-white text-sm transition-colors">GDPR</Link></li>
              <li><Link to="/compliance/hipaa" className="text-white/50 hover:text-white text-sm transition-colors">HIPAA</Link></li>
              <li><Link to="/compliance/pci-dss" className="text-white/50 hover:text-white text-sm transition-colors">PCI DSS</Link></li>
            </ul>
          </div>

          {/* Risk Management */}
          <div>
            <h3 className="text-white font-barlow font-semibold text-sm mb-4">
              Risk Management
            </h3>
            <ul className="space-y-2">
              <li><Link to="/compliance/vendor-risk" className="text-white/50 hover:text-white text-sm transition-colors">Vendor Risk</Link></li>
              <li><Link to="/compliance/crisis-management" className="text-white/50 hover:text-white text-sm transition-colors">Crisis Management</Link></li>
              <li><Link to="/compliance/bcp-audit" className="text-white/50 hover:text-white text-sm transition-colors">BCP Audit</Link></li>
              <li><Link to="/compliance/sdlc-analysis" className="text-white/50 hover:text-white text-sm transition-colors">SDLC Analysis</Link></li>
              <li><Link to="/compliance/it-controls" className="text-white/50 hover:text-white text-sm transition-colors">IT Controls</Link></li>
            </ul>
          </div>

          {/* Regulatory */}
          <div>
            <h3 className="text-white font-barlow font-semibold text-sm mb-4">
              Regulatory
            </h3>
            <ul className="space-y-2">
              <li><Link to="/compliance/rbi-audit" className="text-white/50 hover:text-white text-sm transition-colors">RBI Audit</Link></li>
              <li><Link to="/compliance/irdai" className="text-white/50 hover:text-white text-sm transition-colors">IRDAI</Link></li>
              <li><Link to="/compliance/sebi" className="text-white/50 hover:text-white text-sm transition-colors">SEBI</Link></li>
              <li><Link to="/compliance/cert-in" className="text-white/50 hover:text-white text-sm transition-colors">CERT-In</Link></li>
              <li><Link to="/compliance/dpdp-act" className="text-white/50 hover:text-white text-sm transition-colors">DPDP Act</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-barlow font-semibold text-sm mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="text-white/50 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link to="/about-us/our-team" className="text-white/50 hover:text-white text-sm transition-colors">Our Team</Link></li>
              <li><Link to="/about-us/clients" className="text-white/50 hover:text-white text-sm transition-colors">Clients</Link></li>
              <li><Link to="/about-us/partners" className="text-white/50 hover:text-white text-sm transition-colors">Partners</Link></li>
            </ul>
          </div>
        </div>

        <hr className="border-t border-white/10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">LinkedIn</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Twitter</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">GitHub</a>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-white/50 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-white/50 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Copyright - Single Instance */}
        <div className="text-center mt-6">
          <span className="text-white/50 text-sm">
            © 2025 CyberIntel. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 