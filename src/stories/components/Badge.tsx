export interface BadgeProps {
  /** Badge label text */
  label: string;
  /** Visual style variant */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  /** How large should the badge be? */
  size?: 'small' | 'medium' | 'large';
}

/** Small label component for statuses and categories */
export const Badge = ({
  label,
  variant = 'default',
  size = 'medium',
}: BadgeProps) => {
  const variantClasses = {
    default: 'bg-[#e0e0e0] text-[#333]',
    primary: 'bg-[#555ab9] text-white',
    success: 'bg-[#e7fdd8] text-[#357a14]',
    warning: 'bg-[#fff3cd] text-[#856404]',
    danger: 'bg-[#fde8e8] text-[#c0392b]',
  };

  const sizeClasses = {
    small: 'px-2 py-0.5 text-[10px]',
    medium: 'px-3 py-1 text-xs',
    large: 'px-4 py-1.5 text-sm',
  };

  return (
    <span
      className={`inline-block rounded-[1em] font-bold leading-none ${variantClasses[variant]} ${sizeClasses[size]}`}
    >
      {label}
    </span>
  );
};
