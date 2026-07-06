export const company = {
  name: 'MessNoMore Cleaning Service',
  shortName: 'MessNoMore',
  tagline: 'Uganda\'s Trusted Cleaning Professionals',
  description:
    'Professional cleaning services for homes, offices, and commercial spaces across Kampala and greater Uganda. We make your space spotless so you can focus on what matters.',
  phone: '+256 700 123 456',
  phoneAlt: '+256 772 456 789',
  email: 'info@messnomore.co.ug',
  emailBookings: 'bookings@messnomore.co.ug',
  address: 'Plot 14, Kampala Road, Kampala, Uganda',
  hours: {
    weekdays: 'Mon - Fri: 7:00 AM - 7:00 PM',
    saturday: 'Saturday: 8:00 AM - 6:00 PM',
    sunday: 'Sunday: Closed (Emergency only)',
  },
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com',
    whatsapp: 'https://wa.me/256700123456',
  },
  founded: 2018,
  stats: {
    clients: '850+',
    team: '32',
    years: '6',
    satisfaction: '99%',
  },
};

export const services = [
  {
    slug: 'residential-cleaning',
    title: 'Residential Cleaning',
    icon: 'Home',
    short: 'Thorough home cleaning that leaves every room sparkling.',
    description:
      'From apartments to family homes, our trained team treats your space with care. We dust, mop, scrub, and sanitize every corner — kitchens, bathrooms, bedrooms, and living areas — using eco-friendly products that are safe for your family and pets.',
    features: [
      'Full-house deep cleaning',
      'Kitchen & bathroom sanitization',
      'Floor mopping and polishing',
      'Window cleaning (interior)',
      'Eco-friendly products',
      'Flexible scheduling',
    ],
    price: 'From UGX 80,000',
    image: 'https://images.pexels.com/photos/4239035/pexels-photo-4239035.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    slug: 'commercial-cleaning',
    title: 'Commercial & Office Cleaning',
    icon: 'Building2',
    short: 'Keep your workplace spotless and professional.',
    description:
      'A clean office boosts productivity and impresses clients. We provide daily, weekly, or monthly cleaning contracts for offices, retail shops, clinics, and corporate buildings across Kampala. Our team works around your schedule — before hours, after hours, or weekends.',
    features: [
      'Daily/weekly/monthly contracts',
      'Desk & workstation sanitizing',
      'Restroom deep cleaning',
      'Floor care (tile, carpet, vinyl)',
      'Window cleaning',
      'Waste management',
    ],
    price: 'From UGX 150,000',
    image: 'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    slug: 'carpet-upholstery-cleaning',
    title: 'Carpet & Upholstery Cleaning',
    icon: 'Sparkles',
    short: 'Revive your carpets, sofas, and chairs with deep extraction.',
    description:
      'Dirt, dust mites, and stains embed deep in carpet and upholstery fibers. Our hot-water extraction process lifts grime and allergens, restoring color and freshness. We handle sofas, office chairs, mattresses, area rugs, and wall-to-wall carpeting.',
    features: [
      'Hot-water extraction',
      'Stain & odor removal',
      'Mattress sanitization',
      'Fabric protection treatment',
      'Fast drying (2-4 hours)',
      'All fabric types',
    ],
    price: 'From UGX 60,000',
    image: 'https://images.pexels.com/photos/4239066/pexels-photo-4239066.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    slug: 'post-construction-cleaning',
    title: 'Post-Construction Cleaning',
    icon: 'HardHat',
    short: 'Make your newly built or renovated space move-in ready.',
    description:
      'Construction leaves behind dust, debris, and residue that ordinary cleaning can\'t handle. Our post-construction team removes fine dust from every surface, cleans windows inside and out, polishes fixtures, and scrubs floors — so your space is ready to live or work in.',
    features: [
      'Dust removal (all surfaces)',
      'Window & frame cleaning',
      'Floor scrubbing & polishing',
      'Fixture & hardware polishing',
      'Debris removal',
      'Final walkthrough inspection',
    ],
    price: 'From UGX 200,000',
    image: 'https://images.pexels.com/photos/5824472/pexels-photo-5824472.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    slug: 'move-in-move-out-cleaning',
    title: 'Move-In / Move-Out Cleaning',
    icon: 'Truck',
    short: 'Start fresh or leave your old place spotless.',
    description:
      'Moving is stressful enough. Our move-in/move-out cleaning covers every inch — inside cabinets, behind appliances, inside the fridge and oven, light fixtures, baseboards, and more. Whether you\'re a tenant wanting your deposit back or a landlord preparing for new tenants, we\'ve got you covered.',
    features: [
      'Inside appliance cleaning',
      'Cabinet interior & exterior',
      'Baseboards & door frames',
      'Light fixture dusting',
      'Wall spot cleaning',
      'Garage & balcony included',
    ],
    price: 'From UGX 120,000',
    image: 'https://images.pexels.com/photos/4239014/pexels-photo-4239014.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    slug: 'window-cleaning',
    title: 'Window Cleaning',
    icon: 'PanelsTopLeft',
    short: 'Crystal-clear windows inside and out.',
    description:
      'Streak-free, spot-free windows let in more light and make your property look cared for. We clean interior and exterior glass, frames, sills, and screens — for single-story homes, multi-story buildings, and storefronts. We use professional squeegee techniques and purified water for a flawless finish.',
    features: [
      'Interior & exterior glass',
      'Frames & sills detailed',
      'Screen cleaning',
      'Multi-story capable',
      'Purified water system',
      'Streak-free guarantee',
    ],
    price: 'From UGX 40,000',
    image: 'https://images.pexels.com/photos/4239063/pexels-photo-4239063.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export const testimonials = [
  {
    name: 'Sarah Nakato',
    role: 'Homeowner, Naguru',
    avatar: 'https://images.pexels.com/photos/4906226/pexels-photo-4906226.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'MessNoMore transformed my house. I came home from work and every room was spotless — even the kids\' rooms! The team was professional, on time, and so thorough. I\'ve booked them every two weeks since.',
  },
  {
    name: 'David Okello',
    role: 'Office Manager, Nakasero',
    avatar: 'https://images.pexels.com/photos/3779448/pexels-photo-3779448.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'We switched to MessNoMore for our office cleaning six months ago and the difference is night and day. The staff is reliable, the cleaning is consistent, and our employees have noticed. Highly recommended.',
  },
  {
    name: 'Grace Atim',
    role: 'Landlord, Kololo',
    avatar: 'https://images.pexels.com/photos/4906227/pexels-photo-4906227.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'After my tenants moved out, MessNoMore did a full move-out clean. The apartment looked better than when it was new. I got new tenants signed within a week. Worth every shilling.',
  },
  {
    name: 'James Mukasa',
    role: 'Restaurant Owner, Kira',
    avatar: 'https://images.pexels.com/photos/3779447/pexels-photo-3779447.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'Hygiene is everything in the restaurant business. MessNoMore deep-cleans our kitchen and dining area every night. They\'re discreet, efficient, and the place is always ready for morning prep.',
  },
  {
    name: 'Patricia Auma',
    role: 'Working Mother, Entebbe',
    avatar: 'https://images.pexels.com/photos/4906228/pexels-photo-4906228.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'With two kids and a full-time job, cleaning was always a burden. MessNoMore comes every Saturday and gives me my weekends back. They use safe products and my kids\' allergies have improved. Thank you!',
  },
  {
    name: 'Robert Tumusiime',
    role: 'Property Developer, Muyenga',
    avatar: 'https://images.pexels.com/photos/3779446/pexels-photo-3779446.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'I\'ve used MessNoMore for post-construction cleaning on three projects now. They remove every speck of dust and the units are handover-ready. Professional team, fair pricing, no surprises.',
  },
];

export const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/4239035/pexels-photo-4239035.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Kitchen Deep Clean',
    category: 'Residential',
  },
  {
    src: 'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Office Workspace',
    category: 'Commercial',
  },
  {
    src: 'https://images.pexels.com/photos/4239066/pexels-photo-4239066.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Carpet Extraction',
    category: 'Carpet',
  },
  {
    src: 'https://images.pexels.com/photos/4239063/pexels-photo-4239063.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Window Cleaning',
    category: 'Windows',
  },
  {
    src: 'https://images.pexels.com/photos/4239014/pexels-photo-4239014.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Move-Out Clean',
    category: 'Move In/Out',
  },
  {
    src: 'https://images.pexels.com/photos/5824472/pexels-photo-5824472.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Post-Construction',
    category: 'Post-Construction',
  },
  {
    src: 'https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Bathroom Sanitization',
    category: 'Residential',
  },
  {
    src: 'https://images.pexels.com/photos/4239027/pexels-photo-4239027.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Floor Polishing',
    category: 'Commercial',
  },
  {
    src: 'https://images.pexels.com/photos/4239030/pexels-photo-4239030.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Living Room Detail',
    category: 'Residential',
  },
  {
    src: 'https://images.pexels.com/photos/4239028/pexels-photo-4239028.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Stairwell Cleaning',
    category: 'Commercial',
  },
  {
    src: 'https://images.pexels.com/photos/4239034/pexels-photo-4239034.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Bedroom Refresh',
    category: 'Residential',
  },
  {
    src: 'https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Dining Area Clean',
    category: 'Commercial',
  },
];

export const team = [
  {
    name: 'Esther Nansubuga',
    role: 'Founder & Managing Director',
    avatar: 'https://images.pexels.com/photos/4906226/pexels-photo-4906226.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Esther started MessNoMore in 2018 after years in hospitality management. She saw a gap in Uganda for reliable, professional cleaning and built a team that delivers consistent quality.',
  },
  {
    name: 'Daniel Ssebunya',
    role: 'Operations Manager',
    avatar: 'https://images.pexels.com/photos/3779448/pexels-photo-3779448.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Daniel oversees scheduling, quality control, and client relations. He ensures every job meets the MessNoMore standard — no exceptions.',
  },
  {
    name: 'Mary Akello',
    role: 'Head of Training',
    avatar: 'https://images.pexels.com/photos/4906227/pexels-photo-4906227.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Mary trains every new team member in proper cleaning techniques, product safety, and customer service. She\'s the reason our quality never slips.',
  },
  {
    name: 'Patrick Byaruhanga',
    role: 'Commercial Team Lead',
    avatar: 'https://images.pexels.com/photos/3779447/pexels-photo-3779447.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Patrick leads our commercial cleaning division, managing contracts with offices, clinics, and retail spaces across Kampala. He\'s our night-shift hero.',
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Get a Quote',
    description: 'Call us or fill out the contact form. We\'ll ask about your space and needs, then give you a fair, transparent quote — no hidden fees.',
    icon: 'PhoneCall',
  },
  {
    number: '02',
    title: 'Schedule a Visit',
    description: 'Pick a date and time that works for you. We work weekdays, weekends, and evenings to fit your schedule.',
    icon: 'CalendarCheck',
  },
  {
    number: '03',
    title: 'We Clean',
    description: 'Our trained, uniformed team arrives on time with all equipment and eco-friendly products. You relax — we handle the rest.',
    icon: 'Sparkles',
  },
  {
    number: '04',
    title: 'Quality Check',
    description: 'Before we leave, we do a walkthrough with you to make sure every corner meets your standards. Your satisfaction is guaranteed.',
    icon: 'CheckCircle',
  },
];
