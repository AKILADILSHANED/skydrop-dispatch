import { areas } from "../data/areas";

// F4 · Make this form work: controlled inputs, one change handler,
// no page reload, a weight check, then call onCreate.
function RequestForm() {
  return (
    <form className="grid content-start gap-4 rounded-2xl border border-line bg-white p-6">
      <h2 className="text-2xl font-semibold tracking-tight text-heading">New delivery request</h2>

      <label className="grid gap-1.5 text-sm font-semibold">
        Customer
        <input
          name="customer"
          className="rounded-lg border border-line bg-white px-3 py-2.5 font-normal transition focus:border-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-600/10"
          placeholder="Who is it for?"
        />
      </label>

      <label className="grid gap-1.5 text-sm font-semibold">
        Area
        <select
          name="areaId"
          className="rounded-lg border border-line bg-white px-3 py-2.5 font-normal transition focus:border-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-600/10"
        >
          <option value="">Choose an area</option>
          {areas.map((area) => (
            <option key={area.id} value={area.id}>
              {area.label}
            </option>
          ))}
        </select>
      </label>

      <label className="grid gap-1.5 text-sm font-semibold">
        Parcel weight (kg)
        <input
          name="weightKg"
          type="number"
          step="0.1"
          className="rounded-lg border border-line bg-white px-3 py-2.5 font-normal transition focus:border-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-600/10"
          placeholder="e.g. 1.5"
        />
      </label>

      <button
        type="submit"
        className="rounded-full bg-brand-600 px-5 py-3 font-semibold text-white shadow-cta transition hover:bg-brand-700 hover:shadow-cta-hover"
      >
        Add request
      </button>
    </form>
  );
}

export default RequestForm;
