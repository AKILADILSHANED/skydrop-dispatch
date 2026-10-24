import FleetList from "../components/FleetList";
import RequestBoard from "../components/RequestBoard";
import RequestForm from "../components/RequestForm";

function Dashboard({ drones, requests, onCreate, onAssign, onDeliver }) {
  return (
    <main className="mx-auto grid max-w-6xl gap-12 px-6 py-10">
      <FleetList drones={drones} />

      <section className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <RequestForm onCreate={onCreate} />
        <RequestBoard
          requests={requests}
          drones={drones}
          onAssign={onAssign}
          onDeliver={onDeliver}
        />
      </section>
    </main>
  );
}

export default Dashboard;
