import { motion } from 'framer-motion';
import ResourcePageLayout from '../../components/ResourcePageLayout';

const threatStats = [
  {
    title: "Ransomware Attacks",
    value: "+47%",
    description: "Increase in ransomware incidents targeting critical infrastructure"
  },
  {
    title: "Supply Chain Breaches",
    value: "385",
    description: "Reported supply chain security incidents in Q1 2024"
  },
  {
    title: "Zero-Day Exploits",
    value: "28",
    description: "New zero-day vulnerabilities discovered and exploited"
  },
  {
    title: "Average Breach Cost",
    value: "$4.2M",
    description: "Global average cost of a data breach in 2024"
  }
];

const threatActors = [
  {
    name: "BlackCat",
    type: "Ransomware Group",
    targets: "Financial Services, Healthcare",
    tactics: "Double Extortion, Zero-Day Exploits",
    recentActivity: "Targeting cloud infrastructure and backup systems"
  },
  {
    name: "APT41",
    type: "State-Sponsored Group",
    targets: "Technology, Manufacturing",
    tactics: "Supply Chain Attacks, Custom Malware",
    recentActivity: "Sophisticated phishing campaigns targeting industrial control systems"
  },
  {
    name: "LockBit 3.0",
    type: "Ransomware-as-a-Service",
    targets: "Cross-Industry",
    tactics: "Data Theft, Ransomware",
    recentActivity: "Enhanced encryption methods and automated propagation"
  }
];

const CyberThreatReport = () => {
  return (
    <ResourcePageLayout
      title="Q1 2024 Cyber Threat Report"
      subtitle="Comprehensive analysis of the current threat landscape, emerging attack vectors, and defensive recommendations."
    >
      {/* Key Statistics */}
      <div className="grid md:grid-cols-4 gap-6 mb-16">
        {threatStats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <h3 className="text-lg font-barlow font-semibold text-white/70 mb-2">
              {stat.title}
            </h3>
            <div className="text-3xl font-barlow font-bold text-white mb-2">
              {stat.value}
            </div>
            <p className="text-sm text-white/60">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Report Sections */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Threat Actor Analysis */}
        <div>
          <h2 className="text-2xl font-barlow font-bold text-white mb-6">
            Active Threat Actors
          </h2>
          <div className="space-y-6">
            {threatActors.map((actor, index) => (
              <motion.div
                key={actor.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-barlow font-bold text-white">
                    {actor.name}
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/90">
                    {actor.type}
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-2">
                    <span className="text-white/50">Targets:</span>
                    <span className="text-white/90">{actor.targets}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-white/50">Tactics:</span>
                    <span className="text-white/90">{actor.tactics}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-white/50">Recent Activity:</span>
                    <span className="text-white/90">{actor.recentActivity}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vulnerability Trends */}
        <div>
          <h2 className="text-2xl font-barlow font-bold text-white mb-6">
            Critical Vulnerabilities
          </h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            {/* Placeholder for vulnerability chart */}
            <div className="aspect-square bg-black/20 rounded-lg mb-6" />
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white/90">Remote Code Execution</span>
                <span className="text-white/70">38%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/90">Authentication Bypass</span>
                <span className="text-white/70">24%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/90">SQL Injection</span>
                <span className="text-white/70">18%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/90">Cross-Site Scripting</span>
                <span className="text-white/70">12%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-barlow font-bold text-white mb-4">
              Download Full Report
            </h2>
            <p className="text-white/70 mb-6">
              Get detailed insights, industry-specific analysis, and actionable recommendations in our comprehensive quarterly threat report.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-lg bg-white text-black font-barlow font-semibold hover:bg-opacity-90 transition-colors">
                Download PDF
              </button>
              <button className="px-6 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors">
                View Online
              </button>
            </div>
          </div>
          <div className="text-right">
            <div className="inline-block text-white/50 text-sm">
              <div>PDF Report • 85 pages</div>
              <div>Last updated: March 15, 2024</div>
            </div>
          </div>
        </div>
      </div>
    </ResourcePageLayout>
  );
};

export default CyberThreatReport; 