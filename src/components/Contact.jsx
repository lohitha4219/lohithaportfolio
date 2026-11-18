import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Loader2,
  Copy,
  Check,
  Info
} from 'lucide-react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/personal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'emailjs_success' | 'mailto_dispatched' | 'error'
  const [statusMessage, setStatusMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide a valid full name (minimum 2 characters)';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = 'Please enter a subject (minimum 3 characters)';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message with at least 10 characters';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrors({});

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      // Check if real EmailJS credentials are provided
      if (
        serviceId && 
        serviceId !== 'your_service_id_here' && 
        templateId && 
        templateId !== 'your_template_id_here' && 
        publicKey && 
        publicKey !== 'your_public_key_here'
      ) {
        // Send directly via EmailJS API
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          to_email: personalInfo.contact.email,
          subject: formData.subject,
          message: formData.message,
          timestamp: new Date().toLocaleString()
        };

        await emailjs.send(serviceId, templateId, templateParams, publicKey);

        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });

        setSubmitStatus('emailjs_success');
        setStatusMessage(`Your message was successfully delivered directly to ${personalInfo.contact.email} via EmailJS.`);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Real mail client fallback when EmailJS keys have not yet been provided in .env
        await new Promise((resolve) => setTimeout(resolve, 600));

        const mailtoLink = `mailto:${personalInfo.contact.email}?subject=${encodeURIComponent(
          `[Portfolio Contact] ${formData.subject}`
        )}&body=${encodeURIComponent(
          `Hello Lohitha,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
        )}`;

        window.location.href = mailtoLink;

        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        });

        setSubmitStatus('mailto_dispatched');
        setStatusMessage(`Your default email application was opened with this message addressed to ${personalInfo.contact.email}. To enable background automated delivery without opening an email client, configure EmailJS credentials in .env (see .env.example).`);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitStatus('error');
      setErrors({ form: 'An error occurred while sending. Please email directly at lohitha4219@gmail.com.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[#635BDB] dark:text-cyan-400 text-xs font-mono font-medium uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Initiate Communication</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#172033] dark:text-white tracking-tight"
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-[#526078] dark:text-slate-300/80 leading-relaxed"
          >
            Have a project in mind, an internship opportunity, or an entry-level SDE opening? Let's build something remarkable together.
          </motion.p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Info Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-[rgba(30,50,90,0.12)] dark:border-white/10 shadow-glass-light dark:shadow-glass">
              <h3 className="text-xl font-heading font-bold text-[#172033] dark:text-white mb-2">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-[#526078] dark:text-slate-300/80 mb-6 leading-relaxed">
                Feel free to reach out directly via email, phone, or connect across professional platforms.
              </p>

              {/* Contact Items */}
              <div className="space-y-3.5">
                {/* Email Box */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#EDF1FA] dark:bg-slate-900/50 border border-[rgba(30,50,90,0.08)] dark:border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-[#635BDB]/15 dark:bg-cyan-500/15 border border-[#635BDB]/25 dark:border-cyan-400/25 flex items-center justify-center text-[#635BDB] dark:text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#526078] dark:text-slate-400 block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${personalInfo.contact.email}`}
                      className="text-xs sm:text-sm font-mono text-[#172033] dark:text-slate-200 hover:text-[#635BDB] dark:hover:text-cyan-400 transition-colors truncate block"
                    >
                      {personalInfo.contact.email}
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    className="p-2 rounded-lg bg-white dark:bg-slate-800/60 hover:bg-[#EDF1FA] dark:hover:bg-slate-700/60 text-[#526078] dark:text-slate-300 hover:text-[#635BDB] dark:hover:text-cyan-300 transition-colors shadow-sm"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Box */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#EDF1FA] dark:bg-slate-900/50 border border-[rgba(30,50,90,0.08)] dark:border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#526078] dark:text-slate-400 block">
                      Phone / WhatsApp
                    </span>
                    <a
                      href={`tel:${personalInfo.contact.phone.replace(/\s+/g, '')}`}
                      className="text-xs sm:text-sm font-mono text-[#172033] dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {personalInfo.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Location Box */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#EDF1FA] dark:bg-slate-900/50 border border-[rgba(30,50,90,0.08)] dark:border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/25 flex items-center justify-center text-violet-600 dark:text-violet-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#526078] dark:text-slate-400 block">
                      Current Location
                    </span>
                    <span className="text-xs sm:text-sm text-[#172033] dark:text-slate-200">
                      {personalInfo.contact.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Online Profiles */}
              <div className="mt-8 pt-6 border-t border-[rgba(30,50,90,0.12)] dark:border-white/10">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#526078] dark:text-slate-400 block mb-3">
                  Online Profiles:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {personalInfo.socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#EDF1FA] dark:bg-slate-900/60 border border-[rgba(30,50,90,0.08)] dark:border-white/10 text-xs font-mono text-[#172033] dark:text-slate-300 hover:text-[#635BDB] dark:hover:text-cyan-400 hover:border-[#635BDB]/50 transition-all"
                    >
                      <span>{s.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability Notice */}
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping shrink-0" />
              <p className="text-xs font-mono text-emerald-800 dark:text-emerald-300">
                <strong>Status:</strong> {personalInfo.contact.availability}
              </p>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-7 border border-[rgba(30,50,90,0.12)] dark:border-white/10 shadow-glass-light dark:shadow-glass"
          >
            <h3 className="text-xl font-heading font-bold text-[#172033] dark:text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-[#526078] dark:text-slate-300/80 mb-6">
              Messages submitted here are dispatched to <strong className="text-[#172033] dark:text-white font-mono">{personalInfo.contact.email}</strong>.
            </p>

            {/* Success Status Notice */}
            {submitStatus && submitStatus !== 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-900 dark:text-emerald-300 text-sm mb-6 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-heading font-bold">
                    {submitStatus === 'emailjs_success' ? 'Email Delivered Successfully!' : 'Email Message Initiated!'}
                  </h5>
                  <p className="text-xs mt-0.5 leading-relaxed">
                    {statusMessage}
                  </p>
                </div>
              </motion.div>
            )}

            {errors.form && (
              <div className="p-3.5 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-700 dark:text-rose-300 text-xs mb-5 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-500 dark:text-rose-400 shrink-0" />
                <span>{errors.form}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Full Name */}
              <div>
                <label className="block text-xs font-mono font-medium text-[#172033] dark:text-slate-300 mb-1.5">
                  Full Name <span className="text-[#635BDB] dark:text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className={`w-full px-4 py-3 rounded-xl bg-[#EDF1FA] dark:bg-slate-900/60 border ${
                    errors.name ? 'border-rose-500' : 'border-[rgba(30,50,90,0.12)] dark:border-white/10'
                  } focus:border-[#635BDB] dark:focus:border-cyan-400 focus:outline-none text-sm text-[#172033] dark:text-slate-100 placeholder:text-[#526078]/60 dark:placeholder:text-slate-500 transition-colors`}
                />
                {errors.name && (
                  <p className="text-[11px] text-rose-600 dark:text-rose-400 mt-1 font-mono">{errors.name}</p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-mono font-medium text-[#172033] dark:text-slate-300 mb-1.5">
                  Email Address <span className="text-[#635BDB] dark:text-cyan-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@example.com"
                  className={`w-full px-4 py-3 rounded-xl bg-[#EDF1FA] dark:bg-slate-900/60 border ${
                    errors.email ? 'border-rose-500' : 'border-[rgba(30,50,90,0.12)] dark:border-white/10'
                  } focus:border-[#635BDB] dark:focus:border-cyan-400 focus:outline-none text-sm text-[#172033] dark:text-slate-100 placeholder:text-[#526078]/60 dark:placeholder:text-slate-500 transition-colors`}
                />
                {errors.email && (
                  <p className="text-[11px] text-rose-600 dark:text-rose-400 mt-1 font-mono">{errors.email}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-mono font-medium text-[#172033] dark:text-slate-300 mb-1.5">
                  Subject <span className="text-[#635BDB] dark:text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Software Developer Opportunity"
                  className={`w-full px-4 py-3 rounded-xl bg-[#EDF1FA] dark:bg-slate-900/60 border ${
                    errors.subject ? 'border-rose-500' : 'border-[rgba(30,50,90,0.12)] dark:border-white/10'
                  } focus:border-[#635BDB] dark:focus:border-cyan-400 focus:outline-none text-sm text-[#172033] dark:text-slate-100 placeholder:text-[#526078]/60 dark:placeholder:text-slate-500 transition-colors`}
                />
                {errors.subject && (
                  <p className="text-[11px] text-rose-600 dark:text-rose-400 mt-1 font-mono">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono font-medium text-[#172033] dark:text-slate-300 mb-1.5">
                  Message <span className="text-[#635BDB] dark:text-cyan-400">*</span>
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message, project scope, or opportunity details..."
                  className={`w-full px-4 py-3 rounded-xl bg-[#EDF1FA] dark:bg-slate-900/60 border ${
                    errors.message ? 'border-rose-500' : 'border-[rgba(30,50,90,0.12)] dark:border-white/10'
                  } focus:border-[#635BDB] dark:focus:border-cyan-400 focus:outline-none text-sm text-[#172033] dark:text-slate-100 placeholder:text-[#526078]/60 dark:placeholder:text-slate-500 transition-colors resize-none`}
                />
                {errors.message && (
                  <p className="text-[11px] text-rose-600 dark:text-rose-400 mt-1 font-mono">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-heading font-semibold text-sm text-white dark:text-slate-950 bg-[#635BDB] dark:bg-gradient-to-r dark:from-cyan-400 dark:to-sky-400 hover:opacity-95 dark:hover:from-cyan-300 dark:hover:to-sky-300 shadow-glow-accent dark:shadow-glow-cyan transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Processing Delivery...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message to Lohitha</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
