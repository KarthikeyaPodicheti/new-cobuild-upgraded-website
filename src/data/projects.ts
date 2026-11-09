export type ProjectStatus = 'Ongoing' | 'Completed' | 'Upcoming';

export interface ProjectFact {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  location: string;
  type: string;
  status: ProjectStatus;
  summary: string;
  facts: ProjectFact[];
  image: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'skyline-residences',
    title: 'Skyline Residences',
    location: 'Kondapur, Hyderabad',
    type: 'Residential',
    status: 'Ongoing',
    summary:
      'Two towers of 3 and 4 BHK sky homes wrapped around a rooftop clubhouse, with a dedicated work-from-home lounge and a landscaped central court.',
    facts: [
      { label: 'Land area', value: '2.4 acres' },
      { label: 'Homes', value: '168' },
      { label: 'Handover', value: 'Dec 2027' },
    ],
    image: '/images/project-skyline.svg',
    featured: true,
  },
  {
    slug: 'green-meadows-villas',
    title: 'Green Meadows Villas',
    location: 'Shamirpet, Hyderabad',
    type: 'Villas & Plots',
    status: 'Completed',
    summary:
      'Forty-two courtyard villas on a gated, tree-lined layout, handed over with completed roads, street lighting and a residents’ clubhouse.',
    facts: [
      { label: 'Land area', value: '11 acres' },
      { label: 'Villas', value: '42' },
      { label: 'Handover', value: '2024' },
    ],
    image: '/images/project-meadows.svg',
    featured: true,
  },
  {
    slug: 'metro-trade-centre',
    title: 'Metro Trade Centre',
    location: 'HITEC City, Hyderabad',
    type: 'Commercial',
    status: 'Ongoing',
    summary:
      'A Grade-A office and retail block designed for anchor tenants, with double-height retail frontage, 100% power backup and a six-level podium.',
    facts: [
      { label: 'Built-up area', value: '480,000 sq ft' },
      { label: 'Floors', value: 'G + 14' },
      { label: 'Handover', value: 'Q3 2027' },
    ],
    image: '/images/project-metro.svg',
    featured: true,
  },
  {
    slug: 'riverfront-heights',
    title: 'Riverfront Heights',
    location: 'Vijayawada, Andhra Pradesh',
    type: 'Residential',
    status: 'Upcoming',
    summary:
      'A river-facing residential address planned around a continuous promenade, with two- and three-bedroom homes and a residents’ wellness deck.',
    facts: [
      { label: 'Land area', value: '3.8 acres' },
      { label: 'Homes', value: '220' },
      { label: 'Launch', value: '2027' },
    ],
    image: '/images/project-riverfront.svg',
  },
  {
    slug: 'sunrise-enclave',
    title: 'Sunrise Enclave',
    location: 'Yelahanka, Bengaluru',
    type: 'Plotted Development',
    status: 'Completed',
    summary:
      'A fully developed plotted layout with underground utilities, avenue plantation and a completed community park, delivered plot-by-plot with clear titles.',
    facts: [
      { label: 'Land area', value: '26 acres' },
      { label: 'Plots', value: '310' },
      { label: 'Handover', value: '2023' },
    ],
    image: '/images/project-sunrise.svg',
  },
  {
    slug: 'northgate-logistics-park',
    title: 'Northgate Logistics Park',
    location: 'Medchal, Hyderabad',
    type: 'Industrial & Infrastructure',
    status: 'Upcoming',
    summary:
      'A build-to-suit logistics and light-industrial park served by dedicated internal roads, drainage and a shared utilities corridor.',
    facts: [
      { label: 'Land area', value: '38 acres' },
      { label: 'Built-up area', value: '620,000 sq ft' },
      { label: 'Launch', value: '2027' },
    ],
    image: '/images/project-northgate.svg',
  },
];
