import { motion } from 'framer-motion';
import ResourcePageLayout from '../../components/ResourcePageLayout';

const domains = [
  {
    title: "Application Security",
    topics: [
      "SAST & DAST",
      "API Security",
      "Web Security",
      "Mobile Security",
      "Secure SDLC"
    ]
  },
  {
    title: "Cloud Security",
    topics: [
      "IaaS Security",
      "PaaS Security",
      "SaaS Security",
      "Cloud Native",
      "Multi-Cloud"
    ]
  },
  {
    title: "Network Security",
    topics: [
      "Firewall",
      "IDS/IPS",
      "VPN",
      "Zero Trust",
      "Segmentation"
    ]
  },
  {
    title: "Identity & Access",
    topics: [
      "IAM",
      "PAM",
      "MFA",
      "SSO",
      "RBAC"
    ]
  },
  {
    title: "Threat Intelligence",
    topics: [
      "Threat Hunting",
      "APT Analysis",
      "IOC Management",
      "Threat Feeds",
      "OSINT"
    ]
  },
  {
    title: "Incident Response",
    topics: [
      "IR Planning",
      "Forensics",
      "SOAR",
      "SIEM",
      "Playbooks"
    ]
  }
];

const MindMap = () => {
  return (
    <ResourcePageLayout
      title="Cybersecurity Domain Mind Map"
      subtitle="Interactive visualization of cybersecurity domains, methodologies, and their interconnections."
    >
      {/* Download Options */}
      <div className="flex gap-4 mb-12">
        <button className="px-6 py-3 rounded-lg bg-white text-black font-barlow font-semibold hover:bg-opacity-90 transition-colors">
          Download PDF Version
        </button>
        <button className="px-6 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors">
          Download SVG Version
        </button>
      </div>

      {/* Interactive Mind Map */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-12">
        <div className="aspect-[16/9] bg-black/20 rounded-lg flex items-center justify-center">
          <span className="text-white/50">Interactive Mind Map Visualization</span>
        </div>
      </div>

      {/* Domain Breakdown */}
      <div className="grid md:grid-cols-3 gap-6">
        {domains.map((domain, index) => (
          <motion.div
            key={domain.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <h3 className="text-xl font-barlow font-bold text-white mb-4">
              {domain.title}
            </h3>
            <div className="space-y-3">
              {domain.topics.map((topic) => (
                <div
                  key={topic}
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors cursor-pointer group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-125 transition-transform" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Legend & Instructions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-barlow font-bold text-white mb-4">
              How to Use
            </h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Click on any domain to expand its subtopics</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Drag to pan around the visualization</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Use mouse wheel to zoom in/out</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Double-click to focus on a specific branch</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-barlow font-bold text-white mb-4">
              Legend
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-white/70">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span>Core Domains</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span>Technologies</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <span>Methodologies</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <span>Tools</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </ResourcePageLayout>
  );
};

export default MindMap; 