import { cn } from "@/lib/utils";

interface SignalBadgeProps {
  children: React.ReactNode;
  variant?: "green" | "blue" | "neutral" | "orange" | "yellow";
  className?: string;
}

const SignalBadge = ({ children, variant = "neutral", className }: SignalBadgeProps) => {
  const variantStyles = {
    green: {
      border: '1px solid var(--color-border-accent-green-default, #00823A)',
      background: 'var(--color-fill-accent-green-subtle-alt, #EDF4EF)'
    },
    blue: {
      border: '1px solid var(--color-border-accent-blue-default)',
      background: 'var(--color-fill-accent-blue-subtle-alt)'
    },
    orange: {
      border: '1px solid var(--color-border-brand-default)',
      background: 'var(--color-fill-brand-subtle)'
    },
    yellow: {
      border: '1px solid var(--color-border-caution-default)',
      background: 'var(--color-fill-caution-subtle)'
    },
    neutral: {
      border: '1px solid var(--color-border-core-subtle)',
      background: 'var(--color-fill-core-subtle)'
    }
  };

  return (
    <div
      className={cn("heading-25 text-[var(--color-text-core-default)] inline-flex items-center px-3 py-1", className)}
      style={{
        borderRadius: 'var(--borderRadius-transitional-full-0, 999999px)',
        ...variantStyles[variant]
      }}
    >
      {children}
    </div>
  );
};

export default SignalBadge;
