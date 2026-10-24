import { areaLabel } from "../data/areas";
import StatusPill from "./StatusPill";

// F5 · Pending requests need a way to pick an available drone and assign it.
// F6 · Assigned requests need the drone's name and a "Mark delivered" button.
function RequestCard({ request }) {
  return (
    <article className="grid gap-2 rounded-lg border border-slate-200 bg-white p-3">
      <div className="flex items-center justify-between gap-2">
        <p className="font-medium">{request.customer}</p>
        <StatusPill status={request.status} />
      </div>
      <p className="text-sm text-slate-600">
        {areaLabel(request.areaId)} · {request.weightKg} kg
      </p>
      <p className="text-xs text-slate-400">
        {request.id} · requested at {request.createdAt}
      </p>
    </article>
  );
}

export default RequestCard;
