import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, filter: 'blur(8px)' },
  animate: { opacity: 1, filter: 'blur(0px)' },
  transition: { duration: 1.2 }
};

const clientLogos = [
  { name: "FINTECH CORP", industry: "Financial Technology" },
  { name: "GOVSEC SOLUTIONS", industry: "Government Security" },
  { name: "HEALTHNET AI", industry: "Healthcare Technology" },
  { name: "CLOUDEDGE SYSTEMS", industry: "Cloud Infrastructure" }
];

const Home = () => {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Background circles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Red circle */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{
            background: '#FF7878',
            filter: 'blur(100px)',
            top: '-200px',
            right: '-100px',
          }}
        />
        
        {/* Blue circle */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{
            background: '#5451FF',
            filter: 'blur(100px)',
            top: '-400px',
            left: '-200px',
          }}
        />

        {/* Backdrop blur layer */}
        <div className="absolute inset-0 backdrop-blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center">
          <div className="w-full">
            <div className="max-w-7xl mx-auto px-6">
              <motion.div
                initial="initial"
                animate="animate"
                className="mt-16 md:mt-20"
              >
                <motion.h1 
                  variants={fadeInUp}
                  transition={{ delay: 0.7, duration: 1.2 }}
                  className="text-5xl sm:text-6xl md:text-7xl font-barlow font-bold text-white max-w-4xl"
                >
                  Secure Your Digital Future with Advanced Threat Intelligence
                </motion.h1>
                <motion.p 
                  variants={fadeInUp}
                  transition={{ delay: 0.9, duration: 1.2 }}
                  className="text-xl md:text-2xl text-white/90 mt-6 max-w-2xl"
                >
                  Comprehensive cybersecurity solutions for modern enterprises. 
                  Stay ahead of threats with our expert assessments and compliance services.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Client Trust Section */}
        <section className="py-20 bg-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <p className="text-white/80 text-xl font-barlow mb-16">
                Trusted by Enterprises, Startups, and Critical Infrastructure Worldwide
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-stretch max-w-4xl mx-auto">
                {clientLogos.map((client, i) => (
                  <motion.div
                    key={client.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center h-full"
                  >
                    <motion.div
                      whileHover={{ 
                        y: -2,
                        boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                        backgroundColor: 'rgba(255,255,255,0.08)'
                      }}
                      transition={{ duration: 0.2 }}
                      className="w-full h-24 p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-200 group"
                    >
                      <h3 className="font-barlow font-bold text-lg md:text-xl text-white/90 group-hover:text-white transition-colors text-center">
                        {client.name}
                      </h3>
                    </motion.div>
                    <p className="mt-2 text-sm font-barlow text-white/50 text-center">
                      {client.industry}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-barlow font-bold text-white mb-12 text-center"
            >
              Our Core Services
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Web & Mobile App Security Testing",
                  desc: "Comprehensive security assessment of your web and mobile applications to identify vulnerabilities before they can be exploited."
                },
                {
                  title: "Network & Cloud Penetration Testing",
                  desc: "In-depth evaluation of your network infrastructure and cloud environments to ensure robust security posture."
                },
                {
                  title: "Compliance Readiness",
                  desc: "Expert guidance for ISO, SOC 2, GDPR, and HIPAA compliance, ensuring your systems meet regulatory requirements."
                },
                {
                  title: "Threat Modeling & Red Teaming",
                  desc: "Advanced security testing that simulates real-world cyber attacks to validate your security controls."
                }
              ].map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <h3 className="text-2xl font-barlow font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-white/80 mb-6">
                    {service.desc}
                  </p>
                  <div className="flex items-center text-white font-barlow font-semibold">
                    <span>Learn More</span>
                    <span className="inline-block ml-0 w-0 group-hover:w-2 group-hover:ml-2 transition-all duration-200 overflow-hidden">
                      →
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-to-b from-transparent to-black/40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-barlow font-bold text-white mb-8">
                  Why Choose CyberIntel
                </h2>
                <ul className="space-y-6">
                  {[
                    "CERT-In Empanelled Security Auditor",
                    "Proven success across multiple sectors",
                    "24/7 Threat Monitoring & Response",
                    "Scalable for startups & enterprises",
                    "Deep experience in regulated industries"
                  ].map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 text-white/90"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <blockquote className="text-2xl text-white/90 font-barlow mb-6">
                  "CyberIntel helped us identify blind spots before a major audit."
                </blockquote>
                <cite className="text-white/70 font-barlow">
                  — Jane Doe, CISO, FinTech Corp
                </cite>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-barlow font-bold text-white mb-12 text-center"
            >
              Stay Informed with Expert Insights
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {["Blogs", "Cyber Threat Reports", "Whitepapers"].map((type, i) => (
                <motion.div
                  key={type}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-xl font-barlow font-bold text-white mb-2">
                    {type}
                  </h3>
                  <p className="text-white/70 mb-4">
                    Latest insights and analysis from our security experts.
                  </p>
                  <a href="#" className="text-primary font-barlow font-semibold">
                    View All →
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 bg-gradient-to-b from-transparent to-secondary/20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-barlow font-bold text-white mb-6">
                Subscribe for cybersecurity insights and threat alerts
              </h2>
              <div className="flex gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-white/30"
                />
                <button className="px-6 py-3 rounded-lg bg-white text-black font-barlow font-semibold hover:bg-opacity-90 transition-colors">
                  Join the List
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="font-logo text-xl text-white mb-6">CYBERINTEL</h3>
                <p className="text-white/70">
                  Advanced cybersecurity solutions for the modern enterprise.
                </p>
              </div>
              <div>
                <h4 className="font-barlow font-bold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {["Home", "VAPT Services", "Compliance", "About Us", "Contact"].map(link => (
                    <li key={link}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-barlow font-bold text-white mb-4">Services</h4>
                <ul className="space-y-2">
                  {["Security Testing", "Compliance", "Red Teaming", "Threat Modeling"].map(service => (
                    <li key={service}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors">
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-white/10 text-center text-white/50">
              © {new Date().getFullYear()} CyberIntel. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home; 