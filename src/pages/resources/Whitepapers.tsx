import { motion } from 'framer-motion';
import ResourcePageLayout from '../../components/ResourcePageLayout';

const whitepapers = [
  {
    id: 1,
    title: "Zero Trust Security Implementation Guide",
    description: "Technical deep-dive into implementing Zero Trust architecture, including identity management, network segmentation, and continuous monitoring strategies.",
    topics: ["Zero Trust", "Identity Management", "Network Security"],
    pages: 45,
    publishDate: "March 2024",
    fileSize: "2.8 MB",
    authors: ["Dr. James Wilson", "Sarah Chen"]
  },
  {
    id: 2,
    title: "Cloud Security Architecture Blueprint 2024",
    description: "Comprehensive guide to securing cloud infrastructure across AWS, Azure, and GCP, with focus on compliance and best practices.",
    topics: ["Cloud Security", "Multi-Cloud", "Compliance"],
    pages: 62,
    publishDate: "February 2024",
    fileSize: "3.5 MB",
    authors: ["Raj Patel", "Emma Thompson"]
  },
  {
    id: 3,
    title: "Ransomware Defense Playbook",
    description: "Advanced strategies for preventing, detecting, and responding to ransomware attacks, including incident response procedures.",
    topics: ["Ransomware", "Incident Response", "Data Protection"],
    pages: 38,
    publishDate: "January 2024",
    fileSize: "2.1 MB",
    authors: ["Michael Chang"]
  },
  {
    id: 4,
    title: "API Security Best Practices Guide",
    description: "In-depth analysis of API security vulnerabilities and implementation of security controls in modern applications.",
    topics: ["API Security", "Application Security", "OWASP Top 10"],
    pages: 55,
    publishDate: "December 2023",
    fileSize: "3.2 MB",
    authors: ["Alex Rivera", "Nina Patel"]
  }
];

const topics = [
  "All Topics",
  "Zero Trust",
  "Cloud Security",
  "Application Security",
  "Incident Response",
  "Compliance",
  "Data Protection"
];

const Whitepapers = () => {
  return (
    <ResourcePageLayout
      title="Security Whitepapers"
      subtitle="In-depth technical research and implementation guides for security professionals."
    >
      {/* Topic Filter */}
      <div className="mb-12 overflow-x-auto">
        <div className="flex gap-4 min-w-max">
          {topics.map((topic, index) => (
            <motion.button
              key={topic}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            >
              {topic}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Whitepapers Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {whitepapers.map((paper, index) => (
          <motion.div
            key={paper.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="text-xl font-barlow font-bold text-white">
                {paper.title}
              </h3>
              <div className="flex flex-col items-end">
                <span className="text-sm text-white/70">{paper.pages} pages</span>
                <span className="text-sm text-white/70">{paper.fileSize}</span>
              </div>
            </div>

            <p className="text-white/70 mb-6">
              {paper.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {paper.topics.map((topic) => (
                <span
                  key={topic}
                  className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/90"
                >
                  {topic}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm text-white/70">
                <div>Published: {paper.publishDate}</div>
                <div>Authors: {paper.authors.join(", ")}</div>
              </div>
              <button className="px-6 py-2 rounded-lg bg-white text-black font-barlow font-semibold hover:bg-opacity-90 transition-colors">
                Download PDF
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Request Custom Research */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
      >
        <h2 className="text-2xl font-barlow font-bold text-white mb-4">
          Need Custom Security Research?
        </h2>
        <p className="text-white/70 mb-6 max-w-2xl mx-auto">
          Our security research team can conduct specialized research and create custom whitepapers tailored to your organization's specific needs.
        </p>
        <button className="px-8 py-3 rounded-lg bg-white text-black font-barlow font-semibold hover:bg-opacity-90 transition-colors">
          Request Custom Research
        </button>
      </motion.div>
    </ResourcePageLayout>
  );
};

export default Whitepapers; 