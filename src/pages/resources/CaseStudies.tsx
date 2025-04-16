import { motion } from 'framer-motion';
import ResourcePageLayout from '../../components/ResourcePageLayout';

const caseStudies = [
  {
    id: 1,
    title: "Major Bank Strengthens Security Posture with Zero Trust Implementation",
    industry: "Banking & Finance",
    challenge: "Legacy infrastructure and increasing cyber threats posed significant risks to customer data and financial operations.",
    solution: "Implemented comprehensive Zero Trust architecture with advanced IAM, network segmentation, and continuous monitoring.",
    outcomes: [
      "85% reduction in security incidents",
      "99.9% uptime maintained during transition",
      "50% faster threat detection and response",
      "Achieved BFSI compliance requirements"
    ],
    duration: "8 months",
    services: ["Zero Trust Implementation", "Security Assessment", "24/7 Monitoring"]
  },
  {
    id: 2,
    title: "Healthcare Provider Achieves HIPAA Compliance and Enhanced Security",
    industry: "Healthcare",
    challenge: "Growing digital infrastructure created compliance gaps and security vulnerabilities in patient data protection.",
    solution: "Conducted thorough assessment, implemented security controls, and established continuous compliance monitoring.",
    outcomes: [
      "100% HIPAA compliance achieved",
      "70% reduction in unauthorized access attempts",
      "90% faster security incident resolution",
      "Zero data breaches post-implementation"
    ],
    duration: "6 months",
    services: ["HIPAA Compliance", "Security Controls Implementation", "Staff Training"]
  },
  {
    id: 3,
    title: "E-commerce Platform Prevents Ransomware with Advanced Security",
    industry: "E-commerce",
    challenge: "Multiple ransomware attempts and increasing sophisticated cyber attacks threatened business continuity.",
    solution: "Deployed advanced threat detection, implemented secure backup systems, and established incident response procedures.",
    outcomes: [
      "100% prevention of ransomware attempts",
      "60% reduction in security costs",
      "95% faster threat detection",
      "Improved customer trust metrics"
    ],
    duration: "4 months",
    services: ["Threat Detection", "Incident Response", "Business Continuity"]
  }
];

const industries = [
  "All Industries",
  "Banking & Finance",
  "Healthcare",
  "E-commerce",
  "Manufacturing",
  "Technology",
  "Government"
];

const CaseStudies = () => {
  return (
    <ResourcePageLayout
      title="Client Success Stories"
      subtitle="Real-world examples of how we help organizations strengthen their security posture and achieve compliance goals."
    >
      {/* Industry Filter */}
      <div className="mb-12 overflow-x-auto">
        <div className="flex gap-4 min-w-max">
          {industries.map((industry, index) => (
            <motion.button
              key={industry}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            >
              {industry}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="space-y-12">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary/20 to-blue-600/20 p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-4 py-1 rounded-full bg-white/10 text-sm text-white">
                  {study.industry}
                </span>
                <span className="text-sm text-white/70">
                  Duration: {study.duration}
                </span>
              </div>
              <h2 className="text-2xl font-barlow font-bold text-white mb-4">
                {study.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {study.services.map((service) => (
                  <span
                    key={service}
                    className="px-3 py-1 rounded-full bg-black/20 text-sm text-white/90"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-barlow font-semibold text-white mb-3">
                  Challenge
                </h3>
                <p className="text-white/70">
                  {study.challenge}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-barlow font-semibold text-white mb-3">
                  Solution
                </h3>
                <p className="text-white/70">
                  {study.solution}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-barlow font-semibold text-white mb-3">
                  Outcomes
                </h3>
                <ul className="space-y-2">
                  {study.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex items-center gap-3 text-white/70"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-4 border-t border-white/10 flex justify-end">
              <button className="text-white/70 hover:text-white transition-colors">
                Read Full Case Study →
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
      >
        <h2 className="text-2xl font-barlow font-bold text-white mb-4">
          Ready to Strengthen Your Security?
        </h2>
        <p className="text-white/70 mb-6 max-w-2xl mx-auto">
          Let us help you achieve similar results. Our security experts are ready to assess your needs and create a tailored solution.
        </p>
        <button className="px-8 py-3 rounded-lg bg-white text-black font-barlow font-semibold hover:bg-opacity-90 transition-colors">
          Schedule a Consultation
        </button>
      </motion.div>
    </ResourcePageLayout>
  );
};

export default CaseStudies; 