import { useState } from "react";

import { initialDrones } from "./data/drones";
import { initialRequests } from "./data/requests";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";

function App() {
  const [drones, setDrones] = useState(initialDrones);
  const [requests, setRequests] = useState(initialRequests);

  // F4 · Add a new delivery request to the list.
  function addRequest(newRequest) {
    console.log("TODO F4: add this request", newRequest);
  }

  // F5 · Assign a drone to a pending request.
  function assignDrone(requestId, droneId) {
    console.log("TODO F5: assign", droneId, "to", requestId);
  }

  // F6 · Mark an assigned request as delivered.
  function markDelivered(requestId) {
    console.log("TODO F6: mark delivered", requestId);
  }

  // F7 · Turn this into routes: "/", "/drones/:droneId" and "*".
  return (
    <div className="min-h-screen">
      <Header />
      <Dashboard
        drones={drones}
        requests={requests}
        onCreate={addRequest}
        onAssign={assignDrone}
        onDeliver={markDelivered}
      />
    </div>
  );
}

export default App;
