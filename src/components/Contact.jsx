import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp, FaCopy, FaCheck } from 'react-icons/fa';
import { MdOutlineMail, MdPhone, MdLocationOn, MdSend } from 'react-icons/md';
import { personalInfo } from '../data/portfolioData';
import emailjs from '@emailjs/browser';    

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const formRef = useRef(null);
  const { handleSubmit, register, reset, formState: { errors } } = useForm();
  const [copiedType, setCopiedType] = useState(null);
  const [submitState, setSubmitState] = useState('idle');

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleContact = async (data) => {
    setSubmitState('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  data.name,
          from_email: data.email,
          message:    data.message,
          to_name:    personalInfo.name,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitState('success');
      reset();
      setTimeout(() => setSubmitState('idle'), 6000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitState('error');
      setTimeout(() => setSubmitState('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">
            Let's Talk
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-4">
            Have a project in mind, an opportunity, or want to discuss modern web development? Reach out directly!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0d142c]/90 to-[#070b19] border border-white/10 backdrop-blur-xl shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white">
                Contact Information
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5 overflow-hidden">
                    <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center text-xl flex-shrink-0">
                      <MdOutlineMail />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Email</p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-medium text-slate-200 hover:text-indigo-400 transition truncate block"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalInfo.email, 'email')}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition"
                    title="Copy Email"
                  >
                    {copiedType === 'email' ? <FaCheck className="text-emerald-400 text-xs" /> : <FaCopy className="text-xs" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center text-xl flex-shrink-0">
                      <MdPhone />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Phone / WhatsApp</p>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="text-xs sm:text-sm font-medium text-slate-200 hover:text-indigo-400 transition"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition"
                    title="Copy Phone"
                  >
                    {copiedType === 'phone' ? <FaCheck className="text-emerald-400 text-xs" /> : <FaCopy className="text-xs" />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center text-xl flex-shrink-0">
                    <MdLocationOn />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Location</p>
                    <p className="text-xs sm:text-sm font-medium text-slate-200">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="pt-2">
                <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3">
                  Connect Across Platforms
                </p>
                <div className="flex gap-2.5">
                  {[
                    { icon: <FaLinkedin />, href: personalInfo.socials.linkedin, label: "LinkedIn" },
                    { icon: <FaGithub />, href: personalInfo.socials.github, label: "GitHub" },
                    { icon: <FaFacebook />, href: personalInfo.socials.facebook, label: "Facebook" },
                    { icon: <FaWhatsapp />, href: personalInfo.socials.whatsapp, label: "WhatsApp" },
                  ].map((s, idx) => (
                    <motion.a
                      key={idx}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 rounded-xl bg-white/[0.05] hover:bg-gradient-to-tr hover:from-indigo-600 hover:to-purple-600 text-slate-300 hover:text-white flex items-center justify-center text-lg border border-white/10 transition shadow-md"
                    >
                      {s.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0d142c]/90 to-[#070b19] border border-white/10 backdrop-blur-xl shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-1">
                Send a Direct Message
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6"> Your message will go directly to my Gmail. ✉️ </p>

              <form ref={formRef} onSubmit={handleSubmit(handleContact)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Your Name</label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      disabled={submitState === 'sending'}
                      className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition disabled:opacity-50"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <p className="text-rose-400 text-xs">{errors.name.message}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Your Email</label>
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      disabled={submitState === 'sending'}
                      className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition disabled:opacity-50"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+\.\S+$/i,
                          message: "Please enter a valid email"
                        }
                      })}
                    />
                    {errors.email && <p className="text-rose-400 text-xs">{errors.email.message}</p>}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Message</label>
                  <textarea
                    rows="5"
                    placeholder="Tell me about your project, idea, or role..."
                    disabled={submitState === 'sending'}
                    className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition disabled:opacity-50"
                    {...register("message", { required: "Message is required" })}
                  ></textarea>
                  {errors.message && <p className="text-rose-400 text-xs">{errors.message.message}</p>}
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: submitState === 'sending' ? 1 : 1.02 }}
                  whileTap={{ scale: submitState === 'sending' ? 1 : 0.98 }}
                  type="submit"
                  disabled={submitState === 'sending'}
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 transition disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {submitState === 'sending' ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <MdSend className="text-base" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {/* Feedback Messages */}
                <AnimatePresence>
                  {submitState === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm text-center font-medium"
                    >
                      ✅ Message sent successfully! I will reply as soon as possible.
                    </motion.div>
                  )}

                  {submitState === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs sm:text-sm text-center font-medium"
                    > ❌ Message not sent. Plz! Try again or email directly: {personalInfo.email}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;