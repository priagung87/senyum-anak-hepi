import { Link } from "react-router-dom";

export default function RouteButton({
  to,
  children,
  variant = "pink",
  className = "",
}) {
  const variants = {
    pink: "bg-brand-pink text-white",
    teal: "bg-brand-teal text-white",
    yellow: "bg-brand-yellow text-brand-navy",
    white: "bg-white text-brand-navy",
  };

  return (
    <Link
      to={to}
      className={`inline-flex rounded-full px-5 py-3 text-sm font-black shadow-playful transition hover:-translate-y-1 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
