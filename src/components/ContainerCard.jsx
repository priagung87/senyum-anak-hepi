export default function ContainerCard({ children, className = "" }) {
  return <div className={`rounded-[2rem] bg-white p-6 shadow-playful ${className}`}>{children}</div>;
}
