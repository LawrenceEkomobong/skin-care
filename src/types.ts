export type ProductCategory =
  | 'All'
  | 'Body Care'
  | 'Face Care'
  | 'Moisturizers'
  | 'Cleansers'
  | 'Oils & Serums'
  | 'Sun Care';

export interface Product {
  id: string;
  name: string;
  category: 'Body Care' | 'Face Care' | 'Moisturizers' | 'Cleansers' | 'Oils & Serums' | 'Sun Care';
  secondaryCategory?: string;
  tagline: string;
  description: string;
  overview: string;
  price: number;
  formattedPrice: string;
  size: string;
  image: string;
  isFeatured?: boolean;
  ingredients: string[];
  howToUse: string;
  skinType?: string;
  keyBenefits: string[];
}

export interface ContactFormData {
  name: string;
  contact: string; // email or phone
  subject: string;
  message: string;
}
