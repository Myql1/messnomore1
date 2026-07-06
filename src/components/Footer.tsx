import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, MessageCircle, ArrowRight } from 'lucide-react';
import { company } from '../lib/data';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-max px-5 sm:px-8 lg:px-16 xl:px-24 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-extrabold text-lg text-white">
                  MessNo<span className="text-primary-400">More</span>
                </span>
                <span className="text-[10px] font-medium tracking-widest uppercase text-slate-500">
                  Cleaning Service
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              {company.description}
            </p>
            <div className="flex gap-3">
              <a href={company.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-primary-600 flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={company.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-primary-600 flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={company.social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-primary-600 flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                <Twitter className="w-4 h-4" />
              </a>
              <a href={company.social.whatsapp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-primary-600 flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-white text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Testimonials', path: '/testimonials' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 text-primary-500 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white text-lg mb-5">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Residential Cleaning',
                'Commercial & Office',
                'Carpet & Upholstery',
                'Post-Construction',
                'Move-In / Move-Out',
                'Window Cleaning',
              ].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-sm text-slate-400 hover:text-primary-400 transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white text-lg mb-5">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400">{company.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href={`tel:${company.phone}`} className="text-sm text-slate-400 hover:text-primary-400 transition-colors">{company.phone}</a>
                  <a href={`tel:${company.phoneAlt}`} className="text-sm text-slate-400 hover:text-primary-400 transition-colors">{company.phoneAlt}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href={`mailto:${company.email}`} className="text-sm text-slate-400 hover:text-primary-400 transition-colors">{company.email}</a>
                  <a href={`mailto:${company.emailBookings}`} className="text-sm text-slate-400 hover:text-primary-400 transition-colors">{company.emailBookings}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col text-sm text-slate-400">
                  <span>{company.hours.weekdays}</span>
                  <span>{company.hours.saturday}</span>
                  <span>{company.hours.sunday}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Proudly serving Kampala & greater Uganda
          </p>
        </div>
      </div>
    </footer>
  );
}
