// Delivery areas. Store the id; show the label.
export const areas = [
  { id: "col-03", label: "Kollupitiya (Colombo 03)" },
  { id: "col-05", label: "Havelock Town (Colombo 05)" },
  { id: "col-07", label: "Cinnamon Gardens (Colombo 07)" },
  { id: "dehiwala", label: "Dehiwala" },
  { id: "rajagiriya", label: "Rajagiriya" },
  { id: "nugegoda", label: "Nugegoda" },
];

export function areaLabel(areaId) {
  return areas.find((area) => area.id === areaId)?.label ?? "Unknown area";
}
