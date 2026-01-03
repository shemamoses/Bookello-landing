"use client";

import { useState, FormEvent } from "react";

export function SupportForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Using Web3Forms free service - replace with your access key
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_KEY", // You'll need to get a free key from web3forms.com
          to: "Support@bookello.life",
          from_name: formData.name,
          email: formData.email,
          subject: `Support Request: ${formData.subject}`,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error("Failed to send");
      }
    } catch {
      // Fallback to mailto if API fails
      const mailtoLink = `mailto:Support@bookello.life?subject=${encodeURIComponent(
        `Support Request: ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
      setStatus("sent");
    }
  };

  return (
    <section id="support" className="w-full bg-slate-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column - Info */}
          <div>
            <span className="inline-flex items-center text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">
              <span className="w-8 h-[2px] bg-blue-600 mr-3"></span>
              Support
            </span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-slate-800 mb-6">
              Need Help?
            </h2>
            <p className="text-slate-600 text-xl leading-relaxed mb-8">
              Our support team is here to assist you. Fill out the form and we&apos;ll get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-blue-600">support_agent</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Support Email</h4>
                  <a href="mailto:Support@bookello.life" className="text-blue-600 hover:underline">
                    Support@bookello.life
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">WhatsApp Support</h4>
                  <a href="https://wa.me/250780875288" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                    +250 780 875 288
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-purple-600">schedule</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Response Time</h4>
                  <p className="text-slate-600">Usually within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-800 placeholder-slate-400"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-800 placeholder-slate-400"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-800 bg-white"
                >
                  <option value="">Select a topic</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Billing Question">Billing Question</option>
                  <option value="Partnership">Partnership Opportunity</option>
                  <option value="Marketplace Support">Marketplace Support</option>
                  <option value="Check-In SaaS Support">Check-In SaaS Support</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-800 placeholder-slate-400 resize-none"
                  placeholder="Describe your issue or question..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "sending" ? (
                  <>
                    <span className="material-symbols-outlined animate-spin">progress_activity</span>
                    Sending...
                  </>
                ) : status === "sent" ? (
                  <>
                    <span className="material-symbols-outlined">check_circle</span>
                    Message Sent!
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined">send</span>
                    Send Message
                  </>
                )}
              </button>

              {status === "sent" && (
                <p className="text-center text-green-600 font-medium">
                  Thank you! We&apos;ll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
