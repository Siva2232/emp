export default function Logo({ className = "h-5", alt = "Emprime" }) {
  return (
    <img
      src="/logo-emprime.png"
      width={493}
      height={77}
      alt={alt}
      className={`w-auto select-none ${className}`}
      draggable={false}
    />
  );
}
