import { site } from "@/lib/site";

const fields: Array<[string, string]> = [
  ["Name", site.name],
  ["Role", site.role],
  ["Based", site.location],
  ["Status", site.availability],
];

export function TitleBlock() {
  return (
    <dl className="grid w-full max-w-xs grid-cols-[auto_1fr] gap-x-4 gap-y-2 border border-border bg-surface p-5 font-mono text-xs">
      {fields.map(([label, value]) => (
        <div key={label} className="contents">
          <dt className="text-muted uppercase tracking-widest">{label}</dt>
          <dd className="text-right text-foreground">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
