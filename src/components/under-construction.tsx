import { TrafficConeIcon } from "@/components/traffic-cone-icon";
import { site } from "@/lib/site";

export function UnderConstruction() {
  return (
    <div
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="under-construction-title"
      aria-describedby="under-construction-description"
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 p-6 backdrop-blur-sm"
    >
      <div className="w-full max-w-sm overflow-hidden border border-border bg-surface text-center shadow-xl">
        <div className="h-2 bg-hazard-stripes" />
        <div className="flex flex-col items-center gap-4 px-8 py-10">
          <TrafficConeIcon className="h-16 w-16" />
          <p className="font-mono text-xs uppercase tracking-widest text-hazard">
            Site Status
          </p>
          <h2
            id="under-construction-title"
            className="font-display text-2xl font-medium tracking-tight text-foreground"
          >
            Under Construction
          </h2>
          <p
            id="under-construction-description"
            className="text-sm leading-relaxed text-muted"
          >
            This site is being rebuilt from the ground up. Some pages may be
            missing or incomplete — check back soon.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-2 rounded bg-foreground px-5 py-3 font-mono text-xs uppercase tracking-widest text-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Contact Me
          </a>
        </div>
        <div className="h-2 bg-hazard-stripes" />
      </div>
    </div>
  );
}
