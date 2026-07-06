import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, X, ArrowRight, Camera } from 'lucide-react';
import { galleryImages } from '../lib/data';

const categories = ['All', 'Residential', 'Commercial', 'Carpet', 'Windows', 'Move In/Out', 'Post-Construction'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/4239030/pexels-photo-4239030.jpeg?auto=compress&cs=tinysrgb&w=1920"
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

      {/* Filter & Gallery */}
      <section className="section-padding">
        <div className="container-max">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredImages.map((img, i) => (
              <div
                key={i}
                onClick={() => setLightbox(img.src)}
                className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer card-hover"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-xs font-medium text-primary-300 uppercase tracking-wider">{img.category}</span>
                  <h3 className="font-display font-bold text-white text-lg">{img.title}</h3>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </div>
            ))}
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
