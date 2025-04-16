import { motion } from 'framer-motion';
import ResourcePageLayout from '../../components/ResourcePageLayout';

const categories = [
  "All",
  "Press Releases",
  "News Articles",
  "Industry Reports",
  "Interviews",
  "Awards"
];

const mediaItems = [
  {
    title: "CyberIntel Recognized as Leader in Cybersecurity Services",
    source: "CyberSecurity Today",
    date: "March 15, 2024",
    category: "News Articles",
    excerpt: "CyberIntel has been recognized for its outstanding contributions to the cybersecurity industry, particularly in the areas of threat intelligence and incident response...",
    link: "#",
    image: "/media/cybersecurity-today.png"
  },
  {
    title: "CyberIntel Launches Advanced Threat Detection Platform",
    source: "Company Press Release",
    date: "February 28, 2024",
    category: "Press Releases",
    excerpt: "CyberIntel announces the launch of its next-generation threat detection platform, incorporating AI and machine learning capabilities to enhance security operations...",
    link: "#",
    image: "/media/press-release.png"
  },
  {
    title: "The Future of Cybersecurity: Interview with CyberIntel CEO",
    source: "Tech Insights Magazine",
    date: "January 20, 2024",
    category: "Interviews",
    excerpt: "In an exclusive interview, CyberIntel's CEO discusses emerging cybersecurity trends, the role of AI in security, and the company's vision for the future...",
    link: "#",
    image: "/media/tech-insights.png"
  },
  {
    title: "CyberIntel Wins Best Security Service Provider Award",
    source: "Global Security Awards",
    date: "December 10, 2023",
    category: "Awards",
    excerpt: "CyberIntel has been awarded the prestigious Best Security Service Provider award at the annual Global Security Awards ceremony...",
    link: "#",
    image: "/media/awards.png"
  }
];

const featuredReport = {
  title: "State of Cybersecurity 2024",
  description: "Our comprehensive analysis of cybersecurity trends, threats, and best practices based on data from thousands of security assessments and incident responses.",
  stats: [
    { value: "500+", label: "Organizations Analyzed" },
    { value: "1000+", label: "Security Incidents Reviewed" },
    { value: "50+", label: "Industry Experts Consulted" }
  ],
  downloadLink: "#"
};

const MediaCoverage = () => {
  return (
    <ResourcePageLayout
      title="Media Coverage"
      subtitle="Latest news, press releases, and industry recognition of our cybersecurity expertise and achievements."
    >
      {/* Featured Report */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-2xl p-8 mb-12"
      >
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-barlow font-bold text-white mb-4">
              {featuredReport.title}
            </h2>
            <p className="text-white/70 mb-6">
              {featuredReport.description}
            </p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {featuredReport.stats.map((stat) => (
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

      {/* Media Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {mediaItems.map((item, index) => (
          <motion.div
            key={item.title}
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
                  {item.category}
                </span>
                <span className="text-sm text-white/50">
                  {item.date}
                </span>
              </div>
              <h3 className="text-xl font-barlow font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-white/70 mb-4">
                {item.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/50">
                  Source: {item.source}
                </span>
                <a
                  href={item.link}
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  Read More →
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Press Kit Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center"
      >
        <h2 className="text-2xl font-barlow font-bold text-white mb-4">
          Press Kit & Media Resources
        </h2>
        <p className="text-white/70 mb-6 max-w-2xl mx-auto">
          Download our press kit for company logos, executive headshots, product screenshots, and brand guidelines.
        </p>
        <button className="px-8 py-3 rounded-lg bg-white text-black font-barlow font-semibold hover:bg-opacity-90 transition-colors">
          Download Press Kit
        </button>
      </motion.div>
    </ResourcePageLayout>
  );
};

export default MediaCoverage; 