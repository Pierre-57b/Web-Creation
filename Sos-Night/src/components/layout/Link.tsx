interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function Link({ href, children, className = '', ...props }: LinkProps) {
  return (
    <a
      href={href}
      className={`text-white hover:text-red-500 transition-colors ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}