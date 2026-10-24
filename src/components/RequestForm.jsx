import { areas } from "../data/areas";

// F4 · Make this form work: controlled inputs, one change handler,
// no page reload, a weight check, then call onCreate.
function RequestForm() {
  return (
    <form className="grid content-start gap-4 rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-lg font-semibold">New delivery request</h2>

      <label className="grid gap-1 text-sm font-medium">
        Customer
        <input
          name="customer"
          className="rounded-lg border border-slate-300 px-3 py-2 font-normal"
          placeholder="Who is it for?"
        />
      </label>

      <label className="grid gap-1 text-sm font-medium">
        Area
        <select
          name="areaId"
          className="rounded-lg border border-slate-300 px-3 py-2 font-normal"
        >
          <option value="">Choose an area</option>
          {areas.map((area) => (
            <option key={area.id} value={area.id}>
              {area.label}
            </option>
          ))}
        </select>
      </label>

      <label className="grid gap-1 text-sm font-medium">
        Parcel weight (kg)
        <input
          name="weightKg"
          type="number"
          step="0.1"
          className="rounded-lg border border-slate-300 px-3 py-2 font-normal"
          placeholder="e.g. 1.5"
        />
      </label>

      <button
        type="submit"
        className="rounded-lg bg-brand-700 px-4 py-2 font-semibold text-white hover:bg-brand-900"
      >
        Add request
      </button>
    </form>
  );
}

export default RequestForm;
