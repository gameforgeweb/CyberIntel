import { motion } from 'framer-motion';
import ResourcePageLayout from '../../components/ResourcePageLayout';

const initiatives = [
  {
    title: "Cyber Safety Workshops",
    description: "Interactive sessions on digital safety, privacy, and secure online practices for different age groups.",
    audience: "Students, Parents, Teachers",
    duration: "2-3 hours",
    mode: "Online/Offline"
  },
  {
    title: "Security Awareness Training",
    description: "Comprehensive training modules covering phishing prevention, password hygiene, and social engineering.",
    audience: "Corporate Employees, Government Staff",
    duration: "4-6 hours",
    mode: "Online with Assessments"
  },
  {
    title: "Cyber Safety Exhibition",
    description: "Interactive displays and demonstrations of cyber threats, defense mechanisms, and best practices.",
    audience: "General Public",
    duration: "Full Day",
    mode: "Physical Event"
  }
];

const resources = [
  {
    title: "Educational Materials",
    items: [
      "Cyber Safety Handbooks",
      "Interactive Quizzes",
      "Video Tutorials",
      "Infographics",
      "Case Studies"
    ]
  },
  {
    title: "Training Tools",
    items: [
      "Phishing Simulators",
      "Password Strength Testers",
      "Security Assessment Tools",
      "Mobile Security Checkers",
      "Privacy Settings Guides"
    ]
  },
  {
    title: "Awareness Collateral",
    items: [
      "Posters & Banners",
      "Social Media Kits",
      "Email Templates",
      "Presentation Decks",
      "Activity Worksheets"
    ]
  }
];

const CyberJagrukta = () => {
  return (
    <ResourcePageLayout
      title="Cyber Jagrukta Divas"
      subtitle="Empowering citizens with cybersecurity awareness and digital safety education."
    >
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-2xl p-8 mb-12 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-barlow font-bold text-white mb-4">
          Join the Cyber Safety Movement
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto mb-8">
          Participate in our nationwide initiative to promote cyber awareness and build a secure digital India. Together, we can create a safer cyberspace for everyone.
        </p>
        <button className="px-8 py-4 rounded-lg bg-white text-black font-barlow font-semibold hover:bg-opacity-90 transition-colors">
          Register for Next Event
        </button>
      </motion.div>

      {/* Initiatives Grid */}
      <h2 className="text-2xl font-barlow font-bold text-white mb-6">
        Our Initiatives
      </h2>
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {initiatives.map((initiative, index) => (
          <motion.div
            key={initiative.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <h3 className="text-xl font-barlow font-bold text-white mb-4">
              {initiative.title}
            </h3>
            <p className="text-white/70 mb-4">
              {initiative.description}
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/70">
                <span className="font-semibold">Audience:</span>
                <span>{initiative.audience}</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <span className="font-semibold">Duration:</span>
                <span>{initiative.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <span className="font-semibold">Mode:</span>
                <span>{initiative.mode}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Resources Section */}
      <h2 className="text-2xl font-barlow font-bold text-white mb-6">
        Available Resources
      </h2>
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {resources.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <h3 className="text-xl font-barlow font-bold text-white mb-4">
              {category.title}
            </h3>
            <div className="space-y-3">
              {category.items.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-white/70"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Get Involved Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
      >
        <h2 className="text-2xl font-barlow font-bold text-white mb-6">
          Get Involved
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-barlow font-bold text-white mb-4">
              For Organizations
            </h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Host awareness workshops</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Sponsor cyber safety events</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Partner for training programs</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Contribute educational content</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-barlow font-bold text-white mb-4">
              For Individuals
            </h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Volunteer as cyber awareness ambassador</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Join community outreach programs</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Share awareness content</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Participate in cyber safety events</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </ResourcePageLayout>
  );
};

export default CyberJagrukta; 