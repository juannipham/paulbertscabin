import { Room, Review } from './types';

export const ROOMS: Room[] = [
  {
    id: '1',
    name: 'The Sunset Suite',
    description: 'A cozy studio with a stunning view of the Mandaluyong skyline. Perfect for solo travelers or couples.',
    price: 1800,
    image: 'https://picsum.photos/seed/room1/800/600',
    amenities: ['High-speed WiFi', 'Netflix', 'Kitchenette', 'Air Conditioning'],
    capacity: 2,
  },
  {
    id: '2',
    name: 'The Urban Nest',
    description: 'Modern minimalist design meets comfort. Located on a high floor for maximum peace and quiet.',
    price: 2000,
    image: 'https://picsum.photos/seed/room2/800/600',
    amenities: ['High-speed WiFi', 'Smart TV', 'Coffee Maker', 'Pool Access'],
    capacity: 2,
  },
  {
    id: '3',
    name: 'The Cabin Classic',
    description: 'Our signature room featuring rustic wooden accents and premium bedding for a true cabin feel in the city.',
    price: 2200,
    image: 'https://picsum.photos/seed/room3/800/600',
    amenities: ['High-speed WiFi', 'Mini Bar', 'Work Desk', 'City View'],
    capacity: 2,
  },
  {
    id: '4',
    name: 'The Sky Loft',
    description: 'Spacious and airy, this unit offers the best panoramic views of the metro. Ideal for longer stays.',
    price: 2500,
    image: 'https://picsum.photos/seed/room4/800/600',
    amenities: ['High-speed WiFi', 'Full Kitchen', 'Balcony', 'Smart Lock'],
    capacity: 3,
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Maria C.',
    rating: 5,
    comment: "Paul and Albert were amazing hosts! The room was spotless and the view was incredible. Highly recommend!",
    date: '2024-01-15',
  },
  {
    id: '2',
    author: 'James L.',
    rating: 4,
    comment: "Great location and very cozy. Perfect for a quick staycation. The WiFi was super fast!",
    date: '2024-02-01',
  },
  {
    id: '3',
    author: 'Sophia R.',
    rating: 5,
    comment: "Best staycation in Mandaluyong. The cabin theme is so unique and relaxing.",
    date: '2024-02-10',
  }
];
