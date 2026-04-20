'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

const services = [
  'Security Camera Install',
  'IT Solutions',
  'Computer & Network Install',
  'Website Design & Hosting',
  'Apple / Android Troubleshooting',
  'Not Sure — Need a Consultation',
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const res = await fetch('https://formspree.io/f/mlgalwyr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        }),
      });
  
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please email us directly at gio@eye.watch');
      }
    } catch {
      alert('Connection error. Please email us directly at gio@eye.watch');
    }
  
    setLoading(false);
  };
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>

        {/* ── PAGE HEADER ──────────────────────────────────────── */}
        <section className="py-20 relative" style={{ borderBottom: '1px solid #161616' }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(204,20,20,0.07) 0%, transparent 70%)' }} />

          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-4 animate-fade-up">
              <span className="accent-line" />
              <span style={{ fontSize: '0.7rem', color: '#cc1414', letterSpacing: '0.18em', fontFamily: 'Syne', fontWeight: 700, textTransform: 'uppercase' }}>Contact Us</span>
            </div>
            <h1 className="animate-fade-up-delay-1 font-syne text-off-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, letterSpacing: '-0.03em', fontFamily: 'Syne', lineHeight: 1 }}>
              Let&#39;s Talk About<br />
              <span style={{ color: '#555' }}>Your Security.</span>
            </h1>
            <p className="animate-fade-up-delay-2 mt-5 max-w-lg" style={{ color: '#666', fontSize: '1rem', lineHeight: 1.7 }}>
              Fill out the form and we&#39;ll get back to you within 24 hours. Free consultations available for camera and IT projects.
            </p>
          </div>
        </section>

        {/* ── MAIN CONTENT ─────────────────────────────────────── */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-16">

              {/* Left — info + image placeholders */}
              <div className="lg:col-span-2 flex flex-col gap-8">

                {/* Contact info cards */}
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="#cc1414" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    label: 'Location',
                    value: 'Elgin, IL & Surrounding Area',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="#cc1414" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    label: 'Email',
                    value: 'gio@eye.watch',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="#cc1414" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    label: 'Phone',
                    value: '847-429-0201',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="#cc1414" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    label: 'Hours',
                    value: 'Mon–Sat: 8am – 7pm',
                  },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-4 p-5" style={{ background: '#0f0f0f', border: '1px solid #1e1e1e', borderRadius: '4px' }}>
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center" style={{ background: 'rgba(204,20,20,0.1)', borderRadius: '3px' }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.12em', fontFamily: 'Syne', fontWeight: 700, textTransform: 'uppercase', marginBottom: '2px' }}>{item.label}</div>
                      <div style={{ fontSize: '0.9rem', color: '#c0bebb' }}>{item.value}</div>
                    </div>
                  </div>
                ))}

                {/* Bilingual badge */}
                <div className="flex items-center gap-3 p-4" style={{ border: '1px solid #2a1010', background: 'rgba(204,20,20,0.05)', borderRadius: '4px' }}>
                  <span className="rec-dot" />
                  <span style={{ fontSize: '0.8rem', color: '#cc1414', fontFamily: 'Syne', fontWeight: 600 }}>Se Habla Español — Bilingual Service Available</span>
                </div>

                

              </div>

              {/* Right — form */}
              <div className="lg:col-span-3">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center h-full min-h-96 text-center gap-6">
                    <div className="w-16 h-16 flex items-center justify-center" style={{ background: 'rgba(204,20,20,0.1)', borderRadius: '50%' }}>
                      <svg className="w-8 h-8" fill="none" stroke="#cc1414" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="font-syne text-off-white font-800 mb-2" style={{ fontSize: '1.5rem', fontFamily: 'Syne', fontWeight: 800 }}>Message Received!</h2>
                      <p style={{ color: '#666', fontSize: '0.9rem' }}>We&#39;ll be in touch within 24 hours.</p>
                    </div>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }); }}
                      className="font-syne font-700 text-xs uppercase tracking-widest px-6 py-3 transition-all duration-200 hover:opacity-80"
                      style={{ border: '1px solid #2a2a2a', color: '#9a9890', borderRadius: '2px', fontFamily: 'Syne', fontWeight: 700 }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <h2 className="font-syne text-off-white font-800 mb-2" style={{ fontSize: '1.3rem', fontFamily: 'Syne', fontWeight: 800 }}>Request a Free Quote</h2>

                    {/* Name + Phone row */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label style={{ fontSize: '0.7rem', color: '#555', letterSpacing: '0.12em', fontFamily: 'Syne', fontWeight: 700, textTransform: 'uppercase' }}>Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="John Smith"
                          className="form-input w-full px-4 py-3 text-sm"
                          style={{ borderRadius: '3px' }}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label style={{ fontSize: '0.7rem', color: '#555', letterSpacing: '0.12em', fontFamily: 'Syne', fontWeight: 700, textTransform: 'uppercase' }}>Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="(847) 555-0100"
                          className="form-input w-full px-4 py-3 text-sm"
                          style={{ borderRadius: '3px' }}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label style={{ fontSize: '0.7rem', color: '#555', letterSpacing: '0.12em', fontFamily: 'Syne', fontWeight: 700, textTransform: 'uppercase' }}>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="form-input w-full px-4 py-3 text-sm"
                        style={{ borderRadius: '3px' }}
                      />
                    </div>

                    {/* Service select */}
                    <div className="flex flex-col gap-2">
                      <label style={{ fontSize: '0.7rem', color: '#555', letterSpacing: '0.12em', fontFamily: 'Syne', fontWeight: 700, textTransform: 'uppercase' }}>Service Needed *</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        className="form-input w-full px-4 py-3 text-sm"
                        style={{ borderRadius: '3px', appearance: 'none' }}
                      >
                        <option value="" disabled>Select a service...</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label style={{ fontSize: '0.7rem', color: '#555', letterSpacing: '0.12em', fontFamily: 'Syne', fontWeight: 700, textTransform: 'uppercase' }}>Tell Us More</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Describe your property, number of cameras needed, specific issues, etc..."
                        className="form-input w-full px-4 py-3 text-sm resize-none"
                        style={{ borderRadius: '3px' }}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="font-syne font-700 text-sm uppercase tracking-widest py-4 w-full transition-all duration-200 hover:opacity-90 active:scale-98 disabled:opacity-50"
                      style={{ background: '#cc1414', color: '#f2f0ec', borderRadius: '2px', fontFamily: 'Syne', fontWeight: 700, letterSpacing: '0.1em' }}
                    >
                      {loading ? 'Sending...' : 'Send Message →'}
                    </button>

                    <p style={{ fontSize: '0.75rem', color: '#444', textAlign: 'center' }}>
                      We typically respond within 24 hours. No spam, ever.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
