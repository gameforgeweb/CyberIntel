import { motion } from 'framer-motion';
import ResourcePageLayout from '../../components/ResourcePageLayout';

const reports = [
  {
    id: 1,
    title: "Q1 2024 Cyber Threat Landscape",
    description: "Comprehensive analysis of emerging threats, attack patterns, and defensive strategies observed in the first quarter of 2024.",
    highlights: [
      "Rise in AI-powered attacks",
      "New ransomware tactics",
      "Supply chain vulnerabilities",
      "Zero-day exploits"
    ],
    stats: {
      attacksAnalyzed: "1M+",
      vulnerabilitiesDiscovered: "250+",
      averageBreachCost: "$4.2M",
      responseTime: "205 min"
    },
    date: "March 2024",
    type: "Quarterly Report"
  },
  {
    id: 2,
    title: "Financial Sector Threat Analysis",
    description: "Deep dive into cyber threats specifically targeting banking, fintech, and financial services organizations.",
    highlights: [
      "Banking trojan evolution",
      "Payment system attacks",
      "Mobile banking threats",
      "Insider risks"
    ],
    stats: {
      attacksAnalyzed: "500K+",
      vulnerabilitiesDiscovered: "180+",
      averageBreachCost: "$5.8M",
      responseTime: "180 min"
    },
    date: "February 2024",
    type: "Industry Focus"
  },
  {
    id: 3,
    title: "Ransomware Threat Report",
    description: "Analysis of ransomware trends, including new variants, attack vectors, and recommended defense strategies.",
    highlights: [
      "Double extortion tactics",
      "Critical infrastructure targeting",
      "Ransomware-as-a-Service",
      "Recovery strategies"
    ],
    stats: {
      attacksAnalyzed: "750K+",
      vulnerabilitiesDiscovered: "120+",
      averageBreachCost: "$3.9M",
      responseTime: "195 min"
    },
    date: "January 2024",
    type: "Special Focus"
  }
];

const ThreatReports = () => {
  return (
    <ResourcePageLayout
      title="Cyber Threat Reports"
      subtitle="In-depth analysis of the evolving threat landscape, emerging attack patterns, and defensive strategies."
    >
      {/* Latest Report Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-2xl p-8 mb-12"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="px-4 py-1 rounded-full bg-white/10 text-sm text-white">
                Latest Report
              </span>
              <span className="text-sm text-white/70">
                {reports[0].date}
              </span>
            </div>
            <h2 className="text-3xl font-barlow font-bold text-white mb-4">
              {reports[0].title}
            </h2>
            <p className="text-white/70 mb-6">
              {reports[0].description}
            </p>
            <button className="px-6 py-3 rounded-lg bg-white text-black font-barlow font-semibold hover:bg-opacity-90 transition-colors">
              Download Full Report
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(reports[0].stats).map(([key, value]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-4 rounded-xl bg-black/20 backdrop-blur-sm"
              >
                <div className="text-2xl font-barlow font-bold text-white mb-2">
                  {value}
                </div>
                <div className="text-sm text-white/70 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Previous Reports */}
      <h2 className="text-2xl font-barlow font-bold text-white mb-6">
        Previous Reports
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {reports.slice(1).map((report, index) => (
          <motion.div
            key={report.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10"
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/90">
                  {report.type}
                </span>
                <span className="text-sm text-white/70">
                  {report.date}
                </span>
              </div>
              <h3 className="text-xl font-barlow font-bold text-white mb-4">
                {report.title}
              </h3>
              <p className="text-white/70 mb-6">
                {report.description}
              </p>
              <div className="space-y-4 mb-6">
                <h4 className="text-lg font-barlow font-semibold text-white">
                  Key Highlights
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {report.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-3 text-white/70"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-sm text-white/70">
                  <span className="font-semibold text-white">
                    {report.stats.attacksAnalyzed}
                  </span> attacks analyzed
                </div>
                <button className="text-white/70 hover:text-white transition-colors">
                  Download Report →
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Subscribe Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
      >
        <h2 className="text-2xl font-barlow font-bold text-white mb-4">
          Stay Informed
        </h2>
        <p className="text-white/70 mb-6 max-w-2xl mx-auto">
          Subscribe to receive our threat reports directly in your inbox, along with expert analysis and recommendations.
        </p>
        <div className="flex gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-white/20"
          />
          <button className="px-6 py-3 rounded-lg bg-white text-black font-barlow font-semibold hover:bg-opacity-90 transition-colors whitespace-nowrap">
            Subscribe Now
          </button>
        </div>
      </motion.div>
    </ResourcePageLayout>
  );
};

export default ThreatReports; 