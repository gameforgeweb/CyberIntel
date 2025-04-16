import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

// Import VAPT Service Pages
import WebAppSecurityTesting from './pages/services/WebAppSecurityTesting';
import MobileAppSecurityTesting from './pages/services/MobileAppSecurityTesting';
import NetworkPenetrationTesting from './pages/services/NetworkPenetrationTesting';
import CloudPenetrationTesting from './pages/services/CloudPenetrationTesting';
import IoTSecurityTesting from './pages/services/IoTSecurityTesting';
import OTSecurity from './pages/services/OTSecurity';
import SecureCodeReview from './pages/services/SecureCodeReview';
import MedicalDeviceSecurity from './pages/services/MedicalDeviceSecurity';
import ThreatModeling from './pages/services/ThreatModeling';
import RootCauseAnalysis from './pages/services/RootCauseAnalysis';
import RedTeaming from './pages/services/red-teaming';
import SoftwareCompositionAnalysis from './pages/services/SoftwareCompositionAnalysis';

// Import Standard Compliance Pages
import ISO27001 from './pages/compliance/ISO27001';
import ISO27701 from './pages/compliance/ISO27701';
import ISO27017 from './pages/compliance/ISO27017';
import ISO27018 from './pages/compliance/ISO27018';
import SOC2 from './pages/compliance/SOC2';
import GDPR from './pages/compliance/GDPR';
import HIPAA from './pages/compliance/HIPAA';
import PCIDSS from './pages/compliance/PCIDSS';
import DPDPAct from './pages/compliance/dpdp-act-2023';
import ISAudit from './pages/compliance/is-audit-rbi';
import IRDAICompliance from './pages/compliance/irdai-compliance-audit';
import SEBICompliance from './pages/compliance/sebi-compliance-audit';
import CERTInAudit from './pages/compliance/cert-in-security-audit';
import SARCompliance from './pages/compliance/sar-compliance-audit';
import CICRA from './pages/compliance/cicra';
import ITGeneralControls from './pages/compliance/ITGeneralControls';
import DLAAudit from './pages/compliance/dla-audit';
import NISTFramework from './pages/compliance/NISTCSF';
import SDLCGapAnalysis from './pages/compliance/SDLCGapAnalysis';
import CloudSecurityAudit from './pages/compliance/CloudSecurityAudit';
import CyberCrisisManagement from './pages/compliance/CyberCrisisManagement';
import CyberResilience from './pages/compliance/CyberResilience';
import VendorRiskAssessment from './pages/compliance/VendorRiskAssessment';

// Import About Us Pages
import OurTeam from './pages/about/OurTeam';
import Clients from './pages/about/Clients';
import MediaCoverage from './pages/about/MediaCoverage';
import Partners from './pages/about/Partners';

// Import Resources Pages
import Blogs from './pages/resources/Blogs';
import Whitepapers from './pages/resources/Whitepapers';
import CaseStudies from './pages/resources/CaseStudies';
import ThreatReports from './pages/resources/ThreatReports';
import EBooks from './pages/resources/EBooks';
import Newsletters from './pages/resources/Newsletters';
import MindMap from './pages/resources/MindMap';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              {/* Main Route */}
              <Route path="/" element={<Home />} />

              {/* VAPT Service Routes */}
              <Route path="/services/web-application-security-testing" element={<WebAppSecurityTesting />} />
              <Route path="/services/mobile-application-security-testing" element={<MobileAppSecurityTesting />} />
              <Route path="/services/network-penetration-testing" element={<NetworkPenetrationTesting />} />
              <Route path="/services/cloud-penetration-testing" element={<CloudPenetrationTesting />} />
              <Route path="/services/iot-security-testing" element={<IoTSecurityTesting />} />
              <Route path="/services/ot-security" element={<OTSecurity />} />
              <Route path="/services/secure-code-review" element={<SecureCodeReview />} />
              <Route path="/services/medical-device-security-testing" element={<MedicalDeviceSecurity />} />
              <Route path="/services/threat-modeling" element={<ThreatModeling />} />
              <Route path="/services/root-cause-analysis" element={<RootCauseAnalysis />} />
              <Route path="/services/red-teaming" element={<RedTeaming />} />
              <Route path="/services/software-composition-analysis" element={<SoftwareCompositionAnalysis />} />

              {/* Compliance Routes */}
              <Route path="/compliance/iso-iec-27001-compliance" element={<ISO27001 />} />
              <Route path="/compliance/iso-iec-27701-certification" element={<ISO27701 />} />
              <Route path="/compliance/iso-27017-certification" element={<ISO27017 />} />
              <Route path="/compliance/iso-27018-certification" element={<ISO27018 />} />
              <Route path="/compliance/soc-2-compliance" element={<SOC2 />} />
              <Route path="/compliance/gdpr-compliance" element={<GDPR />} />
              <Route path="/compliance/hipaa-compliance" element={<HIPAA />} />
              <Route path="/compliance/pci-dss-compliance" element={<PCIDSS />} />
              <Route path="/compliance/dpdp-act-2023" element={<DPDPAct />} />
              <Route path="/compliance/is-audit-rbi" element={<ISAudit />} />
              <Route path="/compliance/irdai-compliance-audit" element={<IRDAICompliance />} />
              <Route path="/compliance/sebi-compliance-audit" element={<SEBICompliance />} />
              <Route path="/compliance/cert-in-security-audit" element={<CERTInAudit />} />
              <Route path="/compliance/sar-compliance-audit" element={<SARCompliance />} />
              <Route path="/compliance/cicra" element={<CICRA />} />
              <Route path="/compliance/it-general-controls" element={<ITGeneralControls />} />
              <Route path="/compliance/dla-audit" element={<DLAAudit />} />
              <Route path="/compliance/nist-csf-20" element={<NISTFramework />} />
              <Route path="/compliance/sdlc-gap-analysis" element={<SDLCGapAnalysis />} />
              <Route path="/compliance/cloud-security-audit" element={<CloudSecurityAudit />} />
              <Route path="/compliance/cyber-crisis-management-plan" element={<CyberCrisisManagement />} />
              <Route path="/compliance/cyber-resilience-bcp-audit" element={<CyberResilience />} />
              <Route path="/compliance/vendor-risk-assessment" element={<VendorRiskAssessment />} />

              {/* About Us Routes */}
              <Route path="/about-us/our-team" element={<OurTeam />} />
              <Route path="/about-us/clients" element={<Clients />} />
              <Route path="/about-us/media-coverage" element={<MediaCoverage />} />
              <Route path="/about-us/partners" element={<Partners />} />

              {/* Resources Routes */}
              <Route path="/resources/blogs" element={<Blogs />} />
              <Route path="/resources/whitepapers" element={<Whitepapers />} />
              <Route path="/resources/case-studies" element={<CaseStudies />} />
              <Route path="/resources/threat-reports" element={<ThreatReports />} />
              <Route path="/resources/e-books" element={<EBooks />} />
              <Route path="/resources/newsletters" element={<Newsletters />} />
              <Route path="/resources/mind-map" element={<MindMap />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
