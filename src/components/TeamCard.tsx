import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Mail, MessageCircle, Twitter, Linkedin, Send, Badge, Award } from 'lucide-react';
import { TeamMember } from '../types/team';
import { Button } from './ui/button';
import { Badge as UIBadge } from './ui/badge';

interface TeamCardProps {
  member: TeamMember;
  type?: 'founder' | 'team' | 'admin' | 'mod' | 'crusader' | 'ambassador';
}

export const TeamCard: React.FC<TeamCardProps> = ({ member, type = 'team' }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'founder':
        return 'bg-gradient-to-r from-fire-orange to-fire-red';
      case 'team':
        return 'bg-primary';
      case 'admin':
        return 'bg-accent';
      case 'mod':
        return 'bg-secondary';
      case 'crusader':
        return 'bg-gradient-to-r from-fire-yellow to-fire-orange';
      case 'ambassador':
        return 'bg-muted';
      default:
        return 'bg-primary';
    }
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
          {/* Status Indicator */}
          {member.status && (
            <div className={`absolute top-4 right-4 w-3 h-3 rounded-full ${
              member.status === 'online' ? 'bg-green-500 animate-glow-pulse' : 'bg-gray-500'
            }`} />
          )}
          
          {/* Profile Image */}
          <div className="relative mb-4">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-fire-orange to-fire-red p-1">
              <div className="w-full h-full rounded-full bg-muted flex items-center justify-center overflow-hidden">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-2xl font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                )}
              </div>
            </div>
            
            {/* Type Badge */}
            <UIBadge 
              className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 ${getTypeColor(type)} text-white text-xs px-2 py-1`}
            >
              {type === 'founder' ? 'FOUNDER' : 
               type === 'crusader' ? 'CRUSADER' : 
               type === 'ambassador' ? 'AMBASSADOR' : 
               type.toUpperCase()}
            </UIBadge>
          </div>

          {/* Basic Info */}
          <div className="text-center space-y-2">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {member.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {member.position}
            </p>
            {member.region && (
              <p className="text-xs text-accent">
                📍 {member.region}
              </p>
            )}
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
            {/* Bio */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-foreground mb-2">About</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
            </div>

            {/* Achievements */}
            {member.achievements && member.achievements.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-medium text-foreground mb-2 flex items-center">
                  <Award className="w-4 h-4 mr-1" />
                  Achievements
                </h4>
                <ul className="space-y-1">
                  {member.achievements.map((achievement, index) => (
                    <li key={index} className="text-xs text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-medium text-foreground mb-3">Contact</h4>
              <div className="grid grid-cols-2 gap-2">
                {member.contactInfo.email && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs justify-start"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(`mailto:${member.contactInfo.email}`, '_blank');
                    }}
                  >
                    <Mail className="w-3 h-3 mr-1" />
                    Email
                  </Button>
                )}
                {member.contactInfo.discord && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs justify-start"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigator.clipboard.writeText(member.contactInfo.discord || '');
                    }}
                  >
                    <MessageCircle className="w-3 h-3 mr-1" />
                    Discord
                  </Button>
                )}
                {member.contactInfo.twitter && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs justify-start"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(`https://twitter.com/${member.contactInfo.twitter?.replace('@', '')}`, '_blank');
                    }}
                  >
                    <Twitter className="w-3 h-3 mr-1" />
                    Twitter
                  </Button>
                )}
                {member.contactInfo.telegram && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs justify-start"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(`https://t.me/${member.contactInfo.telegram?.replace('@', '')}`, '_blank');
                    }}
                  >
                    <Send className="w-3 h-3 mr-1" />
                    Telegram
                  </Button>
                )}
                {member.contactInfo.linkedin && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs justify-start"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(`https://linkedin.com/in/${member.contactInfo.linkedin}`, '_blank');
                    }}
                  >
                    <Linkedin className="w-3 h-3 mr-1" />
                    LinkedIn
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