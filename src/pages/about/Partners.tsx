import { motion } from 'framer-motion';
import ResourcePageLayout from '../../components/ResourcePageLayout';

const partnerCategories = [
  "Technology Partners",
  "Solution Providers",
  "Research Collaborators",
  "Training Partners",
  "Industry Alliances"
];

const partners = [
  {
    name: "CloudGuard Technologies",
    category: "Technology Partners",
    description: "Strategic partnership for cloud security solutions and automated compliance monitoring.",
    benefits: [
      "Integrated cloud security solutions",
      "Automated compliance monitoring",
      "Real-time threat detection"
    ],
    logo: "/partners/cloudguard.png",
    since: "2020"
  },
  {
    name: "SecureStack Solutions",
    category: "Solution Providers",
    description: "Collaboration on advanced security tools and vulnerability management platforms.",
    benefits: [
      "Enterprise security solutions",
      "Vulnerability management",
      "Security automation"
    ],
    logo: "/partners/securestack.png",
    since: "2021"
  },
  {
    name: "CyberResearch Institute",
    category: "Research Collaborators",
    description: "Joint research initiatives in emerging threats and advanced defensive strategies.",
    benefits: [
      "Threat research collaboration",
      "Industry publications",
      "Innovation in security"
    ],
    logo: "/partners/cyberresearch.png",
    since: "2019"
  },
  {
    name: "SecurityEdu Global",
    category: "Training Partners",
    description: "Partnership for cybersecurity training and certification programs.",
    benefits: [
      "Professional certifications",
      "Hands-on training",
      "Skill development"
    ],
    logo: "/partners/securityedu.png",
    since: "2022"
  }
];

const achievements = [
  {
    value: "25+",
    label: "Strategic Partners"
  },
  {
    value: "100+",
    label: "Joint Projects"
  },
  {
    value: "15+",
    label: "Countries"
  },
  {
    value: "50+",
    label: "Joint Publications"
  }
];

const Partners = () => {
  return (
    <ResourcePageLayout
      title="Our Partners"
      subtitle="Strategic partnerships and collaborations that enhance our cybersecurity capabilities and service offerings."
    >
      {/* Achievement Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {achievements.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10"
          >
            <div className="text-3xl font-barlow font-bold text-white mb-2">
              {stat.value}
            </div>
            <div className="text-white/70">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Category Filter */}
      <div className="mb-12 overflow-x-auto">
        <div className="flex gap-4 min-w-max">
          {partnerCategories.map((category, index) => (
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

      {/* Partners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10"
          >
            <div className="p-6">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-xl bg-white/10" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-barlow font-bold text-white">
                      {partner.name}
                    </h3>
                    <span className="text-sm text-white/50">
                      Partner since {partner.since}
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/90 mb-4 inline-block">
                    {partner.category}
                  </span>
                  <p className="text-white/70 mb-4">
                    {partner.description}
                  </p>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-white/90">
                      Partnership Benefits:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {partner.benefits.map((benefit) => (
                        <span
                          key={benefit}
                          className="px-2 py-1 rounded-full bg-white/10 text-xs text-white/90"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Partnership Inquiry Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-2xl p-8 text-center"
      >
        <h2 className="text-2xl font-barlow font-bold text-white mb-4">
          Become a Partner
        </h2>
        <p className="text-white/70 mb-6 max-w-2xl mx-auto">
          Join our partner ecosystem to collaborate on innovative cybersecurity solutions and expand your market reach.
        </p>
        <button className="px-8 py-3 rounded-lg bg-white text-black font-barlow font-semibold hover:bg-opacity-90 transition-colors">
          Partner with Us
        </button>
      </motion.div>
    </ResourcePageLayout>
  );
};

export default Partners; 