import { motion } from 'framer-motion';
import ResourcePageLayout from '../../components/ResourcePageLayout';

const categories = [
  "All",
  "Threat Intelligence",
  "Compliance Updates",
  "Industry News",
  "Research Insights",
  "Best Practices"
];

const newsletters = [
  {
    title: "CyberIntel Monthly Digest",
    category: "Industry News",
    date: "March 2024",
    description: "Stay updated with the latest cybersecurity trends, emerging threats, and industry developments.",
    topics: [
      "AI in Cybersecurity",
      "Zero Trust Architecture",
      "Cloud Security Trends"
    ],
    image: "/newsletters/monthly-digest.png"
  },
  {
    title: "Threat Intelligence Report",
    category: "Threat Intelligence",
    date: "February 2024",
    description: "Deep dive into recent cyber threats, attack patterns, and defensive strategies.",
    topics: [
      "Ransomware Evolution",
      "APT Group Activities",
      "Supply Chain Attacks"
    ],
    image: "/newsletters/threat-intel.png"
  },
  {
    title: "Compliance Compass",
    category: "Compliance Updates",
    date: "January 2024",
    description: "Navigate the complex landscape of cybersecurity regulations and compliance requirements.",
    topics: [
      "GDPR Updates",
      "DPDP Act Implementation",
      "Industry Standards"
    ],
    image: "/newsletters/compliance.png"
  },
  {
    title: "Security Research Insights",
    category: "Research Insights",
    date: "December 2023",
    description: "Latest findings from our security research team on vulnerabilities and attack vectors.",
    topics: [
      "Zero-Day Research",
      "Exploit Analysis",
      "Security Tools"
    ],
    image: "/newsletters/research.png"
  }
];

const featuredNewsletter = {
  title: "2024 Cybersecurity Forecast",
  description: "Our comprehensive analysis of emerging cybersecurity trends, challenges, and predictions for the year ahead.",
  stats: [
    { value: "10+", label: "Industry Experts" },
    { value: "5", label: "Key Trends" },
    { value: "25+", label: "Actionable Insights" }
  ],
  image: "/newsletters/forecast-2024.png"
};

const Newsletters = () => {
  return (
    <ResourcePageLayout
      title="Newsletters"
      subtitle="Stay informed with our expert insights on cybersecurity trends, threats, and best practices."
    >
      {/* Featured Newsletter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-2xl p-8 mb-12"
      >
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-barlow font-bold text-white mb-4">
              {featuredNewsletter.title}
            </h2>
            <p className="text-white/70 mb-6">
              {featuredNewsletter.description}
            </p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {featuredNewsletter.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <button className="px-6 py-2 rounded-lg bg-white text-black font-barlow font-semibold hover:bg-opacity-90 transition-colors">
              Download Report
            </button>
          </div>
          <div className="w-full md:w-80 h-48 bg-white/10 rounded-xl" />
        </div>
      </motion.div>

      {/* Category Filter */}
      <div className="mb-12 overflow-x-auto">
        <div className="flex gap-4 min-w-max">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Newsletters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {newsletters.map((newsletter, index) => (
          <motion.div
            key={newsletter.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10"
          >
            <div className="h-48 bg-white/10" />
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/90">
                  {newsletter.category}
                </span>
                <span className="text-sm text-white/50">
                  {newsletter.date}
                </span>
              </div>
              <h3 className="text-xl font-barlow font-semibold text-white mb-3">
                {newsletter.title}
              </h3>
              <p className="text-white/70 mb-4">
                {newsletter.description}
              </p>
              <div className="space-y-2">
                <div className="text-sm font-semibold text-white/90">
                  Key Topics:
                </div>
                <div className="flex flex-wrap gap-2">
                  {newsletter.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 rounded-full bg-white/10 text-xs text-white/90"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
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
        className="mt-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center"
      >
        <h2 className="text-2xl font-barlow font-bold text-white mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-white/70 mb-6 max-w-2xl mx-auto">
          Get the latest cybersecurity insights, threat intelligence, and industry updates delivered to your inbox.
        </p>
        <div className="flex gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-white/20"
          />
          <button className="px-6 py-2 rounded-lg bg-white text-black font-barlow font-semibold hover:bg-opacity-90 transition-colors">
            Subscribe
          </button>
        </div>
      </motion.div>
    </ResourcePageLayout>
  );
};

export default Newsletters; 