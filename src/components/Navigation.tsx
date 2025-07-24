import React, { useState, useEffect } from 'react';
import { Search, Filter, X, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { FilterCategory } from '../types/team';

interface NavigationProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeFilter: FilterCategory;
  onFilterChange: (filter: FilterCategory) => void;
  resultsCount: number;
}

export const Navigation: React.FC<NavigationProps> = ({
  searchQuery,
  onSearchChange,
  activeFilter,
  onFilterChange,
  resultsCount
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { id: 'founder', label: 'Founder' },
    { id: 'team', label: 'Team' },
    { id: 'admins', label: 'Admins' },
    { id: 'regional', label: 'Regional' },
    { id: 'mods', label: 'Mods' },
    { id: 'crusaders', label: 'Crusaders' },
    { id: 'ambassadors', label: 'Ambassadors' },
    { id: 'contact', label: 'Contact' }
  ];

  const filterOptions = [
    { value: 'all', label: 'All' },
    { value: 'team', label: 'Team' },
    { value: 'community', label: 'Community' },
    { value: 'regional', label: 'Regional' },
    { value: 'ambassadors', label: 'Ambassadors' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearFilters = () => {
    onSearchChange('');
    onFilterChange('all');
  };

  return (
    <>
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          {/* Top Row - Logo and Search */}
          <div className="flex items-center justify-between mb-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-xion-orange to-xion-red flex items-center justify-center">
                <img 
                  src="/lovable-uploads/b2ad595c-b11c-4beb-8956-ebf9b2cbc96e.png"
                  alt="XION Logo"
                  className="w-6 h-6 object-contain"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    const sibling = target.nextElementSibling as HTMLElement;
                    target.style.display = 'none';
                    if (sibling) sibling.style.display = 'block';
                  }}
                />
                <div className="w-6 h-6 hidden">🔥</div>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-xion-orange to-xion-red bg-clip-text text-transparent">
                XION
              </h1>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search team members..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="pl-10 pr-10 bg-card/50 border-border/50 focus:border-primary"
                />
                {searchQuery && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onSearchChange('')}
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                  >
                    <X className="w-3 h-3" />
                  </Button>
                )}
              </div>
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-2">
              <Select value={activeFilter} onValueChange={(value) => onFilterChange(value as FilterCategory)}>
                <SelectTrigger className="w-32 bg-card/50 border-border/50">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {filterOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {(searchQuery || activeFilter !== 'all') && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearFilters}
                  className="text-xs"
                >
                  Clear
                </Button>
              )}
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex items-center justify-between">
            <div className="flex space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-colors ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:text-primary'
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </div>

            {/* Results Counter */}
            {(searchQuery || activeFilter !== 'all') && (
              <div className="text-sm text-muted-foreground">
                {resultsCount} result{resultsCount !== 1 ? 's' : ''} found
              </div>
            )}
          </nav>
        </div>
      </header>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full shadow-glow animate-fade-in"
          size="icon"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </>
  );
};