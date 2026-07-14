import { Sparkles } from "lucide-react";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand-mark" aria-label="Museo Infantil Trampolín">
      <span className="brand-mark__symbol" aria-hidden="true">
        <span />
        <span />
        <span />
        <Sparkles size={14} />
      </span>
      <span className="brand-mark__wording">
        <strong>Trampolín</strong>
        {compact ? null : <small>Museo Infantil</small>}
      </span>
    </span>
  );
}
