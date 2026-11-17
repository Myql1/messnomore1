import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2, HardHat, Truck, PanelsTopLeft, CheckCircle,
  PhoneCall, CalendarCheck, Star, ArrowRight, Shield, Leaf, Clock, Award, Sparkles,
} from 'lucide-react';
import { Home as HomeIcon } from 'lucide-react';
import { company, services, processSteps, heroImages } from '../lib/data';
import { LogoImg } from '../components/Logo';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home: HomeIcon, Building2, LogoImg, HardHat, Truck, PanelsTopLeft,
  PhoneCall, CalendarCheck, CheckCircle,
};

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (heroImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Preload the first hero slide so the hero image paints instantly
  useEffect(() => {
    const img = new Image();
    img.src = heroImages[0];
    return () => {
      img.src = '';
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="hero-slideshow">
            {heroImages.map((img, i) => {
              const isActive = i === current;
              const isNext = i === (current + 1) % heroImages.length;
              const shouldLoad = isActive || isNext;
              return (
                <img
                  key={img}
                  src={shouldLoad ? img : undefined}
                  loading={shouldLoad ? 'eager' : 'lazy'}
                  decoding="async"
                  alt={`Professional cleaning ${i + 1}`}
                  className="hero-slide object-cover object-center"
                  style={{ opacity: isActive ? 1 : 0 }}
                />
              );
            })}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/40" />
        </div>

        <div className="container-max px-5 sm:px-8 lg:px-16 xl:px-24 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 border border-primary-400/30 backdrop-blur-sm mb-6 animate-fade-in-down">
              <LogoImg className="w-4 h-4 text-primary-300 object-contain" />
              <span className="text-sm font-medium text-primary-100">{company.tagline}</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6 animate-fade-in-up">
              Welcome To <span className="text-emerald-500">MESSNOMORE</span> cleaning services
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed mb-8 max-w-xl animate-fade-in-up delay-200">
              Professional cleaning services for homes, offices, and commercial spaces across Kampala and greater Uganda. We make your space spotless so you can focus on what matters.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <Link to="/contact" className="btn-primary">
                Book a Cleaning
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="btn-secondary !bg-white/10 !text-white !border-white/30 hover:!bg-white/20 hover:!border-white/50">
                View Services
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-12 animate-fade-in-up delay-500">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://images.pexels.com/photos/${[4906226, 3779448, 4906227, 3779447][i - 1]}/pexels-photo-${[4906226, 3779448, 4906227, 3779447][i - 1]}.jpeg?auto=compress&cs=tinysrgb&w=80`}
                      alt="Client"
                      className="w-9 h-9 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-1 text-accent-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-slate-300">{company.stats.clients} happy clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-12 z-20">
        <div className="container-max px-5 sm:px-8 lg:px-16 xl:px-24">
          <div className="bg-white rounded-3xl shadow-2xl shadow-slate-900/10 p-8 lg:p-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: company.stats.clients, label: 'Happy Clients', icon: CheckCircle },
              { value: company.stats.team, label: 'Professional Cleaners', icon: Award },
              { value: company.stats.years, label: 'Years of Service', icon: Clock },
              { value: company.stats.satisfaction, label: 'Satisfaction Rate', icon: Star },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="font-display font-extrabold text-3xl text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 mb-5">
                <LogoImg className="w-4 h-4 text-primary-600 object-contain" />
                <span className="text-sm font-semibold text-primary-700">Why Choose MessNoMore</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-slate-900 mb-6 leading-tight">
                Cleaning done right the first time, every time
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                We're not just another cleaning company. We're a team of trained professionals who take pride in making your space immaculate. From eco-friendly products to background-checked staff, every detail is designed to give you peace of mind.
              </p>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { icon: Shield, title: 'Trusted & Insured', desc: 'Background-checked, uniformed team you can trust in your space.' },
                  { icon: Leaf, title: 'Eco-Friendly Products', desc: 'Safe for your family, pets, and the environment.' },
                  { icon: Clock, title: 'On-Time, Every Time', desc: 'We respect your schedule and show up when we say we will.' },
                  { icon: Award, title: 'Quality Guaranteed', desc: 'Not happy? We come back and re-clean for free.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/slider/b.jpeg"
                  alt="Cleaning service"
                  loading="lazy"
                  decoding="async"
                  className="rounded-2xl shadow-xl object-cover h-64 w-full animate-fade-in-up"
                />
                <img
                  src="/IMG-20260713-WA0305.jpg"
                  alt="Floor cleaning"
                  loading="lazy"
                  decoding="async"
                  className="rounded-2xl shadow-xl object-cover h-64 w-full mt-8 animate-fade-in-up delay-200"
                />
                <img
                  src="/slider/a.jpeg"
                  alt="Living room"
                  loading="lazy"
                  decoding="async"
                  className="rounded-2xl shadow-xl object-cover h-64 w-full -mt-4 animate-fade-in-up delay-300"
                />
                <img
                  src="/IMG-20260713-WA0525.jpg"
                  alt="Bedroom"
                  loading="lazy"
                  decoding="async"
                  className="rounded-2xl shadow-xl object-cover h-64 w-full mt-4 animate-fade-in-up delay-400"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-5 flex items-center gap-3 animate-scale-in delay-500">
                <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center">
                  <Star className="w-6 h-6 text-accent-500 fill-current" />
                </div>
                <div>
                  <div className="font-display font-extrabold text-2xl text-slate-900">4.9/5</div>
                  <div className="text-xs text-slate-500">Average rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-slate-50 section-padding">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 mb-5">
              <LogoImg className="w-4 h-4 text-primary-600 object-contain" />
              <span className="text-sm font-semibold text-primary-700">Our Services</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-slate-900 mb-4">
              Cleaning solutions for every need
            </h2>
            <p className="text-slate-600 leading-relaxed">
              From homes to offices, post-construction to carpets — we have a service tailored to your space and budget.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || LogoImg;
              return (
                <Link
                  to="/services"
                  key={service.slug}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md card-hover"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <Icon className="w-5 h-5 text-primary-600" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-bold text-lg text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{service.short}</p>
                    <div className="flex justify-end">
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 mb-5">
              <CalendarCheck className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700">How It Works</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-slate-900 mb-4">
              Simple process, spotless results
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Getting your space cleaned with MessNoMore is easy. Four simple steps and you're done.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => {
              const Icon = iconMap[step.icon] || LogoImg;
              return (
                <div key={i} className="relative">
                  <div className="bg-white rounded-2xl p-6 shadow-md card-hover border border-slate-100">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-600/30">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <span className="font-display font-extrabold text-4xl text-slate-100">{step.number}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-slate-200" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 mb-5">
              <Sparkles className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700">Before & After</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-slate-900 mb-4">
              See the transformation
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Watch how MessNoMore transforms spaces from messy to immaculate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative">
                <video
                  src="/VID-20260629-WA0024.mp4"
                  controls
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded-full">
                  BEFORE
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-slate-900">Before Cleaning</h3>
                <p className="text-sm text-slate-500 mt-1">The space before our professional team arrived.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative">
                <video
                  src="/VID-20260629-WA0025.mp4"
                  controls
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-emerald-600 text-white text-sm font-semibold rounded-full">
                  AFTER
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-slate-900">After Cleaning</h3>
                <p className="text-sm text-slate-500 mt-1">Spotless results delivered by MessNoMore.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-5 sm:px-8 lg:px-16 xl:px-24 pb-20">
        <div className="container-max">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-ocean-700 p-10 lg:p-16">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-white mb-4 leading-tight">
                  Ready for a spotless space?
                </h2>
                <p className="text-primary-100 text-lg leading-relaxed">
                  Get a free, no-obligation quote today. Our team is standing by to make your space shine.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <Link to="/contact" className="btn-accent">
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href={`tel:${company.phone}`} className="btn-secondary !bg-white/10 !text-white !border-white/30 hover:!bg-white/20">
                  <PhoneCall className="w-4 h-4" />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
