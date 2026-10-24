// F2 · Show the rest of the drone's details: model, status, battery,
// a low-battery warning and how much it can carry.
function DroneCard({ drone }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-xs font-medium text-slate-500">{drone.id}</p>
      <h3 className="text-lg font-semibold">{drone.name}</h3>
    </article>
  );
}

export default DroneCard;
