interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'icon';
}

export default function Logo({
  size = 'md',
  variant = 'full'
}: LogoProps) {
  const heights = {
    sm: 'h-12',
    md: 'h-16',
    lg: 'h-24'
  };

  if (variant === 'icon') {
    return (
      <img
        src="/assets/images/cortex-logo.png"
        alt="Cortex AI"
        className={`${heights[size]} w-auto object-contain`}
      />
    );
  }

  return (
    <img
      src="/assets/images/cortex-logo.png"
      alt="Cortex AI"
      className={`${heights[size]} w-auto object-contain`}
    />
  );
}
