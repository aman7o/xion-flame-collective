import React, { useState, useMemo } from 'react';
import { Navigation } from '../components/Navigation';
import { TeamCard } from '../components/TeamCard';
import { RegionalCard } from '../components/RegionalCard';
import { LoadingSkeleton } from '../components/LoadingSkeleton';
import { Button } from '../components/ui/button';
import { 
  founder, 
  teamMembers, 
  adminMembers, 
  regionalCommunities, 
  regionalMods, 
  crusaders, 
  ambassadors 
} from '../data/teamData';
import { FilterCategory } from '../types/team';
import { Plus, Users, Globe, Shield, Award, Star } from 'lucide-react';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  // Filter and search logic
  const filteredData = useMemo(() => {
    const allMembers = [
      ...teamMembers,
      ...adminMembers,
      ...regionalMods,
      ...crusaders,
      ...ambassadors
    ];

    let filtered = allMembers;

    // Apply category filter
    if (activeFilter !== 'all') {
      switch (activeFilter) {
        case 'team':
          filtered = teamMembers;
          break;
        case 'community':
          filtered = [...adminMembers, ...regionalMods];
          break;
        case 'regional':
          filtered = regionalMods;
          break;
        case 'ambassadors':
          filtered = ambassadors;
          break;
      }
    }

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(member =>
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (member.region && member.region.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return filtered;
  }, [searchQuery, activeFilter]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        resultsCount={filteredData.length}
      />

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-fire-orange to-fire-red bg-clip-text text-transparent mb-6">
            Meet the XION Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The visionaries, builders, and community leaders driving the first walletless L1 blockchain
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">XION FOUNDER</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-fire-orange to-fire-red mx-auto"></div>
          </div>
          <div className="max-w-md mx-auto">
            <TeamCard member={founder} type="founder" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">XION TEAM MEMBERS</h2>
            <Button className="mb-6 gradient-fire text-white">
              <Plus className="w-4 h-4 mr-2" />
              Join Our Team
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} type="team" />
            ))}
          </div>
        </div>
      </section>

      {/* Regional Communities */}
      <section id="regional" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">REGIONAL COMMUNITIES</h2>
            <Button variant="outline" className="mb-6">
              <Globe className="w-4 h-4 mr-2" />
              Start Your Local Community
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {regionalCommunities.map((community) => (
              <RegionalCard key={community.id} community={community} />
            ))}
          </div>
        </div>
      </section>

      {/* Ambassadors Section */}
      <section id="ambassadors" className="py-16 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">AMBASSADORS</h2>
            <Button className="mb-6 gradient-fire text-white">
              <Star className="w-4 h-4 mr-2" />
              Join Ambassador Program
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ambassadors.slice(0, 12).map((member) => (
              <TeamCard key={member.id} member={member} type="ambassador" />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Get In Touch</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <Button variant="outline" className="flex flex-col p-6 h-auto">
              <Users className="w-6 h-6 mb-2" />
              Discord
            </Button>
            <Button variant="outline" className="flex flex-col p-6 h-auto">
              <Globe className="w-6 h-6 mb-2" />
              Website
            </Button>
            <Button variant="outline" className="flex flex-col p-6 h-auto">
              <Star className="w-6 h-6 mb-2" />
              Twitter
            </Button>
            <Button variant="outline" className="flex flex-col p-6 h-auto">
              <Shield className="w-6 h-6 mb-2" />
              Telegram
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 XION. The first walletless L1 blockchain.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
