// F2 · Show the rest of the drone's details: model, status, battery,
// a low-battery warning and how much it can carry.
function DroneCard({drone}) {
  //  { id: "SD-01", name: "Kite", model: "Hopper X2", status: "available", battery: 92, maxLoadKg: 5 }
  return (
    <article className="rounded-2xl border border-line bg-white p-5 shadow-sm shadow-black/[0.03]">
      <p className="font-mono text-xs text-ink-muted">{drone.id}</p>
      <h3 className="text-xl font-semibold tracking-tight text-heading">{drone.name}</h3>
      <h3 className="text-xl font-semibold tracking-tight text-heading">{drone.model}</h3>
      <h3 className="text-xl font-semibold tracking-tight text-heading">Carries up to {drone.maxLoadKg}kg</h3>
    </article>
  );
}

export default DroneCard;
