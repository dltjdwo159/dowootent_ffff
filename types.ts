
export interface Project {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  imageUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SiteConfig {
  companyName: string;
  primaryColor: string;
  phone: string;
  address: string;
  email: string;
}

export type ViewState = 'HOME' | 'ABOUT' | 'SERVICES' | 'PORTFOLIO' | 'CONTACT' | 'ADMIN';
