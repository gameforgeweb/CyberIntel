import { motion } from 'framer-motion';
import ResourcePageLayout from '../../components/ResourcePageLayout';

const benefits = [
  {
    title: "Monthly Threat Intelligence",
    description: "Stay informed about the latest cyber threats, attack patterns, and emerging vulnerabilities.",
    icon: "🔍"
  },
  {
    title: "Security Best Practices",
    description: "Expert guidance on implementing and maintaining robust security controls.",
    icon: "🛡️"
  },
  {
    title: "Compliance Updates",
    description: "Regular updates on regulatory changes and compliance requirements across industries.",
    icon: "📋"
  },
  {
    title: "Expert Analysis",
    description: "Deep insights from our security researchers and industry experts.",
    icon: "🧠"
  }
];

const archives = [
  {
    month: "March 2024",
    title: "AI in Cybersecurity: Friend or Foe?",
    topics: [
      "AI-powered threat detection",
      "Machine learning for defense",
      "AI-driven attacks",
      "Future implications"
    ],
    readTime: "12 min"
  },
  {
    month: "February 2024",
    title: "Zero Trust Architecture Implementation",
    topics: [
      "Identity verification",
      "Network segmentation",
      "Access controls",
      "Monitoring strategies"
    ],
    readTime: "15 min"
  },
  {
    month: "January 2024",
    title: "2024 Cybersecurity Predictions",
    topics: [
      "Emerging threats",
      "Technology trends",
      "Regulatory landscape",
      "Industry challenges"
    ],
    readTime: "10 min"
  }
];

const Newsletter = () => {
  return (
    <ResourcePageLayout
      title="Security Intelligence Newsletter"
      subtitle="Stay ahead of cyber threats with monthly insights, analysis, and best practices from our security experts."
    >
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-2xl p-8 mb-12 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-barlow font-bold text-white mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto mb-8">
          Join thousands of security professionals who receive our monthly newsletter packed with actionable insights and expert analysis.
        </p>
        <div className="flex gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-white/20"
          />
          <button className="px-6 py-3 rounded-lg bg-white text-black font-barlow font-semibold hover:bg-opacity-90 transition-colors whitespace-nowrap">
            Subscribe Free
          </button>
        </div>
      </motion.div>

      {/* Benefits Grid */}
      <h2 className="text-2xl font-barlow font-bold text-white mb-6">
        Newsletter Benefits
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <div className="text-3xl mb-4">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-barlow font-bold text-white mb-3">
              {benefit.title}
            </h3>
            <p className="text-white/70">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Newsletter Archive */}
      <h2 className="text-2xl font-barlow font-bold text-white mb-6">
        Previous Editions
      </h2>
      <div className="space-y-4">
        {archives.map((edition, index) => (
          <motion.div
            key={edition.month}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm text-white/70">
                    {edition.month}
                  </span>
                  <span className="text-sm text-white/70">
                    {edition.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-barlow font-bold text-white mb-4">
                  {edition.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {edition.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/90"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              <button className="text-white/70 hover:text-white transition-colors whitespace-nowrap">
                Read Now →
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Testimonial */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-4xl mb-6">
            "
          </div>
          <p className="text-xl text-white/90 mb-6">
            The monthly insights from CyberIntel's newsletter have been invaluable for keeping our security team ahead of emerging threats and industry best practices.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10" />
            <div className="text-left">
              <div className="font-semibold text-white">
                Sarah Thompson
              </div>
              <div className="text-sm text-white/70">
                CISO, Global Financial Services
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </ResourcePageLayout>
  );
};

export default Newsletter; 