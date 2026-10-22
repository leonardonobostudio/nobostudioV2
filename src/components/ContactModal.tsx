import React, { useState } from 'react';
import { X, CheckCircle, Send, Sparkles } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  isTechMode: boolean;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, isTechMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Design & Engineering',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#1a1424] border border-[#2e233c] rounded-3xl p-8 shadow-2xl text-white">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center">
            <CheckCircle className="w-16 h-16 text-emerald-400 mb-4 animate-bounce" />
            <h3 className="text-2xl font-bold font-syne mb-2">Message Dispatched!</h3>
            <p className="text-neutral-400 text-sm max-w-xs">
              Thank you for reaching out. Our creative directors will respond within 24 hours.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles 
                className="w-5 h-5" 
                style={{ color: isTechMode ? '#00e5ff' : '#e3a5c7' }} 
              />
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                Initiate Project Brief
              </span>
            </div>
            <h3 className="text-3xl font-black font-syne mb-6">
              Let&apos;s Build Something Iconic
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name-input" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Your Name
                </label>
                <input
                  id="name-input"
                  required
                  type="text"
                  placeholder="e.g. Elena Rostova"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#e3a5c7] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email-input" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Business Email
                </label>
                <input
                  id="email-input"
                  required
                  type="email"
                  placeholder="elena@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#e3a5c7] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="project-type-select" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Focus Area
                </label>
                <select
                  id="project-type-select"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#14101a] border border-white/10 text-white text-sm focus:outline-none focus:border-[#e3a5c7] transition-colors"
                >
                  <option value="Design & Engineering">Design &amp; Engineering</option>
                  <option value="Branding & Strategy">Branding &amp; Strategy</option>
                  <option value="3D & WebGL Experiences">3D &amp; WebGL Experiences</option>
                  <option value="Enterprise Web Applications">Enterprise Web Applications</option>
                </select>
              </div>

              <div>
                <label htmlFor="message-input" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Project Vision
                </label>
                <textarea
                  id="message-input"
                  required
                  rows={3}
                  placeholder="Tell us about your brand goals, scope, and timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#e3a5c7] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 mt-2 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                style={{
                  backgroundColor: isTechMode ? '#00b8d4' : '#e3a5c7',
                  color: isTechMode ? '#ffffff' : '#14101a',
                }}
              >
                <span>Send Brief</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
