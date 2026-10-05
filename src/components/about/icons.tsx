export function HammerIcon({ className, size = 20 }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M14.2 2.3c.5-.9 1.6-1.3 2.6-.9l.3.2 3.4 2c.9.5 1.3 1.6.8 2.6l-1.1 2-6.8-3.9 1.8-2z" />
      <path d="M12.2 6.1 4.1 20.2c-.5.9-.2 2 .7 2.5.9.5 2 .2 2.5-.7l9.7-12.6-4.8-3.3z" />
    </svg>
  );
}

export function EyeIcon({ className, size = 20 }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 5C5.6 5 1.4 12 1.4 12S5.6 19 12 19s10.6-7 10.6-7S18.4 5 12 5Zm0 10.2A3.2 3.2 0 1 0 12 8.8a3.2 3.2 0 0 0 0 6.4Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function ShieldIcon({ className, size = 20 }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.2 3.6 5.8v5.7c0 5.4 3.5 9.3 8.4 10.7 4.9-1.4 8.4-5.3 8.4-10.7V5.8L12 2.2Z" />
    </svg>
  );
}

export function ZapIcon({ className, size = 20 }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.2 2 3.5 13.4h7.2L9.4 22 20.5 10.2h-7.3L13.2 2Z" />
    </svg>
  );
}
