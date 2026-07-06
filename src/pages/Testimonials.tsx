import { Link } from 'react-router-dom';
import { Star, Quote, ArrowRight, Sparkles, ThumbsUp } from 'lucide-react';
import { testimonials, company } from '../lib/data';

export default function Testimonials() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/4239034/pexels-photo-4239034.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Happy clients"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />
        </div>
        <div className="container-max px-5 sm:px-8 lg:px-16 xl:px-24 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 border border-primary-400/30 backdrop-blur-sm mb-6">
              <Star className="w-4 h-4 text-primary-300 fill-current" />
              <span className="text-sm font-medium text-primary-100">Testimonials</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl lg:text-5xl text-white mb-6 leading-tight">
              Don't just take our word for it
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed">
              We've served over {company.stats.clients} clients across Uganda. Here's what some of them have to say about their MessNoMore experience.
            </p>
          </div>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="px-5 sm:px-8 lg:px-16 xl:px-24 -mt-10 relative z-20">
        <div className="container-max">
          <div className="bg-white rounded-3xl shadow-2xl shadow-slate-900/10 p-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '4.9/5', label: 'Average Rating', sub: 'Based on 420+ reviews' },
              { value: company.stats.satisfaction, label: 'Satisfaction Rate', sub: 'Clients who would recommend us' },
              { value: company.stats.clients, label: 'Happy Clients', sub: 'And counting' },
              { value: '98%', label: 'Repeat Bookings', sub: 'Clients who book again' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-display font-extrabold text-3xl text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-slate-700">{stat.label}</div>
                <div className="text-xs text-slate-400 mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 mb-5">
              <ThumbsUp className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700">Client Reviews</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-slate-900 mb-4">
              Real stories from real clients
            </h2>
            <p className="text-slate-600 leading-relaxed">
              From homeowners to business owners, here's why Uganda chooses MessNoMore.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="relative bg-white rounded-2xl p-7 shadow-md card-hover border border-slate-100"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary-100" />
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 text-accent-500 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm relative z-10">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-slate-900">{t.name}</div>
                    <div className="text-sm text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="bg-slate-50 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary-600 to-ocean-700 rounded-3xl p-10 lg:p-16 relative overflow-hidden">
              <Quote className="absolute top-8 left-8 w-20 h-20 text-white/10" />
              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-accent-400 fill-current" />
                  ))}
                </div>
                <p className="font-display font-bold text-2xl lg:text-3xl text-white leading-relaxed mb-8">
                  "MessNoMore is the best cleaning company I've worked with in Uganda. They're reliable, thorough, and genuinely care about doing a good job. I recommend them to everyone I know."
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[0].avatar}
                    alt={testimonials[0].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white/30"
                  />
                  <div>
                    <div className="font-semibold text-white text-lg">{testimonials[0].name}</div>
                    <div className="text-primary-100 text-sm">{testimonials[0].role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 sm:px-8 lg:px-16 xl:px-24 py-20">
        <div className="container-max">
          <div className="bg-slate-900 rounded-3xl p-10 lg:p-14 text-center">
            <Sparkles className="w-12 h-12 text-primary-500 mx-auto mb-4" />
            <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-white mb-4">
              Become our next happy client
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Join hundreds of satisfied clients across Kampala and greater Uganda. Book your first cleaning today.
            </p>
            <Link to="/contact" className="btn-primary">
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
