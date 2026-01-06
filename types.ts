
export type ProjectStatus = 'In Construction' | 'Completed' | 'Sold Out';
export type ProjectType = 'Villa' | 'Residence' | 'Apartment' | 'Penthouse';

export interface Project {
  id: string;
  name: string;
  location: string;
  type: ProjectType;
  status: ProjectStatus;
  priceRange?: string;
  usp: string;
  image: string;
  isFlagship?: boolean;
}

export interface Article {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
}

export interface InvestmentCard {
  title: string;
  value: string;
  description: string;
  icon: string;
}
