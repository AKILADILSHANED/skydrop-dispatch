const styles = {
  available: "bg-emerald-100 text-emerald-800",
  delivering: "bg-sky-100 text-sky-800",
  charging: "bg-amber-100 text-amber-800",
  pending: "bg-slate-100 text-slate-700",
  assigned: "bg-sky-100 text-sky-800",
  delivered: "bg-emerald-100 text-emerald-800",
};

// Shows a coloured label for any drone or request status.
function StatusPill({ status }) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize ${styles[status] ?? styles.pending}`}
    >
      {status}
    </span>
  );
}

export default StatusPill;
