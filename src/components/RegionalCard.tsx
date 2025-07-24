import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Activity, MessageCircle, Send, Globe, Zap } from 'lucide-react';
import { RegionalCommunity } from '../types/team';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface RegionalCardProps {
  community: RegionalCommunity;
}

export const RegionalCard: React.FC<RegionalCardProps> = ({ community }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <div className="group relative">
      <div 
        className={`
          glass-morphism rounded-xl overflow-hidden transition-smooth cursor-pointer
          hover:shadow-glow hover:scale-[1.02] hover:border-primary/50
          ${isExpanded ? 'shadow-glow border-primary/50' : ''}
        `}
        onClick={handleToggle}
      >
        {/* Card Header */}
        <div className="relative p-6">
          {/* Regional Flag/Icon */}
          <div className="relative mb-4">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-xion-orange to-xion-red p-1">
              <div className="w-full h-full rounded-full bg-muted flex items-center justify-center">
                <Globe className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            {/* Community Badge */}
            <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-xion-orange-light to-xion-orange text-white text-xs px-3 py-1">
              COMMUNITY
            </Badge>
          </div>

          {/* Basic Info */}
          <div className="text-center space-y-2">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {community.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              📍 {community.region}
            </p>

            {/* Quick Stats */}
            <div className="flex justify-center space-x-4 mt-3">
              <div className="flex items-center text-xs text-muted-foreground">
                <Users className="w-3 h-3 mr-1" />
                {formatNumber(community.stats.members)}
              </div>
              <div className="flex items-center text-xs text-accent">
                <Activity className="w-3 h-3 mr-1" />
                {formatNumber(community.stats.activeUsers)} active
              </div>
            </div>
          </div>

          {/* Expand Indicator */}
          <div className="flex justify-center mt-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              {isExpanded ? (
                <>
                  <ChevronUp className="w-4 h-4 mr-1" />
                  Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 mr-1" />
                  More
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Expanded Content */}
        <div className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="p-6 pt-0 border-t border-border/50">
            {/* Detailed Stats */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center p-3 rounded-lg bg-card/50">
                <div className="text-lg font-semibold text-primary">
                  {formatNumber(community.stats.members)}
                </div>
                <div className="text-xs text-muted-foreground">Total Members</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-card/50">
                <div className="text-lg font-semibold text-accent">
                  {formatNumber(community.stats.activeUsers)}
                </div>
                <div className="text-xs text-muted-foreground">Active Users</div>
              </div>
            </div>

            {/* Local Initiatives */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-foreground mb-2 flex items-center">
                <Zap className="w-4 h-4 mr-1" />
                Local Initiatives
              </h4>
              <div className="space-y-1">
                {community.initiatives.map((initiative, index) => (
                  <div key={index} className="text-xs text-muted-foreground flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {initiative}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-medium text-foreground mb-3">Join Community</h4>
              <div className="grid grid-cols-2 gap-2">
                {community.contactInfo.discord && (
                  <Button variant="outline" size="sm" className="text-xs justify-start">
                    <MessageCircle className="w-3 h-3 mr-1" />
                    Discord
                  </Button>
                )}
                {community.contactInfo.telegram && (
                  <Button variant="outline" size="sm" className="text-xs justify-start">
                    <Send className="w-3 h-3 mr-1" />
                    Telegram
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};