'use client';
import Link from 'next/link';
import { useState } from 'react';


export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    //{ href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: 'rgba(10,10,10,0.92)', backdropFilter: 'blur(16px)', borderBottom: '1px solid #1a1a1a' }}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* SVG icon matching EyeWatch logo style */}
          <div className="relative w-8 h-8">
            <svg viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M20 18C22.2 18 24 16.2 24 14C24 11.8 22.2 10 20 10C17.8 10 16 11.8 16 14C16 16.2 17.8 18 20 18Z" fill="#f2f0ec"/>
              <circle cx="21.5" cy="12.5" r="2" fill="#cc1414"/>
              <path d="M6 14C9 8 14 4 20 4C26 4 31 8 34 14" stroke="#f2f0ec" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.9"/>
              <path d="M10 14C12.5 9.5 16 7 20 7C24 7 27.5 9.5 30 14" stroke="#f2f0ec" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.65"/>
              <path d="M13.5 14C15.2 10.8 17.4 9 20 9C22.6 9 24.8 10.8 26.5 14" stroke="#f2f0ec" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.4"/>
            </svg>
          </div>
          <div>
            <span className="font-syne font-800 text-off-white text-base tracking-tight leading-none block" style={{ fontFamily: 'Syne', fontWeight: 800, letterSpacing: '-0.01em' }}>
              Eye<span style={{ color: '#cc1414' }}>Watch</span>
            </span>
            <span className="text-gray-400 block" style={{ fontSize: '0.6rem', letterSpacing: '0.12em', fontFamily: 'Syne', fontWeight: 600, textTransform: 'uppercase' }}>
              Systems LLC
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="nav-link">{l.label}</Link>
          ))}
          <Link
            href="/contact"
            className="font-syne font-700 text-xs uppercase tracking-widest px-5 py-2.5 transition-all duration-200"
            style={{ background: '#cc1414', color: '#f2f0ec', borderRadius: '2px', letterSpacing: '0.1em', fontFamily: 'Syne', fontWeight: 700 }}
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-off-white transition-all duration-200" style={{ transformOrigin: 'center', transform: open ? 'rotate(45deg) translate(3px, 3px)' : 'none', background: '#f2f0ec' }} />
          <span className="block w-5 h-0.5 transition-all duration-200" style={{ background: '#f2f0ec', opacity: open ? 0 : 1 }} />
          <span className="block w-5 h-0.5 bg-off-white transition-all duration-200" style={{ transformOrigin: 'center', transform: open ? 'rotate(-45deg) translate(3px, -3px)' : 'none', background: '#f2f0ec' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 py-4 flex flex-col gap-4" style={{ borderTop: '1px solid #1a1a1a', background: '#0a0a0a' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="nav-link text-sm py-1">{l.label}</Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="text-center py-3 font-syne font-700 text-xs uppercase tracking-widest"
            style={{ background: '#cc1414', color: '#f2f0ec', borderRadius: '2px', fontFamily: 'Syne', fontWeight: 700, letterSpacing: '0.1em' }}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
