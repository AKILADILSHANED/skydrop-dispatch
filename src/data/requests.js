// Delivery requests.
// status is one of: "pending", "assigned", "delivered"
// droneId is null until a drone is assigned.
export const initialRequests = [
  { id: "REQ-101", customer: "Nimali Perera", areaId: "col-05", weightKg: 1.2, status: "pending", droneId: null, createdAt: "09:40" },
  { id: "REQ-102", customer: "Osu Sala Pharmacy", areaId: "dehiwala", weightKg: 3.5, status: "pending", droneId: null, createdAt: "09:52" },
  { id: "REQ-103", customer: "Kasun Silva", areaId: "col-07", weightKg: 0.8, status: "assigned", droneId: "SD-02", createdAt: "09:15" },
  { id: "REQ-104", customer: "Green Leaf Café", areaId: "rajagiriya", weightKg: 4.0, status: "delivered", droneId: "SD-06", createdAt: "08:30" },
];
