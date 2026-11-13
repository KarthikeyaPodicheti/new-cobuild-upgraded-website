export const site = {
  name: 'NewBuild',
  shortName: 'NewBuild',
  tagline: 'Homes and workplaces, built with clear paperwork and timelines.',
  description:
    'NewBuild plans and builds residential and commercial projects. We share approvals, schedules, and site progress so you can check the work yourself.',
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
  hours: 'Monday to Saturday, 9:30 am to 6:30 pm',
  /**
   * Social profiles are not configured yet. Until the client supplies them
   * the footer renders them as disabled placeholders rather than dead links
   * that jump the visitor back to the top of the page.
   */
  social: [
    { label: 'LinkedIn', href: '#', placeholder: true },
    { label: 'Instagram', href: '#', placeholder: true },
    { label: 'YouTube', href: '#', placeholder: true },
  ],
  reraNote:
    'Design preview. Project names, specifications, RERA numbers, and photography are placeholders.',
} as const;

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
] as const;
