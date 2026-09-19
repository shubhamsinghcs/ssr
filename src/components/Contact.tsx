import React, { useState } from 'react';
import { Mail, Send, Copy, Check, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../data';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#242426]">
      <div className="bg-[#0B0B0C] border border-[#242426] rounded-2xl p-6 sm:p-10 md:p-14 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column - Heading & Direct Email */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#7C7CFF] block">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F5F5] leading-tight">
              Let's build something useful.
            </h2>
            <p className="text-base text-[#A1A1AA] leading-relaxed max-w-lg">
              I am available for full-stack and frontend roles, internships, and freelance collaborations. If you have an opening, an interesting project, or want to discuss practical systems, my inbox is always open.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${PROFILE.email}?subject=Opportunity%20Discussion`}
                className="inline-flex items-center gap-2 bg-[#F5F5F5] hover:bg-[#e0e0e0] text-[#050505] font-semibold px-5 py-3 rounded-lg text-xs font-mono uppercase tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-[#7C7CFF]"
              >
                <Mail className="w-4 h-4" />
                <span>{PROFILE.email}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 bg-[#111113] hover:bg-[#1a1a1e] text-[#F5F5F5] font-semibold px-4 py-3 rounded-lg text-xs font-mono uppercase tracking-wider border border-[#242426] transition-colors focus:outline-none focus:ring-2 focus:ring-[#7C7CFF]"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#7C7CFF]" />}
                <span>{copied ? 'Copied' : 'Copy Email'}</span>
              </button>
            </div>

            <div className="text-xs font-mono text-[#A1A1AA] pt-2">
              Phone: <span className="text-[#F5F5F5]">{PROFILE.phone}</span> | Location: <span className="text-[#F5F5F5]">{PROFILE.location}</span>
            </div>
          </div>

          {/* Right Column - Direct Message Form */}
          <div className="lg:col-span-6">
            <div className="bg-[#111113] border border-[#242426] rounded-2xl p-6 sm:p-8">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#7C7CFF]/20 text-[#7C7CFF] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#F5F5F5]">Message Received</h3>
                  <p className="text-sm text-[#A1A1AA] max-w-sm mx-auto">
                    Thank you for reaching out. I will review your message and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="text-xs font-mono text-[#7C7CFF] hover:underline pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA]">Your Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full bg-[#050505] border border-[#242426] focus:border-[#7C7CFF] rounded-lg px-4 py-3 text-sm text-[#F5F5F5] placeholder:text-[#71717A] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA]">Email Address</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full bg-[#050505] border border-[#242426] focus:border-[#7C7CFF] rounded-lg px-4 py-3 text-sm text-[#F5F5F5] placeholder:text-[#71717A] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA]">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full bg-[#050505] border border-[#242426] focus:border-[#7C7CFF] rounded-lg px-4 py-3 text-sm text-[#F5F5F5] placeholder:text-[#71717A] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#F5F5F5] hover:bg-[#e0e0e0] text-[#050505] font-semibold py-3.5 rounded-lg text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#7C7CFF]"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
