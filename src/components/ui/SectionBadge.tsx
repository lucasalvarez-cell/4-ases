interface Props {
  children: React.ReactNode;
  light?: boolean;
}

export default function SectionBadge({ children, light = false }: Props) {
  return (
    <span
      className={`inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 ${
        light
          ? "bg-white/10 text-white border border-white/20"
          : "bg-azure/10 text-azure border border-azure/20"
      }`}
    >
      {children}
    </span>
  );
}
