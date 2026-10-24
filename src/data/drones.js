// The SkyDrop fleet. Every drone flies from the Kollupitiya hub.
// status is one of: "available", "delivering", "charging"
export const initialDrones = [
  { id: "SD-01", name: "Kite", model: "Hopper X2", status: "available", battery: 92, maxLoadKg: 5 },
  { id: "SD-02", name: "Myna", model: "Hopper X2", status: "delivering", battery: 64, maxLoadKg: 5 },
  { id: "SD-03", name: "Swift", model: "Courier Mini", status: "available", battery: 18, maxLoadKg: 2 },
  { id: "SD-04", name: "Heron", model: "Courier Max", status: "charging", battery: 35, maxLoadKg: 8 },
  { id: "SD-05", name: "Bulbul", model: "Courier Mini", status: "available", battery: 77, maxLoadKg: 2 },
  { id: "SD-06", name: "Kingfisher", model: "Courier Max", status: "available", battery: 58, maxLoadKg: 8 },
  { id: "SD-07", name: "Robin", model: "Hopper X2", status: "charging", battery: 12, maxLoadKg: 5 },
  { id: "SD-08", name: "Falcon", model: "Courier Max", status: "available", battery: 81, maxLoadKg: 8 },
];
