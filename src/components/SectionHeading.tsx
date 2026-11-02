import React from 'react';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  id?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  description,
  align = 'center',
  className = '',
  id,
}) => {
  return (
    <div
      id={id}
      className={`mb-10 ${align === 'center' ? 'text-center max-w-2xl mx-auto' : 'text-left max-w-2xl'} ${className}`}
    >
      {label && (
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#5A6E53] mb-2">
          {label}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#2C2623] tracking-tight leading-snug">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-[#635B54] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
