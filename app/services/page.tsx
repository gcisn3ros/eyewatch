import Navbar from '@/components/Navbar';
import Link from 'next/link';

const services = [
  {
    title: 'Security Camera Install',
    desc: 'Professional hardwired and wireless camera systems for homes and businesses. Full setup, configuration, and app walkthrough included. We carry and install Eufy, Reolink, and other top brands.',
    details: ['Eufy, Reolink & more', 'Hardwired & wireless options', 'App setup & walkthrough', 'Free site assessment'],
  },
  {
    title: 'IT Solutions',
    desc: 'Network setup, troubleshooting, hardware configuration, and ongoing IT support tailored for residential and small business clients.',
    details: ['Router & switch setup', 'Network troubleshooting', 'Hardware configuration', 'Ongoing support available'],
  },
  {
    title: 'Computer & Network Install',
    desc: 'PC and Mac setup, cable management, and structured network installs for homes and offices.',
    details: ['PC & Mac setup', 'Cable management', 'Structured wiring', 'Office network installs'],
  },
  {
    title: 'Website Design & Hosting',
    desc: 'Clean, modern websites built and hosted for small businesses. Custom domains, fast load times, and mobile-friendly design.',
    details: ['Custom design', 'Hosting included', 'Mobile responsive', 'Domain setup'],
  },
  {
    title: 'Apple & Android Support',
    desc: 'Device setup, data transfer, app troubleshooting, iCloud and Google account management, and general mobile device support.',
    details: ['Device setup & transfer', 'iCloud & Google accounts', 'App troubleshooting', 'Screen & repair referrals'],
  },
];

const servicesEs = [
  {
    title: 'Instalación de Cámaras de Seguridad',
    desc: 'Sistemas de cámaras con cable o inalámbricas para hogares y negocios. Incluye configuración completa y explicación de la aplicación. Instalamos marcas como Eufy, Reolink y más.',
    details: ['Eufy, Reolink y más', 'Con cable e inalámbricas', 'Configuración de la app', 'Evaluación gratuita'],
  },
  {
    title: 'Soluciones de TI',
    desc: 'Configuración de redes, resolución de problemas, configuración de hardware y soporte técnico para residencias y pequeños negocios.',
    details: ['Configuración de router', 'Resolución de problemas', 'Configuración de hardware', 'Soporte continuo disponible'],
  },
  {
    title: 'Instalación de Computadoras y Redes',
    desc: 'Configuración de PC y Mac, gestión de cables e instalación de redes estructuradas para hogares y oficinas.',
    details: ['Configuración PC y Mac', 'Organización de cables', 'Cableado estructurado', 'Redes para oficinas'],
  },
  {
    title: 'Diseño y Alojamiento de Páginas Web',
    desc: 'Páginas web modernas y limpias para pequeños negocios. Dominios personalizados, carga rápida y diseño adaptable a celulares.',
    details: ['Diseño personalizado', 'Alojamiento incluido', 'Compatible con celular', 'Configuración de dominio'],
  },
  {
    title: 'Soporte para Apple y Android',
    desc: 'Configuración de dispositivos, transferencia de datos, solución de problemas con apps, cuentas de iCloud y Google, y soporte general para celulares.',
    details: ['Configuración y transferencia', 'Cuentas iCloud y Google', 'Problemas con apps', 'Referencias para reparación'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>

        {/* PAGE HEADER */}
        <section className="py-20 relative" style={{ borderBottom: '1px solid #161616' }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(204,20,20,0.07) 0%, transparent 70%)' }} />
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="accent-line" />
              <span style={{ fontSize: '0.7rem', color: '#cc1414', letterSpacing: '0.18em', fontFamily: 'Syne', fontWeight: 700, textTransform: 'uppercase' }}>What We Offer</span>
            </div>
            <h1 className="font-syne text-off-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, letterSpacing: '-0.03em', fontFamily: 'Syne', lineHeight: 1 }}>
              Our Services
            </h1>
            <p className="mt-5 max-w-lg" style={{ color: '#666', fontSize: '1rem', lineHeight: 1.7 }}>
              Everything your home or business needs — cameras, networks, devices, and websites. All in one place.
            </p>
          </div>
        </section>

        {/* ENGLISH SERVICES */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6 flex flex-col gap-6">
            {services.map((s, i) => (
              <div key={s.title} className="service-card p-8 grid md:grid-cols-3 gap-8 items-start"
                style={{ background: '#0f0f0f', borderRadius: '4px' }}>
                <div className="md:col-span-1">
                  <div style={{ fontSize: '0.65rem', color: '#333', fontFamily: 'Syne', fontWeight: 700, letterSpacing: '0.14em', marginBottom: '8px' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h2 className="font-syne text-off-white" style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'Syne', letterSpacing: '-0.02em' }}>
                    {s.title}
                  </h2>
                </div>
                <div className="md:col-span-1">
                  <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.8 }}>{s.desc}</p>
                </div>
                <div className="md:col-span-1 flex flex-col gap-2">
                  {s.details.map(d => (
                    <div key={d} className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: '#cc1414' }} />
                      <span style={{ fontSize: '0.8rem', color: '#888' }}>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SPANISH DIVIDER */}
        <section className="py-16" style={{ borderTop: '1px solid #161616', borderBottom: '1px solid #161616', background: '#0c0c0c' }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <span className="accent-line" />
                  <span style={{ fontSize: '0.7rem', color: '#cc1414', letterSpacing: '0.18em', fontFamily: 'Syne', fontWeight: 700, textTransform: 'uppercase' }}>
                    Se Habla Español
                  </span>
                </div>
                <h2 className="font-syne text-off-white" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, fontFamily: 'Syne', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                  ¿Prefieres hablar<br />
                  <span style={{ color: '#cc1414' }}>en Español?</span>
                </h2>
              </div>
              <div className="max-w-md">
                <p style={{ color: '#666', fontSize: '1rem', lineHeight: 1.8 }}>
                  En EyeWatch Systems ofrecemos atención completa en español. Nuestro equipo puede ayudarte a elegir el sistema correcto, explicarte cada paso, y darte un presupuesto sin costo.
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <span className="rec-dot" />
                  <span style={{ fontSize: '0.8rem', color: '#888', fontFamily: 'Syne' }}>Atención bilingüe disponible — Elgin, IL y alrededores</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SPANISH SERVICES */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
              <span className="accent-line" />
              <span style={{ fontSize: '0.7rem', color: '#cc1414', letterSpacing: '0.18em', fontFamily: 'Syne', fontWeight: 700, textTransform: 'uppercase' }}>
                Nuestros Servicios
              </span>
            </div>
            <div className="flex flex-col gap-6">
              {servicesEs.map((s, i) => (
                <div key={s.title} className="service-card p-8 grid md:grid-cols-3 gap-8 items-start"
                  style={{ background: '#0f0f0f', borderRadius: '4px', borderLeft: '3px solid #cc1414' }}>
                  <div className="md:col-span-1">
                    <div style={{ fontSize: '0.65rem', color: '#333', fontFamily: 'Syne', fontWeight: 700, letterSpacing: '0.14em', marginBottom: '8px' }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h2 className="font-syne text-off-white" style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'Syne', letterSpacing: '-0.02em' }}>
                      {s.title}
                    </h2>
                  </div>
                  <div className="md:col-span-1">
                    <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.8 }}>{s.desc}</p>
                  </div>
                  <div className="md:col-span-1 flex flex-col gap-2">
                    {s.details.map(d => (
                      <div key={d} className="flex items-center gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: '#cc1414' }} />
                        <span style={{ fontSize: '0.8rem', color: '#888' }}>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-20" style={{ borderTop: '1px solid #161616' }}>
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">

            {/* English CTA */}
            <div className="p-8 flex flex-col justify-between gap-6" style={{ background: '#0f0f0f', border: '1px solid #1e1e1e', borderRadius: '4px' }}>
              <div>
                <h2 className="font-syne text-off-white mb-3" style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'Syne', letterSpacing: '-0.02em' }}>
                  Not Sure What You Need?
                </h2>
                <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  We offer free on-site consultations. We come to you, assess your space, and put together a detailed quote at no charge.
                </p>
              </div>
              <Link href="/contact"
                className="font-syne text-sm uppercase tracking-widest px-6 py-3 inline-block text-center transition-all duration-200 hover:opacity-90"
                style={{ background: '#cc1414', color: '#f2f0ec', borderRadius: '2px', fontFamily: 'Syne', fontWeight: 700 }}>
                Book a Free Consultation
              </Link>
            </div>

            {/* Spanish CTA */}
            <div className="p-8 flex flex-col justify-between gap-6" style={{ background: '#0f0f0f', border: '1px solid #2a1010', borderRadius: '4px' }}>
              <div>
                <h2 className="font-syne text-off-white mb-3" style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'Syne', letterSpacing: '-0.02em' }}>
                  ¿No sabe qué necesita?
                </h2>
                <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Ofrecemos consultas gratuitas en su hogar o negocio. Le visitamos, evaluamos el espacio y le damos un presupuesto detallado sin ningún costo.
                </p>
              </div>
              <Link href="/contact"
                className="font-syne text-sm uppercase tracking-widest px-6 py-3 inline-block text-center transition-all duration-200 hover:opacity-90"
                style={{ border: '1px solid #cc1414', color: '#cc1414', borderRadius: '2px', fontFamily: 'Syne', fontWeight: 700 }}>
                Solicitar Consulta Gratis
              </Link>
            </div>

          </div>
        </section>

      </main>
    </>
  );
}