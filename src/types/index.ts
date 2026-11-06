export interface SocialLink {
  label: string;
  url: string;
  icon: string;
  primary?: boolean;
  color?: string;
}

export interface Profile {
  name: string;
  initials: string;
  role: string;
  company: string;
  headline: string;
  bio: string;
  academic: string;
  honors: string;
  status: string;
  links: {
    noduxWeb: string;
    commercialOS: string;
    kiroDemo: string;
    linkedin: string;
    whatsapp: string;
  };
}

export interface Metric {
  id: string;
  value: string;
  label: string;
  subtext: string;
  accent: 'blue' | 'amber' | 'emerald' | 'purple' | 'cyan';
}

export interface NoduxPlatform {
  title: string;
  category: string;
  badge?: string;
  description: string;
  tags: string[];
  ctaText?: string;
  ctaUrl?: string;
  subNote?: string;
}

export interface NoduxTab {
  id: string;
  label: string;
  iconName: string;
  platforms: NoduxPlatform[];
}

export interface Podium {
  id: string;
  place: string;
  badgeColor: 'amber' | 'blue' | 'indigo' | 'emerald';
  date: string;
  title: string;
  description: string;
  tech: string;
  link?: string;
  linkText?: string;
  footerNote?: string;
}

export interface LeadershipRole {
  id: string;
  badge: string;
  subBadge: string;
  title: string;
  description: string;
  bullets: string[];
  footerCategory: string;
  footerStatus: string;
  themeColor: 'pink' | 'indigo' | 'blue';
}

export interface Credential {
  id: string;
  badge: string;
  yearOrLocation: string;
  title: string;
  description: string;
  themeColor: 'rose' | 'amber' | 'emerald' | 'sky' | 'cyan' | 'teal';
}

export interface ExperienceItem {
  id: string;
  category: string;
  badgeMetric: string;
  title: string;
  description: string;
  themeColor: 'blue' | 'indigo' | 'amber' | 'slate';
}
