import { TeamMember, RegionalCommunity } from '../types/team';

export const founder: TeamMember = {
  id: 'burnt-banksy',
  name: 'Burnt Banksy (Anthony Anzalone)',
  position: 'CEO & Founder',
  bio: 'Visionary founder who made history by burning a Banksy painting to create a high-value NFT. Pioneer of Web3 adoption through chain abstraction, committed to making blockchain accessible to all users. Leading XION\'s mission to onboard mainstream brands like Uber, Amazon Prime, BMW.',
  contactInfo: {
    email: 'anthony@xion.com',
    discord: 'BurntBanksy#0001',
    linkedin: 'anthony-anzalone-xion',
    twitter: '@BurntBanksy'
  },
  achievements: [
    'First person to burn a Banksy painting for NFT creation',
    'Pioneer of chain abstraction technology',
    'Leading mainstream Web3 adoption',
    'Building partnerships with Fortune 500 companies'
  ],
  image: '/lovable-uploads/e7169298-be3f-4253-b24a-a143fda7773d.png',
  status: 'online'
};

export const teamMembers: TeamMember[] = [
  {
    id: 'adam-bates',
    name: 'Adam Bates',
    position: 'Chief Marketing Officer',
    bio: 'Former CMO of Cardano, marketing expert with Virgin, Porsche, Emirates experience. Leading XION\'s global marketing strategy and brand partnerships.',
    contactInfo: {
      email: 'adam@xion.com',
      discord: 'AdamBates#1234',
      twitter: '@xAdamBates'
    },
    achievements: [
      'Former CMO of Cardano',
      'Marketing campaigns for Virgin, Porsche, Emirates',
      'Built global crypto marketing strategies'
    ],
    image: '/lovable-uploads/adam-bates.jpg',
    status: 'online'
  },
  {
    id: 'pj-burnt-maska',
    name: 'PJ | Burnt Maska',
    position: 'Growth Team Member',
    bio: 'Member of XION growth team, He is Santa for all the XION believers, he makes wishes come true.',
    contactInfo: {
      twitter: '@Prajjwal08'
    },
    image: '/lovable-uploads/pj-burnt-maska.jpg',
    status: 'online'
  },
  {
    id: 'ze-burnt-barrel',
    name: 'Ze - Burnt Barrel',
    position: 'Team Member',
    bio: 'Dedicated team member contributing to XION\'s mission and ecosystem growth.',
    contactInfo: {},
    image: '/lovable-uploads/ze-burnt-barrel.jpg',
    status: 'online'
  },
  {
    id: 'burnt-unagi',
    name: 'Burnt Unagi',
    position: 'APAC Expansion',
    bio: 'Leading APAC expansion efforts for XION, driving growth and partnerships across the Asia-Pacific region.',
    contactInfo: {
      twitter: '@BurntUnagi_apac'
    },
    image: '/lovable-uploads/burnt-unagi.jpg',
    status: 'online'
  }
];

export const adminMembers: TeamMember[] = [
  {
    id: 'atoz',
    name: 'Atoz',
    position: 'Admin',
    bio: 'Atoz is currently overseeing XION\'s Discord server, Telegram channels, and handling the majority of community management responsibilities. With a strong presence in the crypto ecosystem, Atoz ensures smooth community engagement and support across all platforms.',
    contactInfo: {
      discord: 'Atoz#0001',
      twitter: '@0xAtoz',
      telegram: '@Atoz'
    },
    image: '/lovable-uploads/89c74a4c-0b03-400c-b8db-79eee1aca79e.png',
    status: 'online'
  },
  {
    id: 'jsbmudit',
    name: 'JsbMudit',
    position: 'Community Manager',
    bio: 'JsbMudit actively manages XION\'s Discord server and oversees the gaming ecosystem, including cross-chain games. He plays a vital role in community engagement, ensuring smooth interactions and organizing events that drive participation and growth.',
    contactInfo: {
      discord: 'JsbMudit#0002',
      twitter: '@jsbmudit',
      telegram: '@JsbMudit'
    },
    image: '/lovable-uploads/9899f0bf-630b-4e36-8217-2fef68d5fd72.png',
    status: 'online'
  },
  {
    id: 'l1ghtik',
    name: 'l1ghtik',
    position: 'Community Manager',
    bio: 'l1ghtik actively manages XION\'s Discord server and oversees the gaming ecosystem, including cross-chain games. He plays a vital role in community engagement, ensuring smooth interactions and organizing events that drive participation and growth.',
    contactInfo: {
      discord: 'l1ghtik#0003',
      telegram: '@l1ghtik'
    },
    image: '/lovable-uploads/l1ghtik.jpg',
    status: 'online'
  }
];

export const regionalCommunities: RegionalCommunity[] = [
  {
    id: 'xion-india',
    name: 'XION INDIA',
    region: 'India',
    stats: { members: 2850, activeUsers: 1200 },
    initiatives: ['Local meetups', 'Developer workshops', 'University partnerships'],
    contactInfo: {
      discord: 'XionIndia#0001',
      telegram: '@XionIndia',
      twitter: '@xion_indian'
    },
    image: '/lovable-uploads/xion-india.jpg'
  },
  {
    id: 'xion-nigeria',
    name: 'XION NIGERIA',
    region: 'Nigeria',
    stats: { members: 1950, activeUsers: 800 },
    initiatives: ['FinTech partnerships', 'Educational programs', 'Community events'],
    contactInfo: {
      discord: 'XionNigeria#0002',
      telegram: '@XionNigeria',
      twitter: '@xion_nigeria'
    },
    image: '/lovable-uploads/xion-nigeria.jpg'
  },
  {
    id: 'xion-indonesia',
    name: 'XION INDONESIA',
    region: 'Indonesia',
    stats: { members: 1650, activeUsers: 750 },
    initiatives: ['Local blockchain education', 'Developer meetups', 'Gaming partnerships'],
    contactInfo: {
      discord: 'XionIndonesia#0003',
      telegram: '@XionIndonesia',
      twitter: '@xion_indonesia'
    },
    image: '/lovable-uploads/xion-indonesia.jpg'
  },
  {
    id: 'xion-ukraine',
    name: 'XION UKRAINE',
    region: 'Ukraine',
    stats: { members: 980, activeUsers: 420 },
    initiatives: ['Developer community', 'Educational content', 'Local partnerships'],
    contactInfo: {
      discord: 'XionUkraine#0005',
      telegram: '@XionUkraine',
      twitter: '@xion_ukraine'
    },
    image: '/lovable-uploads/xion-ukraine.jpg'
  },
  {
    id: 'xion-pakistan',
    name: 'XION PAKISTAN',
    region: 'Pakistan',
    stats: { members: 850, activeUsers: 380 },
    initiatives: ['University outreach', 'Local meetups', 'Developer training'],
    contactInfo: {
      discord: 'XionPakistan#0006',
      telegram: '@XionPakistan',
      twitter: '@Xion_Pakistan'
    },
    image: '/lovable-uploads/xion-pakistan.jpg'
  },
  {
    id: 'xion-bangladesh',
    name: 'XION BANGLADESH',
    region: 'Bangladesh',
    stats: { members: 720, activeUsers: 310 },
    initiatives: ['Community building', 'Educational workshops', 'Local events'],
    contactInfo: {
      discord: 'XionBangladesh#0007',
      telegram: '@XionBangladesh',
      twitter: '@XIONBangladesh'
    },
    image: '/lovable-uploads/xion-bangladesh.jpg'
  },
  {
    id: 'xion-philippines',
    name: 'XION PHILIPPINES',
    region: 'Philippines',
    stats: { members: 650, activeUsers: 280 },
    initiatives: ['Gaming partnerships', 'Developer community', 'Local meetups'],
    contactInfo: {
      discord: 'XionPhilippines#0008',
      telegram: '@XionPhilippines',
      twitter: '@xion_ph'
    },
    image: '/lovable-uploads/xion-philippines.jpg'
  }
];

export const regionalMods: TeamMember[] = [
  {
    id: 'mod-india',
    name: 'Aman',
    position: 'India Moderator',
    region: 'India',
    bio: 'Dedicated moderator for the India XION community, ensuring positive engagement and supporting local initiatives.',
    contactInfo: {
      twitter: '@otxAman'
    },
    image: '/lovable-uploads/aman.jpg',
    status: 'online'
  },
  {
    id: 'mod-nigeria',
    name: 'Daniel',
    position: 'Nigeria Moderator',
    region: 'Nigeria',
    bio: 'Dedicated moderator for the Nigeria XION community, ensuring positive engagement and supporting local initiatives.',
    contactInfo: {},
    image: '/lovable-uploads/daniel.jpg',
    status: 'online'
  },
  {
    id: 'mod-indonesia',
    name: 'Marko Stevan',
    position: 'Indonesia Moderator',
    region: 'Indonesia',
    bio: 'Dedicated moderator for the Indonesia XION community, ensuring positive engagement and supporting local initiatives.',
    contactInfo: {
      twitter: '@MarkoStevan19'
    },
    image: '/lovable-uploads/marko-stevan.jpg',
    status: 'online'
  },
  {
    id: 'mod-ukraine',
    name: 'DoNotCallMe',
    position: 'Ukraine Moderator',
    region: 'Ukraine',
    bio: 'Dedicated moderator for the Ukraine XION community, ensuring positive engagement and supporting local initiatives.',
    contactInfo: {
      twitter: '@don0tcallme'
    },
    image: '/lovable-uploads/donotcallme.jpg',
    status: 'online'
  },
  {
    id: 'mod-pakistan',
    name: 'Sherry',
    position: 'Pakistan Moderator',
    region: 'Pakistan',
    bio: 'Dedicated moderator for the Pakistan XION community, ensuring positive engagement and supporting local initiatives.',
    contactInfo: {
      twitter: '@sherrythelast'
    },
    image: '/lovable-uploads/sherry.jpg',
    status: 'online'
  },
  {
    id: 'mod-bangladesh',
    name: 'Alok',
    position: 'Bangladesh Moderator',
    region: 'Bangladesh',
    bio: 'Dedicated moderator for the Bangladesh XION community, ensuring positive engagement and supporting local initiatives.',
    contactInfo: {
      twitter: '@alok_inj'
    },
    image: '/lovable-uploads/alok.jpg',
    status: 'online'
  },
  {
    id: 'mod-russia',
    name: 'MiReTu',
    position: 'Russia Moderator',
    region: 'Russia',
    bio: 'Dedicated moderator for the Russia XION community, ensuring positive engagement and supporting local initiatives.',
    contactInfo: {
      twitter: '@_MiReTu_'
    },
    image: '/lovable-uploads/miretu.jpg',
    status: 'online'
  },
  {
    id: 'mod-philippines',
    name: 'ACRis',
    position: 'Philippines Moderator',
    region: 'Philippines',
    bio: 'Dedicated moderator for the Philippines XION community, ensuring positive engagement and supporting local initiatives.',
    contactInfo: {
      twitter: '@ItsmeAcris'
    },
    image: '/lovable-uploads/acris.jpg',
    status: 'online'
  }
];

export const crusaders: TeamMember[] = [
  {
    id: 'demo-crusader-1',
    name: 'Demo Crusader 1',
    position: 'Community Crusader',
    region: 'Global',
    bio: 'Elite community member leading global initiatives and supporting regional communities. Recognized for outstanding contributions to XION ecosystem growth.',
    contactInfo: {
      email: 'crusader1@xion.com',
      discord: 'DemoCrusader1#0001',
      twitter: '@XionCrusader1',
      telegram: '@XionCrusader1'
    },
    achievements: [
      'Led 50+ community events',
      'Onboarded 1000+ new users',
      'Created educational content'
    ],
    status: 'online'
  },
  {
    id: 'demo-crusader-2',
    name: 'Demo Crusader 2',
    position: 'Community Crusader',
    region: 'Asia Pacific',
    bio: 'Regional leader driving XION adoption across Asia Pacific. Expert in community building and cross-cultural engagement.',
    contactInfo: {
      email: 'crusader2@xion.com',
      discord: 'DemoCrusader2#0002',
      twitter: '@XionCrusader2',
      telegram: '@XionCrusader2'
    },
    achievements: [
      'Built APAC community networks',
      'Multilingual content creation',
      'Regional partnership development'
    ],
    status: 'online'
  }
];

// Generate 38 demo ambassadors
export const ambassadors: TeamMember[] = Array.from({ length: 38 }, (_, index) => {
  const regions = ['India', 'Nigeria', 'Indonesia', 'Russia', 'Ukraine', 'Pakistan', 'Bangladesh', 'Italy', 'Brazil', 'Mexico', 'South Korea', 'Japan', 'Germany', 'France', 'UK', 'Canada', 'Australia', 'Turkey', 'Philippines'];
  const region = regions[index % regions.length];
  
  return {
    id: `ambassador-${index + 1}`,
    name: `Demo Ambassador ${index + 1}`,
    position: 'Community Ambassador',
    region,
    bio: `Passionate XION ambassador from ${region}, dedicated to growing the local community and educating users about blockchain technology.`,
    contactInfo: {
      email: `ambassador${index + 1}@xion.com`,
      discord: `DemoAmbassador${index + 1}#${String(index + 1).padStart(4, '0')}`,
      twitter: `@XionAmbassador${index + 1}`,
      telegram: `@XionAmbassador${index + 1}`
    },
    achievements: [
      'Local community building',
      'Educational content creation',
      'Event organization'
    ],
    status: Math.random() > 0.3 ? 'online' : 'offline'
  };
});