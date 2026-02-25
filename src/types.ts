export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  amenities: string[];
  capacity: number;
}

export interface Booking {
  id: string;
  roomId: string;
  guestName: string;
  checkIn: string;
  checkOut: string;
  status: 'confirmed' | 'cancelled';
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}
