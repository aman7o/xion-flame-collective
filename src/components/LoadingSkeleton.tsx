import React from 'react';
import { Skeleton } from './ui/skeleton';

interface LoadingSkeletonProps {
  count?: number;
  type?: 'card' | 'regional';
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ 
  count = 8, 
  type = 'card' 
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="glass-morphism rounded-xl p-6 space-y-4">
          {/* Profile Image Skeleton */}
          <div className="flex justify-center">
            <Skeleton className="w-20 h-20 rounded-full" />
          </div>
          
          {/* Name and Position */}
          <div className="text-center space-y-2">
            <Skeleton className="h-5 w-32 mx-auto" />
            <Skeleton className="h-4 w-24 mx-auto" />
          </div>

          {/* Stats for Regional Cards */}
          {type === 'regional' && (
            <div className="flex justify-center space-x-4">
              <Skeleton className="h-3 w-16" />
              <Skeleton className="h-3 w-20" />
            </div>
          )}

          {/* Action Button */}
          <div className="flex justify-center">
            <Skeleton className="h-8 w-16" />
          </div>
        </div>
      ))}
    </div>
  );
};

export const SectionLoadingSkeleton: React.FC<{ title?: string }> = ({ title }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Skeleton className="h-8 w-64 mx-auto mb-4" />
          <Skeleton className="h-6 w-32 mx-auto" />
        </div>

        {/* Cards Grid */}
        <LoadingSkeleton count={8} />
      </div>
    </section>
  );
};