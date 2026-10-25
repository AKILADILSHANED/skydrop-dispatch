import DroneCard from "./DroneCard";
import { useState } from "react";

// F1 · Show every drone, not just the first one.
// F3 · Add tabs to filter the fleet by status.
function FleetList({ drones }) {
  const [search, setSearch] = useState("");
  console.log("Searching" , search);
  
  const filteredDrones = drones.filter((item)=>
    item.name.toLowerCase().includes(search.toLowerCase())    
  );
  
  console.log(filteredDrones);
  

  return (
    <section>
       <label className="grid gap-1.5 text-sm font-semibold">
        Search
        <input onChange={(e)=>{setSearch(e.target.value)}}
          name="customer"
          className="rounded-lg border border-line bg-white px-3 py-2.5 font-normal transition focus:border-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-600/10"
          placeholder="Search Drone"
        />
      </label>
      <h2 className="mb-4 text-2xl font-semibold tracking-tight text-heading">Fleet</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {
          filteredDrones.map((drone)=>{
            return <DroneCard drone={drone} />
          })
        }
        
      </div>
      
    </section>
  );
}

export default FleetList;
