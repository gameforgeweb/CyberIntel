import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState({ text: '', isError: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (showToast) {
      timer = setTimeout(() => {
        setShowToast(false);
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [showToast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_PUBLIC_KEY'
      );

      setToastMessage({
        text: 'Message sent successfully! We\'ll get back to you soon.',
        isError: false
      });
      setShowToast(true);
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitStatus("success");
    } catch (error) {
      setToastMessage({
        text: 'Failed to send message. Please try again later.',
        isError: true
      });
      setShowToast(true);
      console.error('Error sending email:', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="container mx-auto px-4 py-12 relative"
    >
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-8 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg z-50 ${
              toastMessage.isError 
                ? 'bg-gradient-to-r from-red-500 to-red-600'
                : 'bg-gradient-to-r from-[#5451FF] to-[#FF7878]'
            } text-white`}
          >
            {toastMessage.text}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        <p className="text-gray-400 text-center mb-12">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-barlow font-medium text-white/70 mb-2">
                First and Last Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={handleChange}
                name="name"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-barlow font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-barlow font-medium text-white/70 mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={handleChange}
                name="email"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-barlow font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-barlow font-medium text-white/70 mb-2">
              Subject
            </label>
            <input
              type="text"
              value={formData.subject}
              onChange={handleChange}
              name="subject"
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-barlow font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              placeholder="How can we help?"
            />
          </div>

          <div>
            <label className="block text-sm font-barlow font-medium text-white/70 mb-2">
              Message
            </label>
            <textarea
              value={formData.message}
              onChange={handleChange}
              name="message"
              required
              rows={6}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-barlow font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              placeholder="Tell us about your requirements..."
            />
          </div>

          <div className="flex justify-center">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="relative px-8 py-4 bg-black rounded-lg font-barlow font-medium text-white overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Invisible border */}
              <div className="absolute inset-0 rounded-lg border border-transparent" />

              {/* Moving light effect */}
              <div className="absolute inset-0 rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div 
                  className="absolute w-[500%] h-[500%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:animate-[spin_3s_linear_infinite]"
                >
                  <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)]" />
                  <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] blur-[2px]" />
                  <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] blur-[4px] opacity-50" />
                  <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] blur-[6px] opacity-30" />
                </div>
              </div>

              <div className="absolute inset-[1px] rounded-lg bg-black" />

              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ scale: 0, opacity: 0 }}
                animate={isSubmitting ? { scale: 1, opacity: 0.2 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
              />

              <span className="relative z-10">
                {isSubmitting ? "Sending..." : "Send Message"}
              </span>
            </motion.button>
          </div>

          {submitStatus === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-green-500 font-barlow font-medium"
            >
              Message sent successfully!
            </motion.p>
          )}

          {submitStatus === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-red-500 font-barlow font-medium"
            >
              Failed to send message. Please try again.
            </motion.p>
          )}
        </motion.form>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="mb-4">
              <i className="fas fa-map-marker-alt text-2xl text-blue-500"></i>
            </div>
            <h3 className="text-lg font-medium mb-2">Our Location</h3>
            <p className="text-gray-400">123 Business Street<br />New York, NY 10001</p>
          </div>

          <div className="text-center">
            <div className="mb-4">
              <i className="fas fa-phone text-2xl text-blue-500"></i>
            </div>
            <h3 className="text-lg font-medium mb-2">Phone</h3>
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </div>

          <div className="text-center">
            <div className="mb-4">
              <i className="fas fa-envelope text-2xl text-blue-500"></i>
            </div>
            <h3 className="text-lg font-medium mb-2">Email</h3>
            <p className="text-gray-400">contact@cyberintel.com</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
