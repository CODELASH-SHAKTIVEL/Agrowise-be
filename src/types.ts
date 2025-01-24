export type CropType = 'wheat' | 'rice' | 'maize' | 'potato' | 'soybean';
export type GrowthStage = 'sowing' | 'vegetative' | 'flowering' | 'harvesting';

export interface IssueType {
  id: string;
  label: string;
  checked: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface CropListing {
  id: string;
  cropType: CropType;
  description: string;
  quantity: number;
  price: number;
  imageUrl: string;
  farmerName: string;
  farmerContact: string;
  location: string;
  dateAdded: string;
}

export interface CartItem extends CropListing {
  quantity: number;
}

export interface Invoice {
  id: string;
  items: CartItem[];
  buyerName: string;
  buyerEmail: string;
  buyerPhone: string;
  totalAmount: number;
  date: string;
}

export interface GovernmentScheme {
  id: string;
  title: string;
  description: string;
  eligibility: string[];
  benefits: string[];
  region: string;
  cropTypes: CropType[];
  applicationProcess: string;
  deadline: string;
  status: 'active' | 'upcoming' | 'closed';
}