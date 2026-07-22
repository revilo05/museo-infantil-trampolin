import { Ban, CalendarClock, CheckCircle2, CircleAlert, CircleOff } from "lucide-react";
import type { CapacityStatus } from "@/data/activities";
import styles from "@/components/module-two.module.css";

const capacityConfig = {
  available: {
    label: "Disponible",
    className: styles.capacityAvailable,
    icon: CheckCircle2,
  },
  "last-spots": {
    label: "Últimos cupos",
    className: styles.capacityLast,
    icon: CircleAlert,
  },
  full: {
    label: "Lleno",
    className: styles.capacityFull,
    icon: CircleOff,
  },
  upcoming: {
    label: "Próximamente",
    className: styles.capacityUpcoming,
    icon: CalendarClock,
  },
  cancelled: {
    label: "Cancelado",
    className: styles.capacityCancelled,
    icon: Ban,
  },
} satisfies Record<CapacityStatus, {
  label: string;
  className: string;
  icon: typeof CheckCircle2;
}>;

type CapacityBadgeProps = {
  status: CapacityStatus;
};

export function CapacityBadge({ status }: CapacityBadgeProps) {
  const config = capacityConfig[status];
  const Icon = config.icon;
  return (
    <span className={`${styles.capacityBadge} ${config.className}`}>
      <Icon aria-hidden="true" size={14} />
      {config.label}
    </span>
  );
}

export function getCapacityLabel(status: CapacityStatus): string {
  return capacityConfig[status].label;
}
