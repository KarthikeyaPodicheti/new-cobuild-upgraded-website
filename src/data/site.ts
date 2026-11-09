export const site = {
  name: 'NewBuild',
  shortName: 'NewBuild',
  tagline: 'Building landmark spaces. Delivering lasting value.',
  description:
    'NewBuild plans, builds and hands over residential communities, commercial landmarks and infrastructure with verifiable documentation and dependable timelines.',
  phone: '+91 90000 00000',
  phoneHref: '+919000000000',
  whatsappHref:
    'https://wa.me/919000000000?text=Hi%2C%20I%27m%20interested%20in%20The%20Courtyard.',
  email: 'hello@newbuild.co.in',
  address: {
    lines: [
      'NewBuild House, Plot 24',
      'Financial District, Nanakramguda',
      'Hyderabad, Telangana 500032',
    ],
    mapQuery: 'Financial District, Nanakramguda, Hyderabad',
  },
  hours: 'Monday – Saturday, 9:30 am – 6:30 pm',
  social: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'YouTube', href: '#' },
  ],
  reraNote:
    'Design preview only. Project names, specifications, RERA numbers and photography are placeholders.',
} as const;

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
] as const;
