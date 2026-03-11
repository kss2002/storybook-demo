import React from 'react';

export interface CardProps {
  /** Card title */
  title: string;
  /** Supporting description text */
  description?: string;
  /** Optional image URL displayed at the top */
  imageUrl?: string;
  /** Optional footer content */
  footer?: React.ReactNode;
  /** Optional body content */
  children?: React.ReactNode;
}

/** Container component for grouped content */
export const Card = ({
  title,
  description,
  imageUrl,
  footer,
  children,
}: CardProps) => {
  return (
    <div className="rounded-lg border border-black/10 overflow-hidden shadow-sm w-full max-w-sm">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-5">
        <h3 className="font-bold text-lg text-[#333] mb-2 leading-tight">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-[#666] leading-6">{description}</p>
        )}
        {children}
      </div>
      {footer && (
        <div className="px-5 py-3 border-t border-black/10 bg-[#f9f9f9]">
          {footer}
        </div>
      )}
    </div>
  );
};
