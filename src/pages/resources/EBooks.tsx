import { motion } from 'framer-motion';
import ResourcePageLayout from '../../components/ResourcePageLayout';

const ebooks = [
  {
    id: 1,
    title: "CISO's Guide to Zero Trust Security",
    description: "A comprehensive guide for security leaders on implementing and maintaining a Zero Trust architecture in enterprise environments.",
    audience: ["CISOs", "Security Directors", "IT Leaders"],
    topics: [
      "Zero Trust Principles",
      "Identity & Access Management",
      "Network Segmentation",
      "Security Monitoring"
    ],
    pages: 85,
    format: "PDF & EPUB",
    image: "/ebooks/zero-trust.jpg"
  },
  {
    id: 2,
    title: "DevSecOps Implementation Handbook",
    description: "Practical strategies for integrating security into the development lifecycle, with real-world examples and best practices.",
    audience: ["Security Engineers", "DevOps Teams", "Development Leads"],
    topics: [
      "Security as Code",
      "CI/CD Security",
      "Container Security",
      "Automated Testing"
    ],
    pages: 120,
    format: "PDF & EPUB",
    image: "/ebooks/devsecops.jpg"
  },
  {
    id: 3,
    title: "Cloud Security Architecture Blueprint",
    description: "Essential guide for designing and implementing secure cloud infrastructure across major cloud providers.",
    audience: ["Cloud Architects", "Security Engineers", "IT Administrators"],
    topics: [
      "Cloud Security Controls",
      "Identity Management",
      "Data Protection",
      "Compliance"
    ],
    pages: 95,
    format: "PDF & EPUB",
    image: "/ebooks/cloud-security.jpg"
  }
];

const EBooks = () => {
  return (
    <ResourcePageLayout
      title="Cybersecurity E-Books"
      subtitle="In-depth educational resources for security professionals, IT administrators, and technology leaders."
    >
      {/* E-Books Grid */}
      <div className="grid md:grid-cols-2 gap-12">
        {ebooks.map((book, index) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10"
          >
            {/* Book Preview */}
            <div className="aspect-[16/9] bg-black/30 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h2 className="text-2xl font-barlow font-bold text-white mb-2">
                  {book.title}
                </h2>
                <div className="flex items-center gap-4 text-sm text-white/70">
                  <span>{book.pages} pages</span>
                  <span>•</span>
                  <span>{book.format}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <p className="text-white/70 mb-6">
                {book.description}
              </p>

              {/* Target Audience */}
              <div className="mb-6">
                <h3 className="text-lg font-barlow font-semibold text-white mb-3">
                  Target Audience
                </h3>
                <div className="flex flex-wrap gap-2">
                  {book.audience.map((role) => (
                    <span
                      key={role}
                      className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/90"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Topics Covered */}
              <div className="mb-8">
                <h3 className="text-lg font-barlow font-semibold text-white mb-3">
                  Topics Covered
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {book.topics.map((topic) => (
                    <div
                      key={topic}
                      className="flex items-center gap-2 text-white/70"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download Options */}
              <div className="flex gap-4">
                <button className="flex-1 px-6 py-3 rounded-lg bg-white text-black font-barlow font-semibold hover:bg-opacity-90 transition-colors">
                  Download PDF
                </button>
                <button className="flex-1 px-6 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors">
                  Download EPUB
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Request Custom Guide */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
      >
        <h2 className="text-2xl font-barlow font-bold text-white mb-4">
          Need a Custom Security Guide?
        </h2>
        <p className="text-white/70 mb-6 max-w-2xl mx-auto">
          Our security experts can create tailored educational materials for your organization's specific needs and compliance requirements.
        </p>
        <button className="px-8 py-3 rounded-lg bg-white text-black font-barlow font-semibold hover:bg-opacity-90 transition-colors">
          Request Custom Guide
        </button>
      </motion.div>
    </ResourcePageLayout>
  );
};

export default EBooks; 