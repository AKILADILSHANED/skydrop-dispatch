const styles = {
  available: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  delivering: "bg-brand-50 text-brand-700 ring-brand-600/20",
  charging: "bg-amber-50 text-amber-800 ring-amber-600/25",
  pending: "bg-sunk text-ink-muted ring-black/10",
  assigned: "bg-brand-50 text-brand-700 ring-brand-600/20",
  delivered: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
};

// Shows a coloured label for any drone or request status.
function StatusPill({ status }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full px-2.5 py-1 text-xs font-semibold capitalize ring-1 ring-inset ${styles[status] ?? styles.pending}`}
    >
      {status}
    </span>
  );
}

export default StatusPill;
