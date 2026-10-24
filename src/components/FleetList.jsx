import DroneCard from "./DroneCard";

// F1 · Show every drone, not just the first one.
// F3 · Add tabs to filter the fleet by status.
function FleetList({ drones }) {
  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold">Fleet</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <DroneCard drone={drones[0]} />
      </div>
    </section>
  );
}

export default FleetList;
