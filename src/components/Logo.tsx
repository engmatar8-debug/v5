interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'icon';
}

export default function Logo({
  size = 'md',
  variant = 'full'
}: LogoProps) {
  const heights = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-14'
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
