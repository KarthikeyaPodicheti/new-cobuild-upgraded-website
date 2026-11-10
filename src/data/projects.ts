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
  description: string;
  facts: ProjectFact[];
  image: string;
  gallery: string[];
  featured?: boolean;
}

/**
 * One real project is live today. Everything here is placeholder content for
 * the design mockup. Replace with verified project data before launch.
 */
export const projects: Project[] = [
  {
    slug: 'the-courtyard',
    title: 'The Courtyard',
    location: 'Kondapur, Hyderabad',
    type: 'Residential',
    status: 'Ongoing',
    summary:
      '3 and 4 BHK homes around a landscaped central court. Rooftop clubhouse, work lounge, and open green space.',
    description:
      'The Courtyard is a gated community planned so homes face light, air, and green space instead of another wall. Two towers share a rooftop clubhouse, a residents’ lounge, and a work-from-home wing. The ground level stays open for walking, play, and time outdoors.',
    facts: [
      { label: 'Land area', value: '2.4 acres' },
      { label: 'Homes', value: '168' },
      { label: 'Unit types', value: '3 & 4 BHK' },
      { label: 'Handover', value: 'Dec 2027' },
      { label: 'RERA', value: 'Placeholder' },
      { label: 'Status', value: 'Selling' },
    ],
    image: '/images/project-skyline.svg',
    gallery: [
      '/images/project-skyline.svg',
      '/images/project-meadows.svg',
      '/images/project-metro.svg',
    ],
    featured: true,
  },
];

export interface TrackRecordEntry {
  title: string;
  location: string;
  year: string;
  note: string;
  image: string;
}

/**
 * Work delivered by the promoters under earlier entities. Placeholder entries
 * until the client supplies verified names, years, and photography.
 */
export const trackRecord: TrackRecordEntry[] = [
  {
    title: 'Green Meadows Villas',
    location: 'Shamirpet, Hyderabad',
    year: '2024',
    note: '42 courtyard villas in a gated, tree-lined layout. Handed over with roads, lighting, and a residents’ clubhouse.',
    image: '/images/project-meadows.svg',
  },
  {
    title: 'Sunrise Enclave',
    location: 'Yelahanka, Bengaluru',
    year: '2023',
    note: 'Plotted layout with underground utilities, avenue planting, and a completed community park.',
    image: '/images/project-sunrise.svg',
  },
  {
    title: 'Metro Trade Centre',
    location: 'HITEC City, Hyderabad',
    year: '2022',
    note: 'Grade-A office and retail block with double-height retail frontage and a six-level podium.',
    image: '/images/project-metro.svg',
  },
];
