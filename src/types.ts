export interface Product {
  id: string;
  name: string;
  category: 'verduras' | 'frutas' | 'hierbas' | 'tuberculos';
  unit: string;
  price: number; // in Soles S/
  freshness: string;
  image: string;
  stallId: string;
}

export interface Stall {
  id: string;
  name: string;
  owner: string;
  specialty: string;
  rating: number;
  reviewCount: number;
  distance: string;
  marketName: string;
  district: string;
  schedule: string;
  image: string;
  isPopular?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  image: string;
  badge?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  quickReplies?: string[];
}
