export const site = {
  name: 'New Co Build Infra Developers',
  shortName: 'New Co',
  tagline: 'Building landmark spaces. Delivering lasting value.',
  description:
    'New Co Build Infra Developers plans, builds and hands over residential communities, commercial landmarks and infrastructure with verifiable documentation and dependable timelines.',
  phone: '+91 90000 00000',
  phoneHref: '+919000000000',
  email: 'hello@newcobuildinfra.com',
  address: {
    lines: [
      'New Co House, Plot 24',
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
    'RERA registration numbers are published per project. This site currently uses placeholder project information.',
} as const;

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
] as const;
