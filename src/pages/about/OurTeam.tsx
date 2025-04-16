import { motion } from 'framer-motion';
import ResourcePageLayout from '../../components/ResourcePageLayout';

const departments = [
  "Leadership",
  "Security Research",
  "Compliance",
  "Penetration Testing",
  "Incident Response",
  "Advisory"
];

const teamMembers = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Chief Executive Officer",
    department: "Leadership",
    expertise: ["Cybersecurity Strategy", "Risk Management", "Enterprise Security"],
    experience: "20+ years",
    certifications: ["CISSP", "CISM"],
    education: "Ph.D. in Computer Science",
    bio: "Dr. Kumar brings over two decades of cybersecurity leadership experience, having previously led security initiatives at major financial institutions."
  },
  {
    name: "Sarah Chen",
    role: "Chief Research Officer",
    department: "Security Research",
    expertise: ["Threat Intelligence", "Malware Analysis", "Zero-Day Research"],
    experience: "15+ years",
    certifications: ["GREM", "GCFA"],
    education: "M.S. in Information Security",
    bio: "Leading our security research division, Sarah has discovered multiple critical vulnerabilities in enterprise systems."
  },
  {
    name: "Michael Patel",
    role: "Head of Compliance",
    department: "Compliance",
    expertise: ["ISO 27001", "GDPR", "HIPAA", "PCI DSS"],
    experience: "12+ years",
    certifications: ["CISA", "CRISC"],
    education: "MBA in Information Systems",
    bio: "Michael specializes in helping organizations navigate complex regulatory requirements and achieve compliance certifications."
  },
  {
    name: "Emma Thompson",
    role: "Director of Penetration Testing",
    department: "Penetration Testing",
    expertise: ["Red Teaming", "Web App Security", "Cloud Security"],
    experience: "10+ years",
    certifications: ["OSCP", "SANS GPEN"],
    education: "B.S. in Computer Engineering",
    bio: "Emma leads our elite team of ethical hackers, conducting advanced penetration testing and red team operations."
  },
  {
    name: "Alex Rivera",
    role: "Incident Response Lead",
    department: "Incident Response",
    expertise: ["Digital Forensics", "Threat Hunting", "IR Planning"],
    experience: "8+ years",
    certifications: ["GCIH", "EnCE"],
    education: "M.S. in Digital Forensics",
    bio: "Alex has led numerous incident response engagements for Fortune 500 companies, specializing in rapid containment and recovery."
  },
  {
    name: "Dr. Nina Patel",
    role: "Advisory Services Director",
    department: "Advisory",
    expertise: ["Security Architecture", "Zero Trust", "Cloud Security"],
    experience: "18+ years",
    certifications: ["CCSP", "TOGAF"],
    education: "Ph.D. in Information Security",
    bio: "Dr. Patel advises organizations on building robust security architectures and implementing zero trust frameworks."
  }
];

const OurTeam = () => {
  return (
    <ResourcePageLayout
      title="Our Team"
      subtitle="Meet the experts behind CyberIntel's industry-leading cybersecurity services."
    >
      {/* Department Filter */}
      <div className="mb-12 overflow-x-auto">
        <div className="flex gap-4 min-w-max">
          {departments.map((dept, index) => (
            <motion.button
              key={dept}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            >
              {dept}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Team Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10"
          >
            <div className="p-6">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-xl bg-white/10" />
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-xl font-barlow font-bold text-white">
                      {member.name}
                    </h3>
                  </div>
                  <div className="text-white/70 mb-1">{member.role}</div>
                  <div className="text-sm text-white/50 mb-4">
                    {member.experience} Experience
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 rounded-full bg-white/10 text-xs text-white/90"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-white/70 mb-4">
                {member.bio}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
                <div>Education: {member.education}</div>
                <div>•</div>
                <div>Certifications: {member.certifications.join(", ")}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Join Us Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-2xl p-8 text-center"
      >
        <h2 className="text-2xl font-barlow font-bold text-white mb-4">
          Join Our Team
        </h2>
        <p className="text-white/70 mb-6 max-w-2xl mx-auto">
          We're always looking for talented security professionals to join our team. If you're passionate about cybersecurity and want to make a difference, we'd love to hear from you.
        </p>
        <button className="px-8 py-3 rounded-lg bg-white text-black font-barlow font-semibold hover:bg-opacity-90 transition-colors">
          View Open Positions
        </button>
      </motion.div>
    </ResourcePageLayout>
  );
};

export default OurTeam; 