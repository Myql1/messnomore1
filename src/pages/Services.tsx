import { Link } from 'react-router-dom';
import {
  Sparkles, Home, Building2, HardHat, Truck, PanelsTopLeft,
  CheckCircle, ArrowRight, PhoneCall, CalendarCheck, Shield, Leaf,
} from 'lucide-react';
import { services, company, processSteps } from '../lib/data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home, Building2, Sparkles, HardHat, Truck, PanelsTopLeft,
  PhoneCall, CalendarCheck, CheckCircle,
};

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Cleaning services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />
        </div>
        <div className="container-max px-5 sm:px-8 lg:px-16 xl:px-24 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 border border-primary-400/30 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-primary-300" />
              <span className="text-sm font-medium text-primary-100">Our Services</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl lg:text-5xl text-white mb-6 leading-tight">
              Professional cleaning for every space
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed">
              From homes to offices, carpets to windows, we offer a full range of cleaning services tailored to your needs and budget. All delivered by trained professionals using eco-friendly products.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container-max">
          <div className="space-y-20">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Sparkles;
              const isReversed = i % 2 === 1;
              return (
                <div
                  key={service.slug}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <div className="relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="rounded-3xl shadow-2xl object-cover w-full h-[400px]"
                      />
                      <div className="absolute -top-5 -left-5 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-xl shadow-primary-600/30">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -bottom-5 right-5 bg-white rounded-xl shadow-xl px-5 py-3">
                        <span className="font-display font-extrabold text-lg text-primary-600">{service.price}</span>
                      </div>
                    </div>
                  </div>

                  <div className={isReversed ? 'lg:order-1' : ''}>
                    <h2 className="font-display font-extrabold text-2xl lg:text-3xl text-slate-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="btn-primary">
                      Book This Service
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-slate-50 section-padding">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 mb-5">
              <CalendarCheck className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700">How It Works</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-slate-900 mb-4">
              Getting started is easy
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Four simple steps between you and a spotless space.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => {
              const Icon = iconMap[step.icon] || Sparkles;
              return (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-md card-hover border border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-600/30">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="font-display font-extrabold text-4xl text-slate-100">{step.number}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: 'Fully Insured', desc: 'Every job is covered. Your property is protected while we work.' },
              { icon: Leaf, title: 'Eco-Friendly', desc: 'Biodegradable, non-toxic products safe for your family and pets.' },
              { icon: CheckCircle, title: 'Satisfaction Guarantee', desc: 'Not happy? We come back and re-clean at no extra cost.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-primary-50 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <item.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 sm:px-8 lg:px-16 xl:px-24 pb-20">
        <div className="container-max">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-ocean-700 p-10 lg:p-16">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-white mb-4 leading-tight">
                  Not sure which service you need?
                </h2>
                <p className="text-primary-100 text-lg leading-relaxed">
                  Call us and we'll help you figure out exactly what your space needs — no pressure, no obligation.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <Link to="/contact" className="btn-accent">
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href={`tel:${company.phone}`} className="btn-secondary !bg-white/10 !text-white !border-white/30 hover:!bg-white/20">
                  <PhoneCall className="w-4 h-4" />
                  {company.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
