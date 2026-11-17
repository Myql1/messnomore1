import { useState, FormEvent } from 'react';
import {
  Phone, Mail, MapPin, Clock, MessageCircle, Send,
  CheckCircle, AlertCircle, Loader2,
} from 'lucide-react';
import { company, services } from '../lib/data';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      setErrorMsg('Please fill in your name, email, and message.');
      return;
    }

    if (!supabase) {
      setStatus('error');
      setErrorMsg(
        isSupabaseConfigured
          ? 'Something went wrong. Please try again or call us directly.'
          : 'Backend not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file, or call us directly.'
      );
      return;
    }

    try {
      const { error } = await supabase.from('contact_inquiries').insert({
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        service: form.service || null,
        message: form.message,
      });

      if (error) {
        setStatus('error');
        setErrorMsg('Something went wrong. Please try again or call us directly.');
        return;
      }
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or call us directly.');
      return;
    }

    setStatus('success');
    setForm({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Contact us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />
        </div>
        <div className="container-max px-5 sm:px-8 lg:px-16 xl:px-24 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 border border-primary-400/30 backdrop-blur-sm mb-6">
              <MessageCircle className="w-4 h-4 text-primary-300" />
              <span className="text-sm font-medium text-primary-100">Get in Touch</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl lg:text-5xl text-white mb-6 leading-tight">
              Let's make your space spotless
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed">
              Ready to book a cleaning or just have a question? We're here to help. Fill out the form below, give us a call, or send us a message on WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="px-5 sm:px-8 lg:px-16 xl:px-24 -mt-10 relative z-20">
        <div className="container-max">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Phone,
                title: 'Call Us',
                lines: [company.phone, company.phoneAlt],
                href: `tel:${company.phone}`,
              },
              {
                icon: Mail,
                title: 'Email Us',
                lines: [company.email, company.postalAddress],
                href: `mailto:${company.email}`,
              },
              {
                icon: MapPin,
                title: 'Visit Us',
                lines: [company.address],
                href: '#',
              },
              {
                icon: Clock,
                title: 'Working Hours',
                lines: [company.hours.weekdays, company.hours.saturday, company.hours.sunday],
                href: '#',
              },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-900/5 card-hover">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                  <card.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-display font-bold text-base text-slate-900 mb-2">{card.title}</h3>
                <div className="space-y-1">
                  {card.lines.map((line, idx) => (
                    <p key={idx} className="text-sm text-slate-500 leading-relaxed">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 mb-5">
                <Send className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-semibold text-primary-700">Send a Message</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl text-slate-900 mb-4">
                Request a free quote
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Fill out the form and we'll get back to you within 24 hours with a quote and available time slots.
              </p>

              {status === 'success' ? (
                <div className="bg-primary-50 border border-primary-200 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Message sent!</h3>
                  <p className="text-slate-600 mb-6">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-secondary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {status === 'error' && (
                    <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <p className="text-sm text-red-700">{errorMsg}</p>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+256 ..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm bg-white"
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.title}>{s.title}</option>
                      ))}
                      <option value="Other">Other / Not sure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your space and what you need..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Map + Social */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 mb-5">
                <MapPin className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-semibold text-primary-700">Find Us</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl text-slate-900 mb-4">
                Visit our office
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                We're located in the heart of Kampala. Stop by during business hours or give us a call to schedule a visit.
              </p>

              <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
                <iframe
                  title="MessNoMore Location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=32.5700%2C0.3050%2C32.6000%2C0.3350&layer=mapnik&marker=0.3200%2C32.5850"
                  className="w-full h-80 border-0"
                  loading="lazy"
                />
              </div>

              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="font-display font-bold text-lg text-slate-900 mb-4">Connect with us</h3>
                <div className="flex gap-3">
                  <a href={company.social.whatsapp} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white shadow-md hover:bg-primary-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 text-slate-600">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
