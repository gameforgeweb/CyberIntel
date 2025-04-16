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
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      setToastMessage({
        text: 'Message sent successfully! We\'ll get back to you soon.',
        isError: false
      });
      setShowToast(true);
      
      // Clear form
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
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-barlow font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Your name"
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
              className="relative px-8 py-4 bg-gradient-to-r from-[#5451FF] to-[#FF7878] rounded-lg font-barlow font-medium text-white overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ scale: 0, opacity: 0 }}
                animate={isSubmitting ? { scale: 1, opacity: 0.2 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#FF7878] to-[#5451FF]"
                initial={{ x: "100%" }}
                animate={{ x: isSubmitting ? "0%" : "100%" }}
                transition={{ duration: 1, repeat: isSubmitting ? Infinity : 0 }}
              />
              <span className="relative">
                {isSubmitting ? "Sending..." : "Send Message"}
              </span>
              <motion.div
                className="absolute top-0 right-0 -mt-1 -mr-1 h-3 w-3"
                initial={false}
                animate={submitStatus === "success" ? { scale: [0, 1.2, 1], opacity: [0, 1, 0] } : {}}
              >
                <span className="block h-full w-full rounded-full bg-green-500" />
              </motion.div>
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