import React from 'react';

export interface InputProps {
  /** Label displayed above the input */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** How large should the input be? */
  size?: 'small' | 'medium' | 'large';
  /** Disables the input */
  disabled?: boolean;
  /** HTML input type */
  type?: 'text' | 'email' | 'password' | 'number';
  /** Controlled value */
  value?: string;
  /** Change event handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/** Form input component */
export const Input = ({
  label,
  placeholder = '',
  size = 'medium',
  disabled = false,
  type = 'text',
  value,
  onChange,
}: InputProps) => {
  const sizeClasses = {
    small: 'px-3 py-2 text-xs',
    medium: 'px-4 py-[11px] text-sm',
    large: 'px-5 py-3 text-base',
  };

  return (
    <div className="flex flex-col gap-1 w-64">
      {label && (
        <label className="text-sm font-bold text-[#333]">{label}</label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
        className={`border border-black/20 rounded-md outline-none transition-colors focus:border-[#555ab9] focus:ring-1 focus:ring-[#555ab9] disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses[size]}`}
      />
    </div>
  );
};
