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
 * Placeholder photography for the design mockup — licensed CC images from
 * Wikimedia Commons. Replace with the Client's own project photography before
 * launch and keep the attribution list in the footer accurate.
 */
const PHOTO = {
  courtyard:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Fragment_of_160_Front_Street_West%2C_Toronto.jpg/1280px-Fragment_of_160_Front_Street_West%2C_Toronto.jpg',
  villas:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Architectural_Masterplan_Model_of_Lieb_Tang_Rodfai_Villas.jpg/1280px-Architectural_Masterplan_Model_of_Lieb_Tang_Rodfai_Villas.jpg',
  enclave:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Prague_skyline_at_dawn.jpg/1280px-Prague_skyline_at_dawn.jpg',
  metro:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg/1280px-M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg',
  tower:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Auditorio_de_Tenerife%2C_Santa_Cruz_de_Tenerife%2C_Espa%C3%B1a%2C_2012-12-15%2C_DD_24.jpg/1280px-Auditorio_de_Tenerife%2C_Santa_Cruz_de_Tenerife%2C_Espa%C3%B1a%2C_2012-12-15%2C_DD_24.jpg',
};

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
    image: PHOTO.courtyard,
    gallery: [PHOTO.courtyard, PHOTO.metro, PHOTO.enclave],
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
    image: PHOTO.villas,
  },
  {
    title: 'Sunrise Enclave',
    location: 'Yelahanka, Bengaluru',
    year: '2023',
    note: 'Plotted layout with underground utilities, avenue planting, and a completed community park.',
    image: PHOTO.enclave,
  },
  {
    title: 'Metro Trade Centre',
    location: 'HITEC City, Hyderabad',
    year: '2022',
    note: 'Grade-A office and retail block with double-height retail frontage and a six-level podium.',
    image: PHOTO.metro,
  },
];

export const photos = PHOTO;
