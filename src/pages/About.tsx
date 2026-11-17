import { Link } from 'react-router-dom';
import {
  Sparkles, Target, Eye, Heart, Shield, Leaf, Clock, Award,
  Users, TrendingUp, CheckCircle, ArrowRight, Quote,
} from 'lucide-react';
import { company,  } from '../lib/data';

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/IMG-20260713-WA0305.jpg"
            alt="Cleaning team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />
        </div>
        <div className="container-max px-5 sm:px-8 lg:px-16 xl:px-24 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 border border-primary-400/30 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-primary-300" />
              <span className="text-sm font-medium text-primary-100">About Us</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl lg:text-5xl text-white mb-6 leading-tight">
              Uganda's trusted name in professional cleaning
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed">
              We started MessNoMore with a simple mission: bring reliable, professional cleaning to every home and business in Uganda. Six years later, we're proud to serve hundreds of happy clients across Kampala and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 mb-5">
                <Heart className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-semibold text-primary-700">Our Story</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-slate-900 mb-6 leading-tight">
                From a small team to Uganda's cleaning partner of choice
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  When  MessNoMore commenced business in 2018,  finding a professional cleaning service in Kampala that showed up in time, did a thorough job, and used safe products was a difficult. After years in hospitality management, we knew what "clean" should look like and realised Uganda deserved better.
                </p>
                <p>
                  At MCSL we conceit ourselves on the exceptional quality of service we deliver with our contract cleaning services. We have the most motivated team of cleaners who are highly trained and skilled at using the latest machinery used for cleaning and are experienced with cleaning all types of building spaces.
                </p>
                <p>
                  Client satisfaction is the epitome of our services, this drives us to ensure that all our client's expectations are met with the high cleaning standards during the cleaning contract and we ensure working around the client's schedule by deploying the cleaners either as early as 5am before your employees arrive or at 6pm after employees have left not to inconvenience their stay at the work place.
                </p>
                <p>
                  But we haven't lost what made us different. Every team member is trained, uniformed, background-checked, and equipped with eco-friendly products. We show up when we say we will. And if something isn't right, we come back and fix it — no questions asked.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4239035/pexels-photo-4239035.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="MessNoMore team at work"
                className="rounded-3xl shadow-2xl object-cover w-full h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 max-w-[200px]">
                <div className="font-display font-extrabold text-4xl text-primary-600">{company.stats.years}</div>
                <div className="text-sm text-slate-500 font-medium">Years of dedicated service to Uganda</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-slate-50 section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                desc: 'To deliver consistently excellent cleaning services that improve the health, comfort, and productivity of every Ugandan home and business we serve — while creating dignified employment for our community.',
              },
              {
                icon: Eye,
                title: 'Our Vision',
                desc: 'To be East Africa\'s most trusted cleaning company, known for reliability, eco-friendly practices, and a team that treats every client\'s space with the respect it deserves.',
              },
              {
                icon: Heart,
                title: 'Our Values',
                desc: 'Reliability, integrity, and care. We show up on time, we do what we say, and we treat your space — and the people in it — with genuine respect.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-md card-hover">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-600/30 mb-5">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Detailed */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 mb-5">
              <Award className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700">What Sets Us Apart</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-slate-900 mb-4">
              The MessNoMore difference
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We don't cut corners — we clean them. Here's what makes us the cleaning company Uganda trusts.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Trusted Team', desc: 'Every cleaner is background-checked, trained, and uniformed. Your safety and privacy come first.' },
              { icon: Leaf, title: 'Eco-Friendly', desc: 'We use biodegradable, non-toxic products that are safe for your family, pets, and the planet.' },
              { icon: Clock, title: 'Always On Time', desc: 'We respect your schedule. If we say 8 AM, we\'re there at 8 AM — not 8:15.' },
              { icon: Award, title: 'Satisfaction Guaranteed', desc: 'Not happy with the result? We come back and re-clean at no extra cost. That\'s our promise.' },
              { icon: Users, title: 'Local Team', desc: 'We\'re a Ugandan company employing Ugandans. When you hire us, you support our community.' },
              { icon: TrendingUp, title: 'Fair Pricing', desc: 'Transparent quotes with no hidden fees. You know exactly what you\'re paying for before we start.' },
              { icon: CheckCircle, title: 'Quality Control', desc: 'Every job ends with a walkthrough. We check our work against a 40-point checklist.' },
              { icon: Heart, title: 'Care & Respect', desc: 'We treat your space like it\'s ours. Your home, your rules, our diligence.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md card-hover border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-display font-bold text-base text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Quote Banner */}
      <section className="px-5 sm:px-8 lg:px-16 xl:px-24 py-20">
        <div className="container-max">
          <div className="bg-gradient-to-br from-primary-600 to-ocean-700 rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden">
            <Quote className="absolute top-8 left-8 w-16 h-16 text-white/10" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <p className="font-display font-bold text-2xl lg:text-3xl text-white leading-relaxed mb-6">
                "We don't just clean spaces. We give people their time back, their peace of mind, and a place they're proud to call home or office."
              </p>
              <p className="text-primary-100 font-medium">— MOLLY BUGIRI, Founder & Managing Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 sm:px-8 lg:px-16 xl:px-24 pb-20">
        <div className="container-max">
          <div className="bg-slate-900 rounded-3xl p-10 lg:p-14 text-center">
            <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-white mb-4">
              Want to work with us?
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Whether you need a one-time deep clean or ongoing service, we'd love to help. Get in touch for a free quote.
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
