export function TrafficConeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
      <rect
        x="8"
        y="54"
        width="48"
        height="6"
        rx="2"
        className="fill-foreground"
      />
      <polygon
        points="32,6 22,54 42,54"
        className="fill-hazard stroke-foreground"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <polygon points="28.8,22 35.2,22 37,30 27,30" className="fill-surface" />
      <polygon
        points="25.6,36 38.4,36 40.2,44 23.8,44"
        className="fill-surface"
      />
    </svg>
  );
}
