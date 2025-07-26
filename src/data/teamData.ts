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
    status: 'online'
  },
  {
    id: 'demo-cto',
    name: 'Demo CTO',
    position: 'Chief Technology Officer',
    bio: 'Leading blockchain architect with 15+ years in distributed systems. Spearheading XION\'s technical innovation and infrastructure development.',
    contactInfo: {
      email: 'cto@xion.com',
      discord: 'DemoCTO#5678',
      twitter: '@XionCTO'
    },
    achievements: [
      'Expert in blockchain architecture',
      '15+ years in distributed systems',
      'Patent holder in consensus mechanisms'
    ],
    status: 'online'
  },
  {
    id: 'demo-coo',
    name: 'Demo COO',
    position: 'Chief Operating Officer',
    bio: 'Operations executive with Fortune 500 experience. Optimizing XION\'s global operations and strategic partnerships.',
    contactInfo: {
      email: 'coo@xion.com',
      discord: 'DemoCOO#9101',
      twitter: '@XionCOO'
    },
    achievements: [
      'Fortune 500 operations experience',
      'Global team scaling specialist',
      'Strategic partnership expert'
    ],
    status: 'online'
  },
  {
    id: 'demo-product',
    name: 'Demo Head of Product',
    position: 'Head of Product',
    bio: 'Product visionary with Web3 UX expertise. Designing the future of walletless blockchain interactions.',
    contactInfo: {
      email: 'product@xion.com',
      discord: 'DemoProduct#1122',
      twitter: '@XionProduct'
    },
    achievements: [
      'Web3 UX design pioneer',
      'Consumer app product experience',
      'User research and analytics expert'
    ],
    status: 'online'
  },
  {
    id: 'demo-engineering',
    name: 'Demo Head of Engineering',
    position: 'Head of Engineering',
    bio: 'Engineering leader building scalable blockchain solutions. Expert in Cosmos SDK and chain abstraction protocols.',
    contactInfo: {
      email: 'engineering@xion.com',
      discord: 'DemoEng#3344',
      twitter: '@XionEng'
    },
    achievements: [
      'Cosmos SDK core contributor',
      'Blockchain scaling solutions',
      'Team leadership and mentoring'
    ],
    status: 'online'
  },
  {
    id: 'demo-bizdev',
    name: 'Demo Head of Business Development',
    position: 'Head of Business Development',
    bio: 'Strategic partnerships expert connecting XION with enterprise clients and ecosystem partners.',
    contactInfo: {
      email: 'bizdev@xion.com',
      discord: 'DemoBizDev#5566',
      twitter: '@XionBizDev'
    },
    achievements: [
      'Enterprise blockchain partnerships',
      'Strategic alliance development',
      'Revenue growth specialist'
    ],
    status: 'online'
  },
  {
    id: 'demo-community',
    name: 'Demo Head of Community',
    position: 'Head of Community',
    bio: 'Community building expert fostering XION\'s global ecosystem. Managing developer relations and user engagement.',
    contactInfo: {
      email: 'community@xion.com',
      discord: 'DemoCommunity#7788',
      twitter: '@XionCommunity'
    },
    achievements: [
      'Global community management',
      'Developer relations expertise',
      'Event and meetup coordination'
    ],
    status: 'online'
  },
  {
    id: 'demo-partnerships',
    name: 'Demo Head of Partnerships',
    position: 'Head of Partnerships',
    bio: 'Partnership strategist building XION\'s ecosystem of integrations and collaborations.',
    contactInfo: {
      email: 'partnerships@xion.com',
      discord: 'DemoPartnerships#9900',
      twitter: '@XionPartnerships'
    },
    achievements: [
      'Ecosystem partnership development',
      'Integration strategy planning',
      'Cross-chain collaboration expert'
    ],
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
      twitter: 'https://x.com/0xAtoz',
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
      twitter: 'https://x.com/jsbmudit',
      telegram: '@JsbMudit'
    },
    image: '/lovable-uploads/9899f0bf-630b-4e36-8217-2fef68d5fd72.png',
    status: 'online'
  },
  {
    id: 'demo-community-manager-2',
    name: 'Demo Community Manager 2',
    position: 'Community Manager',
    bio: 'Supporting community growth and engagement across multiple platforms and regions.',
    contactInfo: {
      email: 'community.manager2@xion.com',
      discord: 'CommunityMgr2#0003',
      twitter: '@XionCommunityMgr2',
      telegram: '@XionCommunityMgr2'
    },
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
      telegram: '@XionIndia'
    }
  },
  {
    id: 'xion-nigeria',
    name: 'XION NIGERIA',
    region: 'Nigeria',
    stats: { members: 1950, activeUsers: 800 },
    initiatives: ['FinTech partnerships', 'Educational programs', 'Community events'],
    contactInfo: {
      discord: 'XionNigeria#0002',
      telegram: '@XionNigeria'
    }
  },
  {
    id: 'xion-indonesia',
    name: 'XION INDONESIA',
    region: 'Indonesia',
    stats: { members: 1650, activeUsers: 750 },
    initiatives: ['Local blockchain education', 'Developer meetups', 'Gaming partnerships'],
    contactInfo: {
      discord: 'XionIndonesia#0003',
      telegram: '@XionIndonesia'
    }
  },
  {
    id: 'xion-russia',
    name: 'XION RUSSIA',
    region: 'Russia',
    stats: { members: 1200, activeUsers: 500 },
    initiatives: ['Technical workshops', 'Community translations', 'Developer support'],
    contactInfo: {
      discord: 'XionRussia#0004',
      telegram: '@XionRussia'
    }
  },
  {
    id: 'xion-ukraine',
    name: 'XION UKRAINE',
    region: 'Ukraine',
    stats: { members: 980, activeUsers: 420 },
    initiatives: ['Developer community', 'Educational content', 'Local partnerships'],
    contactInfo: {
      discord: 'XionUkraine#0005',
      telegram: '@XionUkraine'
    }
  },
  {
    id: 'xion-pakistan',
    name: 'XION PAKISTAN',
    region: 'Pakistan',
    stats: { members: 850, activeUsers: 380 },
    initiatives: ['University outreach', 'Local meetups', 'Developer training'],
    contactInfo: {
      discord: 'XionPakistan#0006',
      telegram: '@XionPakistan'
    }
  },
  {
    id: 'xion-bangladesh',
    name: 'XION BANGLADESH',
    region: 'Bangladesh',
    stats: { members: 720, activeUsers: 310 },
    initiatives: ['Community building', 'Educational workshops', 'Local events'],
    contactInfo: {
      discord: 'XionBangladesh#0007',
      telegram: '@XionBangladesh'
    }
  },
  {
    id: 'xion-italy',
    name: 'XION ITALY',
    region: 'Italy',
    stats: { members: 650, activeUsers: 280 },
    initiatives: ['European partnerships', 'Developer community', 'Local meetups'],
    contactInfo: {
      discord: 'XionItaly#0008',
      telegram: '@XionItaly'
    }
  }
];

export const regionalMods: TeamMember[] = regionalCommunities.map((community, index) => ({
  id: `mod-${community.region.toLowerCase()}`,
  name: `Demo Mod ${index + 1}`,
  position: `${community.region} Moderator`,
  region: community.region,
  bio: `Dedicated moderator for the ${community.region} XION community, ensuring positive engagement and supporting local initiatives.`,
  contactInfo: {
    email: `mod.${community.region.toLowerCase()}@xion.com`,
    discord: `${community.region}Mod#${String(index + 1).padStart(4, '0')}`,
    twitter: `@Xion${community.region}Mod`,
    telegram: `@Xion${community.region}Mod`
  },
  status: 'online'
}));

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