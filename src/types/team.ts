export interface ContactInfo {
  email?: string;
  discord?: string;
  twitter?: string;
  linkedin?: string;
  telegram?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  contactInfo: ContactInfo;
  achievements?: string[];
  region?: string;
  image?: string;
  status?: 'online' | 'offline';
}

export interface RegionalCommunity {
  id: string;
  name: string;
  region: string;
  stats: {
    members: number;
    activeUsers: number;
  };
  initiatives: string[];
  contactInfo: ContactInfo;
  image?: string;
}

export type FilterCategory = 'all' | 'team' | 'community' | 'regional' | 'ambassadors';
export type PersonType = 'founder' | 'team' | 'admin' | 'mod' | 'crusader' | 'ambassador';