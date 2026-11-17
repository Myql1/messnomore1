import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight, Camera, Sparkles, PlayCircle } from 'lucide-react';
import { galleryImages } from '../lib/data';
import { LogoImg } from '../components/Logo';

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/slider/WhatsApp Image 2026-10-07 at 6.21.33 AM.jpeg"
            alt="Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />
        </div>
        <div className="container-max px-5 sm:px-8 lg:px-16 xl:px-24 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 border border-primary-400/30 backdrop-blur-sm mb-6">
              <Camera className="w-4 h-4 text-primary-300" />
              <span className="text-sm font-medium text-primary-100">Our Gallery</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl lg:text-5xl text-white mb-6 leading-tight">
              See the MessNoMore difference
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed">
              A picture is worth a thousand words. Browse our portfolio of recent cleaning projects across Kampala and greater Uganda.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="container-max">
          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                onClick={() => setLightbox(img.src)}
                className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer card-hover"
              >
                <img
                  src={img.src}
                  alt="Gallery"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <LogoImg className="w-5 h-5 text-white object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="section-padding bg-white">
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
            <div className="bg-slate-50 rounded-2xl shadow-xl overflow-hidden">
              <div className="relative">
                <video
                  src="/VID-20260629-WA0027.mp4"
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
            <div className="bg-slate-50 rounded-2xl shadow-xl overflow-hidden">
              <div className="relative">
                <video
                  src="/VID-20260629-WA0026.mp4"
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

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-8">
            <div className="bg-slate-50 rounded-2xl shadow-xl overflow-hidden">
              <div className="relative">
                <video
                  src="/VID-20260630-WA0010.mp4"
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
            <div className="bg-slate-50 rounded-2xl shadow-xl overflow-hidden">
              <div className="relative">
                <video
                  src="/VID-20260630-WA0000.mp4"
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

      {/* In Action */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 mb-5">
              <PlayCircle className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700">In Action</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-slate-900 mb-4">
              See us at work
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Watch our team in action as we deliver exceptional cleaning results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <video
                src="/VID-20260630-WA0000.mp4"
                controls
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-slate-900">Cleaning in Action</h3>
                <p className="text-sm text-slate-500 mt-1">Our team at work delivering spotless results.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <video
                src="/VID-20260630-WA0027.mp4"
                controls
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-slate-900">Detailed Cleaning</h3>
                <p className="text-sm text-slate-500 mt-1">Attention to detail in every corner.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <video
                src="/VID-20260630-WA0000.mp4"
                controls
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-slate-900">Final Touch</h3>
                <p className="text-sm text-slate-500 mt-1">The finishing touches that make the difference.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in cursor-pointer"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <img
            src={lightbox}
            alt="Gallery item"
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* CTA */}
      <section className="px-5 sm:px-8 lg:px-16 xl:px-24 pb-20">
        <div className="container-max">
          <div className="bg-slate-900 rounded-3xl p-10 lg:p-14 text-center">
            <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-white mb-4">
              Like what you see?
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Your space could be next. Book a cleaning today and join hundreds of satisfied clients across Uganda.
            </p>
            <Link to="/contact" className="btn-primary">
              Book a Cleaning
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
