
import React from 'react';
import { Project, Article, InvestmentCard } from './types';
import { TrendingUp, ShieldCheck, Settings, Globe } from 'lucide-react';

export const COLORS = {
  primary: '#111111',
  secondary: '#F9F9F9',
  accent: '#C5A059', // Gold
  accentDark: '#A88548',
  textMuted: '#666666',
};

// localized logo.png source 
export const LOGO_URL = '/2.png';

export const NAVIGATION_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Investments', href: '#investment' },
  { label: 'About', href: '#about' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contacts', href: '#contact' },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    name: 'Azure Bay Residencies',
    location: 'Riviera Coast',
    type: 'Apartment',
    status: 'In Construction',
    usp: 'Panoramic ocean views with private infinity pools.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    isFlagship: true,
  },
  {
    id: '2',
    name: 'The Obsidian Villa',
    location: 'Hill District',
    type: 'Villa',
    status: 'Completed',
    usp: 'Minimalist architecture integrated with natural rock.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    name: 'Metropolis Heights',
    location: 'City Center',
    type: 'Penthouse',
    status: 'Sold Out',
    usp: 'Luxury living above the clouds with 360° city views.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    name: 'Pine Crest Estate',
    location: 'Northern Woods',
    type: 'Residence',
    status: 'In Construction',
    usp: 'Sustainable luxury amidst ancient pine forests.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
  },
];

export const INVESTMENT_CARDS: InvestmentCard[] = [
  {
    title: 'Yield Potential',
    value: '8-12%',
    description: 'Projected annual returns based on historical data and market growth.',
    icon: 'TrendingUp',
  },
  {
    title: 'Legal Transparency',
    value: '100%',
    description: 'Fully licensed projects with secure international legal structures.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Full Management',
    value: 'Concierge',
    description: 'End-to-end property management and premium rental services.',
    icon: 'Settings',
  },
  {
    title: 'Global Network',
    value: '25+ Countries',
    description: 'A diverse portfolio of investors from major financial hubs.',
    icon: 'Globe',
  },
];

export const ARTICLES_DATA: Article[] = [
  {
    id: '1',
    title: 'The Future of Sustainable Luxury Architecture',
    date: 'Oct 24, 2024',
    category: 'Architecture',
    excerpt: 'How leading designers are blending ecological responsibility with high-end living.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '2',
    title: 'Top 5 Investment Hubs for 2025',
    date: 'Oct 12, 2024',
    category: 'Market Trends',
    excerpt: 'An analysis of emerging real estate markets with the highest growth potential.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '3',
    title: 'Interior Design: The Return of Quiet Luxury',
    date: 'Sep 28, 2024',
    category: 'Lifestyle',
    excerpt: 'Why minimalist elegance is outperforming ostentatious displays in modern homes.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
  },
];
