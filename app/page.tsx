import Link from 'next/link';
import Navbar from '@/components/Navbar';

const services = [
  {
    icon: (
      <svg className="service-icon w-6 h-6 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>
    ),
    title: 'Security Camera Install',
    desc: 'Professional hardwired and wireless camera systems for homes and businesses. Full setup, configuration, and app walkthrough included.',
  },
  {
    icon: (
      <svg className="service-icon w-6 h-6 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    title: 'IT Solutions',
    desc: 'Network setup, troubleshooting, hardware configuration, and ongoing IT support tailored for residential and small business clients.',
  },
  {
    icon: (
      <svg className="service-icon w-6 h-6 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Computer & Network Install',
    desc: 'PC and Mac setup, router and switch configuration, cable management, and structured network installs for homes and offices.',
  },
  {
    icon: (
      <svg className="service-icon w-6 h-6 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: 'Website Design & Hosting',
    desc: 'Clean, modern websites built and hosted for small businesses. From single-page sites to full multi-page builds with custom domains.',
  },
  {
    icon: (
      <svg className="service-icon w-6 h-6 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Apple & Android Support',
    desc: 'Device setup, data transfer, app troubleshooting, iCloud and Google account management, and general mobile device support.',
  },
];

// Placeholder image component
function ImgPlaceholder({ label, aspect = 'aspect-video', className = '' }: { label: string; aspect?: string; className?: string }) {
  return (
    <div className={`img-placeholder ${aspect} ${className} flex flex-col items-center justify-center gap-3`} style={{ borderRadius: '4px' }}>
      <svg className="w-8 h-8 opacity-20" fill="none" stroke="#f2f0ec" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <span style={{ fontSize: '0.65rem', letterSpacing: '0.14em', color: '#444', fontFamily: 'Syne', fontWeight: 600, textTransform: 'uppercase' }}>{label}</span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex items-center" style={{ paddingTop: '80px' }}>
          {/* Background grid */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />
          {/* Red glow */}
          <div className="absolute top-1/3 right-1/4 w-96 h-96 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(204,20,20,0.08) 0%, transparent 70%)', borderRadius: '50%' }} />

          <div className="max-w-6xl mx-auto px-6 w-full py-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left — copy */}
              <div>
                <div className="tag-pill animate-fade-up mb-6">
                  <span className="rec-dot" />
                  Elgin, IL — Se Habla Español
                </div>
                <h1 className="animate-fade-up-delay-1 font-syne text-off-white leading-none mb-6" style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 800, letterSpacing: '-0.03em', fontFamily: 'Syne' }}>
                  We Keep Your<br />
                  <span style={{ color: '#cc1414' }}>Eyes Open</span><br />
                  24/7
                </h1>
                <p className="animate-fade-up-delay-2 text-gray-400 mb-10 max-w-md" style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
                  Professional security camera installation, IT solutions, and tech support for homes and businesses in the Chicagoland area.
                </p>
                <div className="animate-fade-up-delay-3 flex flex-wrap gap-4">
                  <Link href="/contact" className="font-syne font-700 text-sm uppercase tracking-widest px-7 py-3.5 inline-block transition-all duration-200 hover:opacity-90 active:scale-95"
                    style={{ background: '#cc1414', color: '#f2f0ec', borderRadius: '2px', fontFamily: 'Syne', fontWeight: 700 }}>
                    Get a Free Quote
                  </Link>
                  <Link href="/services" className="font-syne font-700 text-sm uppercase tracking-widest px-7 py-3.5 inline-block transition-all duration-200"
                    style={{ border: '1px solid #2a2a2a', color: '#9a9890', borderRadius: '2px', fontFamily: 'Syne', fontWeight: 600 }}>
                    Our Services
                  </Link>
                </div>

                {/* Stats */}
                <div className="animate-fade-up-delay-4 flex gap-10 mt-14 pt-10" style={{ borderTop: '1px solid #1e1e1e' }}>
                  {[['5+', 'Services Offered'], ['100%', 'Client Satisfaction'], ['Bilingual', 'En/Es Support']].map(([val, label]) => (
                    <div key={label}>
                      <div className="font-syne font-800 text-off-white" style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'Syne' }}>{val}</div>
                      <div style={{ fontSize: '0.7rem', color: '#555', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'Syne', fontWeight: 600 }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — image grid */}
              <div className="hidden lg:grid grid-cols-2 gap-3 animate-fade-up-delay-2">
                <div className="flex flex-col gap-3">
                  {/*<ImgPlaceholder label="Network Setup" aspect="aspect-square" /> */}
                </div>
                <div className="flex flex-col gap-3 mt-8">
                  {/*<ImgPlaceholder label="IT Support" aspect="aspect-square" />
                  <ImgPlaceholder label="Floodlight Cam" aspect="aspect-[4/3]" />*/}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ─────────────────────────────────────────── */}
        <section className="py-28" style={{ borderTop: '1px solid #161616' }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="accent-line" />
              <span style={{ fontSize: '0.7rem', color: '#cc1414', letterSpacing: '0.18em', fontFamily: 'Syne', fontWeight: 700, textTransform: 'uppercase' }}>What We Do</span>
            </div>
            <h2 className="font-syne text-off-white mb-16" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', fontFamily: 'Syne' }}>
              Full-Service Tech<br />
              <span style={{ color: '#555' }}>for Your Home or Business</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((s) => (
                <div key={s.title} className="service-card p-6" style={{ background: '#0f0f0f', borderRadius: '4px' }}>
                  <div className="mb-4" style={{ color: '#555' }}>{s.icon}</div>
                  <h3 className="font-syne text-off-white font-700 mb-2" style={{ fontSize: '1rem', fontWeight: 700, fontFamily: 'Syne' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              ))}
              {/* CTA card */}
              <div className="service-card p-6 flex flex-col justify-between" style={{ background: '#cc1414', border: '1px solid #cc1414', borderRadius: '4px' }}>
                <div>
                  <div className="tag-pill mb-4" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)' }}>Free Estimate</div>
                  <h3 className="font-syne text-white font-800 mb-2" style={{ fontSize: '1.1rem', fontWeight: 800, fontFamily: 'Syne' }}>Not sure what you need?</h3>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>We&#39;ll come out, assess your space, and put together a detailed quote at no charge.</p>
                </div>
                <Link href="/contact" className="mt-6 inline-block font-syne font-700 text-xs uppercase tracking-widest px-5 py-3 text-center transition-all duration-200 hover:bg-white hover:text-black"
                  style={{ background: 'rgba(0,0,0,0.25)', color: 'white', borderRadius: '2px', fontFamily: 'Syne', fontWeight: 700 }}>
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── WORK GALLERY ─────────────────────────────────────── */}
        <section className="py-28" style={{ borderTop: '1px solid #161616' }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="accent-line" />
              <span style={{ fontSize: '0.7rem', color: '#cc1414', letterSpacing: '0.18em', fontFamily: 'Syne', fontWeight: 700, textTransform: 'uppercase' }}>Our Work</span>
            </div>
            <h2 className="font-syne text-off-white mb-16" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', fontFamily: 'Syne' }}>Recent Installs</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="aspect-[4/3] relative overflow-hidden" style={{ borderRadius: '4px', background: '#0f0f0f' }}>
              <video
                src="/videos/IMG_8206.mov"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
              {/*<ImgPlaceholder label="4-Cam Home System" aspect="aspect-[4/3]" />
              <ImgPlaceholder label="Network Rack" aspect="aspect-[4/3]" />
              <ImgPlaceholder label="Eufy E340 Install" aspect="aspect-[4/3]" />
              {/*<ImgPlaceholder label="Homebase Setup" aspect="aspect-[4/3]" className="hidden md:block" />
              <ImgPlaceholder label="Business IT Setup" aspect="aspect-[4/3]" className="hidden md:block" /> */}
            </div>
          </div>
        </section>
       
        {/* ── FOOTER ───────────────────────────────────────────── */}
        <footer className="py-12" style={{ borderTop: '1px solid #161616' }}>
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div style={{ fontSize: '0.75rem', color: '#444', fontFamily: 'Syne', letterSpacing: '0.06em' }}>
              © {new Date().getFullYear()} Eyewatch Systems LLC — Elgin, IL
            </div>
            <div style={{ fontSize: '0.75rem', color: '#444', fontFamily: 'Syne', letterSpacing: '0.06em' }}>
              eye.watch
            </div>
          </div>
        </footer>

      </main>
    </>
  );
}
