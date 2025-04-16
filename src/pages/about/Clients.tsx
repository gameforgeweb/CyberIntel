import { motion } from 'framer-motion';
import ResourcePageLayout from '../../components/ResourcePageLayout';

const industries = [
  "All Industries",
  "Banking & Finance",
  "Healthcare",
  "Technology",
  "Manufacturing",
  "Government",
  "Retail"
];

const testimonials = [
  {
    name: "James Wilson",
    role: "CISO",
    company: "Global Financial Services Corp",
    industry: "Banking & Finance",
    quote: "CyberIntel's comprehensive security assessment helped us identify and remediate critical vulnerabilities before they could be exploited. Their team's expertise and professionalism are unmatched.",
    results: [
      "85% reduction in security incidents",
      "100% compliance with regulatory requirements",
      "Successful ISO 27001 certification"
    ],
    logo: "/clients/gfs-logo.png"
  },
  {
    name: "Dr. Sarah Chen",
    role: "CTO",
    company: "HealthTech Innovations",
    industry: "Healthcare",
    quote: "The thoroughness of CyberIntel's HIPAA compliance audit and their actionable recommendations helped us strengthen our security posture while maintaining regulatory compliance.",
    results: [
      "HIPAA compliance achieved",
      "Zero data breaches",
      "Enhanced patient data protection"
    ],
    logo: "/clients/healthtech-logo.png"
  },
  {
    name: "Michael Patel",
    role: "Head of Security",
    company: "TechCorp Solutions",
    industry: "Technology",
    quote: "CyberIntel's red team operations provided invaluable insights into our security gaps. Their detailed reporting and remediation guidance were instrumental in improving our defenses.",
    results: [
      "Critical vulnerabilities identified and fixed",
      "Security architecture improved",
      "DevSecOps practices implemented"
    ],
    logo: "/clients/techcorp-logo.png"
  }
];

const stats = [
  {
    value: "500+",
    label: "Satisfied Clients"
  },
  {
    value: "50+",
    label: "Fortune 500 Companies"
  },
  {
    value: "100%",
    label: "Client Retention Rate"
  },
  {
    value: "15+",
    label: "Industries Served"
  }
];

const Clients = () => {
  return (
    <ResourcePageLayout
      title="Our Clients"
      subtitle="Trusted by leading organizations worldwide to deliver exceptional cybersecurity services."
    >
      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
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

      {/* Testimonials */}
      <div className="space-y-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10"
          >
            <div className="p-8">
              <div className="flex items-start gap-8">
                <div className="w-32 h-32 rounded-xl bg-white/10 flex-shrink-0" />
                <div>
                  <div className="text-2xl mb-4">
                    "
                  </div>
                  <p className="text-lg text-white/90 mb-6">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-white/70">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-white/90">
                      Key Results:
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {testimonial.results.map((result) => (
                        <span
                          key={result}
                          className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/90"
                        >
                          {result}
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

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-2xl p-8 text-center"
      >
        <h2 className="text-2xl font-barlow font-bold text-white mb-4">
          Ready to Join Our Success Stories?
        </h2>
        <p className="text-white/70 mb-6 max-w-2xl mx-auto">
          Let us help you achieve your security and compliance goals with our industry-leading expertise and proven track record.
        </p>
        <button className="px-8 py-3 rounded-lg bg-white text-black font-barlow font-semibold hover:bg-opacity-90 transition-colors">
          Schedule a Consultation
        </button>
      </motion.div>
    </ResourcePageLayout>
  );
};

export default Clients; 