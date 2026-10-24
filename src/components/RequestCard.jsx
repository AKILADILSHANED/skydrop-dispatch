import { areaLabel } from "../data/areas";
import StatusPill from "./StatusPill";

// F5 · Pending requests need a way to pick an available drone and assign it.
// F6 · Assigned requests need the drone's name and a "Mark delivered" button.
function RequestCard({ request }) {
  return (
    <article className="grid min-w-0 gap-2 rounded-xl border border-line bg-white p-4">
      <div className="flex items-center justify-between gap-2">
        <p className="font-semibold text-heading">{request.customer}</p>
        <StatusPill status={request.status} />
      </div>
      <p className="text-sm text-ink-muted">
        {areaLabel(request.areaId)} · {request.weightKg} kg
      </p>
      <p className="font-mono text-xs text-ink-subtle">
        {request.id} · requested at {request.createdAt}
      </p>
    </article>
  );
}

export default RequestCard;
