export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const baseClasses =
    'inline-block cursor-pointer border-0 rounded-[3em] font-bold leading-none';

  const modeClasses = primary
    ? 'bg-[#555ab9] text-white'
    : 'shadow-[inset_0_0_0_1px_rgba(0,0,0,0.15)] bg-transparent text-[#333]';

  const sizeClasses = {
    small: 'py-[10px] px-4 text-xs',
    medium: 'py-[11px] px-5 text-sm',
    large: 'py-3 px-6 text-base',
  };

  return (
    <button
      type="button"
      className={`${baseClasses} ${modeClasses} ${sizeClasses[size]}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
